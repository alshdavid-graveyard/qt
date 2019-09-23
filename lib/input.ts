import { Subscription } from "rxjs";
import { patchOnInit, patchOnDestroy } from './patch-method'

export function Input(options: any = {}) {
  return function (target: any, key: string) {
    let $: Subscription

    patchOnInit(target, function(this: any) {
      $ = this.container.props.subscribe(update => {
        if (this[key] === update[key]) {
          return
        }
        this[key] = update[key]
      })
    })

    patchOnDestroy(target, function(this: any) {
      $.unsubscribe()
    })
  }
}