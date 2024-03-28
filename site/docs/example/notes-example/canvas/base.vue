<template>
  <div class="canvas-example" />
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

onMounted(() => {
  // console.log(proxy)
  const canvas1 = document.createElement('canvas')
  canvas1.width = 400
  canvas1.height = 80
  proxy.$el.appendChild(canvas1)
  const context = canvas1.getContext('2d')

  // 设置线的起点
  context.moveTo(0, 0)
  // 设置终点
  context.lineTo(400, 0)
  // 线宽
  context.lineWidth = 20
  // 线条颜色
  context.strokeStyle = 'red'
  context.stroke()

  // 线性渐变
  context.beginPath()
  context.moveTo(0, 40)
  context.lineTo(400, 40)
  context.lineWidth = 20
  const gradient = context.createLinearGradient(0, 40, 400, 40)
  gradient.addColorStop(0, 'red')
  gradient.addColorStop(0.25, 'yellow')
  gradient.addColorStop(0.5, 'pink')
  gradient.addColorStop(0.75, 'black')
  gradient.addColorStop(1, 'blue')
  context.strokeStyle = gradient
  context.stroke()
  context.closePath()
})
</script>
