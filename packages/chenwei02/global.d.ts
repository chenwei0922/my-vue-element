import * as components from '@chenwei02/components'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    QyButton: typeof components.QyButton
  }
}
export {}
