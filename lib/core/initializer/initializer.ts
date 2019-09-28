import { h, render } from 'preact'
import { DCP } from '../components/context'

const makeID = () => ((Math.random() * 10000000).toFixed(0)).toString()

export const Initializer = {
  component: undefined,
  injectables: {},

  rootComponent(component: any) {
    this.component = component
    return this
  },

  provide(injectables: Record<string, any> | Array<any>) {
    if (Array.isArray(injectables)) {
      for (const injectable of injectables) {
        this.injectables[makeID()] = injectable
      } 
    } else {
      this.injectables = {
        ...this.injectables,
        ...injectables
      }
    }
    return this
  },

  attachTo(outlet: HTMLElement) {
    if (!this.component) {
      throw new Error('Please insert component')
    }
    const component = new (this.component as any)()
    const C = () => component._container.getComponent()
    if (this.injectables) {
      const app = h(
        DCP, 
        { value: this.injectables }, 
        h(C, {})
      )
      render(app, outlet)
    } else {
      const app = h(C, {})
      render(app, outlet)
    }
    return {
      destroy() {
        render(null, outlet)
      }
    }
  }
}