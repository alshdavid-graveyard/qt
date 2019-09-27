import { Subscription } from "rxjs";
import { createPropertyDecorator } from './patches'

export function Input() {
  return createPropertyDecorator(({ onInit }) => {
    let subscription: Subscription

    onInit(({ setProperty }) => {
      
    })



    // onDestroy(ctx => {
    //   subscription.unsubscribe()
    // })
  })
}


  // return function (target: any, key: string) {
  //   let $: Subscription

  //   patchOnInit(target, function(this: DecoratedComponent) {
  //     $ = this._container.props.subscribe(update => {
  //       if (this[key] === update[key]) {
  //         return
  //       }
  //       if (update[key]) {
  //         this[key] = update[key]
  //       }
  //     })
  //   })

  //   patchOnDestroy(target, function(this: any) {
  //     $.unsubscribe()
  //   })
  // }
// }