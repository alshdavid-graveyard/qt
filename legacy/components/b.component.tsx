import { Component, Render } from '@pangular/core'
import { AComponent } from './a.component'

@Component({
  selector: 'my-component',
  declarations: [
    AComponent
  ],
  template: ({ ctx, declarations, h, Fragment }) => 
    <Fragment>
      <Render 
        target={declarations['a-component']} 
        someProp='Hey what up'
        myEvent={() => ctx.hey()} />
    </Fragment>,
})
export class MyComponent {
  hello = 'My component'

  hey() {
    console.log('yooo')
  }
}