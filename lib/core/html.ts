import { compile } from '@pangular/compiler'

export function html(string: TemplateStringsArray) {
  function compiler(instance: Record<string, any>) {
    const result = compile(string[0], instance)
    console.log(result)
    return eval(result)
  }
  compiler.prototype.templateType = 'tagged-template'
  return compiler
}
