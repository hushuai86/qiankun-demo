import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

// 渲染主应用, #app为主应用根元素
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 构建子应用, #micro-app为子应用容器
const microApps = [
  {
    name: 'qiankun-sub',
    entry: '//localhost:8081',
    container: '#appContainer',
    activeRule: '#/micro/qiankun-sub'
  }
]
// 注册子应用
registerMicroApps(microApps)

// 启动微服务
start()
