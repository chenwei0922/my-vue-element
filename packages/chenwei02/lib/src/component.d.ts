import * as components from './index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    QyButton: typeof components.QVButton
  }
}
export {}
