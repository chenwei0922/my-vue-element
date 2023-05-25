# 快速开始

## 用法
```js
//main.js
import {createApp} from 'vue'
import QyElement from '@chenwei02/qy-element'
import '@chenwei02/qy-element/dist/index.css'

import App from './App.vue'
const app = createApp(App)
app.use(QyElement)
app.mount("#app")
```