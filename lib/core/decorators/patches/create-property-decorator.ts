import { DecoratedComponent, ComponentRender } from "../component"
import { patchOnInit, patchAfterViewInit, patchOnDestroy } from "../patches"

export interface HookContext {
  ctx: DecoratedComponent
  setProperty: (update: any) => void
  getPropertyValue: () => any
}

export type HookFn = (fn: ((hook: HookContext) => void)) => void

export interface Hooks {
  readonly key: string
  onInit: HookFn
  afterViewInit: HookFn
  onDestroy: HookFn
}

export const createPropertyDecorator = (fn: (a: Hooks) => void) => {
  return function (target: any, key: string) {

    const onSomething = (something: any, update: any) => {
      something(target, function(this: ComponentRender) {
        const ctx: HookContext = { 
          ctx: this, 
          setProperty: (value) => {
            if (this[key] === undefined) {
              this._objectProxy.addProperty(key, value)
            }
            this[key] = value
          },
          getPropertyValue: () => this[key],
        }
        update(ctx)
      })
    }

    const hooks: Hooks = {
      key,
      onInit: u => onSomething(patchOnInit, u),
      afterViewInit: u => onSomething(patchAfterViewInit, u),
      onDestroy: u => onSomething(patchOnDestroy, u),
    }
    fn(hooks)
  }
}