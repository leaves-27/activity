<template>
    <div class="poster" >
      <div
        ref="poster"
        class="poster_main">
          <div
            :style="{ width: boxWidth + 'px' }"
            class="container" >
            <div
              v-for="(item, index) in formatPages"
              class="goods"
              :style="{
                backgroundImage: getBackgroundImage(item),
              }"
            >
              <div
                v-for="(subItem, subIndex) in item.items"
                @click="clickHanlder(item.id, subItem.id)"
                :class="`good-item good-item_${index + 1}-${subIndex + 1}`"></div>
            </div>
          </div>
      </div>
      <div class="poster_footer">
        <div
          class="footer_button menu-block"
          @click="isVisible = !isVisible"></div>
        <div class="paging">{{ page }}/{{ pages.length }}</div>
        <div
          @click="goGoods"
          class="footer_button nav-block"></div>
      </div>
      <transition name="fade">
        <Menu
          :menus="menus"
          :selected-id="selectedId"
          :is-visible="isVisible"
          @select="selectHandler"
          @menuHide="isVisible = false" />
      </transition>
    </div>
</template>

<script>
    import axios from 'axios';
    import BScroll from 'better-scroll'
    import Menu from '../components/menu';
    import { getPages, createSheetNames } from '../utils';
    import '../style/page-1.css';
    import '../style/page-2.css';
    import '../style/page-3.css';
    import '../style/page-4.css';
    import '../style/page-5.css';
    import '../style/page-7.css';
    import '../style/page-8.css';
    import '../style/page-9.css';
    import '../style/page-10.css';
    import '../style/page-11.css';

    export default {
        name: "poster",
        components: {
          Menu,
        },
        data(){
            const pages = getPages();
            return {
                pages,
                page2: {
                  'Korea': []
                },
                menus: [{
                  id: '1',
                  name: '超值特惠'
                }, {
                  id: '2',
                  name: '韩国节'
                }],
                selectedId: '1',
                page: 1,
                isVisible:false,
            }
        },
        computed: {
          formatPages(){
            let page;
            switch (this.selectedId) {
              case '2':
                page = this.page2;
                break;
              default:
                page = this.pages;
            }
            const arr = [];
            Object.keys(page).forEach((item) => {
              arr.push({
                id: item,
                items: page[item]
              })
            });
            return arr;
          },
          boxWidth(){
            const len = Object.keys(this.pages).length;
            return this.itemWidth  * len;
          },
          itemWidth(){
            const image = {
              width: 1536,
              height: 2186,
            };

            return (image.width/(image.height/window.innerHeight)).toFixed(0);
          }
        },
        methods:{
            clickHanlder(pageId, goodId){
              const items = this.pages[pageId] || [];

              const { limit = '' } = items.find((item)=>{
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
                  pageId,
                  goodId
                }
              })
            },
            goGoods(){
              this.$router.push({
                path:'/goods'
              })
            },
            initScroll(){
              if (!this.$refs['poster']) {
                return
              }
              const bs = new BScroll(this.$refs['poster'],{
                click: true,
                scrollX: true,
                probeType: 3,
                useTransition: false,  // 防止iphone微信滑动卡顿
                bounce: true,
                momentumLimitDistance: 5
              });
              bs.on('scroll', (pos) => {
                const { x: scrollDistance } = pos;
                const scrollX = Math.abs(scrollDistance);
                this.page = Math.floor(scrollX / this.itemWidth) + 1;
              });
            },

            getBackgroundImage(item){
              return `url(/static/img/page/${item.id}.jpg)`;
            },
            selectHandler(id){
              this.selectedId = id;
              this.page = 1;
              this.isVisible = false;
              this.getData(id);
            },
            getRequest(){
              const arr = [];
              const sheetNames = createSheetNames();
              sheetNames.forEach((item) => {
                arr.push(axios.get(`/static/json/${item}.json`))
              });
              return arr;
            },
            getData(id){
              if (id === '1') {
                Promise.all(this.getRequest()).then((results = [])=>{
                  results.forEach((item) => {
                    const { data = [] } = item;
                    if (data.length > 0){
                      const { id = '' } = data[0] || {};
                      const pageId = id.split('_')[1];
                      this.pages[pageId].splice(0, this.pages[pageId].length);
                      this.pages[pageId].push(...data);
                    }
                  });
                })
              } else {
                axios.get(`/static/json/Korea.json`).then((result)=>{
                  const { data = [] } = result;
                  if (data.length > 0){
                    const { id = '' } = data[0] || {};
                    const pageId = id.split('_')[1];
                    console.log('data:', data);
                    console.log('pageId:', pageId);
                    this.page2[pageId].splice(0, this.page2[pageId].length);
                    this.page2[pageId].push(...data);
                  }
                });
              }
            }
        },
        mounted() {
          this.initScroll();
          const { id } = this.menus[0] || {};
          this.selectedId = id;
          this.getData(id);
        }
    }
</script>

<style scoped lang="stylus">
  .poster{
    position absolute
    width 100%
    height 100%
    overflow hidden
  }

  .poster_main{
    height: 100%;width: 100%
  }

  .container{
    display flex
    width 300%
    height 100%
  }

  .goods{
    flex 1
    height 100%
    position relative;
    background-repeat: no-repeat;
    background-positon: center;
    background-size: contain;
  }
  .good-item{
    /*border: 1px solid #ff3d00;*/
    position: absolute;
  }
  .footer_button{
    position fixed
    height 38px
    width 38px
    background #515151
    z-index 999999
    border-radius 19px
  }
  .menu-block{
    bottom 15px
    left 15px
    background rgba(0,0,0,.6) url("../assets/nav.svg")no-repeat center /24px 24px
  }
  .nav-block{
    bottom 15px
    right 15px
    background rgba(0,0,0,.6) url("../assets/menu.svg")no-repeat center /24px 24px
  }
  .paging{
    position fixed
    bottom 24px
    left calc(50% - 26px)
    background rgba(0,0,0,.6)
    border-radius 12px
    color #ffffff
    text-align center
    height 24px
    width 52px
    font-size 12px
    line-height 24px
    z-index 100000
  }
</style>
