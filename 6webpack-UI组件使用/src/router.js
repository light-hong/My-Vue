import VueRouter from 'vue-router'

import accuont from './main/account.vue'
import goodsList from './main/goodslList.vue'

//导入子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//3.创建路由对象
const router = new VueRouter({
    routes: [{
            path: '/account',
            component: accuont,
            children: [{
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                },
            ]
        },
        {
            path: '/goodslist',
            component: goodsList
        },
    ]
})

export default router