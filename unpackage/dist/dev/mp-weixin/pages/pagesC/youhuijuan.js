(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/youhuijuan"],{538:function(n,e,t){"use strict";(function(n){t(5);u(t(4));var e=u(t(539));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},539:function(n,e,t){"use strict";t.r(e);var u=t(540),a=t(542);for(var o in a)"default"!==o&&function(n){t.d(e,n,(function(){return a[n]}))}(o);t(544);var i,r=t(11),c=Object(r["default"])(a["default"],u["render"],u["staticRenderFns"],!1,null,"56c6821c",null,!1,u["components"],i);c.options.__file="pages/pagesC/youhuijuan.vue",e["default"]=c.exports},540:function(n,e,t){"use strict";t.r(e);var u=t(541);t.d(e,"render",(function(){return u["render"]})),t.d(e,"staticRenderFns",(function(){return u["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return u["recyclableRender"]})),t.d(e,"components",(function(){return u["components"]}))},541:function(n,e,t){"use strict";var u;t.r(e),t.d(e,"render",(function(){return a})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return o})),t.d(e,"components",(function(){return u}));try{u={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,659))},uSwiper:function(){return t.e("uview-ui/components/u-swiper/u-swiper").then(t.bind(null,885))},uParse:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-parse/u-parse")]).then(t.bind(null,735))},uKehu:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-kehu/u-kehu")]).then(t.bind(null,680))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var n=this,e=n.$createElement;n._self._c},o=!1,i=[];a._withStripped=!0},542:function(n,e,t){"use strict";t.r(e);var u=t(543),a=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);e["default"]=a.a},543:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(t(20));function a(n){return n&&n.__esModule?n:{default:n}}function o(n,e,t,u,a,o,i){try{var r=n[o](i),c=r.value}catch(s){return void t(s)}r.done?e(c):Promise.resolve(c).then(u,a)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(u,a){var i=n.apply(e,t);function r(n){o(i,u,a,r,c,"next",n)}function c(n){o(i,u,a,r,c,"throw",n)}r(void 0)}))}}var r={data:function(){return{youhuijuan:{},list:[],title:""}},onLoad:function(n){var e=this;this.$api.cupons({id:n.id}).then((function(n){e.destaoxi=[],1==n.data.code&&(e.youhuijuan=n.data.data.status[0],e.youhuijuan.image=e.youhuijuan.image.split(","),e.youhuijuan.image.forEach((function(n){e.list.push(e.$imgPath+n)})),e.title=e.youhuijuan.name)}))},methods:{goumai:function(){var e=this;return i(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$login();case 2:if(!t.sent){t.next=4;break}e.$api.paycupons({user_id:n.getStorageSync("user_info").id,coupons_id:e.youhuijuan.id}).then((function(e){if(200==e.data.code){n.requestPayment({timeStamp:e.data.data.timeStamp,nonceStr:e.data.data.nonceStr,package:e.data.data.package,signType:e.data.data.signType,paySign:e.data.data.paySign,success:function(e){n.showToast({title:"支付成功",icon:"none"}),setTimeout((function(){n.reLaunch({url:"../pagesA/gongju4"})}),800)},fail:function(e){n.showToast({title:"支付失败",icon:"none"})}})}else n.showToast({title:e.data.msg,icon:"none"})}));case 4:case"end":return t.stop()}}),t)})))()},kansss:function(e){n.previewImage({urls:this.list,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(n){},fail:function(n){}}})},back:function(e){switch(e){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=r}).call(this,t(1)["default"])},544:function(n,e,t){"use strict";t.r(e);var u=t(545),a=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);e["default"]=a.a},545:function(n,e,t){}},[[538,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/youhuijuan.js.map