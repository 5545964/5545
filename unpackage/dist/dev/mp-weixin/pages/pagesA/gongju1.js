(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/gongju1"],{219:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));try{o={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,762))},uTabs:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-tabs/u-tabs")]).then(e.bind(null,767))},uCart:function(){return e.e("uview-ui/components/u-cart/u-cart").then(e.bind(null,779))},uVideo:function(){return e.e("uview-ui/components/u-video/u-video").then(e.bind(null,770))},uPinglun:function(){return e.e("uview-ui/components/u-pinglun/u-pinglun").then(e.bind(null,775))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,t=n.$createElement;n._self._c},u=[];i._withStripped=!0},365:function(n,t,e){"use strict";(function(n){e(3);o(e(2));var t=o(e(366));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e(0)["createPage"])},366:function(n,t,e){"use strict";e.r(t);var o=e(219),i=e(46);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e(367);var a,c=e(1),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"6b11942c",null,!1,o["a"],a);r.options.__file="pages/pagesA/gongju1.vue",t["default"]=r.exports},367:function(n,t,e){"use strict";var o=e(48),i=e.n(o);i.a},46:function(n,t,e){"use strict";e.r(t);var o=e(47),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=i.a},47:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{showComment:!1,video:[],current:0,lists:[{name:"收藏商品"},{name:"收藏视频"}],title:"收藏夹",list:[]}},onLoad:function(n){n.title&&(this.title=n.title),this.getProduct()},onShareAppMessage:function(n){return{title:"分享的标题",imageUrl:"https://v1.uviewui.com/common/logo.png",desc:"1111111111111",path:"/pages/Home/Home"}},methods:{go:function(t){n.navigateTo({url:"../pagesC/Shopping?shopid="+t.shop_id})},getProduct:function(){var t=this;this.$api.myfollow({user_id:n.getStorageSync("user_info").id,type:this.current,page:1,limit:1e4}).then((function(n){0==t.current?(t.list=[],n.data.data.status.data.forEach((function(n,e){t.list.push({img:t.$imgPath+n.content.simage,title:n.content.name,num:n.content.xl,id:n.id,shop_id:n.shop_id})}))):(t.video=[],n.data.data.status.data.forEach((function(n,e){t.video.push({id:n.id,type:0,video:t.$imgPath+n.content.video,sc:!1,pl:200,dz:!0,is_hf:1,dz_num:432})})))}))},chang:function(){this.showComment=!1},guanbi:function(){this.showComment=!1},pinglun:function(){this.showComment=!0},dianzhan:function(n){n.dz=!n.dz},collection:function(n){n.sc=!n.sc},change:function(n){this.current=n,this.getProduct()},del:function(n){var t=this;this.list;this.$api.delfollow({id:n.id}).then((function(n){t.getProduct()}))},back:function(t){switch(t){case 0:n.navigateBack(-1);break;case 1:n.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=e}).call(this,e(0)["default"])},48:function(n,t,e){}},[[365,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/gongju1.js.map