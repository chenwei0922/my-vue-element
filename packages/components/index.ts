import components from './component'

import { App } from 'vue'

export default {
    install: (app: App) => {
        for(let c in components){
            console.log('1111')
            app.use(components[c])
        }
    }
}