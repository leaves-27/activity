<template>
    <div class="goods" v-if="good">
      <div
        :style="{ backgroundImage: 'url(' + good.imageUrl + ')' }"
        class="pic-wrapper"></div>
      <div class="good-detail">
        <div class="goods-name">{{ good.productName }}</div>
        <div class="goods-price">{{ good.priceDesc || '' }}</div>
        <div class="goods-limit">有效期:{{ good.endTime }}</div>
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
          const { source = '' } = this.$route.query || {};
          if (source === 'goods') {
            this.$router.push({
              path:'/goods',
            })
          } else {
            this.$router.push({
              path:'/',
            })
          }
        }
      },
      mounted() {
        const { id, groupId } = this.$route.query || {};
        getGoodDetail(id, groupId).then(({ data: result })=>{
          const { data = {}, success } = result;
          if (success){
            this.good = data;
            const { endTime = '', productId } = data;
            if(endTime){
              const timestamp = (new Date(endTime)).getTime();
              const currentTimeTimestamp = new Date().getTime();
              if (currentTimeTimestamp > timestamp) {
                // alert(`您选择的此商品活动已过期`);
                this.$modal.show({
                  template: `
                    <div>
                      <p style="text-align: center;padding-top:15px;padding-bottom:15px;">{{ text }}</p>
                    </div>
                  `,
                  props: ['text']
                }, {
                  text: '您选择的此商品活动已过期'
                }, {
                  height: 'auto',
                  width: '90%'
                });
                // this.$modal.show('您选择的此商品活动已过期');
                return;
              }
            }
          }
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
            text-align center
            overflow hidden
            height 230px
            background-color #ffffff
            background-repeat no-repeat
            background-position center center
            background-size 100% auto

        .goods-name
            background #ffffff
            line-height 22px
            padding-left 12px
            text-align left
            color #000000
            font-size 14px
        .
            background #ffffff
            text-align left
            padding-left 12px
            line-height 27px
            font-size 16px
            color #ff3d00
            font-weight 600

        .price-desc
          background #ffffff
          line-height 22px
          padding-left 12px
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

    .good-detail
        padding-top 15px
        padding-bottom 5px
        background-color #ffffff
</style>
