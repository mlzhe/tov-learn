import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'tov-ui',
  description: 'this is a vue component library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 顶部navbar
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },

    ],

    // 侧边栏
    sidebar: {
      '/components/': [
        { text: 'button', link: '/components/button/' },
        { text: 'input', link: '/components/input/' },
      ],
      '/utils/': [
        { text: '类名生成器', link: '/utils/gen-class' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },

  // 映射重写
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/:comp/(.*)': 'components/:comp/(.*)', // 动态包映射
    'packages/tov-ui/src/(.*)': 'components/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
  },
})
