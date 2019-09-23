import { Initializer, Component } from '@pangular/core';

@Component({
  selector: 'test',
  template: ({ h }) => 
    h('div', {}, 'Hello World')
})
class MyComponent {}

Initializer
  .useComponent(MyComponent)
  .attachTo(document.body)