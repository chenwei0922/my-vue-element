---
layout: doc
---

# Canvas
[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## 准备工作
创建`canvas`元素，获取画笔对象`context`，调用`api`绘制图形

```js
const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 400
document.body.appendChild(canvas)

const context = canvas.getContext('2d')
```

## 基础
> - `beginPath()` `closePath()` 打断不相关的图形之间的联系

## 画线
> - `moveTo(x,y)` 起点坐标
> - `lineTo(x,y)` 终点坐标或转折点坐标
> - `strokeStyle` 设置线条颜色
> - `lineWidth`   设置线条宽度

::: demo

notes/canvas/base

:::

## 画方形
> - `fillRect(x,y,w,h)` 画方形
> - `createRadialGradient(x0,y0,r0,x1,y1,r1)` 镜像渐变
> - `createConicGradient(startAngle,x,y)` 锥形渐变
> - `createLinearGradient(x0,y0,x1,y1)` 线性渐变

::: demo

notes/canvas/rect

:::

## 画标准圆/圆弧/椭圆
> - `fillStyle` 填充色
> - `fill()` 填充图形
> - `arc(x,y,r,startAngle,endAngle,counterclockwise)` 画圆
> - `ellipse(x,y,xR,yR,rotateAngle,startAngle,endAngle,counterclockwise)` 椭圆

::: demo

notes/canvas/circle

:::

## 画笑脸

::: demo

notes/canvas/smile

:::

## 五子棋

::: demo

notes/canvas/gomoku

:::


