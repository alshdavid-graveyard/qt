import { Input, Component, html, Initializer, Output, EventEmitter } from '@pangular/core';

@Component({
  selector: 'b-component',
  template: html`
    <div 
      (onClick)="onClick.emit('')">
      {{myProp}}
    </div>
  `
})
class BComponent {
  @Input()
  myProp: string = 'originalValue'

  @Output()
  onClick = new EventEmitter()

  doClick() {
    this.onClick.emit('')
  }
}

@Component({
  selector: 'a-component',
  declarations: [
    BComponent
  ],
  template: html`
    <b-component 
      (onClick)="click()"
      [myProp]="myValue" />
  `
})
class AComponent {
  public myValue = 'sadasda'

  click() {
    console.log('hi')
  }
}

Initializer
  .useComponent(AComponent)
  .provideKeys({
    something: 'value',
  })
  .attachTo(document.body)


