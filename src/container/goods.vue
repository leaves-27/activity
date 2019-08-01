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
    </div>
  </div>
</template>
<script>
  import getGoods from '../apis/getGoods';

  export default {
    name: "goods",
    data(){
      return{
        menus: [],
      }
    },
    computed: {
      pages(){
        const data = this.menus;
        const arr = [];
        data.forEach((item) => {
          const { items = {} } = item;
          Object.keys(items).forEach((subItem)=>{
            const goods = items[subItem] || [];
            arr.push(...goods);
          })
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

        return `/static/img/${categoryName}/${pageId.toLowerCase()}/${goodId}.jpg`;
      },
      getData(){
        getGoods().then((result)=>{
          const { data = [] } = result;
          this.menus.push(...data);
        }).catch((error)=>{
          console.error('error:', error);
        });
      },
      goDetail(id){
        const items = id.split('_') || [];
        const categoryName = items[1];
        const pageId = items[2];
        const category = this.menus.find((item) => {
          return item.name === categoryName;
        }) || {};
        const categoryId = category.id;

        this.$router.push({
          path:'/good-detail',
          query:{
            categoryId,
            pageId,
            goodId: id
          }
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


</style>
