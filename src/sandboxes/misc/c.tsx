/** @jsx y */
import { h, render, Fragment, Component as PComponent } from 'preact'
import { y, Container, Component, ObjectProxy, useSubscribe } from '@pangular/core'
import { Subscription } from 'rxjs'


function getContainer(ctrl: Container) {
  console.log(ctrl)
  ctrl.$props.next({ value: 'something else' })
}

const Template = ({ proxy }: any) => {
  const ctx = useSubscribe(proxy.$proxy, proxy.dispenceProxy())
  
  return <div>
    <h1>{ctx.value}</h1>
    <input 
      getContainer={getContainer}
      value={ctx.value} 
      onInput={(e: any) => ctx.value = e.target.value} />
      <button onClick={() => ctx.print()}>Click</button>
  </div>
}

class MyComponent {
  value = 'Hello'

  print() {
    console.log(this.value)
  }
}

const myComponent = new MyComponent()
const proxy = new ObjectProxy(myComponent)

proxy.$value.subscribe(() => console.log('updated'))

const C = () => h(Template, { proxy }) 
render(<C />, document.body)

setTimeout(() => {

})
