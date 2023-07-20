<template>
  <div class="canvas-example" />
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

onMounted(() => {
  // console.log(proxy)
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 800
  canvas.style.backgroundColor = 'green'
  proxy.$el.appendChild(canvas)
  const context = canvas.getContext('2d')

  const gap = 50
  const canvasW = canvas.width
  // 判断落子是黑棋还是白棋
  let isBlack = true
  // 记录棋盘落子情况
  const dp = []
  // 记录游戏是否结束
  let isOver = false

  /**
   * 五子棋 共14x14格
   * 上下左右边距50
   * 格子大小50
   **/
  const func1 = () => {
    const num = canvasW / gap
    for (let i = 1; i <= num - 1; i++) {
      context.moveTo(gap, gap * i)
      context.lineTo(canvasW - gap, gap * i)
      context.stroke()

      context.moveTo(gap * i, gap)
      context.lineTo(gap * i, canvasW - gap)
      context.stroke()
      dp.push(new Array(num - 1).fill(null))
    }
  }
  /**
   * 处理点击事件
   **/
  const dealClick = e => {
    if (isOver) {
      console.log(`pk 结束，${isBlack ? '黑棋' : '白棋'}获胜`)
      alert(`游戏结束，${isBlack ? '黑棋' : '白棋'}获胜`)
      return
    }
    // 点击绘制棋子
    const { offsetX, offsetY } = e
    const halfGap = gap / 2
    if (offsetX < halfGap || offsetX > canvasW - halfGap || offsetY < halfGap || offsetY > canvasW - halfGap) return
    const i = Math.floor((offsetX + halfGap) / gap)
    const j = Math.floor((offsetY + halfGap) / gap)
    if (dp[j - 1][i - 1]) return

    console.log('绘制棋子')
    const x = i * gap
    const y = j * gap
    context.beginPath()
    const radius = halfGap - 5
    context.arc(x, y, radius, 0, 2 * Math.PI)

    const x1 = x - radius / 2
    const y1 = y - radius / 2
    const gradient = context.createRadialGradient(x1, y1, 0, x1, y1, radius + radius / 2)
    gradient.addColorStop(0, isBlack ? '#ccc' : '#fff')
    gradient.addColorStop(1, isBlack ? '#000' : '#666')
    context.fillStyle = gradient

    // 给棋子添加阴影
    context.shadowColor = '#333'
    context.shadowOffsetX = 4
    context.shadowOffsetY = 4
    context.shadowBlur = 4

    context.fill()
    context.closePath()

    const target = isBlack ? 'black' : 'white'
    dp[j - 1][i - 1] = target

    // console.log(test(j-1, i-1, target, 1))
    if (checkVertical(j - 1, i - 1, target)) {
      console.log('up=', checkVertical(j - 1, i - 1, target))
      console.log(`${target}is win.`)
      isOver = true
      alert(`游戏结束，${isBlack ? '黑棋' : '白棋'}获胜`)
      return
    }

    isBlack = !isBlack
  }

  // 判断某个位置是否有棋子并且颜色为当前棋子颜色
  const isRight = (x, y, target) => {
    return dp[x] && dp[x][y] && target === dp[x][y]
  }

  // 获取某个方向棋子个数
  const getCount = (x, y, target, count = 1, direction = 'up') => {
    let i = x
    let j = y
    if (direction === 'up') {
      i = x - 1
    } else if (direction === 'down') {
      i = x + 1
    } else if (direction === 'left') {
      j = y - 1
    } else if (direction === 'right') {
      j = y + 1
    } else if (direction === 'lt-lt') {
      i = x - 1
      j = y - 1
    } else if (direction === 'lt-rb') {
      i = x + 1
      j = y + 1
    } else if (direction === 'lb-lb') {
      i = x + 1
      j = y - 1
    } else if (direction === 'lb-rt') {
      i = x - 1
      j = y + 1
    }
    if (count >= 5 || !isRight(i, j, target)) return count
    if (isRight(i, j, target)) {
      count++
      return getCount(i, j, target, count, direction)
    }
    return count
  }

  const checkVertical = (x, y, target) => {
    // 竖着组合
    const c1 = getCount(x, y, target, 1, 'up')
    const c2 = getCount(x, y, target, 1, 'down')
    console.log(target, '竖向=', c1 + c2 - 1)

    // 横着组合
    const c3 = getCount(x, y, target, 1, 'left')
    const c4 = getCount(x, y, target, 1, 'right')
    console.log(target, '横向=', c3 + c4 - 1)

    // 斜着组合：左上->右下
    const c5 = getCount(x, y, target, 1, 'lt-lt')
    const c6 = getCount(x, y, target, 1, 'lt-rb')
    console.log(target, '左上->右下=', c5 + c6 - 1)

    // 斜着组合：左下->右上
    const c7 = getCount(x, y, target, 1, 'lb-lb')
    const c8 = getCount(x, y, target, 1, 'lb-rt')
    console.log(target, '左下->右上=', c7 + c8 - 1)

    return c1 + c2 - 1 >= 5 || c3 + c4 - 1 >= 5 || c5 + c6 - 1 >= 5 || c7 + c8 - 1 >= 5
  }

  func1()
  canvas.addEventListener('click', dealClick)
})
onMounted(() => {})
</script>
<style>
.canvas-example {
  overflow: auto;
}
.VPDoc .container,
.VPDoc .content-container,
.VPDoc .content {
  /* max-width: initial !important; */
}
</style>
