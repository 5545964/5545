(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/address"],{288:function(e,t,n){"use strict";(function(e){n(5);a(n(3));var t=a(n(289));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},289:function(e,t,n){"use strict";n.r(t);var a=n(290),i=n(292);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n(294);var o,r=n(11),u=Object(r["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"00ca5b1c",null,!1,a["components"],o);u.options.__file="pages/pagesB/address.vue",t["default"]=u.exports},290:function(e,t,n){"use strict";n.r(t);var a=n(291);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},291:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,600))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,704))},uSwitch:function(){return n.e("uview-ui/components/u-switch/u-switch").then(n.bind(null,768))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement;e._self._c},s=!1,o=[];i._withStripped=!0},292:function(e,t,n){"use strict";n.r(t);var a=n(293),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},293:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{mnmn:"",title:"",data:{},name:"",phone:"",address:"",moren:0,type:1,id:0}},onLoad:function(e){this.title=e.title,e.data&&(this.data=JSON.parse(e.data),this.name=this.data.username,this.phone=this.data.phone,this.address=this.data.address,this.mnmn=this.data.title,this.moren=this.data.auto,this.type=0,this.id=this.data.id)},methods:{selece:function(){var t=this;e.showModal({title:"提示",content:"是否删除地址？",success:function(n){n.confirm?t.$api.addressdel({userid:e.getStorageSync("user_info").id,id:t.id}).then((function(t){1==t.data.code?e.navigateBack({delta:1}):e.showModal({title:t.data.msg})})):n.cancel}})},submit:function(){var t=this.phone;if(!/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(t))return e.showToast({title:"手机号码有误，请重填",icon:"none"}),this.phone="",!1;this.$api.address({userid:e.getStorageSync("user_info").id,username:this.name,phone:this.phone,address:this.address,title:this.mnmn,auto:this.moren,type:this.type,id:this.id}).then((function(t){1==t.data.code?e.navigateBack({delta:1}):e.showModal({title:t.data.msg})}))},xuanzhe:function(){var t=this;e.chooseLocation({success:function(e){t.mnmn=e.address,t.address=e.name}})},change:function(e){this.moren=e},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=n}).call(this,n(1)["default"])},294:function(e,t,n){"use strict";n.r(t);var a=n(295),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},295:function(e,t,n){}},[[288,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/address.js.map