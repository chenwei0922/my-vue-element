---
layout: doc
---

# Gulp
[Gulp API](https://www.gulpjs.com.cn/)
> 前端开发流程规范管理。gulp不支持es6跟ts语法，可借助`sucrase` 实现。`npm install sucrase -D`

## 安装
`npm install -D gulp`

## gulp-cli 脚手架
> gulp命令行工具
`npm install gulp-cli -g`

## 核心api
 - `task`: 创建一个任务
 - `series`: 顺序执行多个任务
 - `prallel`: 并行执行多个任务
 - `src` 读取数据源转换成stream
 - `pipe` 管道-可以在中间对数据流进行处理
 - `dest` 输出数据流到目标路径
 - `on` 事件监听
 - `watch` 数据源监听

## 运行命令
> `gulp`, 默认执行`gulpfile.js`中的`exports.default`任务。`gulp -f <file_path>` 执行指定文件

## 简单示例
```js
// gulpfile.js
// 注意: 每个gulp任务都是一个异步的js函数.
//方式1：创建一个task，此函数接收callback
const defaultTask = (cb) => {
    console.log('task cb')
    cb()
}

//方式2：创建一个task，返回一个Promise对象
const defaultTask2 = () => {
    console.log('task promise')
    return Promise.resolve()
}

const {series, parallel, src, dest} = require('gulp')
const task1 = () => {
    console.log('task1')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    })
}
const task2 = () => {
    console.log('task2')
    return Promise.resolve()
}

const copy = () => {
    return src("src/*").pipe(dest("dist/"))
}

// exports.default = defaultTask
// exports.default = series(task1, task2)
// exports.default = parallel(task1, task2)
exports.default = copy

```