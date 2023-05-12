import path from 'node:path'
const _dirname = path.dirname(__filename)

// project目录
export const projRoot = path.resolve(_dirname, '../../../')
// /dist 目录
export const buildOutput = path.resolve(projRoot, './dist')
// /dist/chenwei02
export const qyOutput = path.resolve(buildOutput, './chenwei02')
// /packages 目录
export const pkgRoot = path.resolve(projRoot, './packages')
// chenwei02根目录
export const qyRoot = path.resolve(pkgRoot, './chenwei02')
// 组件库根目录
export const compRoot = path.resolve(pkgRoot, './components')
// them根目录
export const themeRoot = path.resolve(pkgRoot, './theme')
export const themeDistPath = path.resolve(themeRoot, './dist')
