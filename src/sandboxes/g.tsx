import { ObjectProxy } from '@pangular/core'

class A {
  value = 'start'

  thing() {
    console.log(this.value)
  }
}
const instnace = new A()
const proxy = new ObjectProxy(instnace)
const ctx = proxy.dispenceProxy()

ctx.thing()
