(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/address"],{311:function(e,n,t){"use strict";(function(e){t(5);i(t(3));var n=i(t(312));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},312:function(e,n,t){"use strict";t.r(n);var i=t(313),a=t(315);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t(317);var r,s=t(32),u=Object(s["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"00ca5b1c",null,!1,i["components"],r);u.options.__file="pages/pagesB/address.vue",n["default"]=u.exports},313:function(e,n,t){"use strict";t.r(n);var i=t(314);t.d(n,"render",(function(){return i["render"]})),t.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(n,"components",(function(){return i["components"]}))},314:function(e,n,t){"use strict";var i;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return r})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return i}));try{i={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,632))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,789))},uSwitch:function(){return t.e("uview-ui/components/u-switch/u-switch").then(t.bind(null,851))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,804))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement;e._self._c},o=!1,r=[];a._withStripped=!0},315:function(e,n,t){"use strict";t.r(n);var i=t(316),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},316:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{mnmn:"",title:"",data:{},name:"",phone:"",address:"",moren:0,type:1,id:0}},onLoad:function(e){this.title=e.title,e.data&&(this.data=JSON.parse(e.data),this.name=this.data.username,this.phone=this.data.phone,this.address=this.data.address,this.mnmn=this.data.title,this.moren=this.data.auto,this.type=0,this.id=this.data.id)},methods:{selece:function(){var n=this;e.showModal({title:"提示",content:"是否删除地址？",success:function(t){t.confirm?n.$api.addressdel({userid:e.getStorageSync("user_info").id,id:n.id}).then((function(n){1==n.data.code?e.navigateBack({delta:1}):e.showModal({title:n.data.msg})})):t.cancel}})},submit:function(){var n=this.phone;if(!/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(n))return e.showToast({title:"手机号码有误，请重填",icon:"none"}),this.phone="",!1;this.$api.address({userid:e.getStorageSync("user_info").id,username:this.name,phone:this.phone,address:this.address,title:this.mnmn,auto:this.moren,type:this.type,id:this.id}).then((function(n){1==n.data.code?e.navigateBack({delta:1}):e.showModal({title:n.data.msg})}))},xuanzhe:function(){var n=this;e.chooseLocation({success:function(e){n.mnmn=e.address,n.address=e.name}})},change:function(e){this.moren=e},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=t}).call(this,t(1)["default"])},317:function(e,n,t){"use strict";t.r(n);var i=t(318),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},318:function(e,n,t){}},[[311,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/address.js.map