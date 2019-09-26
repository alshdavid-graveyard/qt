/** @jsx y */
import { h, render, Fragment, Component as PComponent } from 'preact'
import { y, Container, Component, ObjectProxy } from '@pangular/core'
import { Subscription } from 'rxjs'


@Component({
  selector: 'something',
  template: ({ y, ctx }) => {
    console.log(ctx)
    return <div>
      <input 
        value={ctx.value} 
        onInput={(e: any) => ctx.value = e.target.value} />
    </div>
  }
})
class MyComponent {
  value = 'Hello'
}



const myComponent = new MyComponent()
const C = (myComponent as any).render()
render(<C />, document.body)
