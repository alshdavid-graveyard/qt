import { ParseResult } from '../html-parse/parse'

const makeH = (tagName, options = {}, children = '[]') => `h('${tagName}', ${JSON.stringify(options)}, ${children})`

function attrString(attrs) {
  var buff = [];
  for (var key in attrs) {
      buff.push(key + '="' + attrs[key] + '"');
  }
  if (!buff.length) {
      return '';
  }
  return ' ' + buff.join(' ');
}

function stringify(buff: string, doc: ParseResult) {
  if (doc.type === 'text') {
    return buff + doc.content;
  }
  const attributes = doc.attrs ? attrString(doc.attrs) : ''
  const closingTag = doc.voidElement ? '/>' : '>'
  buff += `<${doc.name}${attributes}${closingTag}`
  if (doc.voidElement) {
      return buff;
  }
  return buff + doc.children.reduce(stringify, '') + '</' + doc.name + '>';
}

export function build (results: ParseResult[]) {
  return results.reduce(function (token, rootEl) {
      return token + stringify('', rootEl);
  }, '');
};