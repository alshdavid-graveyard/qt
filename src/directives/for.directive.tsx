// import { Container } from "../kit/container";
// import { Fragment, h } from "preact";
// import { Component } from "~/kit/component";

// // // Initializer
// // //   .useComponent(MyComponent)
// // //   .attachTo(document.body)



// // // const template = /*html*/`
// // //   <div 
// // //     *for="item of items">
// // //     {item}
// // //   <div>
// // // `

// // // const template2 = /*html*/`
// // //   <ng-template
// // //     ngFor 
// // //     let-item 
// // //     [ngForOf]="items">
// // //     <div>{item}<div>
// // //   </ng-template>
// // // `


// // // const forDirective = (component: any) => {
  
// // // }

// // // const items = [1,2,3,4]
// // // const compiled = () => 
// // //     forDirective(
// // //       { items },
// // //       ctx => h('div', { children: ctx.item })
// // //     )

// // const ok = ctx => h('div', {}, ctx.item)

// // // selector '[for]'




// // const createView = (
// //   components: any, 
// //   context: any
// // ) => {
// //   return components(context)
// // }

// // // const forDirective = new ForDirective()

// // // forDirective.render = () => {

// // // }


// const template = /*html*/`
//     <div *for="item of items">{item}</div>
// `
// @Component({
//     template: ({ ctx }) => {
//         return <Fragment>
//             { ctx.loop(item => { ctx.target({ item }) }) }
//         </Fragment>
//     }
// })
// class ForDirective {
//     container = new Container()
//     template: any = ctx => h('div', {}, ctx.item)
  
//     render() {
      
//     }
// }

// const value = () => <Fragment>{(ctx) => <div>{ctx.item}</div>}</Fragment>