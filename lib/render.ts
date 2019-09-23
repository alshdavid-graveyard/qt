import { h } from "./runtime";

export interface RenderProps {
    target: () => any
    [key: string]: any
}

export const Render = ({ target, ...props }: RenderProps) => h(target, { ...props})
