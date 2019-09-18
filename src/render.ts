import { h, Fragment, render } from 'preact'

export class Initializer {
  static component: any

  static useComponent(component: any) {
    this.component = component
    return this
  }

  static attachTo(outlet: HTMLElement) {
    const C = new this.component().render()
    render(h(C, {}), outlet)
  }
}