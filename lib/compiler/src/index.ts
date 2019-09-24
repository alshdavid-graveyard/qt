import { parse } from './parser'
import { build } from './build'

export const compile = (
  html: string, 
  instance: Record<string, any>
) => {
  const ast = parse(html)
  return build(ast, instance)
}