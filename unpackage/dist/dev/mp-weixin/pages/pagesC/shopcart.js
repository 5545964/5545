(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/shopcart"],{415:function(t,e,n){"use strict";(function(t){n(5);i(n(3));var e=i(n(416));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},416:function(t,e,n){"use strict";n.r(e);var i=n(417),r=n(419);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n(421);var a,c=n(32),u=Object(c["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"adbed086",null,!1,i["components"],a);u.options.__file="pages/pagesC/shopcart.vue",e["default"]=u.exports},417:function(t,e,n){"use strict";n.r(e);var i=n(418);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},418:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return s})),n.d(e,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,648))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,827))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.yuyuecarList,(function(e,n){var i=t.__get_orig(e),r=0!=t.yuyuecarList.length?Number(e.price).toFixed(2):null;return{$orig:i,g0:r}}))),i=t.__map(t.carList,(function(e,n){var i=t.__get_orig(e),r=0!=t.carList.length?(e.num*e.price).toFixed(2):null;return{$orig:i,g1:r}})),r=t.allAmount.toFixed(2);t.$mp.data=Object.assign({},{$root:{l0:n,l1:i,g2:r}})},s=!1,a=[];r._withStripped=!0},419:function(t,e,n){"use strict";n.r(e);var i=n(420),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},420:function(t,e,n){"use strict";(function(t){function n(t){return a(t)||s(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{yunfei:0,cartssss:!1,title:"购物车",maskTitle:"",allSel:!1,allAmount:0,allNumber:0,delIds:"",btnType:0,carList:[],yuyuecarList:[],img:this.$imgPath,delBtnWidth:65}},onShow:function(){this.allsss(),this.getAllMount()},methods:{toshopdetail:function(e){t.navigateTo({url:"./Shopping?shopid="+e.shopid})},allsss:function(){var e=this;this.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){var i=[],r=[];e.yunfei=0,n.data.data.status.forEach((function(t,e){t["selected"]=!1,t["right"]=0,null!=t.orderid&&0!=t.orderid?i.push(t):r.push(t)})),e.yuyuecarList=[].concat(i),e.carList=[].concat(r);var s=0;n.data.data.status.forEach((function(t){s+=1})),s>=99&&(s="..."),t.setStorageSync("cart_num",s)}else e.carList=[],e.yuyuecarList=[],e.allAmount=0,t.setStorageSync("cart_num",0)}))},sanchu:function(){var e=this,n=[];this.carList.forEach((function(t){t.selected&&n.push(t.id)})),0==n.length&&this.yuyuecarList.forEach((function(t){t.selected&&n.push(t.id)})),this.$api.cartdel({id:n}).then((function(n){t.showToast({title:n.data.msg,duration:1e3,icon:"none"}),1==n.data.code&&(e.allsss(),e.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(e){var n=0;1==e.data.code&&e.data.data.status.forEach((function(t){n+=Number(t.num)})),n>=99&&(n="..."),t.setStorageSync("cart_num",n)})))}))},confirm:function(){var t=this;if(0==t.btnType)t.$emit("delbtn",t.delIds,t.carList);else{var e=t.getCarIds();this.$emit("jsbtn",e)}},cancel:function(){},jsCars:function(){var e=[];if(this.carList.forEach((function(t){t.selected&&e.push({id:t.id,simage:t.shop.simage,name:t.shop.name,shopid:t.shopid,specid:t.specid,specidsize:t.specidsize,num:Number(t.num),xc_price:Number(t.price),orderid:t.orderid,swj:0})})),0==e.length&&this.yuyuecarList.forEach((function(t){t.selected&&e.push({id:t.id,simage:t.shop.simage,name:t.shop.name,shopid:t.shopid,specid:t.specid,specidsize:t.specidsize,num:Number(t.num),xc_price:Number(t.price),orderid:t.orderid,swj:1})})),0==e.length)return t.showToast({title:"请选择商品",icon:"none"});t.navigateTo({url:"./quzhifu?goodsdata="+JSON.stringify(e)+"&iscartid=0&yf="+this.yunfei})},delCars:function(){var e=this;e.delIds="";var n=e.getCarIds();if(!n)return t.showToast({title:"请选择要删除的商品",icon:"none"}),!1;e.delIds=n,e.btnType=0,e.$refs.askmodel.show(),e.maskTitle="是否将选中商品移除购物车?"},selThis:function(t){this.yuyuecarList.forEach((function(t){t.selected=!1}));var e=this,i=e.carList;i[t].selected=!i[t].selected,e.carList=[],e.carList=n(i);var r=0;e.carList.forEach((function(t,e){t.selected&&(r+=1)})),e.cartssss=0!=r,r==e.carList.length?e.allSel=!0:e.allSel=!1,e.getAllMount()},selThiss:function(t){this.carList.forEach((function(t){t.selected=!1}));var e=this,i=e.yuyuecarList;i[t].selected=!i[t].selected,e.yuyuecarList=[],e.yuyuecarList=n(i);var r=0;e.yuyuecarList.forEach((function(t,e){t.selected&&(r+=1)})),e.cartssss=0!=r,r==e.yuyuecarList.length?e.allSel=!0:e.allSel=!1,e.getAllMounts()},selShop:function(t){var e=this,n=e.carList;if(0==n[t].selected){n[t].selected=!0;for(var i=0;i<n[t].glist.length;i++)n[t].glist[i].selected=!0}else{n[t].selected=!1;for(var r=0;r<n[t].glist.length;r++)n[t].glist[r].selected=!1}e.setAllSel(),e.$emit("selShop",n)},setAllSel:function(){for(var t=this,e=0,n=0;n<t.carList.length;n++)1==t.carList[n].selected&&(e+=1);e==t.carList.length&&e>0?(t.allSel=!0,t.cartssss=!0):(t.allSel=!1,t.cartssss=!1),t.getAllMount()},allSelBtn:function(){var t=this;t.allSel=!t.allSel;for(var e=t.carList,n=0;n<e.length;n++)t.allSel?(t.allSel=!0,e[n].selected=!0,t.cartssss=!0):(e[n].selected=!1,t.cartssss=!1);t.yuyuecarList.forEach((function(t){t.selected=!1})),t.$emit("allSelBtn",e),t.getAllMount()},getAllMounts:function(){for(var t=this,e=0,n=0,i=t.yuyuecarList,r=0;r<i.length;r++)1==i[r].selected&&(n+=Number(i[r].num),e+=Number(i[r].num)*Number(i[r].price));t.allNumber=n,t.allAmount=e},getAllMount:function(){for(var t=this,e=0,n=0,i=t.carList,r=0;r<i.length;r++)1==i[r].selected&&(n+=Number(i[r].num),e+=Number(i[r].num)*Number(i[r].price));t.allNumber=n,t.allAmount=e},getCarIds:function(){for(var e=this,n=e.carList,i=[],r=0;r<n.length;r++)for(var s=0;s<n[r].glist.length;s++)1==n[r].glist[s].selected&&i.push(n[r].glist[s].id);if(0==i.length)return t.showToast({title:"请选择要结算的商品",icon:"none"}),!1;var a=i.join(",");return a},changeNum:function(e,i){var r=this,s=r.carList,a=Number(s[i].num);if(0==e){if(a<=1)return!1;a-=1}else{if(a>=s[i].shop.shopkucun)return t.showToast({title:"库存不足",icon:"none"}),!1;a+=1}s[i].num=a,this.carList=[],this.carList=n(s),r.getAllMount()},changeNums:function(e,i){var r=this,s=r.yuyuecarList,a=Number(s[i].num);if(0==e){if(a<=1)return!1;a-=1}else{if(a>=s[i].shop.shopkucun)return t.showToast({title:"库存不足",icon:"none"}),!1;a+=1}s[i].num=a,this.yuyuecarList=[],this.yuyuecarList=n(s),r.getAllMounts()},drawStarts:function(t){var e=t.touches[0];this.startX=e.clientX},drawMoves:function(t){for(var e in this.yuyuecarList)this.$set(this.yuyuecarList[e],"right",0);var n=t.touches[0],i=(this.yuyuecarList[t.currentTarget.dataset.index],this.startX-n.clientX);i>=20?(i>this.delBtnWidth&&(i=this.delBtnWidth),this.$set(this.yuyuecarList[t.currentTarget.dataset.index],"right",i)):this.$set(this.yuyuecarList[t.currentTarget.dataset.index],"right",0)},drawEnds:function(t){var e=this.yuyuecarList[t.currentTarget.dataset.index];e.right>=this.delBtnWidth/2?this.$set(this.yuyuecarList[t.currentTarget.dataset.index],"right",this.delBtnWidth):this.$set(this.yuyuecarList[t.currentTarget.dataset.index],"right",0)},delDatas:function(e,n){var i=this;this.$api.cartdel({id:e.id}).then((function(e){t.showToast({title:e.data.msg,duration:1e3,icon:"none"}),1==e.data.code&&(i.allsss(),i.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(e){var n=0;1==e.data.code&&e.data.data.status.forEach((function(t){n+=Number(t.num)})),n>=99&&(n="..."),t.setStorageSync("cart_num",n)})))}))},drawStart:function(t){var e=t.touches[0];this.startX=e.clientX},drawMove:function(t){for(var e in this.carList)this.$set(this.carList[e],"right",0);var n=t.touches[0],i=(this.carList[t.currentTarget.dataset.index],this.startX-n.clientX);i>=20?(i>this.delBtnWidth&&(i=this.delBtnWidth),this.$set(this.carList[t.currentTarget.dataset.index],"right",i)):this.$set(this.carList[t.currentTarget.dataset.index],"right",0)},drawEnd:function(t){var e=this.carList[t.currentTarget.dataset.index];e.right>=this.delBtnWidth/2?this.$set(this.carList[t.currentTarget.dataset.index],"right",this.delBtnWidth):this.$set(this.carList[t.currentTarget.dataset.index],"right",0)},delData:function(e,n){var i=this;this.$api.cartdel({id:e.id}).then((function(e){t.showToast({title:e.data.msg,duration:1e3,icon:"none"}),1==e.data.code&&(i.allsss(),i.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(e){var n=0;1==e.data.code&&e.data.data.status.forEach((function(t){n+=Number(t.num)})),n>=99&&(n="..."),t.setStorageSync("cart_num",n)})))}))},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=u}).call(this,n(1)["default"])},421:function(t,e,n){"use strict";n.r(e);var i=n(422),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},422:function(t,e,n){}},[[415,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/shopcart.js.map