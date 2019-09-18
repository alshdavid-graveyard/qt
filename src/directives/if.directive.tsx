import { Directive, Input } from "../kit";

@Directive({
  selector: 'if',
  template: ({ ctx }) => {
    return ctx.process()
  }
})
export class If {
  @Input()
  condition = false

  @Input()
  children: any

  process() {
    if (this.condition !== true) {
      return
    }
    return this.children()
  }
}