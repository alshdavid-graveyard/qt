import { Container } from "./container"

export function y(
    tag: any, 
    props: Record<string, any> = {}, 
    children: any[] = []
) {
    // if (directives.length === 0) {
    //     return h(tag, props, children)
    // }
    const directives = (props && props._directives) || []
    console.log(tag, props, children)
    const ctrl = new Container(tag, props, directives, children)
    return ctrl.getComponent()
}