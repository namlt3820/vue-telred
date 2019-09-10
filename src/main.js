import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import './configs/axios';
import './assets/css/general.css';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');
