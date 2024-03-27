---
layout: doc
---

# [正则表达式](https://www.runoob.com/jsref/jsref-obj-regexp.html)

## 示例使用

### 匹配两个字符之间的内容
```js
//比如字符串为 `[pre]法法撒旦发[/pre]`
//`(?<=\[pre\]).*?(?=\[/pre\])` 这个结果就是`法法撒旦发`

c = "[pre]123[/pre]456[pre]789[/pre][pre][/pre]"
c.match(/(?<=\[pre\]).*?(?=\[\/pre\])/g)
//['123', '789', '']
```

### 大小字母、数字、特殊字符, 至少8位
```js
const reg = new RegExp('^(?![A-Za-z0-9]+$)(?![a-z0-9\\W]+$)(?![A-Za-z\\W]+$)(?![A-Z0-9\\W]+$)[a-zA-Z0-9\\W]{8,20}$')
```

## 符号介绍
### `()` 捕获分组
> `()`会把每个分组匹配的值保存起来。
```js
const reg = new RegExp(/([0-9]*)([a-z]*)([0-9]*)/i)
const str = '123abc456ww'
const result = str.match(reg)
//result: [
  '123abc456',
  '123',
  'abc',
  '456',
  index: 0,
  input: '123abc456ww',
  groups: undefined
]
```

### `(?:)` 非捕获分组
```
const reg = new RegExp(/(?:[0-9]*)([a-z]*)([0-9]*)/i)
const str = '123abc456ww'
const result = str.match(reg)
//result: [
  '123abc456',
  'abc',
  '456',
  index: 0,
  input: '123abc456ww',
  groups: undefined
]
```
### `(?=pattern)` 正向肯定预查
> 捕获以pattern结尾的内容。非获取匹配。

```js
const reg = new RegExp(/windows(?=95|98)/i)
const str = 'windows95'
const result = str.match(reg)
// result: [ 'windows', index: 0, input: 'windows95', groups: undefined ]
```

### `(?!pattern)` 正向否定预查
> 捕获不以pattern结尾的内容，非获取匹配。

### `(?<=pattern)` 反向肯定预查
> 反向肯定预查，与正向肯定预查类似，只是方向相反。以(?<=pattern)xxx为例，就是捕获以pattern开头的内容xxx。

### `(a|b)` 查找任何指定的选项
### `[]` 查找方括号之间的任何字符
### `[^]` 查找任何不在方括号之间的字符
### `.` 查找单个字符，除换行和行结束符
### `\w` 数字、字母以及下划线
### `\W` 查找非单词字符
### `\d` 数字
### `\D` 非数字字符
### `\s` 空白字符
### `\S` 非空白字符
### `+` 量词，至少一个
### `*` 量词，零个或多个
### `?` 量词，零个或一个
### `$` 量词，结尾
### `^` 量词，开头
