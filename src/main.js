import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from '@/store'
import * as API from '@/api'

Vue.use(ElementUI)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.prototype.$API = API

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
