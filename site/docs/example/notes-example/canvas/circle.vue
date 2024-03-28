<template>
  <div class="canvas-example" />
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

onMounted(() => {
  // console.log(proxy)
  const canvas1 = document.createElement('canvas')
  canvas1.width = 600
  canvas1.height = 200
  proxy.$el.appendChild(canvas1)
  const context = canvas1.getContext('2d')

  /**
   * arc(x,y,r,startAngle,endAngle,counterclockwise)
   * 画圆，中心点，开始弧度，结束弧度，是否逆时针
   */
  // 圆弧
  context.arc(50, 50, 50, (0 * Math.PI) / 180, (180 * Math.PI) / 180)
  context.strokeStyle = 'red'
  context.stroke()

  let gap = 20
  // 圆
  context.beginPath()
  context.arc(150 + gap, 50, 50, 0, 2 * Math.PI)
  context.strokeStyle = 'red'
  context.stroke()
  context.closePath()

  // 填充圆
  context.beginPath()
  context.arc(250 + gap + gap, 50, 50, 0, 2 * Math.PI)
  context.fillStyle = 'red'
  context.fill()
  context.closePath()

  // 椭圆
  /**
   * 画椭圆
   * ellipse(x,y,xR,yR,rotateAngle,startAngle,endAngle,counterclockwise)
   * 中心点，X轴半径，y轴半径，旋转弧度，开始弧度，结束弧度，是否逆时针
   */
  gap = 120
  context.beginPath()
  context.ellipse(50, 20 + gap, 50, 20, 0, 0, 2 * Math.PI)
  context.stroke()
  context.closePath()

  context.beginPath()
  context.ellipse(150, 20 + gap, 50, 20, (45 * Math.PI) / 180, 0, 2 * Math.PI)
  context.stroke()
  context.closePath()

  context.beginPath()
  context.ellipse(250, 20 + gap, 50, 20, 0, 0, (90 * Math.PI) / 180)
  context.stroke()
  context.closePath()
})
</script>
