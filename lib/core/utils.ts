export const ignoredMethods = [
  'constructor', 'onInit', 'onDestroy', 
  'selector', 'render', 'container', 'type'
]

export const getKeys = (instance: any, ctor: any) => {
  const methods = Object.getOwnPropertyNames(ctor.prototype)
  const properties = Object.keys(instance)

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