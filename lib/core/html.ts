import { compile } from '../template-compiler'
import { ComponentOptions } from './component'

export function html(string: TemplateStringsArray) {
  function compiler(declarations: Record<string, string>) {
    const result = compile(string[0], declarations)
    console.log(result)
    return eval(result)
  }
  compiler.prototype.templateType = 'tagged-template'
  return compiler
}
