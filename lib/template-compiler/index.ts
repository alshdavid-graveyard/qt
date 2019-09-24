import { parse } from './html-parse/parse'
import * as component from './component'

export const compile = (html: string, options: any) => {
  const parsed = parse(html)
  return component.build(parsed, options)
}