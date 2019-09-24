import { DependencyContainer } from './context'
import { Render } from './render'
import { Subscription, BehaviorSubject, Subject } from 'rxjs'
import { h, Fragment, Component } from 'preact'
import { merge } from 'lodash-es'

export interface TemplateProps {
  children?: any
  template: BehaviorSubject<any>
  refs: BehaviorSubject<any>
  templateContext: BehaviorSubject<any>
  declarations: BehaviorSubject<any>
  componentDidMount: Subject<any>
  componentDidUpdate: Subject<any>
  componentWillUnmount: Subject<any>
}

export interface TemplateState {
  template: () => any
  templateContext: Record<string, any>
  declarations: Record<string, any>
}

export class Template extends Component<TemplateProps, TemplateState> {
  $ = new Subscription()

  state = {
    template: () => h(Fragment, {}),
    templateContext: {},
    declarations: {}
  }

  componentDidUpdate() {
    this.props.componentDidUpdate.next()
  }

  componentDidMount() {
    this.state.template = this.props.template.value

    this.$.add(this.props.template.subscribe(
      value => this.setState({ template: value })
    ))

    this.$.add(this.props.declarations.subscribe(
      value => this.setState({ declarations: value })
    ))

    this.$.add(this.props.templateContext.subscribe(value => {
      this.setState({ templateContext: value } )
    }))
    
    this.props.componentDidMount.next()
    this.props.componentDidMount.complete()
  }

  componentWillUnmount() {
    this.$.unsubscribe()
    this.props.componentWillUnmount.next()
    this.props.componentWillUnmount.complete()
  }

  obtainRef = (name: string) => {
    return (ref: HTMLElement | undefined) => {
      if (!ref) {
        return
      }
      this.props.refs.next({
        ...this.props.refs.value,
        [name]: ref,
      })
    }
  }

  declarationsGetter = (name: string) => {
    const component = this.state.declarations[name]
    if (!component) {
      throw new Error(`Component with tag "${name}" does not exist, did you forget to declare it?`)
    }
    return component
  }

  setTemplate = (template: any) => {
    this.setState({ template })
  }

  render() {
    return h(
      this.state.template,
      {
        children: this.props.children,
        ctx: this.state.templateContext,
        d: this.declarationsGetter,
        h,
        Fragment,
        obtainRef: this.obtainRef,
      }
    )
  }
}

export function Wrapper(
  propEvents: Subject<any>,
  refs: BehaviorSubject<any>,
  template: BehaviorSubject<any>,
  templateContext: BehaviorSubject<any>,
  injectables: BehaviorSubject<any>,
  declarations: BehaviorSubject<any>,
  componentDidMount: Subject<any>,
  componentDidUpdate: Subject<any>,
  componentWillUnmount: Subject<any>,
) {
  return class extends Component<any, any> {
    sub!: Subscription 

    componentDidMount() {
      this.sub = propEvents.subscribe(
        event => this.props[event.key] && this.props[event.key](event.value)
      )
    }

    componentWillUnmount() {
      this.sub.unsubscribe()
    }

    emitInjectables = (value: any): void => {
      injectables.next(value)
    }

    render() {
      const props = {
        children: this.props.children,
        refs,
        template,
        templateContext,
        declarations,
        componentDidMount,
        componentDidUpdate,
        componentWillUnmount,
      }
      const Context = DependencyContainer.Consumer as any
      return <Fragment>
        <Context>
          {this.emitInjectables}
        </Context>
        <Template {...props}/>
      </Fragment>
    }
  }
}