import DefaultTheme from 'vitepress/theme'
// import QyElement from '@chenwei02/element'
import QyElement from '@chenwei02/qy-element'

import '@chenwei02/qy-element/theme/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(context) {
    const { app } = context
    app.use(QyElement)
  }
}
