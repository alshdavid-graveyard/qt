import { Initializer } from './render';
import { MyComponent } from './components/b.component'

Initializer
  .useComponent(MyComponent)
  .attachTo(document.body)
