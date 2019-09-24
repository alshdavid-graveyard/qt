import { BehaviorSubject, Subject } from 'rxjs'
import { h, Fragment } from 'preact'
import { Wrapper } from './components/template'
import { first } from 'rxjs/operators'

export class Container {
  selector: string = ''
  _template = () => h(Fragment, {})
  template = new BehaviorSubject<any>(this._template)
  refs = new BehaviorSubject<any>({})
  templateContext = new BehaviorSubject<any>({})
  context = new BehaviorSubject<any>({})
  declarations = new BehaviorSubject<any>({})
  props = new BehaviorSubject<any>({})  
  injectables = new BehaviorSubject<any>({})
  propEvents = new Subject<any>()
  onInit = new Subject<any>()
  afterViewInit = new Subject<any>()
  onDestroy = new Subject<any>()
  componentDidMount = new Subject<any>()
  componentDidUpdate = new Subject<any>()
  componentWillUnmount = new Subject<any>()
  state = new BehaviorSubject({})
  instanceKeys = []

  constructor() {
    this.componentDidMount.pipe(first()).subscribe(() => {
      this.onInit.next()
      this.onInit.complete()
    })

    this.componentDidUpdate.pipe(first()).subscribe(() => {
      this.afterViewInit.next()
      this.afterViewInit.complete()
    })

    this.componentWillUnmount.pipe(first()).subscribe(() => {
      this.onDestroy.next()
      this.onDestroy.complete()
    })
  }

  public emitPropEvent(key: string, value: any) {
    this.propEvents.next({ key, value })
  }

  public setTemplateContext(context: any) {
    this.templateContext.next(context)
  }

  public setTemplate(template) {
    this._template = template
  }

  public setDeclarations(declarations: any[] = []) {
    const result = {}
    for (const Value of declarations) {
      const value = new Value()
      if (Value.prototype.type === 'directive') {
        result[value.selector] = value
      }
      if (Value.prototype.type === 'component') {
        result[value.selector] = value.render()
      }
    }
    this.declarations.next(result)
  }

  public clearTemplate() {
    this.template.next(null)
  }

  public getTemplate() {
    return this.template.value
  }

  public renderTemplate() {
    this.template.next(this._template)
  }

  public getComponent() {
    return Wrapper(
      this.propEvents,
      this.refs,
      this.template, 
      this.templateContext,
      this.injectables,
      this.declarations,
      this.componentDidMount,
      this.componentDidUpdate,
      this.componentWillUnmount,
    )
  }
}
