<template>
  <div class="canvas-example" />
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

onMounted(() => {
  // console.log(proxy)
  const canvas1 = document.createElement('canvas')
  canvas1.width = 640
  canvas1.height = 200
  proxy.$el.appendChild(canvas1)
  const context = canvas1.getContext('2d')

  /**
   * createRadialGradient(x0,y0,r0,x1,y1,r1)
   * 600x400画布--径向渐变
   * 200x200方形
   * 开始圆: 中心点(100,100),半径0
   * 结束圆: 中心点(100,100),半径100
   **/
  let gradient = context.createRadialGradient(100, 100, 0, 100, 100, 100)
  gradient.addColorStop(0, 'red')
  gradient.addColorStop(1, 'green')

  context.fillStyle = gradient
  /**
   * fillRect(x,y,w,h)
   * 画方形
   */
  context.fillRect(0, 0, 200, 200)

  /**
   * createConicGradient(startAngle,x,y)
   * 600x400画布--锥形渐变
   * 200x200方形
   * 角度值: 三点钟是0度，12点为-90度
   * 中心点: 中心点(100,100)
   **/
  const offset = 220
  gradient = context.createConicGradient(-45 * (Math.PI / 180), 100 + offset, 100)
  gradient.addColorStop(0, 'red')
  gradient.addColorStop(0.5, 'skyblue')
  gradient.addColorStop(1, 'red')

  context.fillStyle = gradient
  context.fillRect(220, 0, 200, 200)

  /**
   * 重复元图像
   */
  const image = new Image()
  image.src = '../../../images/notes/canvas/01.png'
  image.onload = function () {
    const p = context.createPattern(image, 'repeat')
    context.fillStyle = p
    context.fillRect(440, 0, 200, 200)
  }
})
</script>
