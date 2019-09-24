import { createContext } from 'preact'
import { patchOnInit } from './patch-method'
import { first, map } from 'rxjs/operators'
import { Container } from './container';

export const dependencyContainer = createContext<any>({})

function isConstructor(obj) {
  return !!obj.prototype && !!obj.prototype.constructor.name;
}

const findInstanceFromRecord = <T = any>(
  collection: Record<string, any>, 
  object: new (...args: any[]) => T
): T | undefined => {
  for (const item in collection) {
    if (collection[item] instanceof object) {
      return collection[item]
    }
  }
}

type InjectProps = ((params: any) => any)

export function Inject(exec: InjectProps | any) {
  return function (target: any, key: string) {  

    patchOnInit(target, async function(this: any) {
      const container: Container = this.container
      const useSelector = isConstructor(exec)
      if (useSelector == false) {
        this[key] = await container.injectables
          .pipe(
            map(i => exec(i)),
            first(v => v !== undefined)
          ).toPromise()
      } else {
        this[key] = await container.injectables
          .pipe(
            map(i => findInstanceFromRecord(i, exec)),
            first(v => v !== undefined)            
          ).toPromise()
      }
    })
  }
}
