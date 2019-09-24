import { Container } from './container'
import { patchConstructor } from './patch-method'
import { getKeys, voidFn } from './utils'

interface TemplateProps {
  ctx: Record<string, any>
  declarations: Record<string, any>
  h: any
  Fragment: any
}

export interface ComponentOptions {
  selector: string
  declarations?: any[]
  template: ((props: TemplateProps) => void) | string | any
}

export function Component(options: ComponentOptions) {
  return patchConstructor('component', (instance, constructor) => {
    const container = new Container()

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
        if (proxyValues[key] && proxyValues[key].bind) {
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

      // options.template = options.template(options)
      container.setTemplate(options.template)
      await afterViewInit.apply(container.declarations.value)
    })
    container.onDestroy.subscribe(() => onDestroy.apply(instance))

    const declarations = {}
    for (const Value of options.declarations || []) {
      const value = new Value()
      if (Value.prototype.type === 'directive') {
        declarations[value.selector] = value
      }
      if (Value.prototype.type === 'component') {
        declarations[value.selector] = value.render()
      }
    }
    container.setDeclarations(declarations)

    if ((options.template as any).prototype.templateType === 'tagged-template') {
      options.template = (options['template'] as any)(declarations)
    }

    instance.render = () => instance.container.getComponent()

    return instance
  })
}
