/** @jsx y */
import { h, render, Fragment, Component as PComponent } from 'preact'
import { y, Container, Component, ObjectProxy, DecoratedComponent } from '@pangular/core'
import { useState } from 'preact/hooks'

@Component({
  selector: 'something',
  template: ({ y, ctx }) => {
    return <div>
      <div>{ctx.value}</div>
      <input onInput={e => ctx.value = e.target.value} value={ctx.value} />
    </div>
  }
})
class MyComponent {
  value = 'Hello'
}

const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
const C = () => myComponent._container.getComponent()
render(h(C, {}), document.body)




// class Template extends PComponent<any, any> {
//   componentDidMount() {
//     console.log('painted')
//   }

//   render() {
//     return h(this.props.tag, this.props.props || {}, this.props.children)
//   }
// }

// const x = (tag, props, children) => {
  
//   const setting = { tag, props, children }

//   return h(Template, setting)
// }

// const App = () => {
//   const [v, s] = useState('')

//   return <div>
//     { x('input', { onInput: e => s(e.target.value), value: v, p: v}, []) }
//     { x('div', {}, [
//       x('div', {}, ['yo', v])
//     ])}
//     <div>Something<b>{v}</b></div>
//   </div>
// }

// render(
//   h(App, {}),
//   document.body
// )