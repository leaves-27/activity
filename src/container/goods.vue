<template>
  <div v-if="pages.length > 0" >
    <div class="good">
      <div class="good_item">
        <img
          v-for="item in itemsA"
          :src="getImagePath(item.id)"
          @click="goDetail(item.id)" />
      </div>
      <div class="good_item">
        <img
          v-for="item in itemsB"
          :src="getImagePath(item.id)"
          @click="goDetail(item.id)"
        />
      </div>
      <div
        @click="back"
        class="back-home"></div>
    </div>
  </div>
</template>
<script>
  import getGoods from '../apis/getGoods';
  import { getMenus} from '../utils';

  export default {
    name: "goods",
    data(){
      return{
        menus: getMenus(),
        originPages: {}
      }
    },
    computed: {
      pages(){
        // const data = this.menus;
        const arr = [];
        Object.keys(this.originPages).forEach((subItem)=>{
          const goods = this.originPages[subItem] || [];
          arr.push(...goods);
        });
        return arr;
      },
      itemsA() {
        const items = [];

        this.pages.forEach((item, index)=>{
          if(index % 2 === 0){
            items.push(item);
          }
        });

        return items;
      },
      itemsB() {
        const items = [];

        this.pages.forEach((item, index)=>{
          if(index % 2 !== 0){
            items.push(item);
          }
        });

        return items;
      },
    },
    methods:{
      getImagePath(id){
        const items = id.split('_') || [];
        const categoryName = items[1];
        const pageId = items[2];
        const goodId = id.replace(categoryName + '_', '');

        return `/static/img/${categoryName}/${pageId.toLowerCase()}/${goodId.replace('p', 'P')}.jpg`;
      },
      getData(){
        getGoods().then((result)=>{
          const { data = {} } = result;
          this.originPages = data;
          // this.menus.push(...data);
        }).catch((error)=>{
          console.error('error:', error);
        });
      },
      goDetail(goodId){
        const names = goodId.split('_') || [];
        const categoryName = names[1];
        const pageId = names[2];
        const category = this.menus.find((item) => {
          return item.name === categoryName;
        }) || {};
        const categoryId = category.id;
        const { limit = '' } = this.originPages[pageId].find((item)=>{
          return goodId === item.id
        }) || {};
        const dates = limit.split('-');
        const date = dates[1];

        if(date){
          const timestamp = (new Date(date.replace('.','-'))).getTime();
          const currentTimeTimestamp = new Date().getTime();
          if (currentTimeTimestamp > timestamp) {
            alert(`您选择的此商品活动已过期`);
            return;
          }
        }

        this.$router.push({
          path:'/good-detail',
          query:{
            categoryId,
            pageId,
            goodId
          }
        })
      },
      back(){
        this.$router.push({
          path:'/',
        })
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped>
  .good{
    display: flex;
  }
  .good_item{
    width: 50%;
    font-size: 0px;
  }
  .good_item img{
    width: 100%;
    border: 1px solid #ffffff;
    border-top: none;
    display: block;
    font-size: 0px;
    line-height: normal;
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
