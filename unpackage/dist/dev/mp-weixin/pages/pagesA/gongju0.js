(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/gongju0"],{165:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(166));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},166:function(e,n,t){"use strict";t.r(n);var r=t(167),a=t(169);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t(171);var o,i=t(32),s=Object(i["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"6b037cab",null,!1,r["components"],o);s.options.__file="pages/pagesA/gongju0.vue",n["default"]=s.exports},167:function(e,n,t){"use strict";t.r(n);var r=t(168);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},168:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return o})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,648))},uEmpty:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-empty/u-empty")]).then(t.bind(null,776))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,827))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement;e._self._c},u=!1,o=[];a._withStripped=!0},169:function(e,n,t){"use strict";t.r(n);var r=t(170),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},170:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{userinfo:{},title:"收货地址",list:[],xuanzhe:0}},onShow:function(){var n=this;this.$api.addressshow({id:e.getStorageSync("user_info").id}).then((function(t){1==t.data.code?(n.list=t.data.data.status,n.list.forEach((function(n){1==n.auto&&e.setStorageSync("address",n)}))):(n.list=[],e.removeStorageSync("address"))}))},onLoad:function(e){e.title&&(this.title=e.title),e.xuanzhe&&(this.xuanzhe=e.xuanzhe)},methods:{addss:function(){e.navigateTo({url:"../pagesB/address?title=添加地址"})},go:function(n){if(0!=this.xuanzhe)return e.$emit("address",this.list[n]),e.navigateBack(-1);var t=JSON.stringify(this.list[n]);e.navigateTo({url:"../pagesB/address?title=修改地址&data="+t})},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=t}).call(this,t(1)["default"])},171:function(e,n,t){"use strict";t.r(n);var r=t(172),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},172:function(e,n,t){}},[[165,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/gongju0.js.map