(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/erweima"],{329:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(330));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},330:function(e,n,t){"use strict";t.r(n);var r=t(331),o=t(333);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t(335);var c,u=t(11),a=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"33647dca",null,!1,r["components"],c);a.options.__file="pages/pagesB/erweima.vue",n["default"]=a.exports},331:function(e,n,t){"use strict";t.r(n);var r=t(332);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},332:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));try{r={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,642))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,821))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},i=!1,c=[];o._withStripped=!0},333:function(e,n,t){"use strict";t.r(n);var r=t(334),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},334:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"二维码",level:"",ewmsrc:""}},onLoad:function(n){n.title&&(this.title=n.title),n.level?this.level=e.getStorageSync("des_info").bbs.id||0:this.level=e.getStorageSync("user_info").bbs.id||0,this.getewm()},methods:{kan:function(n){e.previewImage({urls:[n],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){},fail:function(e){}}})},getewm:function(){var n=this;""==this.level&&this.level,this.$api.ewm({id:e.getStorageSync("user_info").id,level:this.level}).then((function(e){1==e.data.code&&(n.ewmsrc=e.data.data.status)}))},sava:function(){e.getImageInfo({src:this.ewmsrc,success:function(n){e.saveImageToPhotosAlbum({filePath:n.path,success:function(){e.showToast({icon:"success",mask:!0,title:"保存到相册了"})}})}})},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=t}).call(this,t(1)["default"])},335:function(e,n,t){"use strict";t.r(n);var r=t(336),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},336:function(e,n,t){}},[[329,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/erweima.js.map