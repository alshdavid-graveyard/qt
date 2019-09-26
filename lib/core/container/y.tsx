import { Container } from "./container"

export function y(
    tag: any, 
    props: Record<string, any> = {}, 
    ...children: any
) {
    // if (directives.length === 0) {
    //     return h(tag, props, children)
    // }
    if (!props) {
        props = {}
    }
    if (children.length && Array.isArray(children[0])) {
        children = children[0]
    }
    const directives = (props && props._directives) || []
    const ctrl = new Container(tag, props, directives, children)
    return ctrl.getComponent()
}