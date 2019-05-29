// 入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//导入格式化时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', (datastr, pattern = "YYYY-MM-DD HH:mm:ss") => moment(datastr).format(pattern))

//2.1导入vue-resource
import VueRourse from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)
Vue.http.options.root = ' https://www.easy-mock.com/mock/5ce20d9bd2b6964bd4efc2af/api' //配置请求根路径
Vue.http.options.emulateJSON = true //配置表单数据格式

//全局引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//按需导入MintUI组件
/* import {
    Header,
    Swipe,
    SwipeItem,
    Button,
    Lazyload
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload); */

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

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