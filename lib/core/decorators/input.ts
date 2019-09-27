import { Subscription } from "rxjs";
import { createPropertyDecorator } from './patches'

export function Input() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    let subscription: Subscription

    onInit(({ ctx, setProperty }) => {
      subscription = ctx._container.$props.subscribe(
        (value) => setProperty(value[key])
      )
    })

    onDestroy(() => {
      subscription.unsubscribe()
    })
  })
}
