(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/fenlei"],{"2cc7":function(n,t,e){"use strict";e.r(t);var u=e("c274"),i=e("d8b0");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("b5eb");var c,o=e("f0c5"),r=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=r.exports},"5a40":function(n,t,e){"use strict";(function(n){e("c9dc");u(e("66fd"));var t=u(e("2cc7"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"8c17":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{autoplay:!0,img:this.$imgPath,current:"",video:"",vr_image:"",title:"详情",list:{},go_shop:{}}},onLoad:function(t){var e=this,u=n.getStorageSync("go_shop");this.title=u.name,u.image=u.image.split(","),u.shop.forEach((function(n){n.content=e.img+n.content})),this.list=u},methods:{ended:function(n){this.autoplay=!0},pause:function(n){this.autoplay=!0},bofang:function(n){this.autoplay=!1},goshop:function(t){n.navigateTo({url:"./Shopping?shopid="+t})},kaniamg:function(t){var e=[t];n.previewImage({urls:e,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(n){},fail:function(n){}}})},goVR:function(t){n.navigateTo({url:"../Home/URL/URL?url="+t})},back:function(t){switch(t){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}}}};t.default=e}).call(this,e("543d")["default"])},b2c9:function(n,t,e){},b5eb:function(n,t,e){"use strict";var u=e("b2c9"),i=e.n(u);i.a},c274:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u}));var u={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"452c"))},uHeigth:function(){return e.e("uview-ui/components/u-heigth/u-heigth").then(e.bind(null,"9270"))}},i=function(){var n=this,t=n.$createElement;n._self._c},a=[]},d8b0:function(n,t,e){"use strict";e.r(t);var u=e("8c17"),i=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=i.a}},[["5a40","common/runtime","common/vendor"]]]);