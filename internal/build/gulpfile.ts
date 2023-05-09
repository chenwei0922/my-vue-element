import { copyFile, mkdir, cp } from 'fs/promises'
import { run, pkgRoot, qyOutput } from '@chenwei02/build-utils'
import path from 'node:path'
import { series, parallel, TaskFunction } from 'gulp'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })
// export const runTask = (name: string) =>
//   withTaskName(`shellTask:${name}`, () =>
//     // run(`pnpm run start ${name}`, buildRoot)
//   )

export const copyFiles = () => {
  return Promise.all([
    copyFile(
      path.join(pkgRoot, '/chenwei02/package.json'),
      path.join(qyOutput, '/package.json')
    ),
    copyFile(
      path.join(pkgRoot, '/chenwei02/README.md'),
      path.join(qyOutput, '/README.md')
    ),
    cp(path.join(pkgRoot, '/chenwei02/dist/lib'), path.join(qyOutput, '/lib'), {
      recursive: true
    }),
    cp(path.join(pkgRoot, '/chenwei02/dist/es'), path.join(qyOutput, '/es'), {
      recursive: true
    })
  ])
}

// 复制样式
export const copyFullStyle = async () => {
  await mkdir(path.resolve(qyOutput, './dist'), { recursive: true })
  await copyFile(
    path.resolve(qyOutput, './theme/index.css'),
    path.resolve(qyOutput, './dist/index.css')
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(qyOutput, { recursive: true })),

  // buildModules
  withTaskName('buildModules', () =>
    run('pnpm run -C ../../packages/chenwei02 start')
  ),

  // buildStyle
  withTaskName('buildTheme', () =>
    run('pnpm run -C ../../packages/theme build')
  ),
  copyFullStyle,

  parallel([copyFiles])
)
