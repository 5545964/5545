(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/ProductCate"],{121:function(e,t,n){"use strict";n.r(t);var u=n(122),o=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);t["default"]=o.a},122:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n(10)),o=i(n(435));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,u,o,i,a){try{var r=e[i](a),c=r.value}catch(s){return void n(s)}r.done?t(c):Promise.resolve(c).then(u,o)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(u,o){var i=e.apply(t,n);function r(e){a(i,u,o,r,c,"next",e)}function c(e){a(i,u,o,r,c,"throw",e)}r(void 0)}))}}var c={onLoad:function(){this.getCate()},data:function(){return{title:"产品分类",keyword:"",imgtilte:this.$imgPath,show:!1,tabbar:o.default,scrollTop:0,current:0,menuHeight:0,menuItemHeight:0,cateList:[],shopList:[],chooseList:[{id:0,name:"综合"},{id:1,name:"销量"},{id:2,name:"筛选"}]}},computed:{shopListALL:function(){var e=this.shopList;return e}},methods:{goshop:function(t){e.navigateTo({url:"./Shopping?shopid="+t.id})},seach_go:function(){e.navigateTo({url:"./searchResult"})},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}},getCate:function(){var e=this;this.$api.seemore().then((function(t){1==t.data.code&&(e.cateList=t.data.data.status)}))},changeshop:function(e){var t=this,n=this;n.shopList=[],setTimeout(r(u.default.mark((function o(){var i;return u.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return u.next=2,n.$api.categoryshop({id:e});case 2:i=u.sent,n.shopList=i.data.data.status.data,n.$nextTick((function(){n.$refs.collapseall[0].init(),n.$refs.collapseall[t.current].init()}));case 5:case"end":return u.stop()}}),o)}))),100)},getImg:function(){return Math.floor(35*Math.random())},swichMenu:function(e){var t=this;return r(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e!=t.current){n.next=2;break}return n.abrupt("return");case 2:if(t.current=e,0!=t.menuHeight&&0!=t.menuItemHeight){n.next=8;break}return n.next=6,t.getElRect("menu-scroll-view","menuHeight");case 6:return n.next=8,t.getElRect("u-tab-item","menuItemHeight");case 8:t.scrollTop=e*t.menuItemHeight+t.menuItemHeight/2-t.menuHeight/2;case 9:case"end":return n.stop()}}),n)})))()},getElRect:function(t,n){var u=this;new Promise((function(o,i){var a=e.createSelectorQuery().in(u);a.select("."+t).fields({size:!0},(function(e){e?u[n]=e.height:setTimeout((function(){u.getElRect(t)}),10)})).exec()}))}}};t.default=c}).call(this,n(0)["default"])},123:function(e,t,n){},237:function(e,t,n){"use strict";var u;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));try{u={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,739))},uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,740))},uCollapse:function(){return n.e("uview-ui/components/u-collapse/u-collapse").then(n.bind(null,763))},uCollapseItem:function(){return n.e("uview-ui/components/u-collapse-item/u-collapse-item").then(n.bind(null,764))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,751))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.show=!0})},i=[];o._withStripped=!0},433:function(e,t,n){"use strict";(function(e){n(3);u(n(2));var t=u(n(434));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(0)["createPage"])},434:function(e,t,n){"use strict";n.r(t);var u=n(237),o=n(121);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(436);var a,r=n(1),c=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,"3c7a9632",null,!1,u["a"],a);c.options.__file="pages/pagesC/ProductCate.vue",t["default"]=c.exports},436:function(e,t,n){"use strict";var u=n(123),o=n.n(u);o.a}},[[433,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/ProductCate.js.map