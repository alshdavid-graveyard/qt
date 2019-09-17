import { h, Fragment, render } from 'preact'
import { useEffect, useState } from 'preact/hooks'

export const mapComponent = (component: any) => {
  const instance = new component()
  return {
    selector: instance.selector,
    component: instance.render
  }
}

const useValues = (instance: any, ctor: any) => {
  const [ ctx, setCtx ] = useState<any>(instance)
  
  useEffect(() => {
    const methods = Object.getOwnPropertyNames(ctor.prototype)
    const properties = Object.keys(instance)
    for (let key of [...methods, ...properties]) {
      if (['constructor', 'onInit', 'selector', 'render'].includes(key)) {
        continue
      }
      debugger
      Object.defineProperty(instance, key, {
        get: () => ctx[key],
        set: newValue => {
          setCtx(Object.assign(ctx, { [key]: newValue }))
        }
      })
    }
  }, [instance])

  return ctx
}

const voidFn = () => () => {}

export function Component(options: any) {
  return function(constructor: any): any {
    function construct(...args: any[]) {
      const instance = new constructor(...args)
      // for (const key in instance) {
      //   console.log(key)
      // }
      instance.selector = options.selector

      const onInit = instance.onInit || voidFn()
      const onDestroy = instance.onDestroy || voidFn()

      const C:any = {}

      for (const Value of options.declarations || []) {
        const instance = new Value()
        C[instance.selector] = instance.render
      }

      instance.render = () => {
        useEffect(() => onInit.apply(instance), [instance])
        useEffect(() => () => onDestroy.apply(instance), [instance])
        
        const ctx = useValues(instance, constructor)

        return h(options.template, { ctx, C })
      }

      return instance
    }

    return construct
  }
}

export const Render = ({ target }: any) => h(target, {})
