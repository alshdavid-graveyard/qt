import { h, Fragment } from 'preact';
import { Component, Inject, Render } from '../kit'
import { For } from '../directives'
import { PostService } from '../service/posts.service';

@Component({
  selector: 'a-component',
  declarations: [ For ],
  template: ({ ctx, declarations }) => {
    return <Fragment>
      <div>hi</div>
      <div>{ctx.something}</div>
      <div>{ctx.postService && ctx.postService.title}</div>
    </Fragment>
  },
    
})
export class DComponent {
  @Inject(c => c.something)
  something = 'unchanged'

  @Inject(PostService)
  postService!: PostService

  print() {
    this.postService.add('something')
  }
} 

