import { createPropertyDecorator } from './patches'

export function HostElement() {
  return createPropertyDecorator(({ key, afterViewInit }) => {
    afterViewInit(({ ctx, setProperty }) => {
      setProperty((ctx as any).ref)
    })
  })
}
