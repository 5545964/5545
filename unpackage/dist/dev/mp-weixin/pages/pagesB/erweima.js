(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/erweima"],{106:function(e,t,n){"use strict";n.r(t);var a=n(107),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},107:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"二维码",level:"",ewmsrc:""}},onLoad:function(t){t.title&&(this.title=t.title),t.level?this.level=e.getStorageSync("des_info").bbs.id:this.level=e.getStorageSync("user_info").bbs.id,this.getewm()},methods:{kan:function(t){e.previewImage({urls:[t],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){},fail:function(e){}}})},getewm:function(){var t=this;""==this.level&&this.level,this.$api.ewm({id:e.getStorageSync("user_info").id,level:this.level}).then((function(e){1==e.data.code&&(t.ewmsrc=e.data.data.status)}))},sava:function(){e.getImageInfo({src:this.ewmsrc,success:function(t){e.saveImageToPhotosAlbum({filePath:t.path,success:function(){e.showToast({icon:"success",mask:!0,title:"保存到相册了"})}})}})},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=n}).call(this,n(0)["default"])},108:function(e,t,n){},232:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,739))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];o._withStripped=!0},418:function(e,t,n){"use strict";(function(e){n(3);a(n(2));var t=a(n(419));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(0)["createPage"])},419:function(e,t,n){"use strict";n.r(t);var a=n(232),o=n(106);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(420);var s,c=n(1),u=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"33647dca",null,!1,a["a"],s);u.options.__file="pages/pagesB/erweima.vue",t["default"]=u.exports},420:function(e,t,n){"use strict";var a=n(108),o=n.n(a);o.a}},[[418,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/erweima.js.map