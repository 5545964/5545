(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/gongju9"],{231:function(e,n,t){"use strict";(function(e){t(5);i(t(3));var n=i(t(232));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},232:function(e,n,t){"use strict";t.r(n);var i=t(233),u=t(235);for(var o in u)"default"!==o&&function(e){t.d(n,e,(function(){return u[e]}))}(o);t(237);var a,r=t(11),s=Object(r["default"])(u["default"],i["render"],i["staticRenderFns"],!1,null,"6b825034",null,!1,i["components"],a);s.options.__file="pages/pagesA/gongju9.vue",n["default"]=s.exports},233:function(e,n,t){"use strict";t.r(n);var i=t(234);t.d(n,"render",(function(){return i["render"]})),t.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(n,"components",(function(){return i["components"]}))},234:function(e,n,t){"use strict";var i;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return i}));try{i={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,642))},uSearch:function(){return t.e("uview-ui/components/u-search/u-search").then(t.bind(null,649))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,821))},uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,735))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,806))},uKehu:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-kehu/u-kehu")]).then(t.bind(null,663))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement;e._self._c},o=!1,a=[];u._withStripped=!0},235:function(e,n,t){"use strict";t.r(n);var i=t(236),u=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=u.a},236:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{kuaidi:!1,imgtitle:this.$imgPath,showa:!1,title:"我的售后",list:[]}},onLoad:function(e){e.title&&(this.title=e.title),this.allsss()},methods:{kuaidiwow:function(n){var t=this;0==n?this.kuaidi=!1:this.$api.sqexpress({orderid:this.kuaididata.orderid,sqexpress:this.kuaidigongsi,sqexpressorder:this.kuaididanhao}).then((function(n){e.showToast({title:n.data.msg,icon:"none"}),1==n.data.code&&(t.kuaidi=!1,t.allsss())}))},kuaidiwo:function(e){this.kuaididata=e,this.kuaidi=!0},allsss:function(){var n=this;this.$api.myorder({user_id:e.getStorageSync("user_info").id}).then((function(e){if(1==e.data.code){var t=[];e.data.data.status.forEach((function(e){10!=e.state&&11!=e.state&&12!=e.state&&13!=e.state&&14!=e.state&&15!=e.state||t.push(e)})),n.list=t}}))},goods:function(n){e.navigateTo({url:"../pagesA/goods_data?order_id="+n.orderid})},xuanzhea:function(e){switch(e){case 0:this.showa=!1;break;case 1:this.showa=!1;break;default:}},annui:function(){this.showa=!0},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=t}).call(this,t(1)["default"])},237:function(e,n,t){"use strict";t.r(n);var i=t(238),u=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=u.a},238:function(e,n,t){}},[[231,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/gongju9.js.map