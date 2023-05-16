import { run, themeRoot, qyRoot, qyOutput } from '@chenwei02/build-utils'
import { watch, src, dest } from 'gulp'

export const watchBundle = () => {
	run(`pnpm -F build-utils run dev`)
	run(`pnpm -C ${qyRoot} run dev`)
	run(`pnpm -F theme run dev`)

	watch(`${themeRoot}/dist/**`, async () => {
		console.log('watchCss-->', 'copy')
		src(`${themeRoot}/dist/**`).pipe(dest(`${qyRoot}/dist/theme`))
	})
	watch(`${qyRoot}/dist/**`, () => {
		src(`${qyRoot}/dist/**`).pipe(dest(`${qyOutput}`))
	})
}

export default watchBundle
