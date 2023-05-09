import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  // base: './',
  build: {
    // 打包后文件目录
    // outDir: './dist',
    // 压缩
    minify: false,
    target: 'es2018',
    rollupOptions: {
      // 忽略打包vue文件和.scss文件
      external: ['vue', /\.scss/],
      input: ['index.ts'],
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
      ]
    },
    lib: {
      entry: 'index.ts',
      name: 'test'
      // fileName: 'chenwei02',
      // formats: ['es', 'umd', 'cjs']
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './',
      outputDir: ['./dist/lib', './dist/es'],
      // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json',
      beforeWriteFile(filePath, content) {
        // console.log("file=", filePath, content.includes("@chenwei02/"))
        // content = content.replace(/@chenwei02\//g, "qy-element/lib/")
        // return content
        // return { filePath, content }
        return false
      }
    }),
    DefineOptions(),

    // 由于打包将scss文件变成了css文件，所以需要将代码中的.scss换成.css
    {
      name: 'style',
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)
        for (const key of keys) {
          console.log('key=', key)
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
