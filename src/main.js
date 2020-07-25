import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Timestamps from "@/components/Timestamps.vue"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {Timestamps},
  render: h => h(App)
}).$mount('#app')
