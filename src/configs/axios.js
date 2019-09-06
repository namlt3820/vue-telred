/* eslint-disable */
import Vue from 'vue';
import axios from 'axios';
// import store from '../store';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const config = {
    baseURL: process.env.VUE_APP_API_URL || '',
    statusSuccess: [400, 409],
    validateStatus(status) {
        return (status >= 200 && status < 300) || config.statusSuccess.indexOf(status) > -1; // default
    },
    timeout: 30 * 60 * 1000 // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        if (window.localStorage.jwt) config.headers.Authorization = window.localStorage.jwt;
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        // Do something with request error
        if (error.response && error.response.status === 401) {
            // store.dispatch('logout');
        } else {
            // store.dispatch("common/setStateErrorRequest");
        }
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};

Vue.use(Plugin);

export default Plugin;
