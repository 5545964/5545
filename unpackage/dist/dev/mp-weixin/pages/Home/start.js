(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/start"],{65:function(e,t,n){"use strict";(function(e){n(5);r(n(3));var t=r(n(66));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},66:function(e,t,n){"use strict";n.r(t);var r=n(67),u=n(69);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n(71);var i,a=n(32),c=Object(a["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"313f90ea",null,!1,r["components"],i);c.options.__file="pages/Home/start.vue",t["default"]=c.exports},67:function(e,t,n){"use strict";n.r(t);var r=n(68);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},68:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return u})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},o=!1,i=[];u._withStripped=!0},69:function(e,t,n){"use strict";n.r(t);var r=n(70),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=u.a},70:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLoad:function(t){var n=this;t.url&&(this.path=t.url),this.videoContext=e.createVideoContext("video_play"),setTimeout((function(){var e=getCurrentPages(),t=e[e.length-1].route;"pages/pagesB/tanchuang"!=t&&(n.time=setTimeout((function(){n.ended()}),6500),n.xianshi=!0)}),3e3)},data:function(){return{xianshi:!1,time:"",videoContext:"",path:"",videosrc:"https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/77b0e5c3c6ee5f8174fa72bb3a399d4d9124e811.m4v"}},methods:{ended:function(){clearTimeout(this.time),this.videoContext.pause(),e.switchTab({url:"/pages/Home/Home"})}}};t.default=n}).call(this,n(1)["default"])},71:function(e,t,n){"use strict";n.r(t);var r=n(72),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=u.a},72:function(e,t,n){}},[[65,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/start.js.map