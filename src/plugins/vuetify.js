import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.use(Vuetify);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    }
});
