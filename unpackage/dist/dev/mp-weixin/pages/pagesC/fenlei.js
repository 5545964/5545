(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/fenlei"],{513:function(n,e,t){"use strict";(function(n){t(5);o(t(3));var e=o(t(514));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},514:function(n,e,t){"use strict";t.r(e);var o=t(515),r=t(517);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(519);var u,a=t(11),c=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);c.options.__file="pages/pagesC/fenlei.vue",e["default"]=c.exports},515:function(n,e,t){"use strict";t.r(e);var o=t(516);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},516:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));try{o={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,642))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,821))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,u=[];r._withStripped=!0},517:function(n,e,t){"use strict";t.r(e);var o=t(518),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},518:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{autoplay:!0,img:this.$imgPath,current:"",video:"",vr_image:"",title:"详情",list:{},go_shop:{}}},onLoad:function(e){var t=this,o=n.getStorageSync("go_shop");this.title=o.name,o.image=o.image.split(","),o.shop.forEach((function(n){n.content=t.img+n.content})),o.video=this.$imgs(o.video),this.list=o},methods:{ended:function(n){this.autoplay=!0},pause:function(n){this.autoplay=!0},bofang:function(n){this.autoplay=!1},goshop:function(e){n.navigateTo({url:"./Shopping?shopid="+e})},kaniamg:function(e){var t=[e];n.previewImage({urls:t,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(n){},fail:function(n){}}})},goVR:function(e){n.navigateTo({url:"../Home/URL/URL?url="+e})},back:function(e){switch(e){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=t}).call(this,t(1)["default"])},519:function(n,e,t){"use strict";t.r(e);var o=t(520),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},520:function(n,e,t){}},[[513,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/fenlei.js.map