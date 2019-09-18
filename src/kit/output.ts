export function Output(options: any = {}) {
  return function (target: any, key: string) {
    const OGOnInit = target.onInit || function () { }

    function onInit(this: any) {
      this[key].subscribe((value: any) => {
        this.container.emitPropEvent(key, value)
      })

      OGOnInit.apply(this)
    }

    target.onInit = onInit
  }
}