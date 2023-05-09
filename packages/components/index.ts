import installer from './default'

export * from './src'
export * from './make-installer'

export const install = installer.install

export default installer
