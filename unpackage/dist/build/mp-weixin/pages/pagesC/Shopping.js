(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/Shopping"],{"126e":function(t,n,e){"use strict";e.r(n);var i=e("3312"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"19bb":function(t,n,e){"use strict";(function(t){e("c9dc");i(e("66fd"));var n=i(e("475b"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},3312:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return c(t)||r(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,n){if(t){if("string"===typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function d(t,n,e,i,a,s,o){try{var u=t[s](o),r=u.value}catch(c){return void e(c)}u.done?n(r):Promise.resolve(r).then(i,a)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var s=t.apply(n,e);function o(t){d(s,i,a,o,u,"next",t)}function u(t){d(s,i,a,o,u,"throw",t)}o(void 0)}))}}var f={data:function(){return{orderid:0,height:t.getStorageSync("bottomheigth"),cart_num:t.getStorageSync("cart_num"),huifu:!1,xiaoshoujiage:0,value:1,diqu:[{name:"请选择"}],showComment:!1,data_list:[],baozhang:["官方正品","正品保障","售后无忧"],guige:"",xuanzhed:0,xuanzhes:[{title:"请选择",list:[{id:0,title:"四川省",data:["川一","川二","川三","川四","川五","川六"]},{id:0,title:"四川省1",data:["川一1","川二1","川三1","川四1","川五1","川六1"]},{id:0,title:"四川省2",data:["川一2","川二2","川三2","川四2","川五2","川六2"]},{id:0,title:"四川省3",data:["川一3","川二3","川三3","川四3","川五3","川六3"]},{id:0,title:"四川省4",data:["川一4","川二4","川三4","川四4","川五4","川六4"]},{id:0,title:"四川省5",data:["川一5","川二5","川三5","川四5","川五5","川六5"]},{id:0,title:"四川省6",data:["川一6","川二6","川三6","川四6","川五6","川六6"]}]}],show:[!1,!1,!1],shifa:"广东广州",shouhuo:"四川成都",yunfei:0,title:"产品详情",list:[],alls:{},shopid:"",pinglun_list:[],isSize:0,sc:!1,img:this.$imgPath}},onLoad:function(t){this.shopid=t.shopid,t.orderid&&(this.orderid=t.orderid),this.GoodsdataAlls()},onShareAppMessage:function(n){var e=0;return null!=t.getStorageSync("user_info").bbs&&(e=t.getStorageSync("user_info").bbs.id),{title:this.alls.name,imageUrl:this.list[0],path:"/pages/pagesC/Shopping?shopid="+this.shopid+"&uid="+t.getStorageSync("user_info").id+"&level="+e}},methods:{kansss:function(n){t.previewImage({urls:this.list,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},kan:function(n){var e=this;t.previewImage({urls:[e.$imgPath+n],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},gocart:function(){var n=this;return h(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$login();case 2:if(!e.sent){e.next=4;break}t.navigateTo({url:"./shopcart"});case 4:case"end":return e.stop()}}),e)})))()},add:function(){this.value++},minus:function(){1!=this.value&&this.value--},addresss:function(n){var e=this;if(1e4==this.isSize)return t.showToast({title:"请选择规格",duration:1e3,icon:"none"});if(0==this.value)return t.showToast({title:"请选择数量",duration:1e3,icon:"none"});if(0==n){var i=t.getStorageSync("user_info").id;this.$api.addcart({user_id:i,shopid:this.alls.id,specid:this.alls.son[this.isSize].id,specidsize:this.alls.son[this.isSize].spections,num:this.value,price:this.alls.son[this.isSize].xc_price,orderid:this.orderid}).then((function(n){if(1==n.data.code){var i=e.show;i[1]=!1,e.show=[],e.show=s(i),e.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(n){var i=0;1==n.data.code?n.data.data.status.forEach((function(t){i+=1})):i=0,i>=99&&(i="..."),t.setStorageSync("cart_num",i),e.cart_num=t.getStorageSync("cart_num")}))}t.showToast({title:n.data.msg,duration:1e3,icon:"none"})}))}else if(0==this.orderid){var a=[{simage:this.alls.simage,name:this.alls.name,num:this.value,xc_price:this.alls.son[this.isSize].xc_price,shopid:this.alls.id,specid:this.alls.son[this.isSize].id,specidsize:this.alls.son[this.isSize].spections}];t.navigateTo({url:"./quzhifu?goodsid="+this.alls.id+"&goodsdata="+JSON.stringify(a)+"&yf="+this.alls.yf})}else t.showToast({title:"此商品只能加入购物车",icon:"none"})},addcarts:function(){var t=this;return h(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=4;break}t.open(1);case 4:case"end":return n.stop()}}),n)})))()},soucang:function(){var n=this;return h(i.default.mark((function e(){var a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$login();case 2:if(!e.sent){e.next=6;break}a="",a=n.sc?1:0,n.$api.addfollow({user_id:t.getStorageSync("user_info").id,type:0,state:a,shop_id:n.alls.id,video_id:0}).then((function(t){1==t.data.code&&(n.sc=!n.sc)}));case 6:case"end":return e.stop()}}),e)})))()},chooseSize:function(t){this.isSize=t,this.xiaoshoujiage=this.alls.son[t].xc_price},GoodsdataAlls:function(){var n=this,e=0,i=t.getStorageSync("user_info").id;i&&(e=i),this.$api.shopxq({user_id:e,id:this.shopid}).then((function(e){if(1==e.data.code){n.alls={},n.list=[],n.pinglun_list=[],n.alls=e.data.data.status[0],n.xiaoshoujiage=n.alls.xc_price,"[object Object]"===Object.prototype.toString.call(n.alls.follow)&&(n.sc=!0);var i=n.alls.content.split(",");n.alls.content=[],i.forEach((function(t){n.alls.content.push(t)}));var a=e.data.data.status[0].image.split(",");if(a.forEach((function(t){n.list.push(n.$imgPath+t)})),""!=e.data.data.status[0].pll){var o;if(Array.isArray(e.data.data.status[0].pll))n.pinglun_list.push(e.data.data.status[0].pll);else e.data.data.status[0].pll=[e.data.data.status[0].pll],(o=n.pinglun_list).push.apply(o,s(e.data.data.status[0].pll));var u=n.pinglun_list[0].image;n.pinglun_list[0].image=u.split(","),n.pinglun_list.forEach((function(t){t["checked"]=!1}))}else n.pinglun_list=[]}else t.showToast({title:e.data.msg,duration:1e3,icon:"none"})})),this.$api.shopindex().then((function(e){1==e.data.code?(n.data_list=[],e.data.data.status.forEach((function(t,e){e<=1&&n.data_list.push({id:t.id,isgo:!1,price:t.xc_price,title:t.name,image:t.simage,alls:t})}))):t.showToast({title:e.data.msg,duration:1e3,icon:"none"})}))},goodstuijian:function(t){this.shopid=t.alls.id,this.GoodsdataAlls()},chang:function(){this.showComment=!1},kanpinglun:function(){var t=this;return h(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=4;break}t.showComment=!0;case 4:case"end":return n.stop()}}),n)})))()},guan:function(){this.show=[!1,!1,!1]},tan:function(t){this.xuanzhed=t},open:function(t){var n=this.show;switch(t){case 0:n[0]=!0;break;case 1:n[1]=!0;break;case 2:n[2]=!0;break;default:}this.show=[],this.show=s(n)},back:function(n){switch(n){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=f}).call(this,e("543d")["default"])},"475b":function(t,n,e){"use strict";e.r(n);var i=e("7f21"),a=e("126e");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("e3f4");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"c4bea144",null,!1,i["a"],o);n["default"]=r.exports},"49f7":function(t,n,e){},"7f21":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"452c"))},uSwiper:function(){return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null,"0d37"))},uAdata:function(){return e.e("uview-ui/components/u-adata/u-adata").then(e.bind(null,"791a"))},uPinglun:function(){return e.e("uview-ui/components/u-pinglun/u-pinglun").then(e.bind(null,"2494"))},uPopup:function(){return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null,"d62c"))},uTabs:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-tabs/u-tabs")]).then(e.bind(null,"c85c"))},uKehu:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-kehu/u-kehu")]).then(e.bind(null,"4dd2"))}},a=function(){var t=this,n=t.$createElement;t._self._c},s=[]},e3f4:function(t,n,e){"use strict";var i=e("49f7"),a=e.n(i);a.a}},[["19bb","common/runtime","common/vendor"]]]);