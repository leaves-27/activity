<template>
    <div class="goods">
      <div class="pic-wrapper">
          <img
              style="width: 100%"
              :src="good.imgPath" alt="">
      </div>
      <div class="goods-name">{{good.name}}</div>
      <div class="goods-price">{{good.price}}</div>
      <div class="goods-limit">有效期:{{good.limit}}</div>
    </div>
</template>

<script>
  import goods from '../goods';
    export default {
        name: "goods",
        data(){
            return{
                goodsId: this.$route.query.goodsId,

            }
        },
        computed: {
          good(){
            return this.getDetail(this.goodsId)
          }
        },
        methods:{
          getDetail(id){
              goods.find(()=>{
                return item.id == id;
              })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .goods
        position absolute
        height 100%
        width 100%
        background #f2f2f2
        .pic-wrapper
            background #ffffff
        .goods-name
            background #ffffff
            height 22px
            line-height 22px
            padding-left 12px
            text-align left
            color #000000
            font-size 14px
        .goods-price
            background #ffffff
            height 27px
            text-align left
            padding-left 12px
            line-height 27px
            font-size 16px
            color #ff3d00
            font-weight 600
            border-bottom 1px dashed #7e8c8d
        .goods-limit
            height 34px
            line-height 34px
            font-size 14px
            padding-left 12px
            background #ffffff
            text-align left
            padding-left 12px
            color #7e8c8d

</style>
