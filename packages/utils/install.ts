import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(main: T, extra?: T) => {
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
