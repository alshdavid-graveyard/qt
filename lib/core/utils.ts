export const ignoredMethods = [
  'constructor', 'onInit', 'afterViewInit', 'onDestroy', 
  'selector', 'render', 'container' 
]

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