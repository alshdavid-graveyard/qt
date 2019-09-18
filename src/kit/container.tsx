import { h, Fragment, Component } from 'preact'
import { useEffect } from 'preact/hooks'
import { Subscription, BehaviorSubject, Subject } from 'rxjs'

interface TemplateProps {
  template: BehaviorSubject<any>
  context: BehaviorSubject<any>
  declarations: BehaviorSubject<any>
  onInit: () => void
  onDestroy: () => void
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
    if (this.props.onInit) {
      this.props.onInit()
    }
  }

  componentWillUnmount() {
    this.$.unsubscribe()
    if (this.props.onInit) {
      this.props.onDestroy()
    }
  }

  setTemplate = (template: any) => {
    this.setState({ template })
  }

  getComponent() {
    if (!this.props.template.value) {
      return h(Fragment, {})
    }
    return
  }
  
  render() {
    if (!this.state.template) {
      return
    }
    return h(Fragment, {},
      h(
        this.state.template, 
        { 
          ctx: this.state.context,
          declarations: this.state.declarations,
        }
      )
    )
  }
}

export class Container {
  template = new BehaviorSubject<any>(<Fragment/>)
  context = new BehaviorSubject<any>({})
  declarations = new BehaviorSubject<any>({})
  props = new BehaviorSubject<any>({})  
  propEvents = new Subject()
  onInit = new Subject()
  onDestroy = new Subject()

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

  public getComponent() {
    return (props: any) => {
      
      useEffect(() => {
        const s = this.propEvents
          .subscribe((event: any) => props[event.key](event.value))
        return () => s.unsubscribe()
      }, [this.propEvents]) 

      this.props.next(props)
      return h(
        Template, 
        { 
          template: this.template, 
          context: this.context,
          declarations: this.declarations,
          onInit: () => this.onInit.next(),
          onDestroy: () => this.onDestroy.next(),
        }
      )
    }
  }
}
