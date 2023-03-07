import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd())
    console.log(mode, '=', env)
    console.log('command=', command)

    return {
        lintOnSave: true,
        plugins: [
            vue()
        ]
    }
})
