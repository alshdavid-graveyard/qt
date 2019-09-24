import { h } from 'preact'
import { Container } from '../container'

const voidFn = () => () => {}

interface TemplateProps {
  ctx: Record<string, any>,
  declarations: Record<string, any>
}

interface DirectiveOptions {
  selector: string
  declarations?: any[]
  template?: (props: TemplateProps) => void
}

export function Directive(options: DirectiveOptions) {
  return function(constructor: any): any {
    
    function construct(...args: any[]) {
      const instance = new constructor(...args)
      instance.selector = options.selector

      

      return instance
    }

    construct.prototype.type = 'directive'
    return construct
  }
}
