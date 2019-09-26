export const ignoredMethods = [
  'constructor', 'onInit', 'afterViewInit', 'onDestroy', 
  'selector', 'render', 'container' 
]

export const getKeys = (instance: any, ctor: any) => {
  const methods = Object.getOwnPropertyNames(ctor.prototype)
  const properties = Object.keys(instance)

  // console.log('methods', methods)
  // console.log(properties, 'properties')

  const draft: any = {}
  for (let key of [...methods, ...properties]) {
    if (ignoredMethods.includes(key)) {
      continue
    }
    draft[key] = instance[key]
  }
  return draft
}

export const voidFn = () => () => {}

export function shallowClone(obj) {
  var clone = Object.create(Object.getPrototypeOf(obj));

  var props = Object.getOwnPropertyNames(obj);
  props.forEach(function(key) {
      var desc:any = Object.getOwnPropertyDescriptor(obj, key);
      Object.defineProperty(clone, key, desc);
  });

  return clone;
}