import { run, pkgRoot } from '@chenwei02/build-utils'
import { series } from 'gulp'

export const publishComponent = () => {
  return run('release-it', `${pkgRoot}/chenwei02`)
}
export default series(publishComponent)
