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
  import axios from 'axios';
  import _ from 'lodash';

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
      imgPath(){
        return `static/img/${pageId.toLowerCase()}/${goodId}.jpg`;
      }
    },
    methods:{
      getImagePath(id){
        const pageId = id.split('_')[1];
        const goodId = id;
        // console.log();
        return `static/img/${pageId.toLowerCase()}/${goodId}.jpg`;
      },
      createSheetNames(){
        const arr  = [];
        for(let i = 1; i <= 12; i++ ){
          arr.push('P'+i);
        }
        return arr;
      },
      getRequest(){
        const arr = [];
        const sheetNames = this.createSheetNames();
        sheetNames.forEach((item)=>{
          arr.push(axios.get(`/static/json/${item}.json`))
        });
        return arr;
      },
      getData(id){
        if (id==='1') {
          Promise.all(this.getRequest()).then((results = [])=>{
            const pages = [];
            results.forEach((item) => {
              const { data = [] } = item;
              pages.push(...data);
            });
            this.pages.push(...pages);
          })
        } else {
          const pages = [];
          axios.get(`/static/json/Korea.json`).then((result)=>{
            const pages = [];
            results.forEach((item) => {
              const { data = [] } = item;
              pages.push(...data);
            });
            this.pages.push(...pages);
          });
        }
      }
    },
    mounted() {
      this.getData('1');
      this.getData('2');
    }
  }
</script>

<style scoped>
  .good{
    display: flex;
  }
  .good_item{
    width: 50%;
  }
  .good_item img{
    width: 100%;
  }


</style>
