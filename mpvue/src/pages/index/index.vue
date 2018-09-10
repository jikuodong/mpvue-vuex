<template>
  <div class="container">
    <i-notice-bar icon="systemprompt">
      2018年世界杯,将于6月14日至7月15日举行
    </i-notice-bar>
    <i-alert type="warning" show-icon>
      An warning prompt
    </i-alert>
    <i-button @click="login" type="success" shape="circle" size="default">登录</i-button>
    <i-button @click="saoma" type="default" shape="circle" size="default">测试扫码</i-button>
    <div class="a">{{ceshi}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'isIphoneX',
      'ceshi'
    ])
  },
  methods: {
    saoma () {
      console.log('1111')
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },
    // 请求数据 测试模态框
    login () {
      console.log('ddd')
      wx.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  onLoad () {
    console.log('qqqq')
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        that.$store.dispatch('setMobileModel', res.model)
      }
    })
    that.$store.dispatch('ceshi1', 2222)
  }
}
</script>
<!--使用stylus-->
<style lang="stylus" rel="stylesheet/stylus">
  .a
    background-color red
    height 100px
</style>
