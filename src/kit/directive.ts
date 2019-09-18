import { h } from 'preact'
import { Container } from './container'

const ignoredMethods = [
  'constructor', 'onInit', 'onDestroy', 
  'selector', 'render', 'container'
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
  ctx: Record<string, any>,
  declarations: Record<string, any>
}

interface DirectiveOptions {
  selector: string
  declarations?: any[]
  template: (props: TemplateProps) => void
}

export function Directive(options: DirectiveOptions) {
  return function(constructor: any): any {
    function construct(...args: any[]) {
      const container = new Container()
      const instance = new constructor(...args)

      instance.type = 'directive'
      instance.container = container
      instance.selector = options.selector

      const onInit = instance.onInit || voidFn()
      const onDestroy = instance.onDestroy || voidFn()

      container.onInit.subscribe(() => onInit.apply(instance))
      container.onDestroy.subscribe(() => onDestroy.apply(instance))

      container.setTemplate(options.template)

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
