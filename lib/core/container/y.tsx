import { Container } from "./container"
import { h } from "preact"

export function y(tag: any, props: Record<string, any> = {}, ...children: any) {
  if (!props) {
    props = {}
  }
  let selectedChildren = children
  if (children.length && Array.isArray(children[0])) {
    selectedChildren = children[0]
  }
  const directives = props._directives || []
  // if (directives.length === 0) {
  //   return h(tag, props, children)
  // }
  const ctrl = new Container(tag, props, directives, selectedChildren)
  if (props.getContainer) {
    props.getContainer(ctrl)
  }
  props.getContainer = undefined
  return ctrl.getComponent(props)
}
