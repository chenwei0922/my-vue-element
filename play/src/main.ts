import { createApp } from 'vue'
import App from './app.vue'
import './main.css'

// 测试挂载全局组件库
// @ts-ignore
// import chenwei02 from '@chenwei02/element'
// import '@chenwei02/element/lib/theme/index.css'

import chenwei02 from 'qy-element'
import 'qy-element/theme/index.css'

const app = createApp(App)
app.use(chenwei02)

app.mount('#app')
