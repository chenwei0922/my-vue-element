<template>
  <div class="qy-radio-group" :class="{ disabled }">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { inject, nextTick, toRefs, provide, reactive, watch } from 'vue'
import { RadioGroupProps, radioGroupEmits, radioGroupProps } from './radio-group'
import { radioGroupKey } from './constants'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@chenwei02/utils'

defineOptions({ name: 'qy-radio-group' })

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

// 表单规则验证，当change时
const formItem = inject('formItemKey', undefined) as any

const changeEvent = (val: RadioGroupProps['modelValue']) => {
  emit(UPDATE_MODEL_EVENT, val)
  nextTick(() => emit(CHANGE_EVENT, val))
}
watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate('change')
    }
  }
)
provide(radioGroupKey, reactive({ ...toRefs(props), changeEvent }))
</script>
