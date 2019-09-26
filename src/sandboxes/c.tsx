/** @jsx y */
import { h, render, Fragment, Component as PComponent } from 'preact'
import { y, Container, Component, ObjectProxy, useSubscribe } from '@pangular/core'
import { Subscription } from 'rxjs'

interface TemplateProps {
  ctx?: MyComponent
  proxy: ObjectProxy
}
const Template = ({ proxy }: TemplateProps) => {
  const ctx = useSubscribe(proxy.$proxy, proxy.$value.getValue())
  
  return <div>
    <h1>{ctx.value}</h1>
    <input 
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
const ctx = proxy.dispenceProxy()

proxy.$value.subscribe(console.log)

const C = () => <Fragment>
  <Template ctx={ctx} proxy={proxy}/>
</Fragment>

render(<C />, document.body)
