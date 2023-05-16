import { withInstall } from '@chenwei02/utils'
import Input from './src/input.vue'

export const QyInput = withInstall(Input)
export default QyInput

export * from './src/input'
export type InputInstance = InstanceType<typeof Input>
