(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/redsuccess"],{377:function(e,n,t){"use strict";(function(e){t(5);o(t(3));var n=o(t(378));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},378:function(e,n,t){"use strict";t.r(n);var o=t(379),i=t(381);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t(383);var a,s=t(11),u=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"59e4bb5a",null,!1,o["components"],a);u.options.__file="pages/pagesB/redsuccess.vue",n["default"]=u.exports},379:function(e,n,t){"use strict";t.r(n);var o=t(380);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},380:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,641))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,791))},uCitySelect:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-city-select/u-city-select")]).then(t.bind(null,862))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.show=!0})},r=!1,a=[];i._withStripped=!0},381:function(e,n,t){"use strict";t.r(n);var o=t(382),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},382:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLoad:function(e){console.log(e),this.level=e.level,this.name=e.name},data:function(){return{name:"",level:"",addressxq:"",address:"",emal:"",idcard:"",code:"",huoqu:"获取验证码",phone:"",show:!1,title:"注册销售员",timea:0}},methods:{go_code:function(){var n=this;0==this.timea&&this.$api.emsphone({phone:this.phone,user_id:e.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){n.timea=60,e.showToast({title:"发送成功",duration:1e3,icon:"none"});var o=setInterval((function(){n.timea--,n.huoqu=n.timea+"s后获取",0==n.timea&&(clearInterval(o),n.huoqu="获取验证码")}),1e3)}else e.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},cityChange:function(e){this.address=e.province.label+e.city.label+e.area.label},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}},submit:function(){var n=this;if(""==this.code||""==this.idcard||""==this.address||""==this.emal||""==this.phone||""==this.addressxq||""==this.level)return e.showToast({title:"请检查资料",icon:"none"});this.$api.emsyzphone({phone:this.phone,yzm:this.code}).then((function(t){1==t.data.code?n.$api.sqb({user_id:e.getStorageSync("user_info").id,idcart:n.idcard,address:n.address,email:n.emal,mobile:n.phone,level:n.level,levelname:n.name,addressxq:n.addressxq}).then((function(n){e.showToast({title:n.data.msg,duration:1e3,icon:"none"}),1==n.data.code&&setTimeout((function(){e.reLaunch({url:"/pages/Home/User"})}),1e3)})):e.showToast({title:"验证码错误",duration:1e3,icon:"none"})}))}}};n.default=t}).call(this,t(1)["default"])},383:function(e,n,t){"use strict";t.r(n);var o=t(384),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},384:function(e,n,t){}},[[377,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/redsuccess.js.map