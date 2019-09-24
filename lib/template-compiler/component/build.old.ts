import { ParseResult } from '../html-parse/parse'
import { HTMLTags } from './element-names'

const replaceTemplates = (str: string) => {
  return str.replace(/{{{?(#[a-z]+ )?[a-z]+.[a-z]*}?}}/, binding => {
    return `' + ctx.${binding.slice(2, -2)} + '`
  })
}

function attrString(attrs) {
  var buff: string[] = [];
  for (var key in attrs) {
      buff.push(`${key} : '${attrs[key]}',`);
  }
  if (!buff.length) {
      return '{}';
  }
  return '{ ' + buff.join(' ') + ' }';
}

function stringify(buff: string, doc: ParseResult) {
  if (doc.type === 'text') {
    return `${buff}'${replaceTemplates(doc.content!)}'`
  }
  const attributes = attrString(doc.attrs)
  if (HTMLTags.includes(doc.name!)) {
    buff += `h('${doc.name}', ${attributes}, `
  } else {
    buff += `h(declarations['${doc.name}'], ${attributes}, `
  }
  return buff + doc.children.reduce(stringify, '') + ')';
}

export function build (results: ParseResult[]) {
  return results.reduce(function (token, rootEl) {
      return token + stringify('', rootEl) + ', ';
  }, '').slice(0, -2).replace(/\n/g, '');
};

