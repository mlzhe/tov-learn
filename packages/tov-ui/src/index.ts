import type { App, Plugin } from 'vue'
import * as pkg from '../package.json'
import * as components from './components'

export * from './components'

export default {
  install(app: App) {
    Object.entries(components).forEach(([_name, comp]) => {
      if (comp.install)
        app.use(comp as any)
    })
  },
  version: pkg.version,
} as Plugin

/**
 * [
    ['Button', [Vue Component Object]],
   ]
 */

// import TovUI from 'tov-ui'

// app.use(TovUI) -- install  执行install方法  遍历每一个组件 如果组件有install方法 调用app.use(comp) -- comp.install方法 调用 app.component()
