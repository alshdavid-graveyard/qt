import { Container, Input, Component, html, DependencyContainer, Initializer, Render } from '@pangular/core';
import { h, render } from 'preact'


const component = new Container()

let v = '1'
component.setTemplateContext({ a: v })
component.setTemplate(({ ctx }) => <div>
  <div>Static</div>
  <div>{ctx.a}</div>
</div>)

const C = component.getComponent()
render(
  <DependencyContainer.Provider value={{ test: 'test' }}>
    <C />
  </DependencyContainer.Provider>,
  document.body
)

component.renderTemplate()

setInterval(() => {
  console.log('tick')
  v = v + '1'
  component.setTemplateContext({ a: v })
}, 3000)