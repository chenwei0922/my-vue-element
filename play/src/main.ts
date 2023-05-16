import { createApp } from 'vue'
import App from './app.vue'
import './main.css'

// 测试挂载全局组件库
// @ts-ignore
// import chenwei02 from '@chenwei02/components'
// import '@chenwei02/components/theme/index.css'

import chenwei02 from '@chenwei02/qy-element'
import '@chenwei02/qy-element/theme/index.css'

// import { QyIcon } from '@chenwei02/qy-element/es'

const app = createApp(App)
app.use(chenwei02)
// app.use(QyIcon)

app.mount('#app')
