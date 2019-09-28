import { Container } from "./container"
import { h, Component, Fragment } from "preact"

class State extends Component<any, any> {
  ctrl = new Container(
    this.props.tag, 
    this.props.props, 
    this.props.directives, 
    this.props.selectedChildren
  )

  render() {
    if (!this.ctrl) {
      return h(Fragment, {})
    }
    return this.ctrl.getComponent(
      this.props.props, 
      this.props.selectedChildren
    )
  }
}


export function y(tag: any, props: Record<string, any> = {}, ...children: any) {
  if (!props) {
    props = {}
  }
  let selectedChildren = children
  if (children.length && Array.isArray(children[0])) {
    selectedChildren = children[0]
  }
  const directives = props._directives || []
  if (directives.length === 0) {
    return h(tag, props, children)
  }
  const settings = {
    tag,
    props,
    directives,
    selectedChildren,
  }
  return h(State, settings)
}
