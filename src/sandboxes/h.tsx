/** @jsx y */
import { h, render } from 'preact'
import { y, Component, DecoratedComponent, Input, Output, EventEmitter, Render, DCP } from '@pangular/core'

@Component({
  selector: 'a',
  template: ({ y, ctx, d }) => {
    return <div>
      <div>{ctx.value}</div>
      <div>Don't rerender</div>
    </div>
  }
})
class MyComponent {
  value = 'start'

  afterViewInit() {
    setInterval(() => {
      this.value = this.value + 'a'
    }, 2000)
  }
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
const C = () => myComponent._render()
const value = { hi: 'value' }
render(
  h(DCP, {value}, [
    h(C, {})
  ]),
  document.body
)
