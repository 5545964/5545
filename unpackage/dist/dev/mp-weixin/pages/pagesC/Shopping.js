(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/Shopping"],{402:function(t,n,e){"use strict";(function(t){e(5);i(e(4));var n=i(e(403));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e(1)["createPage"])},403:function(t,n,e){"use strict";e.r(n);var i=e(404),s=e(406);for(var a in s)"default"!==a&&function(t){e.d(n,t,(function(){return s[t]}))}(a);e(408);var o,r=e(11),u=Object(r["default"])(s["default"],i["render"],i["staticRenderFns"],!1,null,"cdfb0da2",null,!1,i["components"],o);u.options.__file="pages/pagesC/Shopping.vue",n["default"]=u.exports},404:function(t,n,e){"use strict";e.r(n);var i=e(405);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},405:function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return s})),e.d(n,"staticRenderFns",(function(){return o})),e.d(n,"recyclableRender",(function(){return a})),e.d(n,"components",(function(){return i}));try{i={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,659))},uSwiper:function(){return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null,885))},uAdata:function(){return e.e("uview-ui/components/u-adata/u-adata").then(e.bind(null,673))},uPinglun:function(){return e.e("uview-ui/components/u-pinglun/u-pinglun").then(e.bind(null,816))},uPopup:function(){return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null,752))},uTabs:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-tabs/u-tabs")]).then(e.bind(null,728))},uBackTop:function(){return e.e("uview-ui/components/u-back-top/u-back-top").then(e.bind(null,714))},uKehu:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-kehu/u-kehu")]).then(e.bind(null,680))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,n=t.$createElement;t._self._c},a=!1,o=[];s._withStripped=!0},406:function(t,n,e){"use strict";e.r(n);var i=e(407),s=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=s.a},407:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=s(e(20));function s(t){return t&&t.__esModule?t:{default:t}}function a(t){return c(t)||u(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function d(t,n,e,i,s,a,o){try{var r=t[a](o),u=r.value}catch(c){return void e(c)}r.done?n(u):Promise.resolve(u).then(i,s)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(i,s){var a=t.apply(n,e);function o(t){d(a,i,s,o,r,"next",t)}function r(t){d(a,i,s,o,r,"throw",t)}o(void 0)}))}}var f={data:function(){return{scrollTop:0,orderid:0,height:t.getStorageSync("bottomheigth"),cart_num:t.getStorageSync("cart_num"),huifu:!1,xiaoshoujiage:0,value:1,diqu:[{name:"请选择"}],showComment:!1,data_list:[],baozhang:["官方正品","正品保障","售后无忧"],guige:"",xuanzhed:0,show:[!1,!1,!1],shifa:"广东广州",shouhuo:"四川成都",yunfei:0,title:"产品详情",list:[],alls:{},shopid:"",pinglun_list:[],isSize:0,sc:!1,img:this.$imgPath,jifen:0}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(t){this.shopid=t.shopid,t.orderid&&(this.orderid=t.orderid),t.jifen&&(this.jifen=t.jifen),this.GoodsdataAlls()},onShareAppMessage:function(n){var e=0;return null!=t.getStorageSync("user_info").bbs&&(e=t.getStorageSync("user_info").bbs.id),{title:this.alls.name,imageUrl:this.list[0],path:"/pages/pagesC/Shopping?shopid="+this.shopid+"&uid="+t.getStorageSync("user_info").id+"&level="+e}},methods:{yuyue:function(){var n=[{simage:this.alls.simage,name:this.alls.name,num:this.value,xc_price:this.alls.son[this.isSize].xc_price,shopid:this.alls.id,specid:this.alls.son[this.isSize].id,specidsize:this.alls.son[this.isSize].spections}];console.log(n),t.navigateTo({url:"./quzhifu?goodsid="+this.alls.id+"&goodsdata="+JSON.stringify(n)+"&yf="+this.alls.yf+"&jifen=1"})},kansss:function(n){t.previewImage({urls:this.list,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},kan:function(n){var e=this;t.previewImage({urls:[e.$imgPath+n],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},gocart:function(){var n=this;return h(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$login();case 2:if(!e.sent){e.next=4;break}t.navigateTo({url:"./shopcart"});case 4:case"end":return e.stop()}}),e)})))()},add:function(){this.value++},minus:function(){1!=this.value&&this.value--},addresss:function(n){var e=this;if(1e4==this.isSize)return t.showToast({title:"请选择规格",duration:1e3,icon:"none"});if(0==this.value)return t.showToast({title:"请选择数量",duration:1e3,icon:"none"});if(0==n){var i=t.getStorageSync("user_info").id;this.$api.addcart({user_id:i,shopid:this.alls.id,specid:this.alls.son[this.isSize].id,specidsize:this.alls.son[this.isSize].spections,num:this.value,price:this.alls.son[this.isSize].xc_price,orderid:this.orderid}).then((function(n){if(1==n.data.code){var i=e.show;i[1]=!1,e.show=[],e.show=a(i),e.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(n){var i=0;1==n.data.code?n.data.data.status.forEach((function(t){i+=1})):i=0,i>=99&&(i="..."),t.setStorageSync("cart_num",i),e.cart_num=t.getStorageSync("cart_num")}))}t.showToast({title:n.data.msg,duration:1e3,icon:"none"})}))}else if(0==this.orderid){var s=[{simage:this.alls.simage,name:this.alls.name,num:this.value,xc_price:this.alls.son[this.isSize].xc_price,shopid:this.alls.id,specid:this.alls.son[this.isSize].id,specidsize:this.alls.son[this.isSize].spections}];t.navigateTo({url:"./quzhifu?goodsid="+this.alls.id+"&goodsdata="+JSON.stringify(s)+"&yf="+this.alls.yf})}else t.showToast({title:"此商品只能加入购物车",icon:"none"})},addcarts:function(){var t=this;return h(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=4;break}t.open(1);case 4:case"end":return n.stop()}}),n)})))()},soucang:function(){var n=this;return h(i.default.mark((function e(){var s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$login();case 2:if(!e.sent){e.next=6;break}s="",s=n.sc?1:0,n.$api.addfollow({user_id:t.getStorageSync("user_info").id,type:0,state:s,shop_id:n.alls.id,video_id:0}).then((function(t){1==t.data.code&&(n.sc=!n.sc)}));case 6:case"end":return e.stop()}}),e)})))()},chooseSize:function(t){this.isSize=t,this.xiaoshoujiage=this.alls.son[t].xc_price},GoodsdataAlls:function(){var n=this,e=0,i=t.getStorageSync("user_info").id;i&&(e=i),this.$api.shopxq({user_id:e,id:this.shopid}).then((function(e){if(1==e.data.code){n.alls={},n.list=[],n.pinglun_list=[],e.data.data.status[0].son.forEach((function(t){t.image=n.$imgs(t.image)})),n.alls=e.data.data.status[0],n.xiaoshoujiage=n.alls.xc_price,"[object Object]"===Object.prototype.toString.call(n.alls.follow)&&(n.sc=!0);var i=n.alls.content.split(",");n.alls.content=[],i.forEach((function(t){n.alls.content.push(t)}));var s=e.data.data.status[0].image.split(",");if(s.forEach((function(t){n.list.push(n.$imgPath+t)})),""!=e.data.data.status[0].pll){var o;if(Array.isArray(e.data.data.status[0].pll))n.pinglun_list.push(e.data.data.status[0].pll);else e.data.data.status[0].pll=[e.data.data.status[0].pll],(o=n.pinglun_list).push.apply(o,a(e.data.data.status[0].pll));var r=n.pinglun_list[0].image;n.pinglun_list[0].image=r.split(","),n.pinglun_list.forEach((function(t){t["checked"]=!1}))}else n.pinglun_list=[]}else t.showToast({title:e.data.msg,duration:1e3,icon:"none"})})),this.$api.shopindex().then((function(e){1==e.data.code?(n.data_list=[],e.data.data.status.forEach((function(t,e){e<=1&&n.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})}))):t.showToast({title:e.data.msg,duration:1e3,icon:"none"})}))},goodstuijian:function(n){this.shopid=n.alls.id,this.GoodsdataAlls(),t.pageScrollTo({scrollTop:0})},chang:function(){this.showComment=!1},kanpinglun:function(){var t=this;return h(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=4;break}t.showComment=!0;case 4:case"end":return n.stop()}}),n)})))()},guan:function(){this.show=[!1,!1,!1]},tan:function(t){this.xuanzhed=t},open:function(t){var n=this.show;switch(t){case 0:n[0]=!0;break;case 1:n[1]=!0;break;case 2:n[2]=!0;break;default:}this.show=[],this.show=a(n)},back:function(n){switch(n){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=f}).call(this,e(1)["default"])},408:function(t,n,e){"use strict";e.r(n);var i=e(409),s=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=s.a},409:function(t,n,e){}},[[402,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/Shopping.js.map