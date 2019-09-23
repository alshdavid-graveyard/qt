import { h } from 'preact'
import { Container } from './container'
import { patchAfterViewInit } from './patch-method'

const ignoredMethods = [
  'constructor', 'onInit', 'onDestroy', 
  'selector', 'render', 'container', 'type'
]

const getKeys = (instance: any, ctor: any) => {
  const methods = Object.getOwnPropertyNames(ctor.prototype)
  const properties = Object.keys(instance)

  const draft: any = {}
  for (let key of [...methods, ...properties]) {
    if (ignoredMethods.includes(key)) {
      continue
    }
    draft[key] = instance[key]
  }
  return draft
}

const voidFn = () => () => {}

interface TemplateProps {
  ctx: Record<string, any>
  declarations: Record<string, any>
  h: any
  Fragment: any
}

interface ComponentOptions {
  selector: string
  declarations?: any[]
  template: ((props: TemplateProps) => void) | string
}

export function Component(options: ComponentOptions) {
  return function(constructor: any): any {
    function construct(...args: any[]) {
      const container = new Container()
      const instance = new constructor(...args)

      instance.type = 'component'
      instance.container = container
      instance.selector = options.selector

      const onInit = instance.onInit || voidFn()
      const afterViewInit = instance.afterViewInit || voidFn()
      const onDestroy = instance.onDestroy || voidFn()

      container.onInit.subscribe(async () => {
        await onInit.apply(instance)

        const instanceKeys = getKeys(instance, constructor)
        const proxyValues = {}  

        for (let key in instanceKeys) {
          proxyValues[key] = instance[key]
          if (proxyValues[key].bind) {
            proxyValues[key] = proxyValues[key].bind(instance)
          }
          Object.defineProperty(instance, key, {
            get: () => proxyValues[key],
            set: newValue => {
              proxyValues[key] = newValue
              container.setContext({ 
                ...proxyValues, 
                [key]: newValue 
              })
            }
          })
        }

        container.setContext(proxyValues)

        container.setTemplate(options.template)
        afterViewInit()
      })
      container.onDestroy.subscribe(() => onDestroy.apply(instance))

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
