import { patchOnInit, patchOnDestroy } from './patch-method'
import { Subscription } from 'rxjs';

export function Output(options: any = {}) {
  return function (target: any, key: string) {
    let $: Subscription

    patchOnInit(target, function(this: any) {
      $ = this[key].subscribe((value: any) => {
        this.container.emitPropEvent(key, value)
      })
    })

    patchOnDestroy(target, function(this: any) {
      $.unsubscribe()
    })
  }
}