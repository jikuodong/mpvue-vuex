// 这里要注意不要在mutations里面进行异步操作，只是用来改变state的值
import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.ADD_MOBILE_MODEL] (state, payload) {
    Vue.set(state, 'mobileModel', payload.model)
  },
  [types.CESHI] (state, payload) {
    Vue.set(state, 'ceshi2', payload)
  }
}
