(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/shengfen"],{103:function(t,e,n){"use strict";n.r(e);var i=n(104),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},104:function(t,e,n){"use strict";(function(t){function n(t){return r(t)||o(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return s(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{id:"",jiage:0,hei:1e4,list:[],title:"身份专区",userinfo:{},isdes:0,usershengfen:"",types:""}},onLoad:function(e){e.title&&(this.title=e.title),e.isdes&&(this.isdes=1),""!=t.getStorageSync("user_info").bbs&&null!=t.getStorageSync("user_info").bbs&&(0==this.isdes?this.usershengfen=t.getStorageSync("user_info").bbs.id:this.usershengfen=t.getStorageSync("des_info").bbs.id),this.getdata()},methods:{topay:function(){var e=this;this.$api.buylevel({id:this.id,user_id:t.getStorageSync("user_info").id}).then((function(n){if(200==n.data.code){var i=e;t.requestPayment({timeStamp:n.data.data.timeStamp,nonceStr:n.data.data.nonceStr,package:n.data.data.package,signType:n.data.data.signType,paySign:n.data.data.paySign,success:function(e){t.showToast({title:"购买"+i.types+"成功",icon:"success"}),setTimeout((function(){t.navigateBack(-1)}),1e3)},fail:function(e){t.showToast({title:"支付失败",icon:"none"})}})}}))},getdata:function(){var e=this;this.$api.shenfen({type:this.isdes,id:t.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&(t.data.data.status.forEach((function(t){t["name"]=t.type.split("（")[0]})),e.list=n(t.data.data.status),e.jiage=e.list[0].money,e.id=e.list[0].id,setTimeout((function(){e.gaodu(0)}),500))}))},gaodu:function(e){var n=this;if(0!=this.list.length){var i=t.createSelectorQuery().in(this),a="#id"+e;i.select(a).boundingClientRect((function(t){n.hei=t.height+57})).exec()}},lunbo:function(t){this.jiage=this.list[t.detail.current].money,this.id=this.list[t.detail.current].id,this.types=this.list[t.detail.current].type,this.gaodu(t.detail.current)},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};e.default=u}).call(this,n(0)["default"])},105:function(t,e,n){},235:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,755))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-empty/u-empty")]).then(n.bind(null,764))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];a._withStripped=!0},420:function(t,e,n){"use strict";(function(t){n(3);i(n(2));var e=i(n(421));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(0)["createPage"])},421:function(t,e,n){"use strict";n.r(e);var i=n(235),a=n(103);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n(422);var r,s=n(1),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"b54858e4",null,!1,i["a"],r);u.options.__file="pages/pagesB/shengfen.vue",e["default"]=u.exports},422:function(t,e,n){"use strict";var i=n(105),a=n.n(i);a.a}},[[420,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/shengfen.js.map