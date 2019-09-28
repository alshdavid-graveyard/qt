import { HostElement, Directive, Input, Output, EventEmitter } from '@pangular/core'

@Directive({
  attribute: 'pgModel'
})
export class PGModelDirective {
  value

  @HostElement()
  host: HTMLInputElement

  @Output()
  pgModelChange = new EventEmitter()

  @Input()
  set pgModel(value: string) {
    if (this.value === value) {
      return
    }
    this.value = value
    this.pgModelChange.next(this.value)
  }
  
  onInput = (event: any) => {
    this.pgModel = event.target.value
  }

  afterViewInit() {
    this.host.value = this.value
    this.host.addEventListener('input', this.onInput)
    this.host.addEventListener('blur', this.onInput)
  }

  onDestroy() {
    this.host.removeEventListener('input', this.onInput)
    this.host.removeEventListener('blur', this.onInput)
  }
}