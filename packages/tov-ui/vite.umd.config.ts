import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: [
      {
        find: /^@tov-ui-learn-copy\/utils/,
        replacement: path.resolve(baseUrl, '../utils/src'),
      },
    ],
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      fileName: () => 'tov-ui.js',
      name: 'tovUI',
    },
  },
})
