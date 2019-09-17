import { Component } from '@angular/core'


const h = (...args: any[]) => ({})
const Fragment = ''

@Component({
  selector: 'my-component',
  template: 
    h(Fragment, {}, 
      h('h1',{}, this.hello),
    ),
})
export class MyComponent {
  hello = 'hi'
}



