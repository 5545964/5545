(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Shopping"],{74:function(t,e,n){"use strict";(function(t){n(5);i(n(3));var e=i(n(75));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},75:function(t,e,n){"use strict";n.r(e);var i=n(76),a=n(78);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n(80);var s,o=n(11),u=Object(o["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"3b758cef",null,!1,i["components"],s);u.options.__file="pages/Home/Shopping.vue",e["default"]=u.exports},76:function(t,e,n){"use strict";n.r(e);var i=n(77);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},77:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return i}));try{i={uAdata:function(){return n.e("uview-ui/components/u-adata/u-adata").then(n.bind(null,628))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c},r=!1,s=[];a._withStripped=!0},78:function(t,e,n){"use strict";n.r(e);var i=n(79),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},79:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(26));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,a,r,s){try{var o=t[r](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(i,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var s=t.apply(e,n);function o(t){r(s,i,a,o,u,"next",t)}function u(t){r(s,i,a,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{videoContext:"",autoplay:!0,imgurl:this.$imgPath,current:0,cart_num:t.getStorageSync("cart_num"),list:[{id:0,name:"产品中心",url:"../pagesC/ProductCate",data_list:[]},{id:1,name:"楼盘设计",url:"../pagesC/HouseDesign",data_list:[]},{id:2,name:"旗舰套系",url:"../pagesC/FlagshipSet",data_list:[]}],lun_list:[],clsList:[],system:{},px:0,widthwidth:0,tabberheigth:0,navbarheigth:0,bianright:0,bianliang:0,bianheigth:600}},onShow:function(){this.videoContext=t.createVideoContext("video"),this.cart_num=t.getStorageSync("cart_num"),this.alls(),this.system=t.getSystemInfoSync();var e=parseInt(this.system.windowHeight/(t.upx2px(100)/100)),n=parseInt((t.getStorageSync("bottomheigth")+t.getStorageSync("setheigth"))/(t.upx2px(100)/100));this.px=parseInt(t.upx2px(100)),this.px=parseInt(this.px/(t.upx2px(100)/100)),this.widthwidth=parseInt(this.system.windowWidth/(t.upx2px(100)/100))-this.px,this.tabberheigth=e-n-this.px},methods:{end:function(){var t=this;if(this.bianliang<this.system.screenWidth/2)var e=setInterval((function(){t.bianright=t.bianright-10,t.bianright<=0&&(t.bianright=0,clearInterval(e))}),10);else e=setInterval((function(){t.bianright=t.bianright+10,t.bianright>=t.widthwidth-20&&(t.bianright=t.widthwidth-20,clearInterval(e))}),10)},move:function(e){var n=e.touches[0];this.bianliang=n.clientX;var i=parseInt(n.clientX/(t.upx2px(100)/100))-this.px/2,a=parseInt(n.clientY/(t.upx2px(100)/100))-this.px/2;i>=0&&i<=this.widthwidth&&(this.bianright=i),a>=this.navbarheigth&&a<=this.tabberheigth&&(this.bianheigth=a)},ended:function(t){this.autoplay=!0},pause:function(t){this.autoplay=!0},bofang:function(t){this.autoplay=!1},gosss:function(e){switch(Number(e.link)){case 0:this.linkOthers(e.head);break;case 1:t.navigateTo({url:"../pagesC/Shopping?shopid="+e.shopid});break;case 2:t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;default:}},lunbochang:function(){var t=this.lun_list[this.current];this.gosss(t)},gaizhi:function(t){this.current=t.detail.current,t.detail.current==this.lun_list.length-1||this.videoContext.pause()},more:function(e){t.navigateTo({url:e.url})},linkOthers:function(e){t.navigateTo({url:"./URL/URL?url="+e})},alls:function(){var t=this;this.$api.shopicon().then((function(e){1==e.data.code&&(t.clsList=e.data.data.data)})),this.$api.banner().then((function(e){if(1==e.data.code){var n=[];e.data.data.status.forEach((function(e){e.image=t.$imgPath+e.image,1==e.position&&n.push(e)})),t.lun_list=n}else t.lun_list=[]})),this.list.forEach((function(e){0==e.id?t.$api.shopindex().then((function(t){1==t.data.code&&(e.data_list=[],t.data.data.status.forEach((function(t,n){e.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})})))})):1==e.id?t.$api.loupanden({pages:1,limit:4}).then((function(t){1==t.data.code&&(e.data_list=[],t.data.data.status.data.forEach((function(t,n){e.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})})))})):2==e.id&&t.$api.qjset({pages:1,limit:4,setid:13}).then((function(t){1==t.data.code&&(e.data_list=[],t.data.data.status.data.forEach((function(t,n){e.data_list.push({id:t.id,isgo:!1,price:0,title:t.name,image:t.simage,alls:t})})))}))}))},toproduct:function(e,n){if(0==n)t.navigateTo({url:"../pagesC/Shopping?shopid="+e.id});else if(1==n){var i=e.alls;t.navigateTo({url:"../pagesC/DesignDetail?id="+JSON.stringify(i)})}else 2==n&&t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.alls.id})},tocar:function(){var e=this;return s(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$login();case 2:if(!n.sent){n.next=4;break}t.navigateTo({url:"../pagesC/shopcart"});case 4:case"end":return n.stop()}}),n)})))()},topage:function(e){t.navigateTo({url:e.page})}}};e.default=o}).call(this,n(1)["default"])},80:function(t,e,n){"use strict";n.r(e);var i=n(81),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},81:function(t,e,n){}},[[74,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/Shopping.js.map