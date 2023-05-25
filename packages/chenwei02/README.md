# `@chenwei02/qy-element`

## 安装

### 包管理器

```bash
# npm
npm install @chenwei02/qy-element

# pnpm
pnpm add @chenwei02/qy-element

# yarn
yarn add @chenwei02/qy-element
```

## 快速开始

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

```vue
//App.vue
<template>
  <qy-button type="primary">按钮文本</qy-button>
</template>
```
