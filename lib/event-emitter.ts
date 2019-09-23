import { Subject } from 'rxjs'

export class EventEmitter<T> extends Subject<T> {
    emit(value: T) {
        this.next(value)
    }
}