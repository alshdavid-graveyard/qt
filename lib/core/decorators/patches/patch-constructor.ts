import { Container } from '../../container'
import { voidFn } from '../../common'
import { ObjectProxy } from '@pangular/core/object-proxy'

export function patchConstructor(type = '', fn: (instance: any, constructor: any, ...args: any[]) => void) {
  return function(constructor: any): any {
    
    function construct(...args: any[]) {
      const instance = new constructor(...args)
      return fn(instance, constructor, ...args)
    }

    construct.prototype.type = type
    return construct
  }
}

export const patchBasics = (
  instance: any,
  container: Container,
  options: any,
  objectProxy: ObjectProxy
) => {
  container.selector = options.selector
  instance._objectProxy = objectProxy
  instance._container = container
  instance._render = (props: any) => container.getComponent(props)
  if (!instance.onInit) {
    instance.onInit = voidFn()
  }
  if (!instance.afterViewInit) {
    instance.afterViewInit = voidFn()
  }
  if (!instance.onDestroy) {
    instance.onDestroy = voidFn()
  }
  return {
    onInit: () => instance.onInit.apply(instance), 
    afterViewInit: () => instance.afterViewInit.apply(instance), 
    onDestroy: () => instance.onDestroy.apply(instance)
  }
}
