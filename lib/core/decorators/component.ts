import { Container, y } from '../container'
import { patchConstructor } from './patches'
import { patchBasics } from './patches'
import { ObjectProxy } from '../object-proxy'
import { h, Fragment, Component as PComponent } from 'preact'
import { useSubscribe } from '@pangular/core'

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

const Wrapper = ({ proxy, template }) => {
  const pctx = useSubscribe(proxy.$proxy, proxy.dispenceProxy())

  const ctx = proxy.dispenceProxy()
  console.log(ctx)
  return h(template, { ctx, y })
}

export function Component(options: ComponentOptions) {
  return patchConstructor('component', (instance) => {
    const proxy = new ObjectProxy(instance, ['afterViewInit', 'onInit', 'onDestroy', 'container', 'render', 'selector'])
    const C = () => h(Wrapper, { proxy, template: options.template })
    const container = new Container(C)

    instance.render = () => () => container.getComponent()
    const [ onInit, afterViewInit, onDestroy ] = patchBasics(instance, container, options)

    container.$onInit.subscribe(() => {
      onInit.apply(instance)
    })

    container.$afterViewInit.subscribe(() => {
      afterViewInit.apply(instance)
    })

    container.$onDestroy.subscribe(() => {
      onDestroy.apply(instance)
    })

    return instance
  })
}


  //  class Wrapper extends PComponent<any, any> {
  //   subscription: Subscription

  //   state = {
  //     ctx: this.props.proxy.dispenceProxy()
  //   }

  //   componentDidMount() {
  //     this.subscription = this.props.proxy.$proxy.subscribe(ctx => {
  //       console.log(ctx)
  //       this.setState({ ctx })
  //     })  
  //   }

  //   componentWillUnmount() {
  //     this.subscription.unsubscribe()
  //   }
    
  //   render() {
  //     return h(this.props.template, { ctx: this.state.ctx, y })
  //   }
  // }