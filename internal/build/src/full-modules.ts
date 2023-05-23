import { version } from '../../../packages/chenwei02/package.json'
import VueMacros from 'unplugin-vue-macros/rollup'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import { rollup } from 'rollup'
import type { Plugin } from 'rollup'

import path from 'path'
import { qyRoot } from '@chenwei02/build-utils'
import { withTaskName } from './utils'
import { parallel } from 'gulp'

const banner = `/*! qy-element v${version} */\n`

export const buildFullModule = async (minify: boolean) => {
  const plugins: Plugin[] = [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue({
          isProduction: true
        }),
        vueJsx: vueJsx()
      }
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts']
    }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: minify,
      target: 'es2018',
      loaders: {
        '.vue': 'ts'
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      treeShaking: true,
      legalComments: 'eof'
    })
  ]
  if (minify) {
    plugins.push(
      minifyPlugin({
        target: 'es2018',
        sourceMap: true
      })
    )
  }

  const bundle = await rollup({
    input: path.resolve(qyRoot, 'index.ts'),
    plugins,
    external: ['vue'],
    treeshake: true
  })

  bundle.write({
    format: 'umd',
    file: path.resolve(qyRoot, 'dist/dist', `index.full.${minify ? 'min.' : ''}js`),
    exports: 'named',
    name: 'QyElement',
    globals: {
      vue: 'Vue'
    },
    sourcemap: minify,
    banner
  })
  bundle.write({
    format: 'esm',
    file: path.resolve(qyRoot, 'dist/dist', `index.full.${minify ? 'min.' : ''}mjs`),
    sourcemap: minify,
    banner
  })
}

export const buildFullBundle = parallel(
  withTaskName('buildFullMinify', async () => {
    buildFullModule(true)
  }),
  withTaskName('buildFull', async () => {
    buildFullModule(false)
  })
)
