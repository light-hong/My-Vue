import Vue from 'vue'
import App from './App'

import './base.css'

const vm = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
})
