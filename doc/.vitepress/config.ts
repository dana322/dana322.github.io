import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "Dana' Blog",
  description: "技术分享 & 生活记录",
  lastUpdated: true,
  appearance: true,
  head: [["link", { rel: "icon", href: "/favicon.ico", type: 'image/png'  }]], 
  themeConfig: {
    nav,
    sidebar,
    logo: '/blackcat.png',
    outline: [2, 3],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdatedText: '最后更新',
    editLink: {
      pattern: 'https://github.com/dana322.github.io/edit/main/doc/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dana322' },
      { icon: 'twitter', link: 'https://twitter.com/sbzddanan_yu'}
      // TODO: juejin, csdn
      // { icon: '', link}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Dana, All Rights Reserved.`
    }
  },

})
