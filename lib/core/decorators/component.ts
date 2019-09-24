import { Container } from '../container'
import { patchConstructor } from './patch-method'
import { patchProperties, patchBasics } from '../class-patcher'

interface TemplateProps {
  ctx: Record<string, any>
  declarations: Record<string, any>
  h: any
  Fragment: any
}

export interface ComponentOptions {
  selector: string
  declarations?: any[]
  template: ((props: TemplateProps) => void) | string | any
}

const setTemplate = (
  template: any, 
  container: Container,
) => {
  if (
    template.prototype && 
    template.prototype.templateType === 'tagged-template'
  ) {
    template = template(container)
  }
  container.setTemplate(template)
}

export function Component(options: ComponentOptions) {
  return patchConstructor('component', (instance, constructor) => {
    const container = new Container()
    const [ onInit, afterViewInit, onDestroy ] = patchBasics(instance, container, options)

    container.onInit.subscribe(() => {
      container.setDeclarations(options.declarations)
      setTemplate(options.template, container)
      patchProperties(instance, container, constructor)
      onInit.apply(instance)
      container.renderTemplate()
    })

    container.afterViewInit.subscribe(() => {
      console.log(1)
      afterViewInit.apply(instance)
    })

    container.onDestroy.subscribe(() => {
      onDestroy.apply(instance)
    })

    return instance
  })
}
