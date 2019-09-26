import { compile } from '@pangular/compiler'
import { Container } from '@pangular/core'

export function html(string: TemplateStringsArray) {
  function compiler(instance: Container) {
    const result = compile(string[0], instance)
    console.log(result)
    return eval(result)
  }
  compiler.prototype.templateType = 'tagged-template'
  return compiler
}
