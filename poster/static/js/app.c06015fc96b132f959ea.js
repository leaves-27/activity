webpackJsonp([1],{"012C":function(e,t){},"6UFw":function(e,t){},DUCD:function(e,t){},EGOS:function(e,t){},F6gA:function(e,t){},Fqx8:function(e,t){},IyrA:function(e,t){},JLPV:function(e,t){},LVgF:function(e,t){},M4FR:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{exclude:"goods"}},[t("router-view")],1)],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},a,!1,function(e){i("LVgF")},null,null).exports,r=i("/ocq"),o=i("fZjL"),c=i.n(o),d=i("GQaK"),u=(i("POcy"),function(){var e=window.innerWidth,t=window.innerHeight;return"number"!=typeof e&&("CSS1Compat"==document.compatMode?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):(e=document.body.clientWidth,t=window.body.clientHeight)),{pageWidth:e,pageHeight:t}}),l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}],staticClass:"mask-layer",on:{click:function(t){return e.$emit("menuHide",!1)}}},[i("div",{staticClass:"nav-list-wrapper",class:{active:e.isVisible}},[i("p",{staticClass:"nav-title"},[e._v("目录 "),i("span",{staticClass:"close",on:{click:function(t){return e.$emit("menuHide",!1)}}})]),e._v(" "),i("div",{ref:"nav",staticClass:"nav-container"},[i("ul",{staticClass:"nav-list-content"},e._l(e.menus,function(t){return i("li",{staticClass:"nav-item",class:{active:t.id===e.selectedId},on:{click:function(i){return e.$emit("select",t.id)}}},[e._v("\n          "+e._s(t.desc)+"\n        ")])}),0)])])])},staticRenderFns:[]};var f=i("VU/8")({props:["isVisible","menus","selectedId"],computed:{},methods:{}},l,!1,function(e){i("mOkD")},"data-v-220deec2",null).exports,p=i("mtWM"),g=i.n(p),m=function(){return g.a.get("../static/json/preferential.json")},h=(i("EGOS"),i("Qtsf"),i("F6gA"),i("rNd6"),i("Tx+t"),i("JLPV"),i("IyrA"),i("M4FR"),i("Fqx8"),i("DUCD"),i("V+ec"),i("ku4o"),i("kGE4"),i("6UFw"),{name:"poster",components:{Menu:f},data:function(){return{menus:[{id:"1",name:"preferential",desc:"洗护嘉年华",startIndex:1},{id:"2",name:"preferential",desc:"会员支付日",startIndex:6},{id:"3",name:"preferential",desc:"会员家庭周",startIndex:7},{id:"4",name:"preferential",desc:"篮球世界杯",startIndex:9},{id:"5",name:"preferential",desc:"七夕节不得无礼",startIndex:11},{id:"6",name:"preferential",desc:"韩国食品节",startIndex:13}],originPages:{},selectedId:"1",page:1,isVisible:!1,bs:null,pageHeight:u().pageHeight}},computed:{name:function(){var e=this,t=this.menus.find(function(t){return t.id===e.selectedId}).name,i=void 0===t?"":t;return i},pages:function(){var e=this,t=[];return c()(this.originPages).forEach(function(i){t.push({id:i,items:e.originPages[i]})}),t},boxWidth:function(){var e=c()(this.pages).length;return this.itemWidth*e},itemWidth:function(){return(1536/(2186/this.pageHeight)).toFixed(0)}},methods:{goDetail:function(e){var t=(e.split("_")||[])[2],i=(this.originPages[t].find(function(t){return e===t.id})||{}).limit,n=(void 0===i?"":i).split("-")[1];if(n){var a=new Date(n.replace(".","-")).getTime();if((new Date).getTime()>a)return void alert("您选择的此商品活动已过期")}this.$router.replace({path:"/good-detail",query:{categoryId:this.selectedId,pageId:t,goodId:e}})},goGoods:function(){this.$router.replace({path:"/goods"})},initScroll:function(){var e=this;if(this.$refs.poster){var t=new d.a(this.$refs.poster,{scrollX:!0,probeType:3,click:!0,bounce:!0,momentumLimitDistance:5});t.on("scroll",function(t){var i=t.x,n=Math.abs(i);e.page=Math.floor(n/e.itemWidth)+1}),this.bs=t}},getBackgroundImage:function(e){var t=this;return"url(/static/img/"+this.menus.find(function(e){return e.id===t.selectedId}).name+"/"+e.toLowerCase()+"/"+e.toLowerCase()+".jpg)"},selectHandler:function(e){this.selectedId=e,this.isVisible=!1;var t=-1*(this.menus.find(function(t){return t.id===e}).startIndex-1)*this.itemWidth;this.bs.scrollTo(t,0)},getData:function(){var e=this;m().then(function(t){var i=t.data;e.originPages=i,e.initScroll();var n=(e.menus[0]||{}).id;e.selectedId=n}).catch(function(e){console.error("error:",e)})},hideWxBrowserToolBar:function(){document.addEventListener("WeixinJSBridgeReady")},onBridgeReady:function(){WeixinJSBridge.call("hideToolbar"),WeixinJSBridge.call("hideOptionMenu")},onResize:function(){var e=u().pageHeight;this.pageHeight=e},checkWxOauth:function(){}},created:function(){this.getData()},mounted:function(){this.$router.replace("/")}}),v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"poster"},[i("div",{ref:"poster",staticClass:"poster_main"},[i("div",{staticClass:"container",style:{width:e.boxWidth+"px"}},e._l(e.pages,function(t,n){return i("div",{staticClass:"goods",style:{backgroundImage:e.getBackgroundImage(t.id)}},e._l(t.items,function(t,a){return i("div",{class:"good-item "+e.name+"-good-item_"+(n+1)+"-"+(a+1),on:{click:function(i){return e.goDetail(t.id)}}})}),0)}),0)]),e._v(" "),i("div",{staticClass:"poster_footer"},[i("div",{staticClass:"footer_left"},[i("div",{staticClass:"footer_button menu-block",on:{click:function(t){e.isVisible=!e.isVisible}}})]),e._v(" "),i("div",{staticClass:"footer_middle"},[i("div",{staticClass:"paging"},[e._v(e._s(e.page)+"/"+e._s(e.pages.length))])]),e._v(" "),i("div",{staticClass:"footer_right"},[i("div",{staticClass:"footer_button nav-block",on:{click:e.goGoods}})])]),e._v(" "),i("transition",{attrs:{name:"fade"}},[i("Menu",{attrs:{menus:e.menus,"selected-id":e.selectedId,"is-visible":e.isVisible},on:{select:e.selectHandler,menuHide:function(t){e.isVisible=!1}}})],1)],1)},staticRenderFns:[]};var _=i("VU/8")(h,v,!1,function(e){i("dcP+")},"data-v-2dd76dc5",null).exports,I=i("Dd8w"),x=i.n(I),C={name:"good-detail",data:function(){return{menus:[{id:"1",name:"preferential",desc:"洗护嘉年华",startIndex:1},{id:"2",name:"preferential",desc:"会员支付日",startIndex:6},{id:"3",name:"preferential",desc:"会员家庭周",startIndex:7},{id:"4",name:"preferential",desc:"篮球世界杯",startIndex:9},{id:"5",name:"preferential",desc:"七夕节不得无礼",startIndex:11},{id:"6",name:"preferential",desc:"韩国食品节",startIndex:13}],pages:{}}},computed:{good:function(){var e=this.$route.query||{},t=e.pageId,i=void 0===t?"":t,n=e.goodId,a=void 0===n?"":n,s=(this.pages[i]||[]).find(function(e){return e.id==a})||{},r=a.replace("preferential_","");return x()({},s,{imgPath:"/static/img/preferential/"+i.toLowerCase()+"/"+r.replace("p","P")+".jpg"})}},methods:{back:function(){this.$router.replace({path:"/"})}},mounted:function(){var e=this;m().then(function(t){var i=t.data;e.pages=i}).catch(function(e){console.error("error:",e)})}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"goods"},[i("div",{staticClass:"pic-wrapper"},[i("img",{staticStyle:{width:"100%"},attrs:{src:e.good.imgPath,alt:""}})]),e._v(" "),i("div",{staticClass:"goods-name"},[e._v(e._s(e.good.name))]),e._v(" "),i("div",{staticClass:"goods-price"},[e._v(e._s(e.good.price))]),e._v(" "),i("div",{staticClass:"goods-limit"},[e._v("有效期:"+e._s(e.good.limit))]),e._v(" "),i("div",{staticClass:"back-home",on:{click:e.back}})])},staticRenderFns:[]};var k=i("VU/8")(C,b,!1,function(e){i("oPk0")},"data-v-4da10cfe",null).exports,w=i("Gu7T"),P=i.n(w),D={name:"goods",data:function(){return{menus:[{id:"1",name:"preferential",desc:"洗护嘉年华",startIndex:1},{id:"2",name:"preferential",desc:"会员支付日",startIndex:6},{id:"3",name:"preferential",desc:"会员家庭周",startIndex:7},{id:"4",name:"preferential",desc:"篮球世界杯",startIndex:9},{id:"5",name:"preferential",desc:"七夕节不得无礼",startIndex:11},{id:"6",name:"preferential",desc:"韩国食品节",startIndex:13}],originPages:{}}},computed:{pages:function(){var e=this,t=[];return c()(this.originPages).forEach(function(i){var n=e.originPages[i]||[];t.push.apply(t,P()(n))}),t},itemsA:function(){var e=[];return this.pages.forEach(function(t,i){i%2==0&&e.push(t)}),e},itemsB:function(){var e=[];return this.pages.forEach(function(t,i){i%2!=0&&e.push(t)}),e}},methods:{getImagePath:function(e){var t=e.split("_")||[],i=t[1],n=t[2],a=e.replace(i+"_","");return"/static/img/"+i+"/"+n.toLowerCase()+"/"+a.replace("p","P")+".jpg"},getData:function(){var e=this;m().then(function(t){var i=t.data,n=void 0===i?{}:i;e.originPages=n}).catch(function(e){console.error("error:",e)})},goDetail:function(e){var t=e.split("_")||[],i=t[1],n=t[2],a=(this.menus.find(function(e){return e.name===i})||{}).id,s=(this.originPages[n].find(function(t){return e===t.id})||{}).limit,r=(void 0===s?"":s).split("-")[1];if(r){var o=new Date(r.replace(".","-")).getTime();if((new Date).getTime()>o)return void alert("您选择的此商品活动已过期")}this.$router.replace({path:"/good-detail",query:{categoryId:a,pageId:n,goodId:e}})},back:function(){this.$router.replace({path:"/"})}},mounted:function(){this.getData()}},V={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.pages.length>0?i("div",[i("div",{staticClass:"good"},[i("div",{staticClass:"good_item"},e._l(e.itemsA,function(t){return i("img",{attrs:{src:e.getImagePath(t.id)},on:{click:function(i){return e.goDetail(t.id)}}})}),0),e._v(" "),i("div",{staticClass:"good_item"},e._l(e.itemsB,function(t){return i("img",{attrs:{src:e.getImagePath(t.id)},on:{click:function(i){return e.goDetail(t.id)}}})}),0),e._v(" "),i("div",{staticClass:"back-home",on:{click:e.back}})])]):e._e()},staticRenderFns:[]};var y=i("VU/8")(D,V,!1,function(e){i("012C")},"data-v-558fea6b",null).exports;n.a.use(r.a);var W=new r.a({routes:[{path:"/",name:"poster",component:_},{path:"/good-detail",name:"goodDetail",component:k},{path:"/goods",name:"goods",component:y}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:W,components:{App:s},template:"<App/>"})},Qtsf:function(e,t){},"Tx+t":function(e,t){},"V+ec":function(e,t){},"dcP+":function(e,t){},kGE4:function(e,t){},ku4o:function(e,t){},mOkD:function(e,t){},oPk0:function(e,t){},rNd6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c06015fc96b132f959ea.js.map