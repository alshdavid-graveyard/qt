import { Writer } from './writer'
import { ParseResult } from './parser'
import { HTMLTags } from './element-names'
import { ComponentOptions, Container } from '@pangular/core'

const templateRegex = new RegExp(/{{{?(#[a-z]+ )?[a-z]+.[a-z]*}?}}/g)
const dataBindingRegex = new RegExp(/\[(#[a-z]+ )?[a-z]+.[a-z]*\]/g)
const eventBindingRegex = new RegExp(/\((#[a-z]+ )?[a-z]+.[a-z]*\)/g)
const bananaRegex = new RegExp(/\[\((#[a-z]+ )?[a-z]+.[a-z]*\)\]/g)
const startsWithHash = (str: string) => str[0] === '#'

const replaceTemplates = (str: string) => {
  return str.replace(templateRegex, binding => {
    return `' + ctx.${binding.slice(2, -2)} + '`
  })
}

function attrString(OGAttrs: Record<string, string>, c: Container) {
  const attrs = {...OGAttrs}
  if (Object.keys(attrs).length === 0) {
    return '{}'
  }
  for (const key in attrs) {
    if (key.match(bananaRegex)) {
      const k = key.slice(2, -2)
      attrs[`[${k}]`] = attrs[key]
      attrs[`(${k}Change)`] = `${attrs[key]} = $event`
      delete attrs[key]
    }
  }
  for (const key in attrs) {
    if (key === '(valueChange)') {
      attrs['(onInput)'] = attrs[key].replace('$event', '$event.target.value')
      delete attrs[key]
    }
  }
  const buff: string[] = [];
  for (const [ attr, value ] of Object.entries(attrs)) {
    if (startsWithHash(attr)) {
      const k = attr.slice(1, attr.length)
      buff.push(`ref: obtainRef('${k}')`)
    } else if (attr.match(dataBindingRegex)) {
      const k = attr.slice(1, -1)
      buff.push(`'${k}' : ctx.${value}`);
    } else if (attr.match(eventBindingRegex)) {
      const k = attr.slice(1, -1)
      buff.push(`'${k}' : ($event) => ctx.${value}`);
    } else {
      buff.push(`'${attr}' : '${value}'`);
    }
  }
  return '{ ' + buff.join(', ') + ' }';
}

const writeResult = (w: Writer, r: ParseResult, c: Container) => {
  if (r.type === 'text') {
    w.write(`'${replaceTemplates(r.content!)}'`)
    return
  }
  
  const attributes = attrString(r.attrs, c)
  if (r.name === 'Fragment' || r.name === 'pg-template') {
    w.write(`h(Fragment, {}, `)
  } else if (r.name === 'slot') {
    const tag = r.attrs.as ? `'${r.attrs.as}'` : 'Fragment'
    w.write(`h(${tag}, {}, children`)
  } else if (HTMLTags.includes(r.name!)) {
    w.write(`h('${r.name}', ${attributes}, `)
  } else {
    w.write(`h(d('${r.name}'), ${attributes}, `)
  }

  for (let child of r.children || []) {
    writeResult(w, child, c)
    w.write(", ")
  }

  w.write(')')
}

export const build = (
  results: ParseResult[], 
  container: Container
) => {
  const w = new Writer()
  let target: ParseResult
  if (results.length === 1) {
    target = results[0]
    target.attrs['#host'] = undefined
  } else {
    target = {
      type: 'tag',
      name: 'Fragment',
      voidElement: false,
      attrs: {},
      children: results
    }
  }
  writeResult(w, target, container)
  const compiled = w.get().replace(/\n/g, '')
  const output = `({ h, Fragment, ctx, d, children, obtainRef }) => ${compiled}`
  return output
}