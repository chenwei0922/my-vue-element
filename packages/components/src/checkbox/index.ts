import { withInstall, withNoopInstall } from '@chenwei02/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const QyCheckbox = withInstall(Checkbox, { CheckboxGroup })
export const QyCheckboxGroup = withNoopInstall(CheckboxGroup)

export default QyCheckbox

export * from './src/checkbox'
export * from './src/checkbox-group'
