/** @jsx y */
import { h, render } from 'preact'
import { y, Component, DecoratedComponent, Input, Output, EventEmitter, Render, DCP, Inject, Initializer } from '@pangular/core'

@Component({
  selector: 'b',
  template: ({ y, ctx, d }) => {
    console.log(ctx)
    return <div>
      <div>{ctx.thing}</div>
    </div>
  }
})
class A {
  @Input()
  thing
}

@Component({
  selector: 'a',
  declarations: [ A ],
  template: ({ y, ctx, d }) => {
    console.log(ctx)
    return <div>
      <div>{ctx.hi}</div>
      { h(d('b'), { thing: ctx.hi }) }
    </div>
  }
})
class MyComponent {
  hi = 'Ok'
}

Initializer
  .rootComponent(MyComponent)
  .attachTo(document.body)
