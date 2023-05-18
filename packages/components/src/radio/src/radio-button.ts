import type { ExtractPropTypes } from 'vue'
import { radioEmits, radioProps } from './radio'

export const radioButtonProps = radioProps

export const radioButtonEmits = radioEmits

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
export type RadioButtonEmits = typeof radioButtonEmits
