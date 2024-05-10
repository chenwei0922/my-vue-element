---
title: React Icon
lang: en-US
layout: doc
---

# {{ $frontmatter.title }}
::: info 摘要说明

本文主要展示 [`@chenwei02/react-icon`](https://github.com/chenwei0922/chen-svg-icon/tree/main/packages/react) 库在`react`的应用。

:::

## [`@chenwei02/react-icon`](https://github.com/chenwei0922/chen-svg-icon/tree/main/packages/react)

### 1. 图标集合

::: demo

icon-example/vue-icon

:::

### 2. Install
`npm install @chenwei02/react-icon` 或 `yarn add @chenwei02/react-icon`

### 3. Quick Start
```ts
import { Message, Eye, Logo } from '@chenwei02/react-icon'
const IconDemo = () => {
  return (
    <div>
    <Eye size={30} color={'red'} />
    </div>
  )
}
```

### 4. Svg Attributes
name      | type   | default
--------- | ------ | ---------
size      | number | undefined
width     | number | undefined
height    | number | undefined
className | string | undefined
color     | string | undefined
fill      | string | undefined
stroke    | string | undefined


## 评论交流区
<giscus />
