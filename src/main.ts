import '@/scss/index.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vue3Storage, {StorageType} from 'vue3-storage';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Vue3Storage, {namespace: 'pro_', storage: StorageType.Local});

app.mount('#app');
