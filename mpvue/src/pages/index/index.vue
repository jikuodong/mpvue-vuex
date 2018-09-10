<template>
  <div class="container">
    <i-button @click="login" type="success" shape="circle" size="default">登录</i-button>
    <i-button @click="ceshi" type="default" shape="circle" size="default">测试</i-button>
    <div class="a">
      {{ceshi}}
    </div>
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
    ceshi1 () {
      let payload = {
        vue: this,
        ceshidata: 2222
      }
      this.$store.dispatch('ceshi', payload).then(data => {
        console.log('rrrrr')
        console.log(data)
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
