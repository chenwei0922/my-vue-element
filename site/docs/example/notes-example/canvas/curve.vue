<template>
  <div class="canvas-example" />
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()

onMounted(() => {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 200
  proxy.$el.appendChild(canvas)
  const context = canvas.getContext('2d')

  /**
   * 二阶：贝塞尔曲线
   * quadraticCurveTo(cpx,cpy,x,y)
   * 控制点，终点
   */
  context.moveTo(0, 0)
  context.quadraticCurveTo(0, 150, 200, 0)
  context.strokeStyle = 'red'
  context.stroke()

  /**
   * 三阶：贝塞尔曲线
   * bezierCurveTo(cpx0,cpy0,cpx1,cpy1,x,y)
   * 控制点1，控制点2，终点
   */
  context.moveTo(220, 0)
  context.bezierCurveTo(220, 250, 350, -200, 400, 200)
  context.strokeStyle = 'red'
  context.stroke()

  /**
   * 绘制心形
   */
  const x0 = 500
  const y0 = 20
  const x1 = x0
  const y1 = y0 + 80
  context.beginPath()
  context.moveTo(x0, y0)
  context.bezierCurveTo(x0 - 40, y0 - 30, x0 - 80, y0 + 30, x1, y1)

  context.moveTo(x0, y0)
  context.bezierCurveTo(x0 + 40, y0 - 30, x0 + 80, y0 + 30, x1, y1)

  const g = context.createRadialGradient(x0 - 20, y0 + 20, 0, x0 - 20, y0 + 20, 60)
  g.addColorStop(0, 'pink')
  g.addColorStop(1, 'red')
  context.fillStyle = g
  context.fill()
  context.closePath()
})
</script>
