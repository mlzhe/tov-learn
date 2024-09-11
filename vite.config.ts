import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// import vue from '@vitejs/plugin-vue'

import { vitepressDemo } from 'vite-plugin-vitepress-demo'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue'], // 根目录下所有的demos的vue文件
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@tov-ui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
