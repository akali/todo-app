import Vue from 'vue';
import App from './components/templates/App.vue';
import store from './store';
import router from './router';
import '@/utils/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
