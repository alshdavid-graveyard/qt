import { Directive, Component, html, Initializer, HostElement } from '@pangular/core';
import { cloneElement } from 'preact';

@Component({
  selector: 'print-element',
  template: html`<slot></slot>`
})
class PrintDirective {
  afterViewInit() {
    console.log('hi')
  }
}

@Component({
  selector: 'a-component',
  declarations: [PrintDirective],
  template: html`
    <print-element><div>Hi</div></print-element>
  `
})
class AComponent {
  afterViewInit() {
    console.log('hi2')
  }
}

Initializer
  .useComponent(AComponent)
  .provideKeys({
    something: 'value',
  })
  .attachTo(document.body)


