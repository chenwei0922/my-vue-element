import DefaultTheme from 'vitepress/theme'
import QyElement from '@chenwei02/element'

// import './main.css'

export default {
  ...DefaultTheme,
  enhanceApp(context) {
    const { app } = context
    app.use(QyElement)
  }
}
