import { Subscription } from "rxjs";
import { createPropertyDecorator } from './patches'

export function Input() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    let subscription: Subscription

    onInit(({ ctx, setProperty, getPropertyValue }) => {
      subscription = ctx._container.$props.subscribe(
        (newValue) => {
          const currentValue = getPropertyValue()
          const update = newValue[key]
          if (currentValue === update) {
            return
          }
          setProperty(update)
        }
      )
    })

    onDestroy(() => {
      subscription.unsubscribe()
    })
  })
}
