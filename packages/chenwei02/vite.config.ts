import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

// import { version } from './package.json'
// const banner = `/*! qy-element v${version} */\n`

export default defineConfig({
  // base: './',
  build: {
    // 打包后文件目录
    outDir: './dist',
    // 压缩
    minify: false,
    target: 'es2015',
    rollupOptions: {
      // 忽略打包vue文件和.scss文件
      external: ['vue', '@vue/shared', /\.scss/],
      input: ['../chenwei02/index.ts'],
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: '[name].mjs',
          // 让打包目录和我们的目录对应
          preserveModules: true,
          preserveModulesRoot: './',
          exports: undefined,
          // 配置打包根目录
          dir: './dist/es',
          sourcemap: true
        },
        {
          // 打包格式
          format: 'cjs',
          // 打包后文件名
          entryFileNames: '[name].js',
          // 让打包目录和我们的目录对应
          preserveModules: true,
          preserveModulesRoot: './',
          exports: 'named',
          // 配置打包根目录
          dir: './dist/lib',
          sourcemap: true
        }
        /* ,
        {
          // 打包格式
          format: 'umd',
          // file: './dist/dist/index.full.js',
          entryFileNames: '[name].min.js',
          // 配置打包根目录
          dir: './dist/dist',
          exports: 'named',
          name: 'QyElement',
          globals: {
            vue: 'Vue'
          },
          banner,
          sourcemap: true
        },
        {
          // 打包格式
          format: 'esm',
          entryFileNames: '[name].min.mjs',
          // 配置打包根目录
          dir: './dist/dist',
          banner,
          sourcemap: true
        }
        */
      ]
    },
    lib: {
      entry: 'index.ts',
      name: 'MyLib',
      fileName: 'my-lib'
      // formats: ['es', 'umd', 'cjs']
    }
  },
  plugins: [
    vue(),
    dts({
      // dts的工作根目录，这里指明为packages/
      root: '../',
      entryRoot: './',
      outputDir: ['./chenwei02/dist/es', './chenwei02/dist/lib'],
      // 排除dts操作的目录
      exclude: ['icons'],
      // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../tsconfig.json',
      beforeWriteFile(filePath, content) {
        // console.log('file=', filePath, content.includes('@chenwei02/'))

        let isEdit = false
        if (content.includes('@chenwei02/')) {
          // 更改文件内容
          if (/\/lib\//g.test(filePath)) {
            content = content.replace(/@chenwei02\//g, '@chenwei02/qy-element/lib/')
          } else if (/\/es\//g.test(filePath)) {
            content = content.replace(/@chenwei02\//g, '@chenwei02/qy-element/es/')
          }
          isEdit = true
        }
        if (filePath.includes('/dist/es/chenwei02')) {
          // 转移chenwei02中的文件列表
          const newPath = filePath.replace('/dist/es/chenwei02', '/dist/es')
          filePath = newPath
          isEdit = true
        }
        if (isEdit) {
          return { filePath, content }
        }
      }
    }),
    DefineOptions(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), '../icons/svg')],
      symbolId: 'qy-icon-[dir]-[name]'
    }),

    // 由于打包将scss文件变成了css文件，所以需要将代码中的.scss换成.css
    {
      name: 'style',
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)
        for (const key of keys) {
          // console.log('key=', key)
          if (key.endsWith('.map')) continue
          const bundler: any = bundle[key as any]
          // rollup内置方法，将所有输出文件code中的.scss换成.css，因为我们当时没有打包scss文件
          this.emitFile({
            type: 'asset',
            // 文件名不变
            fileName: key,
            source: bundler.code.replace(/\.scss/g, '.css')
          })
        }
      }
    }
  ]
})
