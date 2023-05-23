import { inject, nextTick, computed, watch } from 'vue'
import type { SetupContext } from 'vue'
import { checkboxGroupKey } from './constants'
import { isArray, isBoolean, CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@chenwei02/utils'
import { CheckboxEmits, CheckboxProps } from './checkbox'

export const useCheckbox = (props: CheckboxProps, emit?: SetupContext<CheckboxEmits>['emit']) => {
  // 表单规则验证，当change时
  const formItem = inject('formItemKey', undefined) as any
  const checkboxGroup = inject(checkboxGroupKey, undefined) as any

  const isGroup = computed(() => !!checkboxGroup)
  const model = computed({
    get() {
      return isGroup.value ? checkboxGroup?.modelValue : props.modelValue
    },
    set(val) {
      if (isGroup.value) {
        checkboxGroup?.changeEvent(val)
      } else {
        emit?.(UPDATE_MODEL_EVENT, val)
        nextTick(() => emit?.(CHANGE_EVENT, model.value))
      }
    }
  })
  const disabled = computed(() => props.disabled || checkboxGroup?.disabled || false)

  const isCheckd = computed(() => {
    if (isArray(model.value)) return model.value.includes(props.label)
    else if (isBoolean(model.value)) return model.value
    else return model.value === props.label
  })
  const validateEvent = computed(() => checkboxGroup?.validateEvent || props.validateEvent)

  const handleChange = () => {
    if (disabled.value) return
    if (isGroup.value && isArray(model.value)) {
      if (model.value.includes(props.label)) {
        model.value = model.value.filter(it => it !== props.label)
      } else {
        model.value.push(props.label)
      }
    } else {
      if (isBoolean(model.value)) {
        model.value = !model.value
      } else {
        model.value = model.value === props.label ? '' : props.label
      }
    }
  }

  watch(
    () => props.modelValue,
    () => {
      if (validateEvent.value) {
        formItem?.validate('change')
      }
    }
  )

  return {
    disabled,
    isCheckd,
    handleChange
  }
}
