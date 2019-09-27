import { y } from "../container";
import { h } from 'preact'

export interface RenderProps {
    target: () => any
    propss?: Record<any, any>
}

export const Render = ({ target, propss = {} }: RenderProps) => {
  console.log('ok', propss)
  return h(target, { ...propss})
}
