<h1 align="center">@chenwei02/qy-element</h1>

<p align="center">
  基于 Vue 3 的组件库
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@chenwei02/qy-element">
    <img src="https://img.shields.io/npm/v/@chenwei02/qy-element?color=orange&label=" alt="version" />
  </a>
</p>
<br />


## 安装

```bash
# npm
npm install @chenwei02/qy-element

# pnpm
pnpm add @chenwei02/qy-element

# yarn
yarn add @chenwei02/qy-element
```

## 基础用法

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

## 快速开始

对于想要使用 QyElement 开发网站的开发人员，您请阅读 [快速开始](https://chenwei0922.github.io/qy-element/guide/quickstart.html)


## 贡献者

感谢所有参与者 !

<a href="https://github.com/chenwei0922/qy-element/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=chenwei0922/qy-element" />
</a>

## 许可证

MIT 许可协议
