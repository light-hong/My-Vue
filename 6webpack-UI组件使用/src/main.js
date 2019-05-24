import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

//导入所有的MintUI组件
//导入mint-ui
// import MintUI from 'mint-ui'
// //这里可以省略node_modules目录
// import 'mint-ui/lib/style.css'
// //将MintUI安装到 Vue 中
// Vue.use(MintUI)

//按需导入
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

//3.导入路由模块
import router from './router'

//导入app组件
import app from './App.vue'

let vm = new Vue({
    el: '#app',
    render: (c) => c(app),
    router //挂载路由对象
})