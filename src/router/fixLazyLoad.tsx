/**
 *
 * 防止异步加载闪烁的bug
 */
export const lazyFix = (node: any) => {
  return Promise.all([
    node(),
    new Promise(resolve => setTimeout(() => resolve(true), 200))
  ]).then(([moduleExports]) => {
    return moduleExports
  })
}
