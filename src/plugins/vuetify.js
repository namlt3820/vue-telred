import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { ValidationProvider } from 'vee-validate';

Vue.use(Vuetify);
Vue.component('ValidationProvider', ValidationProvider);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    }
});
