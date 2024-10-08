import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: 'tov-ui',
  description: 'this is a vue component library',
  // eslint-disable-next-line node/prefer-global/process
  base: process.env.NODE_ENV === 'production' ? '/tov-learn/' : '/',
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
        { text: 'tootlTip', link: '/components/tooltip/' },
      ],
      '/utils/': [
        { text: '类名生成器', link: '/utils/gen-class' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/a1345057558/tov-learn' },
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
