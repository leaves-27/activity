<template>
  <div v-if="pages.length > 0" >
    <div class="good">
      <div class="good_item">
        <img :src="getImagePath(item.id)"  v-for="item in itemsA" />
      </div>
      <div class="good_item">
        <img :src="getImagePath(item.id)" v-for="item in itemsB"/>
      </div>
    </div>
  </div>
</template>
<script>
  import getGoods from '../mock/getGoods';

  export default {
    name: "goods",
    data(){
      return{
        pages: [],
      }
    },
    computed: {
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
        const categoryId = '';
        const pageId = id.split('_')[1];
        const goodId = id;
        const { name } = this.pages.find((item)=>{
          return item.id === categoryId;
        });
        return `static/img/${name}/${pageId.toLowerCase()}/${goodId}.jpg`;
      },
      getData(){
        getGoods().then((result)=>{
          const { data = [] } = result;
          data.forEach((item) => {
            const { items = {} } = item;
            Object.keys(items).forEach((subItem)=>{
              const goods = items[subItem] || [];
              this.pages.push(...goods);
            })
          });
        }).catch((error)=>{
          console.error('error:', error);
        });
      },
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
