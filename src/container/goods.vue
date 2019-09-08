<template>
  <div class="goods">
    <vueWaterfallEasy
      ref="waterfall"
      :imgsArr="goods"
      :enablePullDownEvent="true"
      @scrollReachBottom="getData"
    >
      <div class="frame" slot-scope="props">
        <img
          :src="props.value.imageUrl"
          @click="goDetail(props.value)"
          class="img"
        />
      </div>
    </vueWaterfallEasy>
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
      getData(actId){
        getGoods(this.page, 20, actId).then(({ data: result = {} })=>{
          const { data = {}, success } = result;
          if (success){
            const { productList = [], } = data;
            this.goods = this.goods.concat(productList);
            this.page++;
          }
        }).catch((error)=>{
          console.error('error:', error);
        });
      },
      pullDownMove(pullDownDistance) {
        this.pullDownDistance = pullDownDistance
      },
      pullDownEnd(pullDownDistance) {
        console.log('pullDownEnd');
        if(this.pullDownDistance > 50){
          alert('下拉刷新')
        }
        this.pullDownDistance = 0
      },
      goDetail(good){
        const { actId } = this.$route.query;
        goDetail.bind(this)(good, 'goods', actId);
      },
      back(){
        this.$router.push({
          path:'/',
        })
      }
    },
    created() {
      const { actId } = this.$route.query;
      this.getData(actId);
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
</style>
