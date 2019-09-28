import { createPropertyDecorator } from './patches'
import { first, map } from 'rxjs/operators'
import { Container } from '../container';


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

export function Inject(exec?: InjectProps | any) {
  return createPropertyDecorator(({ key, onInit }) => {
    onInit(({ ctx, setProperty }) => {
      const injectables = ctx._container.$context.value
      const injectable = injectables[key]
      setProperty(injectable)
    })
  })
}

// export function OGInject(exec: InjectProps | any) {
//   return function (target: any, key: string) {  

//     patchOnInit(target, async function(this: any) {
//       const container: Container = this.container
//       const useSelector = isConstructor(exec)
//       if (useSelector == false) {
//         this[key] = await container.injectables
//           .pipe(
//             map(i => exec(i)),
//             first(v => v !== undefined)
//           ).toPromise()
//       } else {
//         this[key] = await container.injectables
//           .pipe(
//             map(i => findInstanceFromRecord(i, exec)),
//             first(v => v !== undefined)            
//           ).toPromise()
//       }
//     })
//   }
// }
