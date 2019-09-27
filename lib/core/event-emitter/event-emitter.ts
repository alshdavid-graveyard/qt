import { Subject } from 'rxjs'

export class EventEmitter<T = any> extends Subject<T> {
    emit(value: T) {
        this.next(value)
    }
}