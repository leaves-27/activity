<template>
  <div class="mask-layer" v-show="isVisible" @click="$emit('menuHide', false)">
    <div class="nav-list-wrapper" :class="{ active: isVisible }">
      <p class="nav-title">目录 <span class="close" @click="$emit('menuHide', false)"></span></p>
      <div class="nav-container" ref="nav">
        <ul class="nav-list-content">
          <li
            v-for="item in menus"
            class="nav-item"
            :class="{
              'active':item.id === selectedId
            }"
            @click="$emit('select', item.id)">
            {{ item.desc  }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['isVisible', 'menus', 'selectedId'],
    computed: {},
    methods:{},
  }
</script>

<style scoped lang="stylus">
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
