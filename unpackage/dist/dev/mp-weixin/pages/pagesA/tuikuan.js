(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/tuikuan"],{285:function(e,t,n){"use strict";(function(e){n(5);i(n(3));var t=i(n(286));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},286:function(e,t,n){"use strict";n.r(t);var i=n(287),o=n(289);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n(291);var r,c=n(11),a=Object(c["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"d495df74",null,!1,i["components"],r);a.options.__file="pages/pagesA/tuikuan.vue",t["default"]=a.exports},287:function(e,t,n){"use strict";n.r(t);var i=n(288);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},288:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,624))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,789))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,796))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,645))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},u=!1,r=[];o._withStripped=!0},289:function(e,t,n){"use strict";n.r(t);var i=n(290),o=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=o.a},290:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{shangchuan:!1,name:"image",formData:{},header:{token:e.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",list:[{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"}],text:"",title:"申请退款",orderid:"",imgf:[],type:""}},onLoad:function(e){e.title&&(this.title=e.title),this.type=e.type,this.orderid=e.orderid},methods:{uploaded:function(t,n){var i=t,o=[];i.forEach((function(e){o.push(e.response.data.status)})),this.imgf=o,this.shangchuan=!0,e.showToast({title:"图片上传完成",icon:"none"})},tuikuan:function(){this.$api.ordertui({type:this.type,orderid:this.orderid,user_id:e.getStorageSync("user_info").id,content:this.text,image:this.imgf}).then((function(t){1==t.data.code?(e.showToast({title:"申请成功",duration:1e3,icon:"success"}),e.$emit("number"),setTimeout((function(){e.navigateBack({delta:2})}),1e3)):e.showToast({title:t.data.msg,duration:1e3,icon:"success"})}))},xuanzhe:function(e){this.list[e].check=!this.list[e].check},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};t.default=n}).call(this,n(1)["default"])},291:function(e,t,n){"use strict";n.r(t);var i=n(292),o=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=o.a},292:function(e,t,n){}},[[285,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/tuikuan.js.map