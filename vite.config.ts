import { defineConfig } from 'vite'
import Component from 'unplugin-vue-components/vite'

// import vue from '@vitejs/plugin-vue'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import alias from './alias'
import { tovUIResolver } from './scripts/tov-ui-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vitepressDemo({
      glob: ['**/demos/*.vue'], // 根目录下所有的demos的vue文件
    }),
    Component({
      resolvers: [
        tovUIResolver(),
      ],
    }),
  ],
  resolve: {
    alias,
  },
})
