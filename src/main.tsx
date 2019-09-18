import { Initializer } from './kit';
import { DComponent } from './components/d.component'
import { PostService } from './service/posts.service'

const postService = new PostService()

Initializer
  .useComponent(DComponent)
  .provideKeys({
    something: 'hey'
  })
  .provideInstances([
    postService
  ])
  .attachTo(document.body)
