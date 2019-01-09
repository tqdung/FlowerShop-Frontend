import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/assets/scss/style.scss'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Slick);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
