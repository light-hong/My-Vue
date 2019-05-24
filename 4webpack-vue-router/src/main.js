import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

import app from './App.vue'
import accuont from './main/account.vue'
import goodsList from './main/goodslList.vue'

//3.创建路由对象
const router = new VueRouter({
    routes: [
        {path:'/account',component:accuont},
        {path:'/goodslist',component:goodsList},
    ]    
})

let vm = new Vue({
    el:'#app',
    render:(c)=>c(app),
    router //挂载路由对象
})