import { App, Plugin } from 'vue'

export const makeInstaller = (components: Plugin[] = []) => {
	const install = (app: App, options?: any) => {
		components.forEach(c => app.use(c))
		// if (options) {
		// }
	}
	return {
		install
	}
}
