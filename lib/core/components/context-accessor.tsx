import { Component, h } from "preact";
import { DC } from "./context";

export class ContextAccessor extends Component<any, any> {
    render() {
        return h(
            DC.Consumer as any, 
            {}, 
            (context) => this.props.$context.next(context)
        )
    }
}