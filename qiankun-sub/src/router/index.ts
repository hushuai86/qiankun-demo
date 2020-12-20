import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

let prefix = ''
const _window: any = window

// 判断是 qiankun 环境则增加路由前缀
if (_window.__POWERED_BY_QIANKUN__) {
  prefix = '/micro/qiankun-sub'
}

const routes: Array<RouteConfig> = [
  {
    path: prefix + '/',
    name: 'home',
    component: Home
  },
  {
    path: prefix + '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  }
]

export default routes
