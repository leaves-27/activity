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
      <div
        @click="back"
        class="back-home"></div>
    </div>

</template>
<script>
  import getGoods from '../apis/getGoods';
  import { getMenus} from '../utils';
  export default {
      name: "good-detail",
      data(){
          return{
            menus: getMenus(),
            pages: {}
          }
      },
      computed: {
        good(){
          const { pageId = '', goodId = '' } = this.$route.query || {};
          const name = 'preferential';
          // 找出当前页
          const goods = this.pages[pageId] || [];
          // 找出当前商品
          const good = goods.find((item)=>{
            return item.id == goodId;
          }) || {};

          const newGoodId = goodId.replace(name + '_', '');

          return {
            ...good,
            imgPath: `/static/img/${name}/${pageId.toLowerCase()}/${newGoodId.replace('p', 'P')}.jpg`
          };
        }
      },
      methods: {
        back(){
          const { source = '' } = this.$route.query || {};
          if (source === 'goods') {
            this.$router.push({
              path:'/goods',
            })
          } else {
            this.$router.push({
              path:'/poster',
            })
          }
        }
      },
      mounted() {
        getGoods().then((result)=>{
          const { data } = result;
          this.pages = data;
        }).catch((error)=>{
          console.error('error:', error);
        });
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
