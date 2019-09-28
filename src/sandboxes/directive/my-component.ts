import { y, Component, Initializer } from '@pangular/core'
import { html } from '@pangular/compiler'
import { PGModelDirective } from './model-directive'

@Component({
  selector: 'a',
  declarations: [
    PGModelDirective
  ],
  template: html`
    <b>{{ value }}</b>
    <br/>
    <input 
      placeholder="enter some text"
      [(pgModel)]="value" />`
})
class MyComponent {
  value = 'Ok'

  setValue(v: string) {
    this.value = v
  }
}

Initializer
  .rootComponent(MyComponent)
  .attachTo(document.body)


/*
template: ({ y, ctx, d }) => {
    return <div>
      <div>{ctx.value}</div>
      <input
        thing='hi'
        pgModel={ctx.value}
        pgModelChange={v => ctx.setValue(v)}
        _directives={[d('pgModel')]} />
    </div>
  }
*/