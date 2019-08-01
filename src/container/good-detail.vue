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
  import getGoods from '../apis/getGoods';
  export default {
      name: "good-detail",
      data(){
          return{
            menus: []
          }
      },
      computed: {
        good(){
          const { pageId = '', goodId = '', categoryId = '' } = this.$route.query || {};
          // 找出当前分类
          const { items = [], name } = this.menus.find((item)=>{
            return item.id === categoryId;
          }) || {};
          // 找出当前页
          const goods = items[pageId] || [];

          // 找出当前商品
          const good = goods.find((item)=>{
            return item.id == goodId;
          }) || {};

          const newGoodId = goodId.replace(name + '_', '');

          return {
            ...good,
            imgPath: `/static/img/${name}/${pageId.toLowerCase()}/${newGoodId}.jpg`
          };
        }
      },
      mounted() {
        getGoods().then((result)=>{
          const { data } = result;
          this.menus.push(...data);
        }).catch((error)=>{
          console.error('error:', error);
        });
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
            padding-bottom 20px
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
