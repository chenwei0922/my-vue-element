<template>
  <label class="qy-radio-button" :class="{ checked: modelValue === label, disabled }" @click="handleChange">
    <span class="qy-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script setup lang="ts">
import { radioButtonEmits, radioButtonProps } from './radio-button'
import { useRadio } from './use-radio'

defineOptions({ name: 'qy-radio-button' })

const props = defineProps(radioButtonProps)
const emit = defineEmits(radioButtonEmits)

const { disabled, modelValue, handleChange } = useRadio(props, emit)
</script>
