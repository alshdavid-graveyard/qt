/** @jsx y */
import { h, render } from 'preact'
import { y, Container, Component, ObjectProxy, DecoratedComponent, Input, Render } from '@pangular/core'

@Component({
  selector: 'nested-component',
  template: ({ y, ctx, d }) => {
    return <div>
      <div>From nested: {ctx.myProp}</div>
    </div>
  }
})
class NestedComponent {
  @Input()
  myProp = 'default value'
}


@Component({
  selector: 'something',
  declarations: [
    NestedComponent
  ],
  template: ({ y, ctx, d }) => {
    return <div>
      <div>From root: {ctx.value}</div>
      <Render 
        target={d('nested-component')} 
        props={{ myProp: ctx.value }} />
      <input 
        value={ctx.value} 
        onInput={(e: any) => ctx.value = e.target.value} />
    </div>
  }
})
class MyComponent {
  value = 'Hello'
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
const C = myComponent._render()
render(<C />, document.body)
