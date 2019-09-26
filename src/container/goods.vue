<template>
  <div class="goods">
    <vueWaterfallEasy
      v-if="goods.length > 0"
      ref="waterfall"
      :imgsArr="goods"
      :enablePullDownEvent="true"
      srcKey="imageUrl"
      @click="goDetail"
      @scrollReachBottom="pullUp"
      @pullDownEnd="pullDownEnd">
    </vueWaterfallEasy>
    <div
      v-else
      class="empty"
    > 暂无活动商品</div>
    <div
      @click="back"
      class="back-home"></div>
  </div>
</template>
<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import { getGoods } from '../apis/getGoods';
  import { goDetail } from '../utils'

  export default {
    name: "goods",
    components: {
      vueWaterfallEasy,
    },
    data(){
      return{
        goods: [],
        page: 1,
        pullDownDistance: 0
      }
    },
    methods:{
      getData(){
        const { groupId } = this.$route.query;
        getGoods({
          pageSize: 10,
          currentPageNo: this.page,
          groupId
        }).then(({ data: result = {} })=>{
          const { data = {}, success } = result;
          if (success){
            const { productList = [], } = data;
            this.goods = this.goods.concat(productList);
            this.$refs.waterfall.waterfallOver();
          }
        }).catch((error)=>{
          console.error('error:', error);
        });
      },
      pullUp(){
        this.page = this.page + 1;
        this.getData();
      },
      pullDownEnd(pullDownDistance) {
        if(this.pullDownDistance > 50){
          this.page = 0;
          this.getData();
        }
      },
      goDetail(event, { index, value }){
        const { groupId } = this.$route.query;
        goDetail.bind(this)(value, 'goods', groupId);
      },
      back(){
        this.$router.push({
          path:'/',
        })
      }
    },
    created() {
      this.getData();
    }
  }
</script>

<style scoped>
  .goods{
    height: 100%;
  }
  .frame{
    font-size: 0px;
    text-align: center;
  }
  .img{
    width: 100%;
  }
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
  .empty{
    padding-top: 100px;
    text-align: center;
    font-size: 16px;
    color: #999;
  }
</style>
