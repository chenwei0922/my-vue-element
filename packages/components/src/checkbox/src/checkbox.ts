import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT, isBoolean, isNumber, isString } from '@chenwei02/utils'

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  /**
   * 多选框的值
   */
  label: { type: [String, Number, Boolean], default: '' },
  /**
   * 是否禁用
   */
  disabled: Boolean,
  /**
   * 绑定值
   */
  modelValue: { type: [String, Number, Boolean], default: undefined },
  /**
   * 是否触发表单验证
   */
  validateEvent: { type: Boolean, default: true }
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: CheckboxValueType) => isString(val) || isNumber(val) || isBoolean(val)
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
