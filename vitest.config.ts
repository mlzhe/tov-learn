import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import alias from './alias'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
