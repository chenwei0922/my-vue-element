import fs from 'fs'
import nodePath from 'node:path'

import { pkgRoot } from './paths'

// 保留的文件
const stayFiles = ['package.json', 'README.md']

const delPath = async (path: string) => {
  let files: string[] = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(async file => {
      const curPath = nodePath.resolve(path, file)
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') {
          await delPath(curPath)
        }
      } else {
        // delete file
        if (!stayFiles.includes(file)) {
          fs.unlinkSync(curPath)
        }
      }
    })
    if (path != `${pkgRoot}/chenwei02`) {
      fs.rmdirSync(path)
    }
  }
}
export default delPath
