// 可以进行异步操作，如果需要改变states，则必须通过commit调用mutations
import * as types from './mutation-types'

export default {
  // 设置手机型号到数据中心
  setMobileModel ({ commit }, model) {
    commit(types.ADD_MOBILE_MODEL, {
      model: model
    })
  },
  ceshi1 ({commit}, payload) {
    console.log('wwww')
    console.log(payload)
    commit(types.CESHI, payload)
  }
}
