(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/wuliu"],{497:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(498));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},498:function(e,n,t){"use strict";t.r(n);var r=t(499),u=t(501);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);t(503);var o,a=t(11),c=Object(a["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);c.options.__file="pages/pagesC/wuliu.vue",n["default"]=c.exports},499:function(e,n,t){"use strict";t.r(n);var r=t(500);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},500:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return o})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));try{r={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,658))},uEmpty:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-empty/u-empty")]).then(t.bind(null,786))},uTimeLine:function(){return t.e("uview-ui/components/u-time-line/u-time-line").then(t.bind(null,968))},uTimeLineItem:function(){return t.e("uview-ui/components/u-time-line-item/u-time-line-item").then(t.bind(null,975))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,837))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement;e._self._c},i=!1,o=[];u._withStripped=!0},501:function(e,n,t){"use strict";t.r(n);var r=t(502),u=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=u.a},502:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{express:"",expressorder:"",list:[],title:"查看物流"}},onLoad:function(e){var n=this;this.expressorder=e.expressorder,this.$api.lookexpress({id:e.id}).then((function(e){1==e.data.code&&(n.express=e.data.data.status.conpany.title,n.list=e.data.data.status.data)}))},methods:{copy:function(n){var t="";t=0==n?this.express:this.expressorder,e.setClipboardData({data:t,success:function(){e.showToast({title:"复制成功",icon:"none"})}})},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=t}).call(this,t(1)["default"])},503:function(e,n,t){"use strict";t.r(n);var r=t(504),u=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=u.a},504:function(e,n,t){}},[[497,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/wuliu.js.map