(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Shopping"],{18:function(t,a,e){"use strict";e.r(a);var n=e(19),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},19:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e(4));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,a,e,n,i,o,s){try{var r=t[o](s),u=r.value}catch(c){return void e(c)}r.done?a(u):Promise.resolve(u).then(n,i)}function s(t){return function(){var a=this,e=arguments;return new Promise((function(n,i){var s=t.apply(a,e);function r(t){o(s,n,i,r,u,"next",t)}function u(t){o(s,n,i,r,u,"throw",t)}r(void 0)}))}}var r={data:function(){return{imgurl:this.$imgPath,current:0,cart_num:t.getStorageSync("cart_num"),list:[{id:0,name:"产品中心",url:"../pagesC/ProductCate",data_list:[]},{id:1,name:"楼盘设计",url:"../pagesC/HouseDesign",data_list:[]},{id:2,name:"旗舰套系",url:"../pagesC/FlagshipSet",data_list:[]}],lun_list:[],clsList:[]}},onShow:function(){this.cart_num=t.getStorageSync("cart_num"),this.alls()},methods:{gosss:function(a){switch(Number(a.link)){case 0:this.linkOthers(a.head);break;case 1:t.navigateTo({url:"../pagesC/Shopping?shopid="+a.shopid});break;case 2:t.navigateTo({url:"../pagesC/FlagshipDetail?id="+a.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;default:}},lunbochang:function(){var t=this.lun_list[this.current];this.gosss(t)},gaizhi:function(t){this.current=t.detail.current},more:function(a){t.navigateTo({url:a})},linkOthers:function(a){t.navigateTo({url:"./URL/URL?url="+a})},alls:function(){var t=this;this.$api.shopicon().then((function(a){1==a.data.code&&(console.log(a.data.data.data),t.clsList=a.data.data.data)})),this.$api.banner().then((function(a){if(1==a.data.code){var e=[];a.data.data.status.forEach((function(a){a.image=t.$imgPath+a.image,1==a.position&&e.push(a)})),t.lun_list=e}})),this.list.forEach((function(a){0==a.id?t.$api.shopindex().then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t,e){a.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})}))})):1==a.id?t.$api.loupanden().then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t,e){a.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})}))})):2==a.id&&t.$api.qjset().then((function(t){1==t.data.code&&t.data.data.status.data.forEach((function(t,e){a.data_list.push({id:t.id,isgo:!1,price:0,title:t.name,image:t.simage,alls:t})}))}))}))},toproduct:function(a,e){if(0==e)t.navigateTo({url:"../pagesC/Shopping?shopid="+a.id});else if(1==e){var n=a.alls;t.navigateTo({url:"../pagesC/DesignDetail?id="+JSON.stringify(n)})}else 2==e&&t.navigateTo({url:"../pagesC/FlagshipDetail?id="+a.alls.id})},tocar:function(){var a=this;return s(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$login();case 2:if(!e.sent){e.next=4;break}t.navigateTo({url:"../pagesC/shopcart"});case 4:case"end":return e.stop()}}),e)})))()},topage:function(a){t.navigateTo({url:a.page})}}};a.default=r}).call(this,e(0)["default"])},20:function(t,a,e){},202:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));try{n={uAdata:function(){return e.e("uview-ui/components/u-adata/u-adata").then(e.bind(null,740))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,a=t.$createElement;t._self._c},o=[];i._withStripped=!0},328:function(t,a,e){"use strict";(function(t){e(3);n(e(2));var a=n(e(329));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e(0)["createPage"])},329:function(t,a,e){"use strict";e.r(a);var n=e(202),i=e(18);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e(330);var s,r=e(1),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"3b758cef",null,!1,n["a"],s);u.options.__file="pages/Home/Shopping.vue",a["default"]=u.exports},330:function(t,a,e){"use strict";var n=e(20),i=e.n(n);i.a}},[[328,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/Shopping.js.map