<template>
  <div class="mask-layer" v-show="isVisible">
    <div class="nav-list-wrapper" :class="{ active: isVisible }">
      <p class="nav-title">目录 <span class="close" @click="isVisible = false"></span></p>
      <div class="nav-container" ref="nav">
        <ul class="nav-list-content">
          <li class="nav-item active">超值特惠</li>
          <li class="nav-item">首单立减</li>
          <li class="nav-item">商城活动</li>
          <li class="nav-item">优惠券</li>
          <li class="nav-item">降价商品</li>
          <li class="nav-item">5折优惠</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isVisible:false,
      }
    },
    computed: {
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style scoped lang="stylus">
  .block-item
    position fixed
    height 38px
    width 38px
    background #515151
    z-index 999999
    border-radius 19px
    &.menu-block
      bottom 15px
      left 15px
      background rgba(0,0,0,.6) url("../assets/nav.svg")no-repeat center /24px 24px
    &.nav-block
      bottom 15px
      right 15px
      background rgba(0,0,0,.6) url("../assets/menu.svg")no-repeat center /24px 24px


  .mask-layer
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,.4)
    &.fade-enter-active, &.fade-leave-active
      transition opacity .5s
    &.fade-enter, &.fade-leave-to
      opacity 0

    .nav-list-wrapper
      width 172px
      height 100%
      background #ffffff
      text-align left
      transform translate3d(-100%,0,0)
      transition transform .3s ease
      &.active
        transform translate3d(0,0,0)
        transition transform .3s ease
      .nav-title
        position relative
        padding-left 22px
        height 52px
        line-height 52px
        font-size 16px
        color #000000
        .close
          position absolute
          right 11px
          top 15px
          display inline-block
          height 24px
          width 24px
          background url("../assets/close.svg") no-repeat center /24px 24px
      .nav-container
        height calc(100% - 52px)
        overflow hidden

        .nav-list-content
          height 101%
          .nav-item
            height 32px
            line-height 32px
            font-size 14px
            padding-left 22px
            &:active
              background #dedadc
            &.active
              background #dedadc url("../assets/hot.svg") no-repeat calc(100% - 22px) /17px auto


</style>
