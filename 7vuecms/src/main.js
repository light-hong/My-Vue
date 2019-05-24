// 入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//2.1导入vue-resource
import VueRourse from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//按需导入MintUI组件
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//1.3导入自定义的router.js路由模块
import router from './router'

//导入 mui 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入APP 根组件
import app from './App.vue'
import VueResource from 'vue-resource';

new Vue({
    el: '#app',
    render(c) {
        return c(app)
    },
    router, //挂载路由对象到vm实例上
})