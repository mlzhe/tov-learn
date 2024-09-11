/**
 * 组件类名生成 hooks
 * @param componentName 组件名称
 * @returns
 */

import classNames from 'classnames'
import { computed } from 'vue'

type BEMType = string | [string, 'B' | 'E' | 'M'] | undefined

export function useClassNames(componentName: string) {
  const prefix = 'tov'
  const componentClass = `${prefix}-${componentName}`
  const c = (...args: BEMType[]) => {
    if (args.length) {
      return args.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          const arg1 = cur[0]
          const arg2 = cur[1]
          if (arg2 === 'E')
            return `${prev}__${arg1}`
          else if (arg2 === 'M')
            return `${prev}--${arg1}`
        }
        return `${prev}-${cur}`
      }, componentClass)
    }
    return componentClass
  }

  const ce = (e: string) => [e, 'E'] as BEMType
  const cm = (m: string) => [m, 'M'] as BEMType

  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()))
  }
  return {
    c,
    cx,
    ce,
    cm,
  }
}
