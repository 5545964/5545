(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/baozhaung"],{344:function(e,t,n){"use strict";(function(e){n(5);r(n(3));var t=r(n(345));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},345:function(e,t,n){"use strict";n.r(t);var r=n(346),a=n(348);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n(350);var c,i=n(11),s=Object(i["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"1c34bcd3",null,!1,r["components"],c);s.options.__file="pages/pagesB/baozhaung.vue",t["default"]=s.exports},346:function(e,t,n){"use strict";n.r(t);var r=n(347);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},347:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,614))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},o=!1,c=[];a._withStripped=!0},348:function(e,t,n){"use strict";n.r(t);var r=n(349),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},349:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"报装",allSel:!1,carList:[],img:this.$imgPath,orderid:"",tiao:0}},onLoad:function(t){console.log(t),this.orderid=t.orderid;var n=e.getStorageSync("baozhaung");n.forEach((function(e){e["selected"]=!1})),this.carList=n,t.tiao&&(this.tiao=t.tiao),console.log(this.tiao)},methods:{jsCars:function(){var t=this,n=[];this.carList.forEach((function(e){e.selected&&n.push(e.id)})),console.log(n),this.$api.sqlading({shopid:n,orderid:this.orderid,userid:e.getStorageSync("user_info").id}).then((function(n){if(e.showToast({title:"提交成功",icon:"success"}),1==n.data.code){e.removeStorageSync("baozhaung");var r=t;e.navigateBack({delta:Number(r.tiao)})}}))},selThis:function(e){var t=this,n=t.carList,r=0;n[e].selected=!n[e].selected,t.carList=n,t.carList.forEach((function(e,t){e.selected&&(r+=1)})),r==t.carList.length?t.allSel=!0:t.allSel=!1},allSelBtn:function(){var e=this;e.allSel=!e.allSel;for(var t=e.carList,n=0;n<t.length;n++)e.allSel?t[n].selected=!0:t[n].selected=!1},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=n}).call(this,n(1)["default"])},350:function(e,t,n){"use strict";n.r(t);var r=n(351),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},351:function(e,t,n){}},[[344,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/baozhaung.js.map