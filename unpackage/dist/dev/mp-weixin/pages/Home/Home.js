(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Home"],{15:function(t,e,a){"use strict";a.r(e);var n=a(16),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},16:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"",props:{},components:{},data:function(){return{current:0,show:!1,data_list:[],lun_list:[],keyword:"",list:[{a:"楼盘",b:"设计",url:"../pagesC/HouseDesign"},{a:"旗舰",b:"套系",url:"../pagesC/FlagshipSet"},{a:"设计师",b:"club ",url:"../pagesD/designClub"},{a:"工长",b:"club",url:"#"},{a:"社区生活",b:"club",url:"#"},{a:"佳作",b:"分享",url:"./jiazhuo"}],imgurl:this.$imgPath}},methods:{gaizhi:function(t){this.current=t.detail.current},dsad:function(){this.show=!1},linkOthers:function(e){t.navigateTo({url:"./URL/URL?url="+e})},lunbochang:function(){var t=this.lun_list[this.current];this.gosss(t)},gosss:function(e){switch(Number(e.link)){case 0:this.linkOthers(e.head);break;case 1:t.navigateTo({url:"../pagesC/Shopping?shopid="+e.shopid});break;case 2:t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;default:}},go_shop:function(e){switch(Number(e.alls.link)){case 0:this.linkOthers(e.alls.head);break;case 1:t.navigateTo({url:"../pagesC/Shopping?shopid="+e.alls.shopid});break;case 2:t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.alls.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;default:}},seach_go:function(){t.navigateTo({url:"./search/search"})},go:function(e,a){3==a||4==a?t.showToast({title:"该功能正在开发中",icon:"error",duration:1e3}):t.navigateTo({url:e})},goods:function(){var e=this;this.$api.indexcontent().then((function(a){1==a.data.code&&(e.data_list=[],a.data.data.status.forEach((function(t,a){e.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.image,alls:t})})),t.stopPullDownRefresh())}))},alls:function(){var e=this;this.goods(),this.$api.banner().then((function(a){if(1==a.data.code){e.lun_list=[];var n=[];a.data.data.status.forEach((function(t){t.image=e.$imgPath+t.image,0==t.position&&n.push(t)})),e.lun_list=n,t.stopPullDownRefresh()}}))}},onLoad:function(){t.setStorageSync("shouzhi",0);var e=t.getSystemInfoSync();t.setStorageSync("bottomheigth",e.safeAreaInsets.bottom)},onShow:function(){this.alls(),this.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(e){var a=0;1==e.data.code&&e.data.data.status.forEach((function(t){a+=1})),a>=99&&(a="..."),t.setStorageSync("cart_num",a)})),this.$api.addressshow({id:t.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&e.data.data.status.forEach((function(e){1==e.auto&&t.setStorageSync("address",e)}))}))},watch:{},computed:{},onReachBottom:function(){},onPullDownRefresh:function(){this.alls()}};e.default=a}).call(this,a(0)["default"])},17:function(t,e,a){},201:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));try{n={uNavbar:function(){return a.e("uview-ui/components/u-navbar/u-navbar").then(a.bind(null,739))},uSearch:function(){return a.e("uview-ui/components/u-search/u-search").then(a.bind(null,740))},uAdata:function(){return a.e("uview-ui/components/u-adata/u-adata").then(a.bind(null,741))},uKehu:function(){return Promise.all([a.e("common/vendor"),a.e("uview-ui/components/u-kehu/u-kehu")]).then(a.bind(null,742))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];o._withStripped=!0},325:function(t,e,a){"use strict";(function(t){a(3);n(a(2));var e=n(a(326));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=a,t(e.default)}).call(this,a(0)["createPage"])},326:function(t,e,a){"use strict";a.r(e);var n=a(201),o=a(15);for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a(327);var s,u=a(1),r=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"2bc86734",null,!1,n["a"],s);r.options.__file="pages/Home/Home.vue",e["default"]=r.exports},327:function(t,e,a){"use strict";var n=a(17),o=a.n(n);o.a}},[[325,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/Home.js.map