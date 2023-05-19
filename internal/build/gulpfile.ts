import { copyFile, mkdir, cp } from 'fs/promises'
import fs from 'fs'
import { run, pkgRoot, qyOutput, projRoot, themeDistPath, qyRoot } from '@chenwei02/build-utils'
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
    // src(`${pkgRoot}/chenwei02/dist/lib`).pipe(dest(`${qyOutput}/lib`)),
    // src(`${pkgRoot}/chenwei02/dist/es`).pipe(dest(`${qyOutput}/es`)),

    cp(path.join(pkgRoot, '/chenwei02/dist/lib'), path.join(qyOutput, '/lib'), {
      recursive: true
    }),
    cp(path.join(pkgRoot, '/chenwei02/dist/es'), path.join(qyOutput, '/es'), {
      recursive: true
    }),
    cp(path.join(pkgRoot, '/chenwei02/dist/dist'), path.join(qyOutput, '/dist'), {
      recursive: true
    }),

    // 将svg打包后的结果复制一份到外层
    cp(path.join(pkgRoot, '/chenwei02/dist/es/_virtual'), path.resolve(qyOutput, './_virtual'), {
      recursive: true
    }),
    cp(path.join(pkgRoot, '/chenwei02/dist/es/_virtual'), path.resolve(qyRoot, './dist/_virtual'), {
      recursive: true
    }),
    copyFile(path.join(projRoot, '/global.d.ts'), path.join(qyOutput, '/global.d.ts')),
    copyFile(path.join(projRoot, '/global.d.ts'), path.join(qyRoot, '/dist/global.d.ts'))
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

  // svg
  // src(`${pkgRoot}/icons/svg/*.svg`).pipe(dest(`${pkgRoot}/chenwei02/dist/es/icons/svg`))
  // src(`${pkgRoot}/icons/svg/*.svg`).pipe(dest(`${qyOutput}/es/icons/svg`))
  // src(`${pkgRoot}/icons/svg/*.svg`).pipe(dest(`${pkgRoot}/chenwei02/dist/lib/icons/svg`))
  // src(`${pkgRoot}/icons/svg/*.svg`).pipe(dest(`${qyOutput}/lib/icons/svg`))
}

// 复制样式
export const copyFullStyle = async () => {
  await mkdir(path.resolve(qyOutput, './dist'), { recursive: true })
  cp(path.resolve(qyOutput, './theme/index.css'), path.resolve(qyOutput, './dist/index.css'), {
    recursive: true
  })
  cp(path.resolve(qyOutput, './theme/index.css'), path.resolve(qyRoot, './dist/dist/index.css'), {
    recursive: true
  })
}

export default series(
  withTaskName('clean', () => run('pnpm -w run clean')),
  withTaskName('createOutput', async () => {
    mkdir(qyOutput, { recursive: true })
    mkdir(path.resolve(qyOutput, 'dist'), { recursive: true })
    mkdir(path.resolve(qyOutput, 'es'), { recursive: true })
    mkdir(path.resolve(qyOutput, 'lib'), { recursive: true })
  }),
  // buildModules
  withTaskName('buildModules', () => run('pnpm run -C ../../packages/chenwei02 start')),

  // buildStyle
  withTaskName('buildTheme', () => run('pnpm run -C ../../packages/theme build')),
  copyThemeBundle,
  copyFiles,
  copyFullStyle,
  updatePackage
)
