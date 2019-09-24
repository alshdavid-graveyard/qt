import { patchOnInit, patchAfterViewInit } from "./patch-method"
import { Container } from "./container"
import { map, first } from "rxjs/operators"

export function HostElement() {
  return function (target: any, key: string) {  

    patchAfterViewInit(target, async function(this: any) {
      const container: Container = this.container
      this[key] =  await container.refs.pipe(
        map(refs => refs.host),
        first(host => host),
      ).toPromise()
    })
    
  }
}
