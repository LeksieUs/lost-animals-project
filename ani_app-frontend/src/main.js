import Vue, { createApp } from '@vue/compat';

import App from '@/App.vue';
import '@/style.css';
import router from '@/router';

import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const app = createApp(App);
app.use(router);


app.mount('#app');
