import { loadEnv } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(mode, '=', env)
  console.log('command=', command)
  console.log('filename=', __filename)

  return {
    lintOnSave: true,
    plugins: [vue(), DefineOptions()]
  }
})
