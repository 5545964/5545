(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/promotion"],{118:function(t,n,e){"use strict";e.r(n);var a=e(119),r=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=r.a},119:function(t,n,e){"use strict";(function(t){function e(t){return i(t)||o(t)||r(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={onLoad:function(){var t=this;this.$api.banner().then((function(n){1==n.data.code&&(n.data.data.status.forEach((function(n){n.image=t.$imgPath+n.image})),t.lun_list=n.data.data.status)})),this.$api.shopindex().then((function(n){1==n.data.code&&(n.data.data.status.forEach((function(t,n){t["isgo"]=n<=1;var e=t.simage;t.simage=t.image,t.image=e})),t.data_list=e(n.data.data.status))}))},data:function(){return{imgurl:this.$imgPath,current:0,title:"限时抢购",lun_list:[],data_list:[]}},methods:{goshop:function(n){t.navigateTo({url:"./Shopping?shopid="+n.id})},linkOthers:function(n){t.navigateTo({url:"../Home/URL/URL?url="+n})},gosss:function(n){switch(Number(n.link)){case 0:this.linkOthers(n.head);break;case 1:t.navigateTo({url:"./Shopping?shopid="+n.shopid});break;case 2:t.navigateTo({url:"./Shopping?id="+n.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;default:}},lunbochang:function(){var t=this.lun_list[this.current];this.gosss(t)},gaizhi:function(t){this.current=t.detail.current},back:function(n){switch(n){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};n.default=c}).call(this,e(0)["default"])},120:function(t,n,e){},236:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));try{a={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,739))},uAdata:function(){return e.e("uview-ui/components/u-adata/u-adata").then(e.bind(null,741))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,n=t.$createElement;t._self._c},o=[];r._withStripped=!0},430:function(t,n,e){"use strict";(function(t){e(3);a(e(2));var n=a(e(431));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e(0)["createPage"])},431:function(t,n,e){"use strict";e.r(n);var a=e(236),r=e(118);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e(432);var i,u=e(1),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"31a45ae8",null,!1,a["a"],i);c.options.__file="pages/pagesC/promotion.vue",n["default"]=c.exports},432:function(t,n,e){"use strict";var a=e(120),r=e.n(a);r.a}},[[430,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/promotion.js.map