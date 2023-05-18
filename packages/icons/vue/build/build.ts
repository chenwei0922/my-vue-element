import type { BuildOptions, Format } from 'esbuild'
import path from 'node:path'
// import vue from 'unplugin-vue/esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import { build } from 'esbuild'
import { version } from '../package.json'

const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: [path.resolve('../src', 'index.ts')],
      target: 'es2018',
      platform: 'neutral',
      plugins: [
        // vue({
        //   isProduction: true,
        //   sourceMap: false
        // })
      ],
      bundle: true,
      format,
      minifySyntax: true,
      banner: {
        js: `/*! QyElement Icons Vue v${version} */\n`
      },
      outdir: path.resolve('../', 'dist')
    }
    if (format === 'iife') {
      options.plugins!.push(
        GlobalsPlugin({
          vue: 'Vue'
        })
      )
      options.globalName = 'QyElementIconsVue'
    } else {
      options.external = ['vue']
    }

    return options
  }
  const doBuild = async (minify: boolean) => {
    await Promise.all([
      build({
        ...getBuildOptions('esm'),
        entryNames: `[name]${minify ? '.min' : ''}`,
        minify
      }),
      build({
        ...getBuildOptions('iife'),
        entryNames: `[name].iife${minify ? '.min' : ''}`,
        minify
      }),
      build({
        ...getBuildOptions('cjs'),
        entryNames: `[name]${minify ? '.min' : ''}`,
        outExtension: { '.js': '.cjs' },
        minify
      })
    ])
  }
  return Promise.all([doBuild(true), doBuild(false)])
}

await buildBundle()
