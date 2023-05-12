import DefaultTheme from 'vitepress/theme'
// import QyElement from '@chenwei02/element'
import QyElement from '@chenwei02/qy-element'
import '@chenwei02/qy-element/theme/index.css'

import QyElementWrap from '../../vitepress/vp-wrap.vue'
import QyElementTip from '../../vitepress/vp-tip.vue'
import './main.css'

export default {
  ...DefaultTheme,
  enhanceApp(context) {
    const { app } = context
    app.component('QyElementWrap', QyElementWrap)
    app.component('QyElementEnum', QyElementTip)
    app.use(QyElement)
  }
}
