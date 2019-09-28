/** @jsx y */
import { h, render } from 'preact'
import { y, Component, DecoratedComponent, Input, Output, EventEmitter } from '@pangular/core'

@Component({
  selector: 'b',
  template: ({ y, ctx, d }) => {
    return <div>
      <input 
        type="text"
        onInput={e =>ctx.onInput.next(e.target.value)}/>
      <button 
        onClick={() => ctx.onSomething.next('hi')}>
        onSomething
      </button>
    </div>
  }
})
class B {
  @Output()
  onInput = new EventEmitter()

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
      Hi, {ctx.update}
      { div }
      <V 
        onSomething={e => ctx.doSomething(e)} 
        onInput={v => ctx.doSomething(v)}/>
    </div>
  }
})
class MyComponent {
  update = 'original'

  doSomething(v: string) {
    console.log('yo!', v)
    this.update = v
  }
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
myComponent._container.$props.next({ aProp: 'test', onSomething: (v) => console.log('yo', v) })
const C = () => myComponent._render()
render(<C />, document.body)
