# 快速开始

## 模块用法

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

## 浏览器用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@chenwei02/qy-element/dist/index.css" />
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
  <script src="https://cdn.jsdelivr.net/npm/@chenwei02/qy-element"></script>
</head>
<body>
  <div id="app">
    <h1>hello world</h1>
    <qy-button type="primary">这是一个按钮</qy-button>
  </div>
  <script>
    const app = Vue.createApp({
      setup(props, context){

      }
    })
    app.use(QyElement)
    app.mount("#app")
  </script>
</body>
</html>
```
