import { run, qyOutput } from '@chenwei02/build-utils'
import { series } from 'gulp'
import path from 'node:path'
import fs from 'fs'

export const setTag = async () => {
  const srcPath = path.join(qyOutput, '/package.json')
  const content = fs.readFileSync(srcPath, 'utf8')
  const regex = /"version": ["|'](.*)["|']/i
  if (regex.test(content)) {
    const version = content.match(regex)?.[1]
    console.log('find it', version)
    run(`git tag ${version}`)
    run(`git push --tags`)
  } else {
    console.log('not find it')
  }
}

export const publish = async () => {
  run(`npm publish`, qyOutput)
}

export default series(publish, setTag)
