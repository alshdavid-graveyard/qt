/** @jsx y */
import { h, render } from 'preact'
import { y, Component, DecoratedComponent, Input, Output, EventEmitter, Render } from '@pangular/core'

@Component({
  selector: 'b',
  template: ({ y, ctx, d }) => {
    return <div>
      <b>{ctx.value}</b><br/>
      <input 
        type="text"
        value={ctx.value}
        onInput={(e: any) => ctx.setValue(e.target.value)}/>
    </div>
  }
})
class B {
  @Input()
  value = ''

  @Output()
  valueChange = new EventEmitter()

  setValue(value: any) {
    this.value = value
    this.valueChange.next(value)
  }
}

@Component({
  selector: 'a',
  declarations: [
    B
  ],
  template: ({ y, ctx, d }) => {
    return <div>
      Hi, {ctx.update}
      <Render 
        target={d('b')} 
        props={{ 
          value: ctx.update,
          valueChange: e => ctx.update = e,
        }} />
    </div>
  }
})
class MyComponent {
  update = 'original'

  doSomething(v: string) {
    this.update = v
  }
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
const C = () => myComponent._render()
render(<C />, document.body)
