---
title: Radio
---

# Radio 单选框

## 基础用法

> 要使用`qy-radio`组件只需要设置`v-model`，选中值为该`radio`组件的`label`属性。

::: demo

radio/basic

:::

## 单选框组

> 使用`qy-radio-group`和`qy-radio`即可实现单选框组功能。只需给`qy-radio-group`组件绑定`v-model`,再为`qy-radio`绑定`label`属性即可。

::: demo

radio/group

:::

## 单选框按钮样式

> 使用`qy-radio-group`和`qy-radio`即可实现单选框组功能。只需给`qy-radio-group`组件绑定`v-model`,再为`qy-radio`绑定`label`属性即可。

::: demo

radio/button

:::


## Radio API
### Radio Attributes

属性名     | 说明 | 类型 | 默认值
----------| ------------ | ---- | ---
v-model   |  选中项绑定值  | `string`/`number`/`boolean` | ''
label     |  单选框的值    | `string`/`number`/`boolean` | ''
disabled  |  是否禁用      | `boolean` | -

### Radio Events
事件名  | 说明             | 类型
------ | --------------- | ---
change | 绑定值更改触发事件 | `function` <qy-element-enum>(value: string \| number \| boolean) => void</qy-element-enum>

### Radio Slots
插槽名   | 说明
------- | --- 
default | 自定义默认内容

## RadioGroup API
### RadioGroup Attributes

属性名     | 说明 | 类型 | 默认值
----------| ------------ | ---- | ---
v-model   |  绑定值  | `string`/`number`/`boolean` | ''
disabled  |  是否禁用      | `boolean` | false
validate-event | 是否触发表单验证 | `boolean` | true

### RadioGroup Events
事件名  | 说明             | 类型
------ | --------------- | ---
change | 绑定值更改时触发事件 | `function` <qy-element-enum>(value: string \| number \| boolean) => void</qy-element-enum>

### RadioGroup Slots
插槽名   | 说明         | 子标签
------- | -----------  | ---
default | 自定义默认内容 | Radio / RadioButton

## RadioButton API
### RadioButton Attributes

属性名     | 说明 | 类型 | 默认值
----------| ------------ | ---- | ---
label     |  单选框的值    | `string`/`number`/`boolean` | ''
disabled  |  是否禁用      | `boolean` | -

### RadioButton Events
事件名  | 说明             | 类型
------ | --------------- | ---
change | 绑定值更改触发事件 | `function` <qy-element-enum>(value: string \| number \| boolean) => void</qy-element-enum>

### RadioButton Slots
插槽名   | 说明
------- | --- 
default | 自定义默认内容