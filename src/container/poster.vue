<template>
    <div class="poster" >
      <div
        ref="poster"
        class="poster_main">
        <div
          v-if="pages.length > 0"
          :style="{ width: pagesWidth + 'px' }"
          class="container">
          <div
            v-for="(page, pageIndex) in pages"
            class="page">
            <div
              v-for="(row, rowIndex) in page.rows"
              class="row" :style="{
                flexBasis: !!row.height ? row.height + 'px' : 'auto',
                flexGrow: !!!row.height && !!row.rowspan ? row.rowspan : 1,
                flexShrink: !!row.height ? 0 : 1
              }">
              <div
                v-for="(column, columnIndex) in row.columns"
                class="column"
                :style="{
                    flexBasis: !!column.width ? column.width + 'px' : 'auto',
                    flexGrow: !!!column.width && !!column.colspan ? column.colspan : 1,
                    flexShrink: !!column.width ? 0 : 1
                }">
                <div
                  v-if="!!column.rows"
                  class="table">
                  <div
                    v-for="(subRow, subRowIndex) in column.rows"
                    :style="{
                      flexBasis: !!subRow.height ? row.height + 'px' : 'auto',
                      flexGrow: !!!subRow.height && !!row.rowspan ? row.rowspan : 1,
                      flexShrink: !!subRow.height ? 0 : 1
                    }"
                    class="row">
                    <div
                      v-for="(subColumn, subColumnIndex) in subRow.columns"
                      :style="{
                        flexBasis: !!subColumn.width ? subColumn.width + 'px' : 'auto',
                        flexGrow: !!!subColumn.width && !!subColumn.colspan ? subColumn.colspan : 1,
                        flexShrink: !!subColumn.width ? 0 : 1
                      }"
                      class="column">
                      <div
                        v-if="!!subColumn.rows"
                        class="table">
                        <div
                          v-for="(subSubRow, subRowIndex) in subColumn.rows"
                          :style="{
                            flexBasis: !!subSubRow.height ? subSubRow.height + 'px' : 'auto',
                            flexGrow: !!!subSubRow.height && !!subSubRow.rowspan ? subSubRow.rowspan : 1,
                            flexShrink: !!subSubRow.height ? 0 : 1
                          }"
                          class="row">
                          <div
                            v-for="(subSubColumn, subColumnIndex) in subSubRow.columns"
                            :style="{
                              flexBasis: !!subSubColumn.width ? subSubColumn.width + 'px' : 'auto',
                              flexGrow: !!!subSubColumn.width && !!subSubColumn.colspan ? subSubColumn.colspan : 1,
                              flexShrink: !!subSubColumn.width ? 0 : 1
                            }"
                            class="column">
                            <div
                              v-if="subSubColumn.product"
                              class="good"
                              @click="goDetail(subSubColumn.product)">
                              <img :src="subSubColumn.product.imageUrl" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-else>
                        <div
                          v-if="subColumn.product"
                          class="good"
                          @click="goDetail(subColumn.product)">
                          <img :src="subColumn.product.imageUrl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div
                    v-if="column.product"
                    class="good"
                    @click="goDetail(column.product)">
                    <img :src="column.product.imageUrl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="empty"
        > 暂无活动商品 </div>
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
    import { getBrowserInterfaceSize, getCookie, setCookie, getMenus, goDetail} from '../utils';
    import Menu from '../components/menu';
    // import getGoods from '../mock/getGoods';
    import getGoods from '../apis/getGoods';

    export default {
        name: "poster",
        components: {
          Menu,
        },
        data(){
            const { pageHeight } = getBrowserInterfaceSize();
            return {
                originData: [],
                selectedId: '1',
                page: 1,
                isVisible:false,
                bs: null,
                pageHeight,
                height1: 0,
                height2: 0,
                groupId: ''
            };
        },
        computed: {
          menus(){
            const menus = [];
            this.originData.forEach((item, index)=>{
              const { actId, actName } = item;
              const startIndex = this.pages.findIndex((page)=>{
                return page.actId * 1 === actId * 1;
              });
              menus.push({
                id: actId,
                desc: actName,
                startIndex: startIndex === -1 ? 0 : startIndex,
              });
            });
            return menus;
          },
          pages(){
            const pages = [];
            this.originData.forEach((item)=>{
              const { pages: activityPages } = item;
              pages.push(...activityPages);
            });
            return pages;
          },
          pageWidth(){
            // 根据背景图的大小计算页面宽度
            const image = {
              width: 1536,
              height: 2186,
            };
            // const image = {
            //   width: 1241,
            //   height: 1642,
            // };
            return (image.width/(image.height/ this.pageHeight)).toFixed(0);
            // 图片宽度不够了，容器宽度太大
            // return pageWidth;
          },
          pagesWidth(){
            const len = this.pages.length;
            return this.pageWidth  * len;
          },
        },
        methods:{
          getActId(){
            const { groupId = '' } = this.$route.query;
            if (groupId){
              return groupId;
            } else {
              return this.groupId;
            }
          },
          goDetail(good = {}){
            const groupId = this.getActId();
            const { isClick = false } = good;
            if (!isClick){
              return;
            }

            goDetail.bind(this)(good, '', groupId);
          },
          goGoods(){
            const groupId = this.getActId();
            this.$router.push({
              path:'/goods',
              query: {
                groupId,
              }
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
              this.page = Math.floor(scrollX / this.pageWidth) + 1;
            });
            this.bs = bs;
          },
          getBackgroundImage(pageName){
            return '';
          },
          selectHandler(id){
            this.selectedId = id;
            this.isVisible = false;
            const { startIndex } = this.menus.find((item)=>{
              return item.id === id;
            });

            const x = -1 * startIndex * this.pageWidth;
            this.bs.scrollTo(x, 0);
          },
          getData(){
            const groupId = this.getActId();
            getGoods(groupId).then(({ data: result = {} })=>{
              const { data = {}, success } = result;
              if (success){
                const { actDetailList = [], groupId } = data;
                this.originData = actDetailList;
                if (!!groupId){
                  this.groupId = groupId;
                }
                this.initScroll();
                const { id } = this.menus[0] || {};
                this.selectedId = id;
              }
            }).catch((error)=>{
              console.error('error:', error);
            });
          },
          onResize(){
            const { pageHeight } = getBrowserInterfaceSize();
            this.pageHeight = pageHeight;
          }
        },
        mounted() {
          window.onresize = this.onResize;
          if (!this.bs){
            this.getData();
          }
        },
    }
</script>

<style scoped>
  .poster{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .poster_main{
    width: 100%;
    height: 100%;
  }

  .container{
    display: flex;
    height: 100%;
  }

  .page{
    flex: 1;
    height: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-positon: center;
    background-size: 100% auto;
    display: flex;
    flex-direction: column;
  }

  .row{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    overflow: hidden;
    border: none;
    font-size: 0;
  }
  .column{
    overflow: hidden;
  }
  .good{
    width: 100%;
    font-size: 0px;
    text-align: center;
  }
  .good img{
    max-width: 100%;
    border: none;
    display: block;
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
    height: 38px;
    width: 38px;
    background: #515151;
    z-index: 999999;
    border-radius: 19px;
  }
  .menu-block{
    background: rgba(0,0,0,.6) url("../assets/nav.svg")no-repeat center /24px 24px;
  }
  .nav-block{
    background: rgba(0,0,0,.6) url("../assets/menu.svg")no-repeat center /24px 24px;
  }
  .paging{
    background: rgba(0,0,0,.6);
    border-radius: 12px;
    color: #ffffff;
    text-align: center;
    height: 24px;
    width: 52px;
    font-size: 12px;
    line-height: 24px;
    z-index: 100000;
  }
  .empty{
    padding-top: 100px;
    text-align: center;
    font-size: 16px;
    color: #999;
  }
</style>
