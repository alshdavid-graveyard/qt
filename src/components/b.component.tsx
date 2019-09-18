import { h, Fragment } from 'preact';
import { Component, Render } from '../kit'
import { AComponent } from './a.component'

@Component({
  selector: 'my-component',
  declarations: [
    AComponent
  ],
  template: ({ ctx, declarations }) => 
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