<template>
  <div class="qy-checkbox-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@chenwei02/utils'
import { nextTick, provide, reactive, toRefs, watch, inject } from 'vue'
import { checkboxGroupKey } from './constants'

defineOptions({ name: 'qy-checkbox-group' })

// 表单规则验证，当change时
const formItem = inject('formItemKey', undefined) as any

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const changeEvent = (val: []) => {
  emit(UPDATE_MODEL_EVENT, val)
  nextTick(() => emit(CHANGE_EVENT, val))
}
provide(checkboxGroupKey, reactive({ ...toRefs(props), changeEvent }))

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate('change')
    }
  }
)
</script>
