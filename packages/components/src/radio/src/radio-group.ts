import type { ExtractPropTypes } from 'vue'
import { radioEmits } from './radio'

export const radioGroupProps = {
	/**
	 * 是否禁用
	 */
	disabled: Boolean,
	/**
	 * 绑定值
	 */
	modelValue: { type: [String, Number, Boolean], default: '' },
	/**
	 * 是否触发表单验证
	 */
	validateEvent: { type: Boolean, default: true }
}

export const radioGroupEmits = radioEmits

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioGroupEmits = typeof radioGroupEmits
