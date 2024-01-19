---
layout: doc
---

# ESBuild
[ESBuild API](https://esbuild.github.io/)


## BuildOption 打包配置项说明

- `entryPoints` => 指定入口文件的路径数组，即打包的起点
- `entryNames` => 指定生成的输出文件的名称,`[name]`为入口文件名称
- `outdir` => 指定输出文件的目录路径
- `bundle` => 是否将所有模块打包到一个文件中
- `target` => 打包后的代码要支持的目标环境
- `platform` => 打包的平台，`neutral`表示通用平台，`browser`为浏览器平台，`node`为`nodejs`平台 
- `format` => 指定输出的模块格式，`esm`为`ES`模块，`cjs`为`commonjs`模块,`iife`为浏览器模块
- `minify` => 指定是否要对输出进行代码压缩
- `minifySyntax` => 指定是否对输出进行语法压缩
- `banner` => 指定在输出文件的顶部添加的文本
- `plugins` => 指定要使用的插件
- `external` => 指定要排除的外部依赖项, `['vue']`表示将`Vue`作为外部依赖项，不进行打包
- `outExtension` => 显示指定输出文件扩展名，默认情况跟`format`跟`target`自动推断扩展名

## 配置示例

```ts
import { BuildOptions, Format, build } from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
const vue = require('esbuild-plugin-vue3')

async function buildBundle(minify: boolean) {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      //入口文件的路径数组，即打包的起点
      entryPoints: [path.resolve(pathSrc, 'index.ts')],
      //生成的输出文件的名称,[name]为入口文件名称
      entryNames: `[name]${minify ? '.min' : ''}`,
      //输出文件的目录路径
      outdir: pathOutput,
      //是否将所有模块打包到一个文件中
      bundle: true,
      //打包后的代码要支持的目标环境
      target: 'es2018',
      //打包的平台，neutral表示通用平台，browser为浏览器平台，node为nodejs平台
      platform: 'neutral',
      //指定输出的模块格式，esm为ES模块，cjs为commonjs模块,iife为浏览器模块
      format: 'esm',
      //指定是否要对输出进行代码压缩
      // minify: true,
      //指定是否对输出进行语法压缩
      minifySyntax: true,
      //指定在输出文件的顶部添加的文本
      banner: { js: `/*! the package version: ${version}  */\n` },
      //指定要使用的插件
      plugins: [vue()]
      //指定要排除的外部依赖项, ['vue']表示将Vue作为外部依赖项，不进行打包
      // external: ['vue']
      //显示指定输出文件扩展名，默认情况跟format跟target自动推断扩展名
      // outExtension: { '.js': '.mjs' }
    }
    if (format === 'iife') {
      options.plugins!.push(GlobalsPlugin({ vue: 'Vue' }))
    } else {
      options.external = ['vue']
    }
    return options
  }

  await Promise.all([
    //esm格式
    build({
      ...getBuildOptions('esm'),
      minify
    }),
    //cjs格式
    build({ ...getBuildOptions('cjs'), minify, outExtension: { '.js': '.cjs' } }),
    //iife格式
    build({ ...getBuildOptions('iife'), entryNames: `[name].iife${minify ? '.min' : ''}`, minify })
  ])
}

```