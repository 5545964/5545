(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/shengfen"],{304:function(e,t,n){"use strict";(function(e){n(5);i(n(3));var t=i(n(305));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},305:function(e,t,n){"use strict";n.r(t);var i=n(306),r=n(308);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n(310);var o,s=n(11),u=Object(s["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"b54858e4",null,!1,i["components"],o);u.options.__file="pages/pagesB/shengfen.vue",t["default"]=u.exports},306:function(e,t,n){"use strict";n.r(t);var i=n(307);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},307:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,600))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-empty/u-empty")]).then(n.bind(null,668))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},a=!1,o=[];r._withStripped=!0},308:function(e,t,n){"use strict";n.r(t);var i=n(309),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},309:function(e,t,n){"use strict";(function(e){function n(e){return o(e)||a(e)||r(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{id:"",jiage:0,hei:1e4,list:[],title:"身份专区",userinfo:{},isdes:0,usershengfen:"",types:""}},onLoad:function(t){t.title&&(this.title=t.title),t.isdes&&(this.isdes=1),""!=e.getStorageSync("user_info").bbs&&null!=e.getStorageSync("user_info").bbs&&(0==this.isdes?this.usershengfen=e.getStorageSync("user_info").bbs.id:this.usershengfen=e.getStorageSync("des_info").bbs.id),this.getdata()},methods:{kankan:function(){console.log(e.getStorageSync("des_info")),console.log("321312321321312321312313123213"),console.log(e.getStorageSync("user_info"))},topay:function(){var t=this;this.$api.buylevel({id:this.id,user_id:e.getStorageSync("user_info").id}).then((function(n){if(200==n.data.code){var i=t;e.requestPayment({timeStamp:n.data.data.timeStamp,nonceStr:n.data.data.nonceStr,package:n.data.data.package,signType:n.data.data.signType,paySign:n.data.data.paySign,success:function(t){e.showToast({title:"购买"+i.types+"成功",icon:"success"}),setTimeout((function(){e.navigateBack(-1)}),1e3)},fail:function(t){e.showToast({title:"支付失败",icon:"none"})}})}}))},getdata:function(){var t=this;this.$api.shenfen({type:this.isdes,id:e.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&(e.data.data.status.forEach((function(e){e["name"]=e.type.split("（")[0]})),t.list=n(e.data.data.status),t.jiage=t.list[0].money,t.id=t.list[0].id,setTimeout((function(){t.gaodu(0)}),500))}))},gaodu:function(t){var n=this;if(0!=this.list.length){var i=e.createSelectorQuery().in(this),r="#id"+t;i.select(r).boundingClientRect((function(e){n.hei=e.height+57})).exec()}},lunbo:function(e){this.jiage=this.list[e.detail.current].money,this.id=this.list[e.detail.current].id,this.types=this.list[e.detail.current].type,this.gaodu(e.detail.current)},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=u}).call(this,n(1)["default"])},310:function(e,t,n){"use strict";n.r(t);var i=n(311),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},311:function(e,t,n){}},[[304,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/shengfen.js.map