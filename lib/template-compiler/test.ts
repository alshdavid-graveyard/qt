console.clear() 

import { parse } from './html-parse/parse'
import * as component from './component'

const thing: string = ''
const html = /*html*/`
  <div>
    1
  </div>
  <div>
  <div>2</div></div>
`

const parsed = parse(html)
// console.log(parsed)
const result = component.build(parsed)

console.log()
console.log()
console.log(result)
console.log("h('div', {}, '1'), h('div', {}, h('div', {}, '2'))")

  