import * as components from './src/index'
import { App } from 'vue'

export * from './src/index'

export default {
  install: (app: App) => {
    console.log('222', components)
    for (const c in components) {
      app.use(components[c])
    }
  }
}
