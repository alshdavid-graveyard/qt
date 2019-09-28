/** @jsx y */
import { h, render, Component as PCOmponent } from 'preact'
import { y, Component, HostElement, Directive, DecoratedComponent, Input, Output, EventEmitter, Initializer } from '@pangular/core'

@Directive({
  attribute: 'pgModel'
})
class PGModelDirective {
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

@Component({
  selector: 'a',
  declarations: [
    PGModelDirective
  ],
  template: ({ y, ctx, d }) => {
    return <div>
      <div>{ctx.value}</div>
      <input
        thing='hi'
        pgModel={ctx.value}
        pgModelChange={v => ctx.setValue(v)}
        _directives={[d('pgModel')]} />
    </div>
  }
})
class MyComponent {
  value = 'Ok'

  setValue(v: string) {
    this.value = v
  }
}


Initializer
  .rootComponent(MyComponent)
  .attachTo(document.body)
