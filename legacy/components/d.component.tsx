import { Component, Inject } from '@pangular/core'
import { For } from '../directives'
import { PostService } from '../service/posts.service';

@Component({
  selector: 'a-component',
  declarations: [ For ],
  template: ({ ctx, h, Fragment }) => {
    return h(Fragment, {},
      h('div', {}, 'hi'),
      h('div', {}, ctx.something),
      h('div', {}, ctx.postService.title)
    )
  }
})
export class DComponent {
  @Inject(c => c.something)
  something = 'default value'

  @Inject(PostService)
  postService!: PostService

  onInit() {

  }

  afterViewInit() {

  }

  print() {
    this.postService.add('something')
  }
} 

