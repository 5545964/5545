(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/card"],{109:function(t,e,n){"use strict";n.r(e);var o=n(110),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},110:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{imgtitle:this.$imgPath,userinfo:{},list:{},background:{background:""},title:"电子名片",state:0,cardinfo:{},desinfo:{}}},onLoad:function(e){e.title&&(this.title=e.title),e.state&&(this.state=e.state,this.desinfo=t.getStorageSync("des_info")),this.getcard(),this.userinfo=t.getStorageSync("des_info")},computed:{imgList:function(){var t=this,e=[];return this.desinfo.work&&this.desinfo.work.split(",").forEach((function(n){e.push(t.$imgPath+n)})),e}},methods:{getcard:function(){var t=this;this.$api.business({state:this.state}).then((function(e){1==e.data.code&&(t.cardinfo=e.data.data.status)}))},gohome:function(){t.switchTab({url:"/pages/Home/Home"})},go:function(){t.openLocation({latitude:30.60195606045137,longitude:103.97588054382395,success:function(){},fail:function(t){}})},copy:function(e,n){"mobile"==n&&t.makePhoneCall({phoneNumber:e,success:function(t){},fail:function(t){}}),t.setClipboardData({data:e.toString(),success:function(){}})},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};e.default=n}).call(this,n(0)["default"])},111:function(t,e,n){},233:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));try{o={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,739))},uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,761))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];i._withStripped=!0},421:function(t,e,n){"use strict";(function(t){n(3);o(n(2));var e=o(n(422));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(0)["createPage"])},422:function(t,e,n){"use strict";n.r(e);var o=n(233),i=n(109);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(423);var u,s=n(1),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"3de20918",null,!1,o["a"],u);c.options.__file="pages/pagesB/card.vue",e["default"]=c.exports},423:function(t,e,n){"use strict";var o=n(111),i=n.n(o);i.a}},[[421,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/card.js.map