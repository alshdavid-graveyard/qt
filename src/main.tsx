import { h, Fragment, render } from 'preact'
import { Component, mapComponent, Render } from './component'
import { Initializer } from './render'

// @Component({
//   selector: 'a-component',
//   template: 
//     function({ ctx }: any) {
//       return h(Fragment, {}, 
//         h('h1',{}, ctx.a),
//       )
//     },
// })
// export class AComponent {
//   a = 'a'

//   async onInit() {
//     await new Promise(res => setTimeout(res, 1000))
//     this.a = 'b'
//   }

//   onDestroy() {
//     console.log('nooo')
//   }
// }

@Component({
  selector: 'my-component',
  declarations: [
    // AComponent
  ],
  template: ({ ctx, C }: any) => {
    console.log(ctx)
      return <Fragment>
        {/* <Render target={C['a-component']} /> */}
        { [1,2].map(i => <div>{i}</div>)}
        <h1>Hello from</h1>
        <h1>{ctx.hello}</h1>
        <button onClick={() => ctx.hey()}>Click</button>
      </Fragment>
    },
})
export class MyComponent {
  hello = 'My component'

  async onInit() {
    await new Promise(res => setTimeout(res, 3000))
    this.hello = 'something else'
  }
 
  hey() {
    console.log('yooo')
  }
}


Initializer
  .useComponent(MyComponent)
  .attachTo(document.body)








