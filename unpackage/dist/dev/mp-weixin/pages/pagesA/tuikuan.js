(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/tuikuan"],{262:function(e,t,n){"use strict";(function(e){n(5);i(n(3));var t=i(n(263));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},263:function(e,t,n){"use strict";n.r(t);var i=n(264),o=n(266);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(268);var u,c=n(11),a=Object(c["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"d495df74",null,!1,i["components"],u);a.options.__file="pages/pagesA/tuikuan.vue",t["default"]=a.exports},264:function(e,t,n){"use strict";n.r(t);var i=n(265);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},265:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,598))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,710))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,619))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},r=!1,u=[];o._withStripped=!0},266:function(e,t,n){"use strict";n.r(t);var i=n(267),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},267:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{shangchuan:!1,name:"image",formData:{},header:{token:e.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",list:[{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"}],text:"",title:"申请退款",orderid:"",imgf:[],type:""}},onLoad:function(e){e.title&&(this.title=e.title),this.type=e.type,this.orderid=e.orderid},methods:{uploaded:function(t,n){var i=t,o=[];i.forEach((function(e){o.push(e.response.data.status)})),this.imgf=o,this.shangchuan=!0,e.showToast({title:"图片上传完成",icon:"none"})},tuikuan:function(){this.$api.ordertui({type:this.type,orderid:this.orderid,user_id:e.getStorageSync("user_info").id,content:this.text,image:this.imgf}).then((function(t){1==t.data.code?(e.showToast({title:"申请成功",duration:1e3,icon:"success"}),e.$emit("number"),setTimeout((function(){e.navigateBack(-1)}),1e3)):e.showToast({title:t.data.msg,duration:1e3,icon:"success"})}))},xuanzhe:function(e){this.list[e].check=!this.list[e].check},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=n}).call(this,n(1)["default"])},268:function(e,t,n){"use strict";n.r(t);var i=n(269),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},269:function(e,t,n){}},[[262,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/tuikuan.js.map