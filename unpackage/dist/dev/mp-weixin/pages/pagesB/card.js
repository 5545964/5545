(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/card"],{320:function(t,n,e){"use strict";(function(t){e(5);i(e(3));var n=i(e(321));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e(1)["createPage"])},321:function(t,n,e){"use strict";e.r(n);var i=e(322),r=e(324);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e(326);var o,u=e(11),s=Object(u["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"3de20918",null,!1,i["components"],o);s.options.__file="pages/pagesB/card.vue",n["default"]=s.exports},322:function(t,n,e){"use strict";e.r(n);var i=e(323);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},323:function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return o})),e.d(n,"recyclableRender",(function(){return a})),e.d(n,"components",(function(){return i}));try{i={uSwiper:function(){return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null,773))},uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,598))},uDesignCard:function(){return e.e("uview-ui/components/u-design-card/u-design-card").then(e.bind(null,780))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,n=t.$createElement;t._self._c},a=!1,o=[];r._withStripped=!0},324:function(t,n,e){"use strict";e.r(n);var i=e(325),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},325:function(t,n,e){"use strict";(function(t){function e(t){return o(t)||a(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{tuijian:[],imgList:[],rinima:[],imgtitle:this.$imgPath,userinfo:{},list:{},background:{background:""},title:"电子名片",state:0,cardinfo:{},desinfo:{}}},onLoad:function(n){var i=this;n.title&&(this.title=n.title),this.state=1,n.state&&(this.state=n.state),this.getcard(),this.userinfo=t.getStorageSync("des_info"),this.rinima.push(this.userinfo.mobile),this.rinima.push(this.userinfo.email),this.rinima.push(this.userinfo.wechat),this.rinima.push(this.userinfo.qq),this.rinima.push(""),this.rinima.push("导航到我的公司！"),this.userinfo.work.split(",").forEach((function(t){i.imgList.push({image:i.$imgPath+t})})),this.$api.loupanden().then((function(t){1==t.data.code&&(t.data.data.status.sort((function(){return Math.random()-.5})),i.tuijian=e(t.data.data.status))}))},methods:{getcard:function(){var t=this;this.$api.business({state:this.state}).then((function(n){1==n.data.code&&(t.cardinfo=n.data.data.status)}))},gohome:function(){t.switchTab({url:"/pages/Home/Home"})},go:function(){t.openLocation({latitude:30.60195606045137,longitude:103.97588054382395,success:function(){},fail:function(t){}})},copy:function(n,e){0==e?t.makePhoneCall({phoneNumber:n,success:function(t){},fail:function(t){}}):e==this.rinima.length-1?this.go():t.setClipboardData({data:n.toString(),success:function(){}})},back:function(n){switch(n){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};n.default=s}).call(this,e(1)["default"])},326:function(t,n,e){"use strict";e.r(n);var i=e(327),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},327:function(t,n,e){}},[[320,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/card.js.map