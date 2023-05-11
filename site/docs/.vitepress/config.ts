import { defineConfig } from 'vitepress'
export default defineConfig({
  title: '网站标题',
  description: '网站描述',
  author: '陈十一',
  // 根目录
  base: '/qy-element/',
  dest: 'public',
  markdown: {
    // 显示代码行数
    lineNumbers: true
  },
  // 以git提交的时间为更新时间
  lastUpdated: true,

  themeConfig: {
    siteTitle: '@chenwei02/element',
    // 导航栏配置
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' }
    ],
    // 这边来配置
    sidebar: {
      '/guide': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        },
        { text: '进阶', items: [{ text: 'xx', link: '/xx' }] }
      ],
      '/components': [
        {
          text: '基础组件',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Breadcrumb', link: '/components/breadcrumb' }
          ]
        }
      ]
    },
    /*
    author: '陈十一',
    lastUpdatedText: '上次更新时间',
    // 导航栏左侧头像
    logo: "",
    docFooter: {
        //上下篇文本
        prev: "上一篇",
        next: "下一篇"
    },
    */
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/chenwei0922/my-vue-element.git'
      }
    ]
  }
})
