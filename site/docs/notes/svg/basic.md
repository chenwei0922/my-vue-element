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
  - `M` 移动到某个点(可理解为设置起始点)，示例：`M x y` 或 `m dx dy`， 表示移动到坐标点`(x,y)`
  - `L` 划线，示例`L x y` 或 `l dx dy`，表示从上一个点画线到当前坐标点
  - `H` 画水平线，示例 `H x` 或 `h dx`
  - `V` 画垂直线，示例 `V y` 或 `v dy`
  - `Z` 闭合路径，示例 `Z` 或 `z`， 起点终点形成闭合
  - 示例: `<path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>`
  - `C x1 y1, x2 y2, x y` 或 `c dx1 dy1, dx2 dy2,dx dy` 三阶贝塞尔曲线，`(x1,y1)`起点控制点,`(x2,y2)`终点控制点，`(x,y)`终点坐标。
  - `S x2 y2, x y` 或 `s dx2 dy2, dx dy` 三阶的简写。第一个控制点可由上一个控制点推断出
  - `Q x1 y1, x y` 或 `q dx1 dy1, dx dy` 二阶贝塞尔曲线。`(x1,y1)`控制点坐标，`(x,y)`终点坐标
  - `T x y` 或 `t dx dy` 二阶简写,控制点可有上一个控制点推断出
  - `A rx ry x-axis-rotation large-arc-flag sweep-flag x y` 画圆弧 `x-axis-rotation`x轴旋转角度;`large-arc-flag`大弧度小弧度;`sweep-flag` 1顺时针，0逆时针; `x,y`为终点`




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



