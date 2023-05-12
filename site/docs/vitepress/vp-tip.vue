<script setup>
import { onUnmounted } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'

const visible = ref(false)
const triggerRef = ref(null)
const contentRef = ref(null)
const arrowRef = ref(null)

const getRect = dom => {
  return dom.getBoundingClientRect()
}

const toggleVisible = e => {
  // console.log(e)
  if (visible.value === true) {
    visible.value = false
  } else {
    visible.value = true
    updatePosition()
  }
}
const updatePosition = () => {
  setTimeout(() => {
    // console.log(getRect(triggerRef.value), getRect(contentRef.value))
    contentRef.value.style.left = `${
      (getRect(triggerRef.value).width - getRect(contentRef.value).width) / 2 +
      getRect(triggerRef.value).left
    }px`
    contentRef.value.style.top = `${getRect(triggerRef.value).bottom + 8}px`
  }, 0)
}
const onClickEvent = e => {
  if (triggerRef.value.contains(e?.target)) {
    console.log('keep')
  } else {
    visible.value = false
  }
}
onMounted(() => {
  document.body.appendChild(contentRef.value)
  // console.log(getScrollContainer(triggerRef.value))
  window?.addEventListener('scroll', updatePosition)
  window?.addEventListener('click', onClickEvent)
})
onUnmounted(() => {
  window?.removeEventListener('click', onClickEvent)
  window?.removeEventListener('scroll', updatePosition)
  contentRef.value?.remove()
})
</script>
<template>
  <div class="qy-element-poper">
    <span ref="triggerRef" class="tip-icon" @click="toggleVisible">!</span>
    <div v-show="visible" ref="contentRef" class="qy-element-poper-view">
      <span ref="arrowRef" class="arrow" />
      <!-- <code>
        <slot />
      </code> -->
      <span class="code"><slot /></span>
    </div>
  </div>
</template>

<style scoped>
.qy-element-poper {
  display: inline-flex;
}
.qy-element-poper .tip-icon {
  border: solid 1px #333;
  color: #333;
  font-size: 12px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.qy-element-poper-view {
  padding: 5px;
  border: solid 1px #eee;
  border-radius: 4px;
  position: fixed;
  max-width: 300px;
  z-index: 1000;
  background-color: #ffffff;
}
.qy-element-poper-view .arrow {
  position: absolute;
  top: -5px;
  background-color: #ffffff;
  border: solid 1px #eee;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-bottom: 0;
  border-right: 0;
  left: calc(50% - 5px);
}
.qy-element-poper-view .code {
  border-radius: 4px;
  padding: 3px 6px;
  color: #476582;
  background-color: #f6f6f7;
  transition: color 0.5s, background-color 0.5s;
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
}
</style>
