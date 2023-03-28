import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  build: {
    // 打包后文件目录
    outDir: 'es',
    // 压缩
    minify: false,
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
          exports: 'named',
          // 配置打包根目录
          dir: '../chenwei02/es'
        },
        {
          // 打包格式
          format: 'cjs',
          // 打包后文件名
          entryFileNames: '[name].js',
          // 让打包目录和我们的目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: '../chenwei02/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'chenwei02'
      // fileName: 'chenwei02',
      // formats: ['es', 'umd', 'cjs']
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['../chenwei02/es/src', '../chenwei02/lib/src'],
      // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(),
    // 由于打包将scss文件变成了css文件，所以需要将代码中的.scss换成.css
    {
      name: 'style',
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)
        for (const key of keys) {
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
