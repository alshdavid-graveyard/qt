import { h, Fragment, Component, render } from "preact"
import { DC } from "./context"

export enum PreactLifeCycle {
  didMount = "componentDidMount",
  didUpdate = "componentDidUpdate",
  willUnmount = "componentWillUnmount"
}

export class Target extends Component<any, any> {
  state: any = {
    tag: Fragment,
    props: this.props.forwardedProps
  }

  componentDidMount() {
    this.props.$tag.subscribe(tag => this.setState({ tag }))
    this.props.$props.subscribe(props => {
      this.setState({ props })
    })
    this.props.$lifecycle.next(PreactLifeCycle.didMount)
  }

  componentDidUpdate() {
    this.props.$lifecycle.next(PreactLifeCycle.didUpdate)
  }

  componentWillUnmount() {
    this.props.$lifecycle.next(PreactLifeCycle.willUnmount)
  }

  getRef = (el: HTMLElement | undefined): void => {
    if (el) {
      this.props.$ref.next(el)
    }
  }

  render() {
    return h(
      this.state.tag, 
      this.props.$props.value, 
      this.props.children)
  }
}
