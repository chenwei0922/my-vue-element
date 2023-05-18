import { withInstall } from '@chenwei02/utils'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import RadioButton from './src/radio-button.vue'

export const QyRadio = withInstall(Radio, { RadioGroup, RadioButton })
export const QyRadioGroup = withInstall(RadioGroup)
export const QyRadioButton = withInstall(RadioButton)

export default QyRadio

export * from './src/radio'
export * from './src/radio-group'
export * from './src/constants'
export * from './src/use-radio'
