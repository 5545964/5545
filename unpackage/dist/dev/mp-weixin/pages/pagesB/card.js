(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/card"],{109:function(t,e,n){"use strict";n.r(e);var i=n(110),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},110:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{rinima:{},imgtitle:this.$imgPath,userinfo:{},list:{},background:{background:""},title:"电子名片",state:0,cardinfo:{},desinfo:{}}},onLoad:function(e){e.title&&(this.title=e.title),e.state&&(this.state=e.state),this.getcard(),this.userinfo=t.getStorageSync("des_info"),this.rinima["mobile"]=this.userinfo.mobile,this.rinima["email"]=this.userinfo.email,this.rinima["wechat"]=this.userinfo.wechat,this.rinima["qq"]=this.userinfo.qq,this.rinima["daohang"]=this.userinfo.qq,console.log(this.rinima)},computed:{imgList:function(){var t=this,e=[];return this.desinfo.work&&this.desinfo.work.split(",").forEach((function(n){e.push(t.$imgPath+n)})),e}},methods:{getcard:function(){var t=this;this.$api.business({state:this.state}).then((function(e){1==e.data.code&&(t.cardinfo=e.data.data.status)}))},gohome:function(){t.switchTab({url:"/pages/Home/Home"})},go:function(){t.openLocation({latitude:30.60195606045137,longitude:103.97588054382395,success:function(){},fail:function(t){}})},copy:function(e,n){"mobile"==n&&t.makePhoneCall({phoneNumber:e,success:function(t){},fail:function(t){}}),t.setClipboardData({data:e.toString(),success:function(){}})},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};e.default=n}).call(this,n(0)["default"])},111:function(t,e,n){},233:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,738))},uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,760))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];o._withStripped=!0},421:function(t,e,n){"use strict";(function(t){n(3);i(n(2));var e=i(n(422));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(0)["createPage"])},422:function(t,e,n){"use strict";n.r(e);var i=n(233),o=n(109);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(423);var s,u=n(1),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"3de20918",null,!1,i["a"],s);r.options.__file="pages/pagesB/card.vue",e["default"]=r.exports},423:function(t,e,n){"use strict";var i=n(111),o=n.n(i);o.a}},[[421,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/card.js.map