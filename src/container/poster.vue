<template>
    <div class="poster" >
      <div
        ref="poster"
        class="poster_main">
          <div
            :style="{ width: boxWidth + 'px' }"
            class="container" >
            <div
              v-for="(item, index) in pages"
              class="goods"
              :style="{
                backgroundImage: getBackgroundImage(item),
              }"
            >
              <div
                v-for="(subItem, subIndex) in item.items"
                @click="clickHanlder(subItem)"
                :class="`good-item good-item_${index + 1}-${subIndex + 1}`"></div>
            </div>
          </div>
      </div>
      <div class="poster_footer">
        <div
          class="footer_button menu-block"
          @click="isVisible = !isVisible"></div>
        <div class="paging">{{ page }}/{{ pages.length }}</div>
        <div class="footer_button nav-block"></div>
      </div>
      <transition name="fade">
        <Menu
          :is-visible="isVisible"
          @menuHide="isVisible = false" />
      </transition>
    </div>
</template>

<script>
    import axios from 'axios';
    import BScroll from 'better-scroll'
    import Menu from '../components/menu';
    // import pages from '../pages'
    import '../style/page-1.css';

    export default {
        name: "poster",
        components: {
          Menu,
        },
        data(){
            return {
                isVisible:false,
                page: 1,
                pages: []
            }
        },
        computed: {
          boxWidth(){
            return this.itemWidth  * this.pages.length;
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
            clickHanlder(){
              if(isPeriod){
                alert(`您选择的此商品活动已过期`);
                return;
              }
              this.$router.push({
                path:'/goods',
                query:{
                  goodsId: n
                }
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
            createSheetNames(){
              const arr  = [];
              for(let i = 1; i <= 12; i++ ){
                arr.push('P'+i);
              }
              return arr;
            },
            getBackgroundImage(item){
              return `url(/static/img/page/${item.id}.jpg)`;
            }
        },
        mounted() {
          const sheetNames = this.createSheetNames();
          sheetNames.forEach((item)=>{
            axios.get(`/static/json/${item}.json`).then((result)=>{
              const { data = [] } = result;
              this.pages.push({
                id: item,
                items: data
              });
            });
          });
          setTimeout(()=>{
            this.initScroll();
          }, 2000);
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
    border: 1px solid #ff3d00;
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
