import { Subscription, BehaviorSubject, Subject } from 'rxjs'
import { h, Fragment, Component, useEffect, useContext } from './runtime'
import { dependencyContainer } from './injector'

interface TemplateProps {
  children: any
  template: BehaviorSubject<any>
  refs: BehaviorSubject<any>
  context: BehaviorSubject<any>
  declarations: BehaviorSubject<any>
  onInit: Subject<any>
  onDestroy: Subject<any>
}

interface TemplateState {
  template: () => any
  context: Record<string, any>
  declarations: Record<string, any>
}

class Template extends Component<TemplateProps, TemplateState> {
  $ = new Subscription()

  state = {
    template: () => h(Fragment, {}),
    context: {},
    declarations: {}
  }

  componentDidMount() {
    this.state.template = this.props.template.value

    this.$.add(this.props.template.subscribe(
      value => this.setState({ template: value })
    ))
    this.$.add(this.props.declarations.subscribe(
      value => this.setState({ declarations: value })
    ))
    this.$.add(this.props.context.subscribe(
      value => this.setState({ context: value })
    ))
    this.props.onInit.next()
    this.props.onInit.complete()
  }

  componentWillUnmount() {
    this.$.unsubscribe()
    this.props.onDestroy.next()
    this.props.onDestroy.complete()
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

  setTemplate = (template: any) => {
    this.setState({ template })
  }
  
  render() {
    return h(Fragment, {},
      h(
        this.state.template, 
        { 
          children: this.props.children,
          ctx: this.state.context,
          declarations: this.state.declarations,
          h,
          Fragment,
          obtainRef: this.obtainRef,
        }
      )
    )
  }
}

export class Container {
  component: any
  template = new BehaviorSubject<any>(() => <Fragment/>)
  refs = new BehaviorSubject<any>({})
  context = new BehaviorSubject<any>({})
  declarations = new BehaviorSubject<any>({})
  props = new BehaviorSubject<any>({})  
  injectables = new BehaviorSubject<any>({})
  propEvents = new Subject<any>()
  onInit = new Subject<any>()
  onDestroy = new Subject<any>()

  public emitPropEvent(key: string, value: any) {
    this.propEvents.next({ key, value })
  }

  public setContext(context: any) {
    this.context.next(context)
  }

  public setTemplate(template) {
    this.template.next(template)
  }

  public setDeclarations(declaration) {
    this.declarations.next(declaration)
  }

  public clearTemplate() {
    this.template.next(null)
  }

  public getTemplate() {
    return this.template.value
  }

  useInjectables = () => {
    const DC = useContext(dependencyContainer)
    useEffect(() => this.injectables.next(DC), [DC])
  }

  usePropEvents = (props) => {
    useEffect(() => {
      const s = this.propEvents
        .subscribe(
          event => props[event.key](event.value)
        )
      return () => s.unsubscribe()
    }, [this.propEvents]) 
    
    this.props.next(props)
  }

  public getComponent() {
    return (props: any) => {
      this.useInjectables()
      this.usePropEvents(props)     

      return h(
        Template, 
        { 
          children: props.children,
          refs: this.refs,
          template: this.template, 
          context: this.context,
          declarations: this.declarations,
          onInit: this.onInit,
          onDestroy: this.onDestroy,
        }
      )
    }
  }
}
