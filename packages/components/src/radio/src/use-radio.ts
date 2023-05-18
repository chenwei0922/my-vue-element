import { inject, computed } from 'vue'
import type { SetupContext } from 'vue'
import { UPDATE_MODEL_EVENT, radioGroupKey } from './constants'
import { RadioEmits, RadioProps } from './radio'

export const useRadio = (
  props: {
    modelValue?: RadioProps['modelValue']
    disabled?: RadioProps['disabled']
  },
  emit?: SetupContext<RadioEmits>['emit']
) => {
  const radioGroup = inject(radioGroupKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
      }
    }
  })
  const disabled = computed(() => props.disabled || radioGroup?.disabled || false)

  return {
    isGroup,
    modelValue,
    disabled,
    radioGroup
  }
}
