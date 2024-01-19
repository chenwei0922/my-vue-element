---
layout: doc
---

# Svg
[Svg API](https://www.runoob.com/svg/svg-tutorial.html)


## Svg 属性说明
- `x` 左上角在 `x` 轴的偏移量
- `y` 左上角在 `y` 轴的偏移量
- `width` 图形的宽
- `height` 图形的高
- `rx` 图形切圆角，x 轴上圆角
- `rx` 图形切圆角，y 轴上圆角
- `r` 半径
- `cx` 中心点，x 轴坐标
- `cy` 中心点，y 轴坐标
- `x1` 起点，x 轴坐标
- `y1` 起点, y 轴坐标
- `x2` 终点, x 轴坐标
- `y2` 终点，y 轴坐标
- `points` 坐标点集合, 数字之间用`逗号`或`空格`分隔开，每个坐标点包含`2`个数字
- `d` 点集数列。命令+参数形式，大写字母命令表示绝对定位，小写字母命令表示相对定位（相对于上一个点）。
- `M` 移动到某个点(可理解为设置起始点)，示例：`M x y` 表示移动到坐标点`(x,y)`


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
> - `createPattern(image,repeaction)` 重复元图像

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

## 贝塞尔曲线
> - `quadraticCurveTo(cpx,cpy,x,y)` 二阶贝塞尔曲线
> - `bezierCurveTo(cpx0,cpy0,cpx1,cpy1,x,y)` 三阶贝塞尔曲线

::: demo

notes/canvas/curve

:::



