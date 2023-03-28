import { createApp } from 'vue'
import App from './app.vue'
import './main.css'

// 测试挂载全局组件库
import chenwei02 from '@chenwei02/components'

const app = createApp(App)
app.use(chenwei02)

app.mount('#app')
