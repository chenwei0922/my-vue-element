import { withInstall, withNoopInstall } from '@chenwei02/utils'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import RadioButton from './src/radio-button.vue'

export const QyRadio = withInstall(Radio, { RadioGroup, RadioButton })
export const QyRadioGroup = withNoopInstall(RadioGroup)
export const QyRadioButton = withNoopInstall(RadioButton)

export default QyRadio

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
