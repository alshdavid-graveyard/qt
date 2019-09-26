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




// // function Container(template, $value, initialCtx) {
// //   return class extends PComponent {
// //     subscription: Subscription

// //     state = {
// //       ctx: initialCtx
// //     }

// //     componentDidMount() {
// //       this.subscription = $value.subscribe(ctx => this.setState({ ctx }))  
// //       this.subscription = $value.subscribe(ctx => console.log(ctx))  
// //     }

// //     componentWillUnmount() {
// //       this.subscription.unsubscribe()
// //     }
    
// //     render() {
// //       return h(template, { ctx: this.state.ctx, y })
// //     }
// //   }
// // }


// // const template = ({ ctx }) => {
// //   console.log(ctx.print)
// //   return y('div', {}, [], [ 
// //     y('input', { value: ctx.value, onInput: e => ctx.value = e.target.value }, [], []),
// //     y('div', {}, [], [ctx.value]),
// //     y('button', { onClick: () => ctx.print() }, [], ['Print']),
// //   ])
// // }

// // class MyComponent {
// //   value = 'Hello'

// //   print() {
// //     console.log(this.value)
// //   }
// // }

// // const component = new MyComponent()
// // const proxy = new ObjectProxy(component)
// // const C = Container(template, proxy.$proxy, proxy.dispenceProxy())
// // const element = new Element(C, { ctx: proxy.dispenceProxy() })

// // const Wrapper = () => element.getComponent()

// // render(
// //     <C/>,
// //     document.body
// // )

// // const div = y('div', {}, [], ['1'])

// @Component({
//   selector: 'something',
//   template: ({ y, ctx }) => {
//     console.log(ctx)
//     // return y('input', { value: ctx.value, onInput: e => ctx.setValue(e) }, [], [])
//     return <div>
//       <input value={ctx.value} onInput={(e: any) => ctx.value = e.target.value} />
//     </div>
    
    
//     // y('div', {}, [ 
//     //   y('input', { 
//     //     value: ctx.value, 
//     //     onInput: e => ctx.value = e!.target!.value
//     //   }, []),
//     //   // y('div', {}, [], ['uh ', ctx.value]),
//     //   // y('button', { onClick: () => ctx.print() }, [], ['Print']),
//     // ])
//   }
// })
// class MyComponent {
//   value = 'Hello'

//   onInit() {
//     ;(window as any).thing = this
//   }

//   setValue(e: any) {
//     this.value = e.target.value
//     console.log(this.value)
//   }

//   print() {
//     console.log(this.value)
//   }
// }

// const myComponent = new MyComponent()

// // console.log(myComponent)

// const C = (myComponent as any).render()
// render(
//   <DCP value={{ something: 'hi' }}>
//     <C />
//   </DCP>,
//   document.body
// )



// // // const printHello = new Directive()



// // // const World = y(
// // //     'b', 
// // //     { 'print': undefined, onClick: () => console.log('hii') }, 
// // //     [],
// // //     ['World']
// // // )

// // // const Wrapper = () => y(
// // //     Fragment, 
// // //     {}, 
// // //     [],
// // //     [World]
// // // )


// // // render(
// // //     <DCP value={{ something: 'hi' }}>
// // //         <Wrapper/>
// // //     </DCP>,
// // //     document.body
// // // )

