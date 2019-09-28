import { parse } from './parser'
import { build } from './build'
import { Container } from '@pangular/core'

export const compile = (
  html: string, 
  instance: Container
) => {
  const ast = parse(html)
  return build(ast, instance)
}