import { inject, computed, nextTick } from 'vue'
import type { SetupContext } from 'vue'
import { radioGroupKey } from './constants'
import { RadioEmits, RadioProps } from './radio'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@chenwei02/utils'

export const useRadio = (props: RadioProps, emit?: SetupContext<RadioEmits>['emit']) => {
  const radioGroup = inject(radioGroupKey, undefined) as any
  const isGroup = computed(() => !!radioGroup)
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup?.modelValue : props.modelValue
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val)
      } else {
        emit?.(UPDATE_MODEL_EVENT, val)
      }
    }
  })
  const disabled = computed(() => props.disabled || radioGroup?.disabled || false)

  const handleChange = () => {
    if (disabled.value) return
    modelValue.value = props.label
    nextTick(() => emit?.(CHANGE_EVENT, modelValue.value))
  }

  return {
    isGroup,
    modelValue,
    disabled,
    radioGroup,
    handleChange
  }
}
