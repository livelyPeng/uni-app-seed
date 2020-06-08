import Vue from 'vue'
import App from './App'
import { http, plRouter, routerConfig } from './config'
import store from './store'
import { accountModule, homeModule } from './pages/index.js' // 采坑日记： 不能直接./pages, 必须加index.js  // 只针对pages文件夹
import './common/permission' // 权限

// 注入模块/store
Vue.use(accountModule, {store, routerConfig})
Vue.use(homeModule, {store, routerConfig})

// 注入$http服务
Vue.use(http)

// 勿删（采坑日记， 对小程序端很重要）
Vue.prototype.$plRouter = plRouter
Vue.prototype.$store = store
// 在需要使用路由配置表的时候，直接 this.$routerConfig.路由对象
Vue.prototype.$routerConfig = store.state.routerConfig
Vue.config.productionTip = false

console.log('author: pengLei, 博客站www.plblog.cn， uni-app种子')

// 勿删
App.mpType = 'app'

// 这个写法在APP上无法识别 屏幕会直接白屏
// new Vue({
//     // render: h => h(App) 这样的方式不要使用 （采坑日记， 小程序有问题）
//     ...App
// }).$mount('#app')
const app = new Vue({
    store,
    ...App
})
app.$mount()
