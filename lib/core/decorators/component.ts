import { h } from 'preact'
import { Container, y } from '../container'
import { reservedKeys } from './reserved-keys'
import { createComponentWrapper } from '../components'
import { patchConstructor } from './patches'
import { patchBasics } from './patches'
import { ObjectProxy } from '../object-proxy'
import { Subscription } from 'rxjs'

export type DecoratedComponent<T = {}> = ComponentRender & T

export interface ComponentRender {
  _container: Container
  _render: (props?: any) => h.JSX.Element
  _objectProxy: ObjectProxy
}

export interface TemplateProps {
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

const initDeclarations = (declarations: any[] = [], proxy: ObjectProxy, container: Container) => {
  const result = {}
  for (const Value of declarations) {
    const value = new Value()
    if (Value.prototype.type === 'directive') {
      value._objectProxy = proxy
      value._container = container
      result[value._attribute] = value
    }
    if (Value.prototype.type === 'component') {
      result[value._container.selector] = (props) => value._render(props)
    }
  }
  return result
}

export function Component(options: ComponentOptions) {
  return patchConstructor('component', (instance) => {
    const subscription = new Subscription()
    const proxy = new ObjectProxy(instance, reservedKeys)
    const container = new Container()
    const declarations = initDeclarations(options.declarations, proxy, container)
    container.tag = createComponentWrapper(proxy, options.template, declarations)
    const hooks = patchBasics(instance, container, options, proxy)

    const onInit = () => {
      hooks.onInit()
    }

    const afterViewInit = () => {
      hooks.afterViewInit()
    }

    const onDestroy = () => {
      hooks.onDestroy()
    }

    subscription.add(container.$onInit.subscribe(onInit))
    subscription.add(container.$afterViewInit.subscribe(afterViewInit))
    subscription.add(container.$onDestroy.subscribe(onDestroy))
    return instance
  })
}


