<script lang="ts" setup>
import '../style/index.scss'
import { computed } from 'vue'
import { buttonProps } from './button'
defineOptions({ name: 'qy-button' })

const props = defineProps(buttonProps)

const buttonClass = computed(() => {
  const classes = [props.type, `qy-button--${props.size}`]
  if (props.text) {
    classes.push('text')
  }
  if (props.dialog) {
    classes.push('dialog')
  }
  if (props.disabled) {
    classes.push('disabled')
  }
  return classes
})
</script>
<template>
  <span class="qy-button" :class="buttonClass">
    <slot />
  </span>
</template>
