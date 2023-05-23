import type { App, Plugin } from 'vue'
import { NOOP } from '@vue/shared'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  ;(main as SFCWithInstall<T>).install = (app: App) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      // 注册组件
      const name = (comp as any).name
      app.component(name, comp)
    }
  }
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T>
}

export const withNoopInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = NOOP
  return comp as SFCWithInstall<T>
}
