import { Component, Input, Output, EventEmitter } from '@pangular/core'

@Component({
  selector: 'a-component',
  template: ({ ctx, h, Fragment }) =>
    <Fragment>
      <h1>{ctx.someProp}</h1>
      <button
        onClick={() => ctx.myEvent.emit('something')}>
        Click me
        </button>
    </Fragment>,
})
export class AComponent {
  @Output()
  myEvent = new EventEmitter()

  @Input()
  someProp: string = 'original Value'

  onDestroy() {
    console.log('nooo')
  }
} 

