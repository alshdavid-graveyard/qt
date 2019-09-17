import { MyComponent } from './component'


// bootstrap
const app = Initializer
  .useComponent(MyComponent)
  .withContext({
    worldService: new WorldService()
  })
  .init()

// append
document.body.appendChild(app.node)

// cleanup
app.destroy()