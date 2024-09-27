import type { ComponentResolver } from 'unplugin-vue-components/types'

export function tovUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      console.log(name)
      if (name.startsWith('T')) {
        return {
          name: name.slice(1),
          from: 'tov-ui',
        }
      }
    },
  }
}
