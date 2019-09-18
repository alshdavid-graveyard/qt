import { Subscription } from "rxjs";

export function Input(options: any = {}) {
  return function (target: any, key: string) {
    const OGOnInit = target.onInit || function () { }
    const OGOnDestroy = target.onDestroy || function () { }
    let $: Subscription

    function onInit(this: any) {
      $ = this.container.props.subscribe(update => {
        if (this[key] === update[key]) {
          return
        }
        this[key] = update[key]
      })

      OGOnInit.apply(this)
    }

    function onDestroy(this: any) {
      $.unsubscribe()
      OGOnDestroy.apply(this)
    }

    target.onInit = onInit
  }
}