---
title: Checkbox
---

# Checkbox 多选框

## 基础用法

> 单独使用`qy-checkbox`时，`label`属性为多选框按钮的描述。`v-model`可以绑定布尔值，选中`true`。

::: demo

vue-example/checkbox/basic

:::

## 多选框组

> 使用`qy-checkbox-group`和`qy-checkbox`即可实现多选框组功能。只需给`qy-checkbox-group`组件绑定数组类型的`v-model`,再为`qy-checkbox`绑定`label`属性即可，如果标签`qy-checkbox`组件之间没有内容，则`label`为其描述。

::: demo

vue-example/checkbox/group

:::


## Checkbox API
### Checkbox Attributes

属性名     | 说明 | 类型 | 默认值
----------| ------------ | ---- | ---
v-model   |  选中项绑定值  | `string`/`number`/`boolean` | ''
label     |  选中状态的值    | `string`/`number`/`boolean` | ''
disabled  |  是否禁用      | `boolean` | -
validate-event | 是否触发表单验证 | `boolean` | true


### Checkbox Events
事件名  | 说明             | 类型
------ | --------------- | ---
change | 绑定值更改触发事件 | `function` <qy-element-enum>(value: string \| number \| boolean) => void</qy-element-enum>

### Checkbox Slots
插槽名   | 说明
------- | --- 
default | 自定义默认内容

## CheckboxGroup API
### CheckboxGroup Attributes

属性名     | 说明 | 类型 | 默认值
----------| ------------ | ---- | ---
v-model   |  绑定值  | `array` | []
disabled  |  是否禁用      | `boolean` | false
validate-event | 是否触发表单验证 | `boolean` | true

### CheckboxGroup Events
事件名  | 说明             | 类型
------ | --------------- | ---
change | 绑定值更改时触发事件 | `function` <qy-element-enum>(value: string[] \| number[]) => void</qy-element-enum>

### CheckboxGroup Slots
插槽名   | 说明         | 子标签
------- | -----------  | ---
default | 自定义默认内容 | checkbox
