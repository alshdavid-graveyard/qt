import { DecoratedComponent } from "../component"
import { patchOnInit, patchAfterViewInit, patchOnDestroy } from "../patches"

export interface HookContext {
  ctx: DecoratedComponent
  setProperty: (update: any) => void
  getProperty: () => any
  getPropertyKey: () => string
}

export type HookFn = (fn: ((hook: HookContext) => void)) => void

export interface Hooks {
  onInit: HookFn
  afterViewInit: HookFn
  onDestroy: HookFn
}

export const createPropertyDecorator = (fn: (a: Hooks) => void) => {
  return function (target: any, key: string) {

    const onSomething = (something: any, update: any) => {
      something(target, function(this: any) {
        const ctx: HookContext = { 
          ctx: this, 
          setProperty: (value) => this[key] = value,
          getProperty: () => this[key],
          getPropertyKey: () => key,
        }
        update(ctx)
      })
    }

    const hooks: Hooks = {
      onInit: u => onSomething(patchOnInit, u),
      afterViewInit: u => onSomething(patchAfterViewInit, u),
      onDestroy: u => onSomething(patchOnDestroy, u),
    }
    fn(hooks)
  }
}