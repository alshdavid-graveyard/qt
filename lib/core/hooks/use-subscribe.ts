import { useEffect, useState } from 'preact/hooks'
import { Subscribable, BehaviorSubject } from 'rxjs'

export const useSubscribe = <T>($subscribable: Subscribable<T>, initialValue?: T): T => {
    const getInitialValue = (): T => {
        if (($subscribable as any).value) {
            return ($subscribable as any).value
        }
        if (($subscribable as any).getValue) {
            return ($subscribable as any).getValue()
        }
        return initialValue as T
    }

    const [ value, setValue ] = useState<T>(getInitialValue())

    useEffect(() => {
        const subscription = $subscribable.subscribe(setValue)
        return () => {
            subscription.unsubscribe()
        }
    }, [ $subscribable ])

    return value
}