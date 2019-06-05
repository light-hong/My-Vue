/*
  路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/',
      redirect: '/about',
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path: '/news', // path最左侧的/左斜杆永远代表根路由
          path: '/home/news',
          component: News,
        },
        {
          path: 'message', // 简化写法
          component: Message,
          children: [
            {
              path: 'detail/:id',
              component: MessageDetail,
            },
          ],
        },
        {
          path: '',
          redirect: '/home/news',
        },
      ],
    },
    {
      path: '/about',
      component: About,
    },
  ],
})
