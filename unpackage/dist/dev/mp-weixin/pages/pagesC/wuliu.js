(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/wuliu"],{440:function(e,n,t){"use strict";(function(e){t(5);u(t(3));var n=u(t(441));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},441:function(e,n,t){"use strict";t.r(n);var u=t(442),r=t(444);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t(446);var o,c=t(11),a=Object(c["default"])(r["default"],u["render"],u["staticRenderFns"],!1,null,null,null,!1,u["components"],o);a.options.__file="pages/pagesC/wuliu.vue",n["default"]=a.exports},442:function(e,n,t){"use strict";t.r(n);var u=t(443);t.d(n,"render",(function(){return u["render"]})),t.d(n,"staticRenderFns",(function(){return u["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return u["recyclableRender"]})),t.d(n,"components",(function(){return u["components"]}))},443:function(e,n,t){"use strict";var u;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return o})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return u}));try{u={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,598))},uEmpty:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-empty/u-empty")]).then(t.bind(null,666))},uTimeLine:function(){return t.e("uview-ui/components/u-time-line/u-time-line").then(t.bind(null,843))},uTimeLineItem:function(){return t.e("uview-ui/components/u-time-line-item/u-time-line-item").then(t.bind(null,850))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},i=!1,o=[];r._withStripped=!0},444:function(e,n,t){"use strict";t.r(n);var u=t(445),r=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},445:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLoad:function(e){var n=this;this.$api.lookexpress({id:e.id}).then((function(e){n.list=e.data.data.status.data}))},data:function(){return{list:[],title:"查看物流"}},methods:{back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};n.default=t}).call(this,t(1)["default"])},446:function(e,n,t){"use strict";t.r(n);var u=t(447),r=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},447:function(e,n,t){}},[[440,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/wuliu.js.map