/** @jsx y */
import { h, render } from 'preact'
import { y, Component, DecoratedComponent, Input, Output, EventEmitter } from '@pangular/core'


@Component({
  selector: 'something',
  template: ({ y, ctx, d }) => {
    return <div>
      Hi, {ctx.aProp}
      <button 
        onClick={() => ctx.onSomething.next('hi')}>
        onSomething
      </button>
    </div>
  }
})
class MyComponent {
  @Input()
  aProp = 'original value'

  @Output()
  onSomething = new EventEmitter()
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
myComponent._container.$props.next({ aProp: 'test', onSomething: (v) => console.log('yo', v) })
const C = () => myComponent._render()
render(<C />, document.body)
