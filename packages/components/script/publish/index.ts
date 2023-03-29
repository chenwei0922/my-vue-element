import { pkgPath } from '../utils/paths'
import run from '../utils/run'
import { series } from 'gulp'

export const publishComponent = () => {
  return run('release-it', `${pkgPath}/chenwei02`)
}
export default series(publishComponent)
