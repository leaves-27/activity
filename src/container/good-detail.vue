<template>
    <div class="goods" v-if="good">
      <div
        :style="{
          backgroundImage: `url('${good.imageUrl}')`
        }"
        class="pic-wrapper"></div>
      <div class="good-detail">
        <div class="goods-name">{{ good.productName }}</div>
        <div class="goods-price">{{ good.priceDesc || '' }}</div>
        <div class="goods-limit">有效期: {{ good.startTime }} ~ {{ good.endTime }}</div>
        <div class="goods-desc">{{ good.productDesc }}</div>
      </div>
      <div
        @click="back"
        class="back-home"></div>
    </div>

</template>
<script>
  import getGoodDetail from '../apis/getGoodDetail';
  export default {
      name: "good-detail",
      data(){
          return{
            good: null
          }
      },
      methods: {
        back(){
          this.$router.back();
        }
      },
      mounted() {
        const { id, groupId } = this.$route.query || {};
        getGoodDetail(id, groupId).then(({ data: result })=>{
          const { data = {}, success } = result;
          if (success){
            this.good = data;
          }
        }).catch((error)=>{
          console.error('error:', error);
        });
      },
      beforeRouteLeave (to, from, next) {
        to.meta.keepAlive = true;
        next();
      }
  }
</script>

<style scoped lang="stylus">
    .back-home{
      position: fixed;
      bottom: 15px;
      right: 15px;
      height: 38px;
      width: 38px;
      background: #515151;
      z-index: 999999;
      border-radius: 19px;
      background: rgba(0,0,0,.6) url("../assets/menu.svg")no-repeat center /24px 24px;
    }
    .goods
        position absolute
        height 100%
        width 100%
        background #f2f2f2
        .pic-wrapper
            text-align center
            overflow hidden
            height 260px
            background-color #ffffff
            background-repeat no-repeat
            background-position center center
            background-size contain

        .goods-name
            background #ffffff
            line-height 22px
            padding-left 12px
            text-align left
            color #000000
            font-size 14px
        .goods-price
            background #ffffff
            text-align left
            padding-left 12px
            padding-right 12px
            line-height 27px
            font-size 16px
            color #ff3d00
            font-weight 600
            white-space: pre-wrap;
            word-wrap: break-word;
            word-break: break-all;

        .price-desc
          background #ffffff
          line-height 22px
          padding-left 12px
          padding-right 12px
          text-align left
          color #000000
          font-size 14px

        .goods-limit
            border-top 1px dashed #7e8c8d
            height 34px
            line-height 34px
            font-size 14px
            padding-left 12px
            background #ffffff
            text-align left
            padding-left 12px
            color #7e8c8d

        .goods-desc
          background #ffffff
          line-height 22px
          padding-left 12px
          padding-right 12px
          text-align left
          color #000000
          font-size 14px
          white-space: pre-wrap;
          word-wrap: break-word;
          word-break: break-all;

    .good-detail
        padding-top 15px
        padding-bottom 5px
        background-color #ffffff
</style>
