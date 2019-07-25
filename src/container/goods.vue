<template>
    <div class="goods">
      <div class="pic-wrapper">
          <img
                  style="width: 100%"
                  :src="goodsDetail.imgPath" alt="">
      </div>
        <div class="goods-name">{{goodsDetail.name}}</div>
        <div class="goods-price">{{goodsDetail.price}}</div>
        <div class="goods-limit">有效期:{{goodsDetail.limit}}</div>
    </div>
</template>

<script>
    export default {
        name: "goods",
        data(){
            return{
                goodsId:this.$route.query.goodsId,
                goodsDetail:{}
            }
        },
        mounted() {
            this._goodsApply(this.goodsId)
        },
        methods:{
            _goodsApply(n){
               let goodsList = [
                   {
                       name:'双鹿碱性绿能量5号电池(4粒)一卡',
                       price:'￥5.00/组',
                       desc:'超值换购',
                       limit:'2019.7.9-2019.7.18',
                       imgPath:'./static/img/goods1.jpg'
                   },
                   {
                       name:'威龙橡木桶7年陈酿蛇龙珠干红葡萄酒750ml',
                       price:'￥89.00/瓶',
                       desc:'加1元多1件',
                       limit:'2019.7.9-2019.7.18',
                       imgPath:'./static/img/goods2.jpg'
                   },
                   {
                       name:'微果桃汁/苹果汁/芒果果汁/橙汁饮料1L',
                       price:'￥19.60/瓶',
                       desc:'加1元多1件',
                       limit:'2019.7.9-2019.7.18',
                       imgPath:'./static/img/goods3.jpg'
                   },
                   {
                       name:'百梁桥外婆de柴火饭10kg',
                       price:'￥128.80/袋',
                       desc:'加1元多1件',
                       limit:'2019.7.9-2019.7.18',
                       imgPath:'./static/img/goods4.jpg'
                   }
               ]
               this.goodsDetail = goodsList[n]
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
