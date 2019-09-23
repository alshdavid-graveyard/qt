import { Component, Input, Output, EventEmitter, Render } from '@pangular/core';
import { For, If } from '../directives'

@Component({
  selector: 'a-component',
  declarations: [
    For, 
    If,
  ],
  template: ({ ctx, declarations, h, Fragment }) =>
    <Fragment>
      <div>Working</div>
      <Render 
        target={declarations['for']} 
        items={ctx.items}>
        {item => <div>{item}</div>}
      </Render>
      <Render 
        target={declarations['if']} 
        condition={ctx.showThing}>
        {() => <div>Here</div>}
      </Render>
      <button 
        onClick={() => ctx.toggleThing()}>
        Toggle
      </button>
    </Fragment>,
})
export class CComponent {
  @Output()
  myEvent = new EventEmitter()

  @Input()
  someProp: string = 'original Value'

  showThing = false
  items = [1,2,3]

  toggleThing() {
    this.showThing = !this.showThing
  }

  onDestroy() {
    console.log('nooo')
  }
} 

