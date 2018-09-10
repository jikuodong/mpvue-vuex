// 获取state中的值
export default {
  getMobileModel (state) {
    return state.mobileModel
  },
  // 判断是否Iphonex
  isIphoneX (state, getters) {
    return getters.getMobileModel.startsWith('iPhone X')
  },
  ceshi (state) {
    console.log('aaaaa')
    console.log(state)
    return state.ceshi2
  }
}
