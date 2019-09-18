import { h } from 'preact'
import { Container } from './container'

const getKeys = (instance: any, ctor: any) => {
  const methods = Object.getOwnPropertyNames(ctor.prototype)
  const properties = Object.keys(instance)

  const draft: any = {}
  for (let key of [...methods, ...properties]) {
    if (['constructor', 'onInit', 'selector', 'render', 'container'].includes(key)) {
      continue
    }
    draft[key] = instance[key]
  }
  return draft
}

const voidFn = () => () => {}

interface ComponentOptions {
  selector: string
  declarations?: any[]
  template: (props: any) => void
}

export function Component(options: ComponentOptions) {
  return function(constructor: any): any {
    function construct(...args: any[]) {
      const container = new Container()
      const instance = new constructor(...args)

      instance.container = container
      instance.selector = options.selector

      const onInit = instance.onInit || voidFn()
      const onDestroy = instance.onDestroy || voidFn()

      container.onInit.subscribe(() => onInit.apply(instance))
      container.onDestroy.subscribe(() => onDestroy.apply(instance))

      container.setTemplate(options.template)

      const instanceKeys = getKeys(instance, constructor)  
      container.setContext(instanceKeys)

      for (let key in instanceKeys) {
        let proxyValue = instance[key]
        Object.defineProperty(instance, key, {
          get: () => proxyValue,
          set: newValue => {
            proxyValue = newValue
            container.setContext({ 
              ...getKeys(instance, constructor), 
              [key]: newValue 
            })
          }
        })
      }

      const declarations = {}
      for (const Value of options.declarations || []) {
        const value = new Value()
        declarations[value.selector] = value.render()
      }
      container.setDeclarations(declarations)

      instance.render = () => instance.container.getComponent()
      return instance
    }

    return construct
  }
}
