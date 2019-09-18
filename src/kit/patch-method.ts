export function patchMethod(target: any, name: string, method: any) {
  const OG = target[name] || function () { }

  async function patch(this: any) {
    await method.apply(this)
    await OG.apply(this)
  }

  target[name] = patch
}

export function patchOnInit(target: any, method: any) {
  return patchMethod(target, 'onInit', method)
}

export function patchOnDestroy(target: any, method: any) {
  return patchMethod(target, 'onDestroy', method)
}