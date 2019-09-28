/** @jsx y */
import { h, render, Component as PCOmponent } from 'preact'
import { useState } from 'preact/hooks'
import { y, Component, HostElement, Directive, DecoratedComponent, Input, Output, EventEmitter, Render, DCP, Inject } from '@pangular/core'

@Directive({
  attribute: 'pgModel'
})
class ModelDirective {
  value = ''

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
    if (!event.target || !event.target.value) {
      return
    }
    this.pgModel = event.target.value
  }

  afterViewInit() {
    this.host.value = this.value
    this.host.addEventListener('input', this.onInput)
  }

  onDestroy() {
    this.host.removeEventListener('input', this.onInput)
  }
}

@Component({
  selector: 'a',
  declarations: [
    ModelDirective
  ],
  template: ({ y, ctx, d }) => {
    return <div>
      <b>{ctx.value}</b>
      <input
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

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
const C = () => myComponent._container.getComponent()
render(
  h(C, {}),
  document.body
)
