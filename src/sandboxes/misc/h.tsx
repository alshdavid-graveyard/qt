/** @jsx y */
import { h, render } from 'preact'
import { y, Component, DecoratedComponent, Input, Output, EventEmitter, Render, DCP, Inject } from '@pangular/core'

@Component({
  selector: 'a',
  template: ({ y, ctx, d }) => {
    console.log(ctx)
    return <div>
      <div>{ctx.hi}</div>
      <div>Don't rerender</div>
    </div>
  }
})
class MyComponent {
  @Inject()
  hi: string

  afterViewInit() {
    console.log(this.hi)
  }
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
const C = () => myComponent._render()
const value = { hi: 'something from DI' }
render(
  h(DCP, {value}, [
    h(C, {})
  ]),
  document.body
)
