// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Vuelidate from 'vuelidate';
import Vue2Filters from 'vue2-filters';
import draggable from 'vuedraggable';
import App from './App';
import store from './store/store';
// import { routes } from './router/router';
import router from './router/router';
/* eslint-disable */

Vue.use(Vue2Filters);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(draggable);
Vue.config.productionTip = false;

axios.defaults.baseURL = '/';
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json';

// const router = new VueRouter({
//   routes,
//   mode: 'history',
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
