<template>
  <label class="qy-checkbox" :class="{ checked: isCheckd, disabled }" @click="handleChange">
    <span class="qy-checkbox__input">
      <QyIcon :name="isCheckd ? 'checkbox-active' : 'checkbox'" :size="16" />
    </span>
    <span v-if="label || $slots.default" class="qy-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script setup lang="ts">
import { QyIcon } from '../../index'
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './use-checkbox'

defineOptions({ name: 'qy-checkbox' })

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
const { isCheckd, disabled, handleChange } = useCheckbox(props, emit)
</script>
