(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/images"],{361:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(362));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},362:function(e,n,t){"use strict";t.r(n);var r=t(363),o=t(365);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);t(367);var u,i=t(11),a=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"10c10080",null,!1,r["components"],u);a.options.__file="pages/pagesB/images.vue",n["default"]=a.exports},363:function(e,n,t){"use strict";t.r(n);var r=t(364);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},364:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return c})),t.d(n,"components",(function(){return r}));try{r={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,641))},uCropper:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-cropper/u-cropper")]).then(t.bind(null,869))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},c=!1,u=[];o._withStripped=!0},365:function(e,n,t){"use strict";t.r(n);var r=t(366),o=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=o.a},366:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{imgs:"",u_croppersrc:"",title:"图片处理"}},onLoad:function(e){e.img&&(this.u_croppersrc=e.img),e.title&&(this.title=e.title)},methods:{beforeDraw:function(e,n){e.setFillStyle("yellow"),n.zoom=2},afterDraw:function(e,n){e.fillText("我是一行文字水印",20,20),console.log("当前画布大小：".concat(n.width,"*").concat(n.height))},cropped:function(e,n){this.imgs=e,console.log(e,n)},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=t}).call(this,t(1)["default"])},367:function(e,n,t){"use strict";t.r(n);var r=t(368),o=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=o.a},368:function(e,n,t){}},[[361,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/images.js.map