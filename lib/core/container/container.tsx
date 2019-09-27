import { BehaviorSubject, Subject } from 'rxjs';
import { PreactLifeCycle, Target } from '../components';
import { h, Fragment } from 'preact';
import { first } from 'rxjs/operators';

export class Container {
    selector: string | undefined
    $lifecycle = new Subject<PreactLifeCycle>()
    $tag = new BehaviorSubject<any>(Fragment)
    $ref = new BehaviorSubject<HTMLElement | undefined>(undefined)
    $context = new BehaviorSubject<any>(undefined)
    $onInit = new Subject<void>()
    $afterViewInit = new Subject<void>()
    $onDestroy = new Subject<void>()
    instanceKeys = []

    constructor(
        public tag: any = Fragment,
        public props: any = {},
        public directives: any[] = [],
        public children: any[] = [],
    ) {
        for (const directive of this.directives) {
            this.applyDirective(directive)
        }
        this.onComponentLifecycle(PreactLifeCycle.didMount).then(() => {
            this.$onInit.next()
            this.$onInit.complete()
            this.$tag.next(this.tag)
        })
        this.onComponentLifecycle(PreactLifeCycle.didUpdate).then(() => {
            this.$afterViewInit.next()
            this.$afterViewInit.complete()
        })
        this.$ref.pipe(first(e => e !== undefined)).subscribe((el) => {
        })
    }
    
    onComponentLifecycle(eventName: PreactLifeCycle) {
        return this.$lifecycle.pipe(first(event => event === eventName)).toPromise()
    }

    applyDirective(directive) {
        this.$afterViewInit.subscribe(() => {
            directive.ref = this.$ref.getValue()
            directive.afterViewInit()
        })
    }

    getComponent() {
        const props = {
            $lifecycle: this.$lifecycle,
            $tag: this.$tag,
            $ref: this.$ref,
            $context: this.$context,
            forwardedProps: this.props
        }        
        return h(Target, props, this.children)
        // h(Fragment,{}, [
        //     h(ContextAccessor, props),
        //     h(Target, props),
        // ])
    }
}

