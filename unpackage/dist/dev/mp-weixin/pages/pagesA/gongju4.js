(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/gongju4"],{222:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,762))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,767))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,765))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,t=e.$createElement;e._self._c},o=[];u._withStripped=!0},374:function(e,t,n){"use strict";(function(e){n(3);a(n(2));var t=a(n(375));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(0)["createPage"])},375:function(e,t,n){"use strict";n.r(t);var a=n(222),u=n(55);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n(376);var i,c=n(1),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"6b3bdaaf",null,!1,a["a"],i);r.options.__file="pages/pagesA/gongju4.vue",t["default"]=r.exports},376:function(e,t,n){"use strict";var a=n(57),u=n.n(a);u.a},55:function(e,t,n){"use strict";n.r(t);var a=n(56),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=u.a},56:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{coupon_list:[],title:"优惠券",list:[{name:"待使用"},{name:"已使用"},{name:"已失效"}],current:0}},onLoad:function(e){e.title&&(this.title=e.title),this.getdata()},methods:{getdata:function(){var t=this;this.$api.mycupon({user_id:e.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&(e.data.data.status.forEach((function(e){e.cupons.endtime_text=e.cupons.endtime_text.split(" ")[0]})),t.coupon_list=e.data.data.status)}))},change:function(e){this.current=e},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=n}).call(this,n(0)["default"])},57:function(e,t,n){}},[[374,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/gongju4.js.map