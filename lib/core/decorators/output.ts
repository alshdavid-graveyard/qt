import { EventEmitter } from '../event-emitter'
import { createPropertyDecorator } from './patches'
import { Subscription } from 'rxjs'

export function Output() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    let subscription: Subscription

    onInit(({ ctx, getPropertyValue }) => {
      const value: EventEmitter = getPropertyValue()
      
      subscription = value.subscribe(value => {
        ctx._container.emitOutput(key, value)
      })
    })

    onDestroy(() => {
      subscription.unsubscribe()
    })
    
  })
}
