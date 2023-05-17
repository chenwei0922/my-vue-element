---
title: Input
---

# Input 输入框

## 基础用法

::: demo vue

input/basic

:::

## 禁用状态

> 通过 `disabled` 属性指定是否禁用 `input` 组件

::: demo

input/disabled

:::

## 一键清空

> 通过 `clearable` 属性可以得到一个带有清空图标的输入框

::: demo

input/clearable

:::

## 密码输入框

> 通过 `show-password` 属性可以得到一个可切换显示隐藏的密码框

::: demo

input/password

:::

## 固定行数的输入框

> 通过指定`type="textarea"`可得到可以输入多行内容的文本框。高度通过`rows`控制

::: demo

input/textarea

:::

## 自适应高度的输入框
> 通过指定`type="textarea"` 和 `autosize` 可得到一个自适应高度的文本框

::: demo

input/textarea-autosize

:::

## 输入长度限制

> 通过 `maxlength` 限制输入的最大长度，`minlength` 限制输入的最小长度。`show-word-limit` 显示剩余字符数。

::: demo

input/length

:::

## 带图标的输入框

> 要在输入框中添加图标，可以给 `prefix-icon` 和 `suffix-icon` 属性设置一个图标名称。或者是使用 `prefixIcon` 和 `suffixIcon` 命名的插槽。

::: demo

input/icon

:::
<!-- ::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
::: -->

## API
### Attributes

<script setup>
  const typeEnums = ['text', 'textarea'].join(" | ")
</script>

属性名           | 说明 | 类型 | 默认值
--------------- | --- | --- | ---
model-value     | 绑定值                                          | `string` / `number` / `object` | ''
type            | 类型(原生`input`类型)                            | `string` <qy-element-enum>{{typeEnums}}</qy-element-enum>  | text
placeholder     | 占位文本                                        | `string`             | null
disabled        | 是否禁用                                        | `boolean`            | false
show-password   | 是否显示查看密码图标                              | `boolean`            | false
clearable       | 是否显示清除按钮                                  | `boolean`            | false
suffix-icon     | 输入框后缀图标名称                                | `string`             | null
prefix-icon     | 输入框前缀图标名称                                | `string`             | null
readonly        | 是否只读                                        | `boolean`             | false
show-word-limit | 是否显示统计字数(仅`type`为`text`或`textarea`)     | `boolean`            | false
maxlength       | 最大输入长度                                     | `string` / `number`   | null
minlength       | 最小输入长度                                     | `string` / `number`   | null
validate-event  | 是否触发表单验证                                  | `boolean`             | true
autosize        | `textarea`高度是否自适应，仅`type`为`textarea`生效 | `boolean`              | false
rows            | 输入框行数，仅`type`为`textarea`生效               | `string` / `number`   | null

### Events

事件名  | 说明                 | 类型
------ | ------------------  | --- 
blur   | 失焦时触发            | `function` <qy-element-enum>(event: FocusEvent) => void</qy-element-enum>
focus  | 聚焦时触发            | `function` <qy-element-enum>(event: FocusEvent) => void</qy-element-enum>
change | modelValue 改变时触发 | `function` <qy-element-enum>(value: string \| number) => void</qy-element-enum>
input  | input 值改变时触发    | `function` <qy-element-enum>(value: string \| number) => void</qy-element-enum>
clear  | 点击清空按钮时触发     | `function` <qy-element-enum>() => void</qy-element-enum>

### Slots

插槽名      | 说明
---------- | ---
prefixIcon | 自定义前缀图标
suffixIcon | 自定义后缀图标
