require('./bootstrap');
window.Vue = require('vue');



import App from './layouts/App';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/index';
import store from './stores/index';
import vuetify from './plugins/vuetify';
import './plugins'
import VuetifyAudio from './components/vuetifyaudio.vue'
Vue.component("vue-radio", VuetifyAudio);

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});
window.events = new Vue();


const app = new Vue({
    el: '#app',
    //template: '<App/>',
    render: h => h(App),
    router,
    store: store,
    vuetify,
});