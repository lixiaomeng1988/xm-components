import './assets/main.css';
import XMCard from '../packages/card';
import XMButton from '../packages/button';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(XMCard);
app.use(XMButton);
app.use(createPinia());
app.use(router);

app.mount('#app');
