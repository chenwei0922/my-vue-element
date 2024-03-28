---
layout: doc
---

# Button 按钮

## 基础用法
> 使用 `type` 来定义按钮的样式
<script setup>
//表格用
const buttonTypeStr = ['default', 'primary', 'blue', 'gray', 'weak', 'icon', 'success', 'info', 'warn', 'danger'].join(" | ")
const buttonSizeStr = ['default', 'small', 'large'].join(" | ")

const test = () => {
  alert('点了first page 路由')
}
</script>
<qy-element-wrap>
  <qy-button type='default'>default</qy-button>
  <qy-button type='primary'>primary</qy-button>
  <qy-button type='weak'>weak</qy-button>
  <qy-button type='success'>success</qy-button>
  <qy-button type='info'>info</qy-button>
  <qy-button type='warn'>warn</qy-button>
  <qy-button type='danger'>danger</qy-button>
  <qy-button type='blue'>blue</qy-button>
  <qy-button type='gray'>gray</qy-button>
  <qy-button type='icon'>icon</qy-button>
</qy-element-wrap>

::: details 查看源码
```vue
<template>
  <qy-button type='default'>default</qy-button>
  <qy-button type='primary'>primary</qy-button>
  <qy-button type='weak'>weak</qy-button>
  <qy-button type='success'>success</qy-button>
  <qy-button type='info'>info</qy-button>
  <qy-button type='warn'>warn</qy-button>
  <qy-button type='danger'>danger</qy-button>
  <qy-button type='blue'>blue</qy-button>
  <qy-button type='gray'>gray</qy-button>
  <qy-button type='icon'>icon</qy-button>
</template>
```
:::

## 禁用状态
> 使用`disabled` 控制按钮是否禁用
<qy-element-wrap>
  <qy-button type='default' disabled>default</qy-button>
  <qy-button type='primary' disabled>primary</qy-button>
  <qy-button type='weak' disabled>weak</qy-button>
  <qy-button type='success' disabled>success</qy-button>
  <qy-button type='info' disabled>info</qy-button>
  <qy-button type='warn' disabled>warn</qy-button>
  <qy-button type='danger' disabled>danger</qy-button>
  <qy-button type='blue' disabled>blue</qy-button>
  <qy-button type='gray' disabled>gray</qy-button>
  <qy-button type='icon' disabled>icon</qy-button>
</qy-element-wrap>

::: details 查看源码
```vue
<template>
  <qy-button type='default' disabled>default</qy-button>
  <qy-button type='primary' disabled>primary</qy-button>
  <qy-button type='weak' disabled>weak</qy-button>
  <qy-button type='success' disabled>success</qy-button>
  <qy-button type='info' disabled>info</qy-button>
  <qy-button type='warn' disabled>warn</qy-button>
  <qy-button type='danger' disabled>danger</qy-button>
  <qy-button type='blue' disabled>blue</qy-button>
  <qy-button type='gray' disabled>gray</qy-button>
  <qy-button type='icon' disabled>icon</qy-button>
</template>
```
:::

## 文字按钮
> 没有边框和背景色的按钮。使用`text` 控制文字按钮
<qy-element-wrap>
  <qy-button type='default' text>default</qy-button>
  <qy-button type='primary' text>primary</qy-button>
  <qy-button type='weak'  text>weak</qy-button>
  <qy-button type='success'  text>success</qy-button>
  <qy-button type='info'  text>info</qy-button>
  <qy-button type='warn' text>warn</qy-button>
  <qy-button type='danger' text>danger</qy-button>
  <qy-button type='blue' text>blue</qy-button>
  <qy-button type='gray' text>gray</qy-button>
  <qy-button type='icon' text>icon</qy-button>
</qy-element-wrap>

::: details 查看源码
```vue
<template>
  <qy-button type='default' text>default</qy-button>
  <qy-button type='primary' text>primary</qy-button>
  <qy-button type='weak'  text>weak</qy-button>
  <qy-button type='success'  text>success</qy-button>
  <qy-button type='info'  text>info</qy-button>
  <qy-button type='warn' text>warn</qy-button>
  <qy-button type='danger' text>danger</qy-button>
  <qy-button type='blue' text>blue</qy-button>
  <qy-button type='gray' text>gray</qy-button>
  <qy-button type='icon' text>icon</qy-button>
</template>
```
:::


## Button API

### Button Attributes

属性名| 说明 | 类型 | 默认值 
---|---|---|---
type | 类型 | `enum` <qy-element-enum>{{buttonTypeStr}}</qy-element-enum> | default
size | 大小 | `enum` <qy-element-enum>{{buttonSizeStr}}</qy-element-enum> | default 
text | 是否文字按钮 | `boolean` | false
dialog | 是否对话框按钮 | `boolean` | false
disabled | 是否禁用状态 | `boolean` | false


### Button Slots

插槽名 | 说明  
---|---
default | 自定义默认内容 
