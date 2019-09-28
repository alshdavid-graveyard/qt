import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export class ObjectProxy {
  public defaultIgnored = ['constructor', 'length', 'prototype']
  public $value: BehaviorSubject<any>
  public $proxy: Observable<any>
  private proxy: Record<string, any> = {}

  constructor(
    private instance: any,
    private ignored: string[] = [],
  ) {
    const keys = this.getClassKeys()
    for (let key of keys) {
      this.proxy[key] = instance[key]
      this.defineProperty(instance, key)
    }
    this.$value = new BehaviorSubject(this.proxy)
    this.$proxy = this.$value.pipe(
      map(() => this.dispenceProxy())
    )
  }

  private defineProperty(target: any, key: any) {
    Object.defineProperty(target, key, {
      get: () => {
        if (this.proxy[key] && this.proxy[key].apply) {
          // this.proxy[key].bind(this.proxy)
        }
        return this.proxy[key]
      },
      set: newValue => {
        const update = { ...this.proxy }
        update[key] = newValue
        this.proxy = update
        this.$value.next(update)
      }
    })
  }

  private getClassKeys(): string[] {
    const items = [
      ...Object.getOwnPropertyNames(this.instance.constructor.prototype),
      ...Object.getOwnPropertyNames(this.instance),
    ]
    return items
      .filter(item => !this.defaultIgnored.includes(item))
      .filter(item => !this.ignored.includes(item))
  }

  dispenceProxy(): any {
    const proxy = { ...this.proxy }
    const keys = this.getClassKeys()
    for (let key of keys) {
      this.defineProperty(proxy, key)
    }
    return proxy
  }
}