import { Container } from '../container'
import { voidFn } from 'legacy/lib/core/utils'

export const lifcycleMethods = {
  onInit: 'onInit',
  afterViewInit: 'afterViewInit',
  onDestroy: 'onDestroy'
}

export function patchMethod(target: any, name: string, method: any) {
  const OG = target[name] || function () { }

  async function patch(this: any) {
    await method.apply(this)
    await OG.apply(this)
  }

  target[name] = patch
}

export function patchOnInit(target: any, method: any) {
  return patchMethod(target, lifcycleMethods.onInit, method)
}

export function patchAfterViewInit(target: any, method: any) {
  return patchMethod(target, lifcycleMethods.afterViewInit, method)
}

export function patchOnDestroy(target: any, method: any) {
  return patchMethod(target, lifcycleMethods.onDestroy, method)
}

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
  options: any
): (() => void)[] => {
  container.selector = options.selector
  instance.selector = options.selector
  instance.container = container
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
