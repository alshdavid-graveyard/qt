import { Container } from './container'
import { getKeys, voidFn, shallowClone } from './utils'
import { Subscription } from 'rxjs'
import { clone, merge } from 'lodash-es'


export const patchBasics = (
  instance: any,
  container: Container,
  options: any
): (() => void)[] => {
  container.selector = options.selector
  instance.selector = options.selector
  instance.container = container
  instance.render = () => container.getComponent()
  if (!instance.onInit) {
    instance.onInit = voidFn()
  }
  if (!instance.afterViewInit) {
    instance.afterViewInit = voidFn()
  }
  if (!instance.onDestroy) {
    instance.onDestroy = voidFn()
  }
  return [instance.onInit, instance.afterViewInit, instance.onDestroy]
}

export const createProxyFactory = (
  instanceKeys: Record<string, any>,
  container: Container
) => (target: any = {}): Record<string, any> => {
  for (let key in instanceKeys) {
    Object.defineProperty(target, key, {
      get: () => container.state.value[key],
      set: newValue => {
        const update = merge(
          container.state.value, 
          { [key]: newValue }
        )
        container.state.next(
          update
        )
      }
    })
  }
  return target
}

export const patchProperties = (
  instance: any,
  container: Container,
  constructor: any
) => {
  const sub = new Subscription()

  sub.add(container.onDestroy.subscribe(() =>
    sub.unsubscribe()
  ))

  const instanceKeys = getKeys(instance, constructor)
  container.instanceKeys = instanceKeys
  const createProxy = createProxyFactory(instanceKeys, container)
  container.state.next(instanceKeys)

  sub.add(container.state.subscribe((u) => {
    const v = clone(u)
    createProxy(v)
    container.templateContext.next(v)
  }))

  const ctx = {}
  createProxy(ctx)
  createProxy(instance)
  container.setTemplateContext(ctx)
}