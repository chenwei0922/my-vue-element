import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import mdContainer from 'markdown-it-container'
import { docRoot } from '@chenwei02/build-utils'
import { getHighlighter } from 'shiki'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const demoComponentsPath = path.resolve(__dirname, '../vitepress/vp-demo.vue')
console.log(demoComponentsPath)

// 同步定义shiki的codeToHtml
let codeToHtml: any = null
;(async () => {
  const res = await getHighlighter({
    theme: 'material-theme-palenight'
  })
  codeToHtml = res.codeToHtml
})()

export default defineConfig({
  title: '陈十一',
  description: '陈十一技术网站',
  author: '陈十一',
  // 根目录
  base: '/qy-element/',
  dest: 'public',
  markdown: {
    // 显示代码行数
    lineNumbers: true,
    config: md => {
      md.use(mdContainer, 'demo', {
        validate(params) {
          return params.trim().match(/^demo\s*(.*)$/)
        },
        render(tokens, idx) {
          // console.log('docPath=', tokens[1])
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
          if (tokens[idx].nesting === 1) {
            const description = m && m.length > 1 ? m[1] : ''
            const sourceFileToken = tokens[idx + 2]
            let source = ''
            let filePath = ''
            const sourceFile = sourceFileToken.children?.[0].content ?? ''
            if (sourceFileToken.type === 'inline') {
              filePath = path.resolve(docRoot, 'example', `${sourceFile}.vue`)
              source = fs.readFileSync(filePath, 'utf-8')
            }
            // console.log('sourceFileToken=', sourceFileToken)
            // console.log('filePath=', filePath)

            if (!source) new Error(`Incorrect source file: ${sourceFile}`)
            const lang = 'vue'
            const codeStr = source
            const htmlStr = codeToHtml(source, { lang })
            const descStr = description
            const lineTotal = source.trim().split('\n').length
            const codePath = `../example/${sourceFile}.vue`
            return `<demo lang="${lang}" lines="${lineTotal}" src="${codePath}" desc="${descStr}" codeStr="${encodeURIComponent(
              codeStr
            )}" htmlStr="${encodeURIComponent(htmlStr)}">`
          } else {
            return '</demo>\n'
          }
        }
      })
    }
  },
  // 以git提交的时间为更新时间
  lastUpdated: true,

  themeConfig: {
    siteTitle: '十一笔记',
    outline: {
      level: 'deep',
      label: '章节导航'
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',
    footer: {
      copyright: 'Copyright © 2022 陈十一 All Rights Reserved '
    },
    // 导航栏配置
    nav: [
      { text: '图表', link: 'https://chenwei0922.github.io/echart-example/' },
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' },
      {
        text: '笔记',
        items: [
          { text: 'Canvas 文档', link: '/notes/canvas/canvas' },
          { text: 'Svg 文档', link: '/notes/svg/basic' },
          { text: '工具文档集', link: '/notes/pack/git' }
        ]
      }
    ],
    // 这边来配置
    sidebar: {
      '/guide': [
        {
          text: '基础',
          items: [
            // { text: '测试', link: '/guide/test' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
        // { text: '进阶', items: [{ text: 'xx', link: '/xx' }] }
      ],
      '/components': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' }
          ]
        }
      ],
      '/notes/svg': [{ text: '基础', link: '/notes/svg/basic' }],
      '/notes/pack': [
        { text: 'git', link: '/notes/pack/git' },
        { text: 'pnpm', link: '/notes/pack/pnpm' },
        { text: 'gulp', link: '/notes/pack/gulp' },
        { text: 'rollup', link: '/notes/pack/rollup' },
        { text: 'esbuild', link: '/notes/pack/esbuild' },
        { text: 'regular', link: '/notes/pack/regular' }
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
        link: 'https://github.com/chenwei0922/qy-element.git'
      }
    ]
  }
})
