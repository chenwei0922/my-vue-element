import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import mdContainer from 'markdown-it-container'
import { docRoot } from '@chenwei02/build-utils'
import { getHighlighter } from 'shiki'
// 同步定义shiki的codeToHtml
let codeToHtml: any = null
;(async () => {
	const res = await getHighlighter({
		theme: 'material-theme-palenight'
	})
	codeToHtml = res.codeToHtml
})()

export default defineConfig({
	title: '网站标题',
	description: '网站描述',
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
						if (!source) new Error(`Incorrect source file: ${sourceFile}`)

						const codeStr = source
						const htmlStr = codeToHtml(source, { lang: 'vue' })
						const descStr = description

						return `<demo src="${filePath}" desc="${descStr}" codeStr="${encodeURIComponent(
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
		siteTitle: '@chenwei02/qy-element',
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
						{ text: 'Breadcrumb', link: '/components/breadcrumb' },
						{ text: 'Input', link: '/components/input' },
						{ text: 'Icon', link: '/components/icon' }
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
				link: 'https://github.com/chenwei0922/qy-element.git'
			}
		]
	}
})
