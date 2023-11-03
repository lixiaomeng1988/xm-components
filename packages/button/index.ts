import { type App, type Plugin } from 'vue';
import Button from './src/main.vue';

Button.install = (Vue: App) => {
  Vue.component('xm-button', Button);
};

export default Button as unknown as Plugin;
