(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/shouhou"],{155:function(t,e,n){"use strict";n.r(e);var o=n(156),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},156:function(t,e,n){"use strict";(function(t){function n(t){return r(t)||i(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return s(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{imgtitle:this.$imgPath,imglist:[],name:"image",formData:{},header:{token:t.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",text:"",title:"申请售后",shopid:"",orderid:"",alls_item:{},shangchuan:!1,shsh:0,shop_data:[]}},onLoad:function(t){t.title&&(this.title=t.title),this.alls_item=JSON.parse(t.item),this.alls_item.shop.forEach((function(t){t["checked"]=!1})),this.shop_data=n(this.alls_item.shop)},methods:{xuansss:function(t){var e=this.shop_data;e[t].checked=!e[t].checked,this.shop_data=[],this.shop_data=n(e)},xuan:function(t){this.shsh=t},uploaded:function(e){var n=e,o=[];n.forEach((function(t){o.push(t.response.data.status)})),this.imglist=o,this.shangchuan=!0,t.showToast({title:"图片上传完成",icon:"none"})},fa:function(){if(!this.shangchuan)return t.showToast({title:"请等待图片上传完成",icon:"none"});var e=[],n=[];this.shop_data.forEach((function(t){t.checked&&(e.push(t.id),n.push(t.num))})),this.$api.sqorder({user_id:t.getStorageSync("user_info").id,type:this.shsh,orderid:this.alls_item.orderid,shopid:e,num:n,tuik_ly:this.text,image:this.imglist}).then((function(e){1==e.data.code?(t.showToast({title:"申请售后成功",duration:1e3,icon:"success"}),setTimeout((function(){t.navigateBack(-1)}),1e3)):t.showToast({title:e.data.msg,duration:1e3,icon:"success"})}))},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};e.default=u}).call(this,n(0)["default"])},157:function(t,e,n){},248:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));try{o={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,739))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,754))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,742))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];a._withStripped=!0},468:function(t,e,n){"use strict";(function(t){n(3);o(n(2));var e=o(n(469));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(0)["createPage"])},469:function(t,e,n){"use strict";n.r(e);var o=n(248),a=n(155);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n(470);var r,s=n(1),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"6717819c",null,!1,o["a"],r);u.options.__file="pages/pagesC/shouhou.vue",e["default"]=u.exports},470:function(t,e,n){"use strict";var o=n(157),a=n.n(o);a.a}},[[468,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/shouhou.js.map