<template>
    <div class="poster-wrapper" >
        <div ref="poster-wrapper" style="height: 100%;width: 100%">
            <div
              :style="{ width: boxWidth + 'px' }"
              class="poster-items-wrapper" >
              <div
                v-for="item in pages"
                class="goods"
                :style='{ backgroundImage: `url(${item.imgUrl})` }'
              >
                <div
                  v-for="subItem in item"
                  @click="clickHanlder(subItem)"
                  :class="`good-item_${subItem.id}`"></div>
              </div>
<!--                <div class="poster-item p1"-->
<!--                     style='background:url("./static/img/poster1.jpg")no-repeat center /100% 100%'-->
<!--                >-->
<!--                    <div class="goods1" @click="_redirect(0)"></div>-->
<!--                    <div class="block" @click="_notice"></div>-->
<!--                </div>-->
<!--                <div class="poster-item p2"-->
<!--                     style='background:url("./static/img/poster2.jpg")no-repeat center /100% 100%'-->
<!--                     @click="_notice">-->
<!--                    <div class="goods2" @click.stop="_redirect(1)"></div>-->
<!--                    <div class="goods3" @click.stop="_redirect(2)"></div>-->
<!--                    <div class="goods4" @click.stop="_redirect(3)"></div>-->
<!--                    <div class="block" @click.stop></div>-->
<!--                </div>-->
<!--                <div class="poster-item p3"-->
<!--                     style='background:url("./static/img/poster3.jpg")no-repeat center /100% 100%'-->
<!--                     @click="_notice">-->
<!--                    <div class="block" @click.stop></div>-->
<!--                    <div class="block2" @click.stop></div>-->
<!--                </div>-->
            </div>
        </div>
        <div class="menu-block block-item" @click="isVisible=!isVisible"></div>
        <div class="page-block">0{{ page }}/03</div>
        <div class="nav-block block-item"></div>
        <transition name="fade">
            <Menu />
        </transition>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Menu from '../components/menu';
    export default {
        name: "poster",
        components: {
          Menu,
        },
        data(){
            return{
                isVisible:false,
                page: 1,
                pages: [{
                  id: '1',
                  imgUrl: './static/img/poster1.jpg',
                  items: [{
                    id: '1_1',
                    imgUrl: '',
                    isPeriod: false,
                  }, {
                    id: '1_2',
                    imgUrl: '',
                    isPeriod: false,
                  }]
                }, {
                  id: '2',
                  imgUrl: './static/img/poster2.jpg',
                  items: [{
                    id: '2_1',
                    imgUrl: '',
                    isPeriod: false,
                  }, {
                    id: '2_2',
                    imgUrl: '',
                    isPeriod: false,
                  }]
                }, {
                  id: '3',
                  imgUrl: './static/img/poster3.jpg',
                  items: [{
                    id: '3_1',
                    imgUrl: '',
                    isPeriod: false,
                  }, {
                    id: '3_2',
                    imgUrl: '',
                    isPeriod: false,
                  }]
                }]
            }
        },
        computed: {
          boxWidth(){
            return window.innerHeight * this.pages.length;
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
              if (!this.$refs['poster-wrapper']) {
                return
              }
              const bs = new BScroll(this.$refs['poster-wrapper'],{
                click: true,
                scrollX: true,
                probeType: 3,
                useTransition: false,  // 防止iphone微信滑动卡顿
                bounce: true,
                momentumLimitDistance: 5
              });
              bs.on('scroll', (pos) => {
                const { x: scrollDistance } = pos;
                const d = this.boxWidth/3;
                const scrollX = Math.abs(scrollDistance)

                if(scrollX <= d){
                  this.page = 1
                }else if(scrollX>d&&scrollX<2*d){
                  this.page = 2
                }else {
                  this.page = 3
                }
              });
            }
        },
        mounted() {
          this.initScroll();
        }
    }
</script>

<style scoped lang="stylus">
  .good-item_1_1
   position absolute
   left 0
   bottom 2%
   height 18%
   width 33%
  .good-item_1_2
    position absolute
    width 22%
    height 14%
    top 2%
    left 2%

  /*&.p1*/

  /*  .block*/
  /*    position absolute*/
  /*    left 33%*/
  /*    height 18%*/
  /*    width 67%*/
  /*    bottom 2%*/

  /*&.p2*/

  /*  .goods3*/
  /*    position absolute*/
  /*    width 40%*/
  /*    height 14%*/
  /*    top 30%*/
  /*    left 2%*/
  /*  .goods4*/
  /*    position absolute*/
  /*    width 40%*/
  /*    height 25%*/
  /*    left 2%*/
  /*    bottom 2%*/
  /*  .block*/
  /*    position absolute*/
  /*    width 24%*/
  /*    height 33%*/
  /*    right 0*/
  /*&.p3*/
  /*  .block*/
  /*    position absolute*/
  /*    width 31%*/
  /*    height 33%*/
  /*    left 0*/
  /*    top 0*/
  /*  .block2*/
  /*    position absolute*/
  /*    bottom 0*/
  /*    left 0*/
  /*    height 14%*/
  /*    width 50%*/

   .poster-wrapper
        position absolute
        width 100%
        height 100%
        overflow hidden

  .poster-items-wrapper
      display flex
      width 300%
      height 100%

  .goods
    flex 1
    height 100%
    position relative;
    background-repeat: no-repeat;
    background-positon: center;
    background-size: 100% 100%;

   .block-item
        position fixed
        height 38px
        width 38px
        background #515151
        z-index 999999
        border-radius 19px
        &.menu-block
            bottom 15px
            left 15px
            background rgba(0,0,0,.6) url("../assets/nav.svg")no-repeat center /24px 24px
        &.nav-block
            bottom 15px
            right 15px
            background rgba(0,0,0,.6) url("../assets/menu.svg")no-repeat center /24px 24px

   .page-block
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
</style>
