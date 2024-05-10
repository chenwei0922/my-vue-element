---
title: Vue Icon
lang: en-US
layout: doc
---

# {{ $frontmatter.title }}
::: info 摘要说明

本文主要展示 [`@chenwei02/vue-icon`](https://github.com/chenwei0922/chen-svg-icon/tree/main/packages/vue) 库在`vue`的应用。

:::

## [`@chenwei02/vue-icon`](https://github.com/chenwei0922/chen-svg-icon/tree/main/packages/vue)

### 1. 图标集合

::: demo

icon-example/vue-icon

:::

### 2. Install
`npm install @chenwei02/vue-icon` 或 `yarn add @chenwei02/vue-icon`

### 3. Quick Start
```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Eye } from '@chenwei02/vue-icon'
</script>
<template>
  <main class="min-h-screen bg-white/20 p-10 flex flex-col">
    <Eye color="red" :size="30" />
  </main>
</template>
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
