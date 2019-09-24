import { Initializer, Component, html, Input, Output, EventEmitter, Directive } from '@pangular/core';
import { HostElement } from '../lib/core/host-element'
import { h } from 'preact';

// @Directive({
//   selector: 'print-element'
// })
// class ModelDirective {
//   @HostElement()
//   host!: HTMLElement

//   afterViewInit() {
//     console.log(this.host)
//   }
// }


@Component({
  selector: 'a-component',
  declarations: [],
  template: html`
    <div>Hi</div>
  `
})
class AComponent {

}

const t = html`
  <div print-element>Hi</div>
`

const c = ({h, d, dtv}: any) => dtv(d.thing, h('div'), {})

Initializer
  .useComponent(AComponent)
  .attachTo(document.body)

// @Component({
//   selector: 'app-child',
//   template: html`
//     <div>{{aprop}}</div>
//     <button 
//       (onClick)="doClick()">
//       Click Me
//     </button>
//     <slot></slot>
//   `
// })
// class ChildComponent {
//   @Input()
//   aprop = 'original value'

//   @Output()
//   clicked = new EventEmitter<string>()

//   doClick() {
//     this.clicked.emit('Yo!')
//   }
// }

// @Component({
//   selector: 'app-component',
//   declarations: [
//     ChildComponent
//   ],
//   template: html`
//     <app-child 
//       (clicked)="something($event)" 
//       [aprop]="myValue">
//       <input 
//         [value]="myInput" 
//         (valueChange)="updateValue($event)"/>
//       <input 
//         [(value)]="myInput" />
//       <div>
//         Inside
//       </div>
//     </app-child>
//   `
// })
// class MyComponent {
//   myInput = 'things'
//   myValue = 'correctly bound from parent'

//   updateValue(event) {
//     this.myInput = event
//   }

//   something(value: string) {
//     this.myValue = value
//   }
// }

// Initializer
//   .useComponent(MyComponent)
//   .attachTo(document.body)



// function html(str: TemplateStringsArray) {
//   return function (options: any) {
//     return options.myValue
//   }
// }

// function Create(options) {
//   options.template = options.template(options)
//   return options
// }

// const value = Create({
//   myValue: 'something',
//   template: html`
//     <div>Hey</div>
//   `
// })

// console.log(value)

// function html() {}

// html.prototype.isTemplate = 'test'

// console.log(html.prototype)