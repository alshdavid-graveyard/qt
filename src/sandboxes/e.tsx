/** @jsx y */
import { h, render } from 'preact'
import { y, Component, DecoratedComponent, Input, Output, EventEmitter } from '@pangular/core'

@Component({
  selector: 'b',
  template: ({ y, ctx, d }) => {
    return <div>
      <button 
        onClick={() => ctx.onSomething.next('hi')}>
        onSomething
      </button>
    </div>
  }
})
class B {
  @Output()
  onSomething = new EventEmitter()
}

const div = h('div', {}, 'ok')

const b = new B() as DecoratedComponent<B>
const V = (props) => {
  console.log(props)
  return b._render(props)
}

@Component({
  selector: 'a',
  template: ({ y, ctx, d }) => {
    return <div>
      Hi, {ctx.aProp}
      { div }
      <V onSomething={e => ctx.doSomething(e)} />
    </div>
  }
})
class MyComponent {
  doSomething(v: string) {
    console.log('yo!', v)
  }
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
myComponent._container.$props.next({ aProp: 'test', onSomething: (v) => console.log('yo', v) })
const C = () => myComponent._render()
render(<C />, document.body)
