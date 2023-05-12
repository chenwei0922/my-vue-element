

# Breadcrumb 面包屑

## 基础用法
> 在  `qy-breadcrumb` 中使用`qy-breadcrumb-item`表示每一个路径。`separator` 路径之间的分割符，默认为`/`

<script setup>
const test = () => {
  alert('点了first page 路由')
}
</script>
<qy-element-wrap>
  <qy-breadcrumb class="breadcrumb-view" separator="/">
    <qy-breadcrumb-item to="#" :custom-event="test">{{ "first page" }}</qy-breadcrumb-item>
    <qy-breadcrumb-item>{{ 'second page' }}</qy-breadcrumb-item>
  </qy-breadcrumb>
</qy-element-wrap>

::: details 查看源码
```vue
<script setup>
const test = () => {
  alert('点了first page 路由')
}
</script>
<template>
<qy-breadcrumb class="breadcrumb-view" separator="/">
  <qy-breadcrumb-item to="#" :custom-event="test">{{ "first page" }}</qy-breadcrumb-item>
  <qy-breadcrumb-item>{{ 'second page' }}</qy-breadcrumb-item>
</qy-breadcrumb>
</template>
```
:::

## Breadcrumb API

### Breadcrumb Attributes

属性名| 说明 | 类型 | 默认值
---|---|---|---
separator| 分割符 | string | /

### Breadcrumb Slots

插槽名 | 说明 | 子标签 
---|---|---
default | 自定义默认内容 | breadcrumb item 


## BreadcrumbItem API

### BreadcrumbItem Attributes

属性名| 说明 | 类型 | 默认值
---|---|---|---
to | 要跳转的目标，同vue-router的to属性 | string/object | ''
replace | 是否取代当前路由，即router.replace | boolean | false
custom-event| 自定义标签的点击事件| function | undefined

### BreadcrumbItem Slots

插槽名 | 说明 
---|---
default | 自定义默认内容
