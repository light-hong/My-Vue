import Vue from 'vue'
import App from './App'
import router from './router'

const vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
