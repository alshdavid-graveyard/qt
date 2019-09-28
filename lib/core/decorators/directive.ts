import { patchConstructor } from "./patches"

export interface DirectiveOptions {
  attribute: string
}

export function Directive(options: DirectiveOptions) {
  return patchConstructor('directive', (instance) => {
    instance._attribute = options.attribute
    instance._objectProxy
    instance._container
    return instance
  })
}