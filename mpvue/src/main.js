import Vue from 'vue'
import App from './App'
import store from './stores/global-store'

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载store
Vue.prototype.$store = store

// 挂载flyio
const baseURL = process.env.API_BASE_URL
const Flyio = require('flyio/dist/npm/wx')
const fly = new Flyio()
fly.config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  baseURL: baseURL,
  parseJson: true
}
// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    return response.data
  }, (err) => {
    // 发生网络错误后会走到这里
    // todo 后台返回的代码，进行对应的处理
    if (err.status === 401) {
      // 需要重新登录
      wx.redirectTo({url: '/pages/login/main'})
    }
    return Promise.reject(err.response.data)
  }
)
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  request.headers['Authorization'] = wx.getStorageSync('access_token')
})
Vue.prototype.$http = fly

const app = new Vue(App)
app.$mount()
