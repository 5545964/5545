(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/Shopping"],{344:function(t,e,n){"use strict";(function(t){n(5);i(n(3));var e=i(n(345));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},345:function(t,e,n){"use strict";n.r(e);var i=n(346),a=n(348);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(350);var o,r=n(11),u=Object(r["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"cdfb0da2",null,!1,i["components"],o);u.options.__file="pages/pagesC/Shopping.vue",e["default"]=u.exports},346:function(t,e,n){"use strict";n.r(e);var i=n(347);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},347:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return o})),n.d(e,"recyclableRender",(function(){return s})),n.d(e,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,598))},uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,773))},uAdata:function(){return n.e("uview-ui/components/u-adata/u-adata").then(n.bind(null,612))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null,642))},uPinglun:function(){return n.e("uview-ui/components/u-pinglun/u-pinglun").then(n.bind(null,695))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,628))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,635))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,619))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c},s=!1,o=[];a._withStripped=!0},348:function(t,e,n){"use strict";n.r(e);var i=n(349),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},349:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(26));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return c(t)||u(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e,n,i,a,s,o){try{var r=t[s](o),u=r.value}catch(c){return void n(c)}r.done?e(u):Promise.resolve(u).then(i,a)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var s=t.apply(e,n);function o(t){d(s,i,a,o,r,"next",t)}function r(t){d(s,i,a,o,r,"throw",t)}o(void 0)}))}}var f={data:function(){return{orderid:0,height:t.getStorageSync("bottomheigth"),cart_num:t.getStorageSync("cart_num"),huifu:!1,xiaoshoujiage:0,value:1,diqu:[{name:"请选择"}],showComment:!1,data_list:[],baozhang:["官方正品","正品保障","售后无忧"],guige:"",xuanzhed:0,xuanzhes:[{title:"请选择",list:[{id:0,title:"四川省",data:["川一","川二","川三","川四","川五","川六"]},{id:0,title:"四川省1",data:["川一1","川二1","川三1","川四1","川五1","川六1"]},{id:0,title:"四川省2",data:["川一2","川二2","川三2","川四2","川五2","川六2"]},{id:0,title:"四川省3",data:["川一3","川二3","川三3","川四3","川五3","川六3"]},{id:0,title:"四川省4",data:["川一4","川二4","川三4","川四4","川五4","川六4"]},{id:0,title:"四川省5",data:["川一5","川二5","川三5","川四5","川五5","川六5"]},{id:0,title:"四川省6",data:["川一6","川二6","川三6","川四6","川五6","川六6"]}]}],show:[!1,!1,!1],shifa:"广东广州",shouhuo:"四川成都",yunfei:0,title:"产品详情",list:[],alls:{},shopid:"",pinglun_list:[],isSize:0,sc:!1,img:this.$imgPath}},onLoad:function(t){console.log(t),this.shopid=t.shopid,t.orderid&&(this.orderid=t.orderid),this.GoodsdataAlls()},onShareAppMessage:function(e){var n=0;return null!=t.getStorageSync("user_info").bbs&&(n=t.getStorageSync("user_info").bbs.id),{title:this.alls.name,path:"/pages/pagesC/Shopping?shopid="+this.shopid+"&uid="+t.getStorageSync("user_info").id+"&level="+n}},methods:{kansss:function(e){console.log(e);t.previewImage({urls:this.list,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},kan:function(e){var n=this;t.previewImage({urls:[n.$imgPath+e],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},gocart:function(){var e=this;return h(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$login();case 2:if(!n.sent){n.next=4;break}t.navigateTo({url:"./shopcart"});case 4:case"end":return n.stop()}}),n)})))()},add:function(){this.value++},minus:function(){1!=this.value&&this.value--},addresss:function(e){var n=this;if(1e4==this.isSize)return t.showToast({title:"请选择规格",duration:1e3,icon:"none"});if(0==this.value)return t.showToast({title:"请选择数量",duration:1e3,icon:"none"});if(0==e){var i=t.getStorageSync("user_info").id;this.$api.addcart({user_id:i,shopid:this.alls.id,specid:this.alls.son[this.isSize].id,specidsize:this.alls.son[this.isSize].spections,num:this.value,price:this.alls.son[this.isSize].xc_price,orderid:this.orderid}).then((function(e){if(1==e.data.code){var i=n.show;i[1]=!1,n.show=[],n.show=s(i),n.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(e){var i=0;1==e.data.code&&e.data.data.status.forEach((function(t){i+=1})),i>=99&&(i="..."),t.setStorageSync("cart_num",i),n.cart_num=t.getStorageSync("cart_num")}))}t.showToast({title:e.data.msg,duration:1e3,icon:"none"})}))}else if(""==this.orderid){var a=[{simage:this.alls.simage,name:this.alls.name,num:this.value,xc_price:this.alls.son[this.isSize].xc_price,shopid:this.alls.id,specid:this.alls.son[this.isSize].id,specidsize:this.alls.son[this.isSize].spections}];console.log(this.alls,"alls"),t.navigateTo({url:"./quzhifu?goodsid="+this.alls.id+"&goodsdata="+JSON.stringify(a)+"&yf="+this.alls.yf})}else t.showToast({title:"此商品只能加入购物车",icon:"none"})},addcarts:function(){var t=this;return h(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$login();case 2:if(!e.sent){e.next=4;break}t.open(1);case 4:case"end":return e.stop()}}),e)})))()},soucang:function(){var e=this;return h(i.default.mark((function n(){var a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$login();case 2:if(!n.sent){n.next=6;break}a="",a=e.sc?1:0,e.$api.addfollow({user_id:t.getStorageSync("user_info").id,type:0,state:a,shop_id:e.alls.id,video_id:0}).then((function(t){1==t.data.code&&(e.sc=!e.sc)}));case 6:case"end":return n.stop()}}),n)})))()},chooseSize:function(t){this.isSize=t,this.xiaoshoujiage=this.alls.son[t].xc_price},GoodsdataAlls:function(){var e=this,n=0,i=t.getStorageSync("user_info").id;i&&(n=i),this.$api.shopxq({user_id:n,id:this.shopid}).then((function(n){if(1==n.data.code){e.alls={},e.list=[],e.pinglun_list=[],e.alls=n.data.data.status[0],e.xiaoshoujiage=e.alls.xc_price,"[object Object]"===Object.prototype.toString.call(e.alls.follow)&&(e.sc=!0),""!=e.alls.content&&(e.alls.content=e.alls.content.replace(/\<img src=\"/gi,'<img src="'+e.$imgPath));var i=n.data.data.status[0].image.split(",");if(i.forEach((function(t){e.list.push(e.$imgPath+t)})),""!=n.data.data.status[0].pll){var a;if(Array.isArray(n.data.data.status[0].pll))e.pinglun_list.push(n.data.data.status[0].pll);else n.data.data.status[0].pll=[n.data.data.status[0].pll],(a=e.pinglun_list).push.apply(a,s(n.data.data.status[0].pll));var o=e.pinglun_list[0].image;e.pinglun_list[0].image=o.split(","),e.pinglun_list.forEach((function(t){t["checked"]=!1}))}else e.pinglun_list=[]}else t.showToast({title:n.data.msg,duration:1e3,icon:"none"})})),this.$api.shopindex().then((function(n){1==n.data.code?(e.data_list=[],n.data.data.status.forEach((function(t,n){n<=1&&e.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})}))):t.showToast({title:n.data.msg,duration:1e3,icon:"none"})}))},goodstuijian:function(t){this.shopid=t.alls.id,this.GoodsdataAlls()},chang:function(){this.showComment=!1},kanpinglun:function(){var t=this;return h(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$login();case 2:if(!e.sent){e.next=4;break}t.showComment=!0;case 4:case"end":return e.stop()}}),e)})))()},guan:function(){this.show=[!1,!1,!1]},tan:function(t){this.xuanzhed=t},open:function(t){var e=this.show;switch(t){case 0:e[0]=!0;break;case 1:e[1]=!0;break;case 2:e[2]=!0;break;default:}this.show=[],this.show=s(e)},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};e.default=f}).call(this,n(1)["default"])},350:function(t,e,n){"use strict";n.r(e);var i=n(351),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},351:function(t,e,n){}},[[344,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/Shopping.js.map