import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from './constants'

export const radioProps = {
	/**
	 * 单选框的值
	 */
	label: { type: [String, Number, Boolean], default: '' },
	/**
	 * 是否禁用
	 */
	disabled: Boolean,
	/**
	 * 绑定值
	 */
	modelValue: { type: [String, Number, Boolean], default: '' }
}

export const radioEmits = {
	[UPDATE_MODEL_EVENT]: (val: string | number | boolean) => {},
	[CHANGE_EVENT]: (val: string | number | boolean) => {}
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
