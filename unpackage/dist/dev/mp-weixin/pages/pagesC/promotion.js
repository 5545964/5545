(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/promotion"],{393:function(t,n,e){"use strict";(function(t){e(5);a(e(3));var n=a(e(394));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e(1)["createPage"])},394:function(t,n,e){"use strict";e.r(n);var a=e(395),i=e(397);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e(399);var r,u=e(11),c=Object(u["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"31a45ae8",null,!1,a["components"],r);c.options.__file="pages/pagesC/promotion.vue",n["default"]=c.exports},395:function(t,n,e){"use strict";e.r(n);var a=e(396);e.d(n,"render",(function(){return a["render"]})),e.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),e.d(n,"components",(function(){return a["components"]}))},396:function(t,n,e){"use strict";var a;e.r(n),e.d(n,"render",(function(){return i})),e.d(n,"staticRenderFns",(function(){return r})),e.d(n,"recyclableRender",(function(){return o})),e.d(n,"components",(function(){return a}));try{a={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,642))},uAdata:function(){return e.e("uview-ui/components/u-adata/u-adata").then(e.bind(null,656))},uHeigth:function(){return e.e("uview-ui/components/u-heigth/u-heigth").then(e.bind(null,821))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,n=t.$createElement;t._self._c},o=!1,r=[];i._withStripped=!0},397:function(t,n,e){"use strict";e.r(n);var a=e(398),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},398:function(t,n,e){"use strict";(function(t){function e(t){return r(t)||o(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={onLoad:function(){var n=this;this.$api.banner().then((function(t){if(1==t.data.code){n.lun_list=[];var e=[],a=Date.parse(new Date)/1e3;t.data.data.status.forEach((function(t){2==t.position&&t.endtime>a&&(t.video=n.$imgs(t.video),t.image=n.$imgs(t.image),e.push(t))})),n.lun_list=e}})),this.$api.timeshop().then((function(t){1==t.data.code&&(t.data.data.data.forEach((function(t,n){t["isgo"]=!0,t["cupons"]=!1;var e=t.simage;t.simage=t.image,t.image=e})),t.data.data.cupons.forEach((function(t,n){t["isgo"]=!0,t["cupons"]=!0,t["xc_price"]=t.price;var e=t.simage;t.simage=t.image,t.image=e})),n.data_list=[].concat(e(t.data.data.data),e(t.data.data.cupons)))})),this.videoContext=t.createVideoContext("video"),this.$api.pots({limit:1e3}).then((function(t){1==t.data.code&&(t.data.data.status.data.forEach((function(t){t.content=t.content.replace(/\<img src=\"/gi,n.imgsss)})),n.xinxi=t.data.data.status.data)}))},data:function(){return{videoContext:"",autoplay:!0,imgurl:this.$imgPath,current:0,title:"限时抢购",lun_list:[],data_list:[],imgsss:'<img src="'+this.$imgPath,xinxi:[]}},onUnload:function(){},methods:{ended:function(t){this.autoplay=!0},pause:function(t){this.autoplay=!0},bofang:function(t){this.autoplay=!1},goshop:function(n){n.cupons?t.navigateTo({url:"./youhuijuan?id="+n.id}):t.navigateTo({url:"./Shopping?shopid="+n.id})},linkOthers:function(n){t.navigateTo({url:"../Home/URL/URL?url="+n})},gosss:function(n){switch(Number(n.link)){case 0:this.linkOthers(n.head);break;case 1:t.navigateTo({url:"./Shopping?shopid="+n.shopid});break;case 2:t.navigateTo({url:"./Shopping?id="+n.tc});break;case 3:t.reLaunch({url:"/pages/Home/About"});break;case 4:t.navigateTo({url:"./youhuijuan?id="+n.cupons});break;case 5:var e={};this.xinxi.forEach((function(t){t.id==n.wz&&(e=t)})),""==n.wz?t.reLaunch({url:"./About?titit=0"}):(t.setStorageSync("fuwenbeng",e.content),t.navigateTo({url:"./fuwenben?title="+e.title}));break;default:}},lunbochang:function(){var t=this.lun_list[this.current];this.gosss(t)},gaizhi:function(t){this.current=t.detail.current,t.detail.current==this.lun_list.length-1||this.videoContext.pause()},back:function(n){switch(n){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=c}).call(this,e(1)["default"])},399:function(t,n,e){"use strict";e.r(n);var a=e(400),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},400:function(t,n,e){}},[[393,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/promotion.js.map