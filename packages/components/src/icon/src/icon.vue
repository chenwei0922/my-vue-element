<template>
  <svg aria-hidden="true" class="qy-svg-icon" :class="svgClass" v-bind="$attrs" :style="svgStyle">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue'
defineOptions({ name: 'qy-icon' })

const props = defineProps({
  prefix: {
    type: String,
    default: 'qy-icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  svgClass: { type: String, default: '' },
  size: {
    type: [String, Number],
    default: '20px'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const svgStyle = computed(() => {
  let sty = {}
  if (typeof props.size === 'number' || !props.size.includes('px')) {
    sty = { width: `${props.size}px`, height: `${props.size}px` }
  } else {
    sty = { width: props.size, height: props.size }
  }
  if (props.color) {
    sty = { ...sty, color: props.color }
  }
  return sty
})
</script>
