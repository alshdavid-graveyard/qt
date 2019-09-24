import { h, Fragment, render, createContext } from 'preact'
import { DependencyContainer } from './components/context'

const makeID = () => ((Math.random() * 10000000).toFixed(0)).toString()

export class Initializer {
  static component: any
  static state: any
  
  static useComponent(component: any) {
    this.component = component
    return this
  }
  
  static provideKeys(state: Record<string, any>) {
    this.state = { ...this.state, ...state }
    return this
  }

  static provideInstances(instances: any[]) {
    for (const instance of instances) {
      this.state[makeID()] = instance
    }
    return this
  }

  static attachTo(outlet: HTMLElement) {
    const component = new this.component()
    const C = component.render()
    if (this.state) {
      const app = h(
        DependencyContainer.Provider as any, 
        { value: this.state }, 
        h(C, {})
      )
      render(app, outlet)
    } else {
      const app = h(C, {})
      render(app, outlet)
    }
  }
}