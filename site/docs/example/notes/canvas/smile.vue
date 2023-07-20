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
  canvas1.height = 400
  proxy.$el.appendChild(canvas1)
  const context = canvas1.getContext('2d')

  /**
   * 600x400画布--画笑脸
   * 圆心，半径，开始角度，结束角度
   **/
  // 脸
  context.arc(300, 200, 100, (0 * Math.PI) / 180, (360 * Math.PI) / 180)
  // 填充一个颜色
  // const gradient = context.createRadialGradient(300, 200, 0, 300, 200, 100)
  const gradient = context.createRadialGradient(250, 150, 0, 250, 150, 150)
  gradient.addColorStop(0, '#ccc')
  gradient.addColorStop(1, '#000')
  // context.fillStyle = '#0a0'
  context.fillStyle = gradient
  context.fill()
  context.stroke()

  // 左眼
  // 两个不相关的图形之间，重新生成一个新的路径
  context.beginPath()
  context.arc(250, 150, 20, 0, 2 * Math.PI)
  context.stroke()
  // 跟beginPath配对使用，闭合路径
  context.closePath()

  // 右眼
  context.beginPath()
  context.arc(350, 150, 20, 0, 2 * Math.PI)
  context.stroke()
  context.closePath()

  // 鼻子
  context.beginPath()
  // ellipse(x,y,xR, yR, rotateAngel, startAngel, endAngle)绘制椭圆
  context.ellipse(300, 200, 10, 30, 0, 0, 2 * Math.PI)
  context.stroke()
  context.closePath()

  // 嘴巴
  context.beginPath()
  context.arc(300, 200, 80, 0, Math.PI)
  context.stroke()
  context.closePath()
})
</script>
