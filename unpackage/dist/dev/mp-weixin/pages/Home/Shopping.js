(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Shopping"],{82:function(t,e,n){"use strict";(function(t){n(5);i(n(3));var e=i(n(83));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},83:function(t,e,n){"use strict";n.r(e);var i=n(84),a=n(86);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(88);var r,o=n(11),u=Object(o["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"3b758cef",null,!1,i["components"],r);u.options.__file="pages/Home/Shopping.vue",e["default"]=u.exports},84:function(t,e,n){"use strict";n.r(e);var i=n(85);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},85:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return r})),n.d(e,"recyclableRender",(function(){return s})),n.d(e,"components",(function(){return i}));try{i={uAdata:function(){return n.e("uview-ui/components/u-adata/u-adata").then(n.bind(null,655))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c},s=!1,r=[];a._withStripped=!0},86:function(t,e,n){"use strict";n.r(e);var i=n(87),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},87:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(26));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,s,r){try{var o=t[s](r),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(i,a)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function o(t){s(r,i,a,o,u,"next",t)}function u(t){s(r,i,a,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{videoContext:"",autoplay:!0,imgurl:this.$imgPath,current:0,cart_num:t.getStorageSync("cart_num"),list:[{id:0,name:"产品中心",url:"../pagesC/ProductCate",data_list:[]},{id:1,name:"楼盘设计",url:"../pagesC/HouseDesign",data_list:[]},{id:2,name:"旗舰套系",url:"../pagesC/FlagshipSet",data_list:[]}],lun_list:[],clsList:[],system:{},px:0,widthwidth:0,tabberheigth:0,navbarheigth:0,bianright:0,bianliang:0,bianheigth:600}},onLoad:function(){this.alls()},onPullDownRefresh:function(){this.alls()},onShow:function(){this.videoContext=t.createVideoContext("video"),this.cart_num=t.getStorageSync("cart_num"),this.system=t.getSystemInfoSync();var e=parseInt(this.system.windowHeight/(t.upx2px(100)/100)),n=parseInt((t.getStorageSync("bottomheigth")+t.getStorageSync("setheigth"))/(t.upx2px(100)/100));this.px=parseInt(t.upx2px(100)),this.px=parseInt(this.px/(t.upx2px(100)/100)),this.widthwidth=parseInt(this.system.windowWidth/(t.upx2px(100)/100))-this.px,this.tabberheigth=e-n-this.px},methods:{end:function(){var t=this;if(this.bianliang<this.system.screenWidth/2)var e=setInterval((function(){t.bianright=t.bianright-10,t.bianright<=0&&(t.bianright=0,clearInterval(e))}),10);else e=setInterval((function(){t.bianright=t.bianright+10,t.bianright>=t.widthwidth-20&&(t.bianright=t.widthwidth-20,clearInterval(e))}),10)},move:function(e){var n=e.touches[0];this.bianliang=n.clientX;var i=parseInt(n.clientX/(t.upx2px(100)/100))-this.px/2,a=parseInt(n.clientY/(t.upx2px(100)/100))-this.px/2;i>=0&&i<=this.widthwidth&&(this.bianright=i),a>=this.navbarheigth&&a<=this.tabberheigth&&(this.bianheigth=a)},ended:function(t){this.autoplay=!0},pause:function(t){this.autoplay=!0},bofang:function(t){this.autoplay=!1},gosss:function(e){switch(console.log(e),Number(e.link)){case 0:this.linkOthers(e.head);break;case 1:t.navigateTo({url:"../pagesC/Shopping?shopid="+e.shopid});break;case 2:t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;case 4:t.setStorageSync("youhuijuan",e),t.navigateTo({url:"../pagesC/youhuijuan"});break;default:}},lunbochang:function(){var t=this.lun_list[this.current];this.gosss(t)},gaizhi:function(t){this.current=t.detail.current,t.detail.current==this.lun_list.length-1||this.videoContext.pause()},more:function(e){t.navigateTo({url:e.url})},linkOthers:function(e){t.navigateTo({url:"./URL/URL?url="+e})},alls:function(){var e=this;this.clsList=t.getStorageSync("icon").shop,this.$api.banner().then((function(n){if(1==n.data.code){var i=[];n.data.data.status.forEach((function(t){t.image=e.$imgPath+t.image,1==t.position&&i.push(t)})),e.lun_list=i,t.stopPullDownRefresh()}else e.lun_list=[]})),this.list.forEach((function(n){0==n.id?e.$api.shopindex().then((function(e){1==e.data.code&&(n.data_list=[],e.data.data.status.forEach((function(t,e){e<=5&&n.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})})),t.stopPullDownRefresh())})):1==n.id?e.$api.loupanden({pages:1,limit:4}).then((function(e){1==e.data.code&&(n.data_list=[],e.data.data.status.data.forEach((function(t,e){e<=7&&n.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})})),t.stopPullDownRefresh())})):2==n.id&&e.$api.qjset({pages:1,limit:4,setid:13}).then((function(e){1==e.data.code&&(n.data_list=[],e.data.data.status.data.forEach((function(t,e){e<=7&&n.data_list.push({id:t.id,isgo:!1,price:0,title:t.name,image:t.simage,alls:t})})),t.stopPullDownRefresh())}))}))},toproduct:function(e,n){0==n?t.navigateTo({url:"../pagesC/Shopping?shopid="+e.id}):1==n?(t.setStorageSync("fdklfjdsfjsfhks",e.alls),t.navigateTo({url:"../pagesC/DesignDetail"})):2==n&&t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.alls.id})},tocar:function(){var e=this;return r(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$login();case 2:if(!n.sent){n.next=4;break}t.navigateTo({url:"../pagesC/shopcart"});case 4:case"end":return n.stop()}}),n)})))()},topage:function(e){t.navigateTo({url:e.page})}}};e.default=o}).call(this,n(1)["default"])},88:function(t,e,n){"use strict";n.r(e);var i=n(89),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},89:function(t,e,n){}},[[82,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/Shopping.js.map