import { copyFile, mkdir, cp } from 'fs/promises'
import fs from 'fs'
import { run, pkgRoot, qyOutput, projRoot, themeDistPath } from '@chenwei02/build-utils'
import path from 'node:path'
import { dest, series, src, TaskFunction } from 'gulp'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => Object.assign(fn, { displayName: name })
// export const runTask = (name: string) =>
//   withTaskName(`shellTask:${name}`, () =>
//     // run(`pnpm run start ${name}`, buildRoot)
//   )

export const copyFiles = async () => {
	return Promise.all([
		copyFile(path.join(pkgRoot, '/chenwei02/package.json'), path.join(qyOutput, '/package.json')),
		copyFile(path.join(pkgRoot, '/chenwei02/README.md'), path.join(qyOutput, '/README.md')),
		cp(path.join(pkgRoot, '/chenwei02/dist/lib'), path.join(qyOutput, '/lib'), {
			recursive: true
		}),
		cp(path.join(pkgRoot, '/chenwei02/dist/es'), path.join(qyOutput, '/es'), {
			recursive: true
		}),
		copyFile(path.join(projRoot, '/global.d.ts'), path.join(qyOutput, '/global.d.ts'))
	])
}

export const updatePackage = async () => {
	const srcPath = path.join(qyOutput, '/package.json')
	let content = fs.readFileSync(srcPath, 'utf8')
	const reg = /dist\//gi
	if (reg.test(content)) {
		content = content.replace(reg, '')
		fs.writeFileSync(srcPath, content, 'utf-8')
	}
}

export const copyThemeBundle = async () => {
	src(`${themeDistPath}/**`).pipe(dest(`${pkgRoot}/chenwei02/dist/theme`))
	src(`${themeDistPath}/**`).pipe(dest(`${qyOutput}/theme`))
}

// 复制样式
export const copyFullStyle = async () => {
	await mkdir(path.resolve(qyOutput, './dist'), { recursive: true })
	cp(path.resolve(qyOutput, './theme/index.css'), path.resolve(qyOutput, './dist/index.css'), { recursive: true })
}

export default series(
	withTaskName('clean', () => run('pnpm run clean')),
	withTaskName('createOutput', () => mkdir(qyOutput, { recursive: true })),

	// buildModules
	withTaskName('buildModules', () => run('pnpm run -C ../../packages/chenwei02 start')),

	// buildStyle
	withTaskName('buildTheme', () => run('pnpm run -C ../../packages/theme build')),
	copyThemeBundle,
	copyFiles,
	copyFullStyle,
	updatePackage
)
