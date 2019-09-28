import { ObjectProxy } from '@pangular/core'

class A {
  // value = 'start'
  something: any

  // thing() {
  //   console.log(this.value)
  // }
}
const instance = new A()
const proxy = new ObjectProxy(instance)
const ctx = proxy.dispenceProxy()

proxy.$proxy.subscribe(proxy => {
  console.log(proxy)
})

proxy.addProperty('something', 'value')

// console.log(instance)
