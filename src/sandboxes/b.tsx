// /** @jsx y */
// import { h, render, Fragment, Component as PComponent } from 'preact'
// import { y, Container, Component, ObjectProxy, DecoratedComponent } from '@pangular/core'
// import { Subscription } from 'rxjs'

// @Component({
//   selector: 'something',
//   template: ({ y, ctx }) => {
//     return <div>
//       <div>{ctx.value}</div>
//       <input 
//         value={ctx.value} 
//         onInput={(e: any) => ctx.value = e.target.value} />
//     </div>
//   }
// })
// class MyComponent {
//   value = 'Hello'
// }

// const myComponent = new MyComponent() as DecoratedComponent<MyComponent>
// const C = myComponent._render()
// render(<C />, document.body)
