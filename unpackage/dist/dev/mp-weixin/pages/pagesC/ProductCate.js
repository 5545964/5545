(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/ProductCate"],{401:function(n,t,e){"use strict";(function(n){e(5);i(e(3));var t=i(e(402));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e(1)["createPage"])},402:function(n,t,e){"use strict";e.r(t);var i=e(403),r=e(405);for(var o in r)"default"!==o&&function(n){e.d(t,n,(function(){return r[n]}))}(o);e(407);var a,u=e(11),c=Object(u["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"3c7a9632",null,!1,i["components"],a);c.options.__file="pages/pagesC/ProductCate.vue",t["default"]=c.exports},403:function(n,t,e){"use strict";e.r(t);var i=e(404);e.d(t,"render",(function(){return i["render"]})),e.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(t,"components",(function(){return i["components"]}))},404:function(n,t,e){"use strict";var i;e.r(t),e.d(t,"render",(function(){return r})),e.d(t,"staticRenderFns",(function(){return a})),e.d(t,"recyclableRender",(function(){return o})),e.d(t,"components",(function(){return i}));try{i={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,641))},uSearch:function(){return e.e("uview-ui/components/u-search/u-search").then(e.bind(null,648))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,727))},uCollapse:function(){return e.e("uview-ui/components/u-collapse/u-collapse").then(e.bind(null,876))},uCollapseItem:function(){return e.e("uview-ui/components/u-collapse-item/u-collapse-item").then(e.bind(null,883))},uBdata:function(){return e.e("uview-ui/components/u-bdata/u-bdata").then(e.bind(null,890))},uPopup:function(){return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null,720))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,t=n.$createElement;n._self._c},o=!1,a=[];r._withStripped=!0},405:function(n,t,e){"use strict";e.r(t);var i=e(406),r=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=r.a},406:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e(26));function r(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,i,r,o,a){try{var u=n[o](a),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(i,r)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var a=n.apply(t,e);function u(n){o(a,i,r,u,c,"next",n)}function c(n){o(a,i,r,u,c,"throw",n)}u(void 0)}))}}function u(n){return f(n)||l(n)||s(n)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(n,t){if(n){if("string"===typeof n)return d(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(n,t):void 0}}function l(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function f(n){if(Array.isArray(n))return d(n)}function d(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var h={data:function(){return{zhongnum:1,zhong:"arrow-up-fill",xiaonum:0,xiao:"arrow-down-fill",destaoxi:[],cc:[],kklkl:[],mmok:1,title:"产品分类",keyword:"",imgtilte:this.$imgPath,show:!1,scrollTop:0,current:0,menuHeight:0,menuItemHeight:0,cateList:[],shopList:[]}},onLoad:function(){n.removeStorageSync("canpingindex"),n.removeStorageSync("zhankai")},onShow:function(){this.current=n.getStorageSync("canpingindex")||0,this.getCate()},computed:{shopListALL:function(){var n=this.shopList;return n}},methods:{zhankai:function(t){console.log(t),n.setStorageSync("zhankai",t.index)},zhonghe:function(){if(this.zhongnum=1,this.xiaonum=0,"arrow-up-fill"==this.zhong){var n=this.kklkl;for(var t in n)n[t].neirong=n[t].neirong.sort((function(n,t){return t.xc_price-n.xc_price}));this.kklkl=u(n),this.zhong="arrow-down-fill"}else{var e=this.kklkl;for(var i in e)e[i].neirong=e[i].neirong.sort((function(n,t){return n.xc_price-t.xc_price}));this.kklkl=u(e),this.zhong="arrow-up-fill"}},xiaoliang:function(){if(this.xiaonum=1,this.zhongnum=0,"arrow-up-fill"==this.xiao){var n=this.kklkl;for(var t in n)n[t].neirong=n[t].neirong.sort((function(n,t){return t.kucun-n.kucun}));this.kklkl=u(n),this.xiao="arrow-down-fill"}else{var e=this.kklkl;for(var i in e)e[i].neirong=e[i].neirong.sort((function(n,t){return n.kucun-t.kucun}));this.kklkl=u(e),this.xiao="arrow-up-fill"}},sortBy:function(n,t){return function(n,t){return n.field1==t.field1?n.field2-t.field2:n.field1-t.field1}},go_youhuijuan:function(t){n.navigateTo({url:"./youhuijuan?id="+t.id})},go_shop:function(t){n.navigateTo({url:"./FlagshipDetail?id="+t.id})},goshop:function(t){n.navigateTo({url:"./Shopping?shopid="+t.id})},seach_go:function(){n.navigateTo({url:"./searchResult"})},back:function(t){switch(t){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}},getCate:function(){var n=this;this.$api.seemore().then((function(t){1==t.data.code&&(n.cateList=t.data.data.status,n.swichMenu(n.current))}))},changeshop:function(n){var t=this;t.shopList=[],setTimeout(a(i.default.mark((function e(){var r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.categoryshop({id:n});case 2:r=e.sent,t.shopList=r.data.data.status.data,t.$nextTick((function(){t.$refs.collapseall[0].init()}));case 5:case"end":return e.stop()}}),e)}))),100)},getImg:function(){return Math.floor(35*Math.random())},swichMenu:function(t){var e=this;return a(i.default.mark((function r(){var o,a,u,c,s;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.current=t,n.setStorageSync("canpingindex",t),31!=e.cateList[t].id&&32!=e.cateList[t].id&&33!=e.cateList[t].id){i.next=8;break}e.mmok=1,e.kklkl=[],e.$api.categoryshop({id:e.cateList[t].id}).then((function(n){e.destaoxi=n.data.data.status})),i.next=33;break;case 8:if(82==e.cateList[t].id){i.next=30;break}e.mmok=0,e.kklkl=e.cateList[t].child,o=e.cateList[t].child,a=0;case 13:if(!(a<o.length)){i.next=21;break}return i.next=16,e.$api.categoryshop({id:o[a].id});case 16:u=i.sent,1==u.data.code&&(o[a]["neirong"]=u.data.data.status.data);case 18:a++,i.next=13;break;case 21:for(c in e.cateList[t].child.forEach((function(n,t){n["check"]=!1})),e.kklkl=[],e.kklkl=e.cateList[t].child,e.kklkl)e.kklkl[c].neirong=e.kklkl[c].neirong.sort((function(n,t){return t.xc_price-n.xc_price}));e.$nextTick((function(){e.$refs.collapse.init()})),s=n.getStorageSync("zhankai")||0,e.kklkl[s].check=!0,i.next=33;break;case 30:e.mmok=2,e.destaoxi=[],e.$api.cupons({id:0}).then((function(n){e.destaoxi=[],1==n.data.code&&(e.destaoxi=n.data.data.status)}));case 33:case"end":return i.stop()}}),r)})))()},getElRect:function(t,e){var i=this;new Promise((function(r,o){var a=n.createSelectorQuery().in(i);a.select("."+t).fields({size:!0},(function(n){n?i[e]=n.height:setTimeout((function(){i.getElRect(t)}),10)})).exec()}))}}};t.default=h}).call(this,e(1)["default"])},407:function(n,t,e){"use strict";e.r(t);var i=e(408),r=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=r.a},408:function(n,t,e){}},[[401,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/ProductCate.js.map