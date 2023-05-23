import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT, isArray } from '@chenwei02/utils'
import { CheckboxValueType } from './checkbox'

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]
// export type CheckboxGroupValueType = CheckboxValueType []
export const checkboxGroupProps = {
  /**
   * 是否禁用
   */
  disabled: Boolean,
  /**
   * 绑定值
   */
  modelValue: { type: Array, default: () => [] },
  /**
   * 是否触发表单验证
   */
  validateEvent: { type: Boolean, default: true }
}

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  [CHANGE_EVENT]: (val: CheckboxGroupValueType) => isArray(val)
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
