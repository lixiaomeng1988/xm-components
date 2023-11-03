import { type Plugin, type App } from 'vue'
import Card from './src/main.vue'

Card.install = (Vue: App) => {
  Vue.component('xm-card', Card)
}

export default Card as unknown as Plugin
