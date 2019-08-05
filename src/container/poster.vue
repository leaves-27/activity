<template>
    <div class="poster" >
      <div
        ref="poster"
        class="poster_main">
          <div
            :style="{ width: boxWidth + 'px' }"
            class="container">
            <div
              v-for="(item, index) in pages"
              class="goods"
              :style="{
                backgroundImage: getBackgroundImage(item.id),
              }">
              <div
                v-for="(subItem, subIndex) in item.items"
                @click="goDetail(subItem.id)"
                :class="`good-item ${name}-good-item_${index + 1}-${subIndex + 1}`"></div>
            </div>
          </div>
      </div>
      <div class="poster_footer">
        <div class="footer_left">
          <div
            class="footer_button menu-block"
            @click="isVisible = !isVisible"></div>
        </div>
        <div class="footer_middle">
          <div class="paging">{{ page }}/{{ pages.length }}</div>
        </div>
        <div class="footer_right">
          <div
            @click="goGoods"
            class="footer_button nav-block"></div>
        </div>
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
    import BScroll from 'better-scroll';
    import VueScroller from 'vue-scroller'
    import { getBrowserInterfaceSize, getCookie, setCookie, getMenus} from '../utils';
    import Menu from '../components/menu';
    // import getGoods from '../mock/getGoods';
    import getGoods from '../apis/getGoods';
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
    import '../style/korea-page-1.css';
    import '../style/korea-page-2.css';
    import '../style/korea-page-3.css';
    import '../style/korea-page-4.css';

    export default {
        name: "poster",
        components: {
          Menu,
        },
        data(){
            const { pageHeight } = getBrowserInterfaceSize();
            return {
                menus: getMenus(),
                originPages: {},
                selectedId: '1',
                page: 1,
                isVisible:false,
                bs: null,
                pageHeight,
            }
        },
        computed: {
          name(){
            const { name = '' } = this.menus.find((item) => {
              return item.id === this.selectedId;
            });
            return name;
          },
          pages(){
            // const { items = {} } = this.menus.find((item) => {
            //   return item.id === this.selectedId;
            // }) || {};
            const arr = [];
            Object.keys(this.originPages).forEach((item)=>{
              arr.push({
                id: item,
                items: this.originPages[item]
              });
            });
            return arr;
          },
          boxWidth(){
            const len = Object.keys(this.pages).length;// 当前页数
            return this.itemWidth  * len;
          },
          itemWidth(){
            const image = {
              width: 1536,
              height: 2186,
            };
            return (image.width/(image.height/ this.pageHeight)).toFixed(0);
          },
        },
        methods:{
          goDetail(goodId){
              const names = goodId.split('_') || [];
              const pageId = names[2];

              // const { items = {} } = this.menus.find((item)=>{
              //   return item.id === this.selectedId;
              // }) || [];
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
                  categoryId: this.selectedId,
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
                return;
              }
              const bs = new BScroll(this.$refs['poster'],{
                scrollX: true,
                probeType: 3,
                click: true,
                bounce: true,
                momentumLimitDistance: 5
              });
              bs.on('scroll', (pos) => {
                const { x: scrollDistance } = pos;
                const scrollX = Math.abs(scrollDistance);
                this.page = Math.floor(scrollX / this.itemWidth) + 1;
              });
              this.bs = bs;
            },
            getBackgroundImage(pageName){
              const { name } = this.menus.find((item)=>{
                return item.id === this.selectedId;
              });
              return `url(/static/img/${name}/${pageName.toLowerCase()}/${pageName.toLowerCase()}.jpg)`;
            },
            selectHandler(id){
              this.selectedId = id;
              this.isVisible = false;
              const { startIndex } = this.menus.find((item)=>{
                return item.id === id;
              });
              const x = -1 * (startIndex - 1) * this.itemWidth;
              this.bs.scrollTo(x, 0);
            },
            getData(){
              getGoods().then((result)=>{
                const { data } = result;
                this.originPages = data;

                this.initScroll();
                const { id } = this.menus[0] || {};
                this.selectedId = id;

              }).catch((error)=>{
                console.error('error:', error);
              });
            },
            onBridgeReady() {
              WeixinJSBridge.call('hideToolbar');
              WeixinJSBridge.call('hideOptionMenu');
              const { pageHeight } = getBrowserInterfaceSize();
              this.pageHeight = pageHeight;
              this.getData();
            },
            isWeiXin(){
              var ua = window.navigator.userAgent.toLowerCase();
              if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/Windows Phone/i) == 'windows phone'){
                return true;
              }else{
                return false;
              }
            }
        },
        mounted() {
          if(this.isWeiXin()){
            document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady);
          } else {
            this.getData();
          }
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
    width: 100%
    height: 100%;
  }

  .container{
    display flex
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
  .poster_footer{
    display: flex;
    width: 100%;
    height: 38px;
    position: fixed;
    bottom: 15px;
    left: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
  .footer_left{
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .footer_middle{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer_right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .footer_button{
    height 38px
    width 38px
    background #515151
    z-index 999999
    border-radius 19px
  }
  .menu-block{
    background rgba(0,0,0,.6) url("../assets/nav.svg")no-repeat center /24px 24px
  }
  .nav-block{
    background rgba(0,0,0,.6) url("../assets/menu.svg")no-repeat center /24px 24px
  }
  .paging{
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
