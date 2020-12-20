import './public-path.ts'
import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route } from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

let router = null
let instance: any = null
const _window: any = window

function render ({ container }: any = {}) {
  router = new VueRouter({
    // 子模块是 hash mode 路由时，处理basi url
    // base: _window.__POWERED_BY_QIANKUN__ ? '/qiankun-sub' : '/',
    // mode: 'history',
    routes
  })

  // 主程序 和 子程序 都是 hash mode 时，需要处理url
  // 判断 qiankun 环境则进行路由拦截，判断跳转路由是否有 /micro 开头前缀，没有则加上
  if (_window.__POWERED_BY_QIANKUN__) {
    router.beforeEach((to, from, next) => {
      if (!to.path.includes('/micro')) {
        next({
          path: '/micro/qiankun-sub' + to.path
        })
      } else {
        next()
      }
    })
  }

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#qiankun-sub') : '#qiankun-sub')
}

// 本地调试
if (!_window.__POWERED_BY_QIANKUN__) {
  render()
}

// 导出生命周期
export async function bootstrap () {
  console.log('vue app bootstraped')
}

export async function mount (props: any) {
  console.log('props from main framework', props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
