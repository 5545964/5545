(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/quzhifu"],{471:function(e,n,t){"use strict";(function(e){t(5);i(t(3));var n=i(t(472));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},472:function(e,n,t){"use strict";t.r(n);var i=t(473),a=t(475);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t(477);var s,u=t(32),r=Object(u["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"39d613e2",null,!1,i["components"],s);r.options.__file="pages/pagesC/quzhifu.vue",n["default"]=r.exports},473:function(e,n,t){"use strict";t.r(n);var i=t(474);t.d(n,"render",(function(){return i["render"]})),t.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(n,"components",(function(){return i["components"]}))},474:function(e,n,t){"use strict";var i;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return s})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return i}));try{i={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,632))},uKehu:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-kehu/u-kehu")]).then(t.bind(null,653))},uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,718))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,789))},uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,725))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.tijiaozjia.toFixed(2));e._isMounted||(e.e0=function(n){e.yuyuesss=!0}),e.$mp.data=Object.assign({},{$root:{g0:t}})},o=!1,s=[];a._withStripped=!0},475:function(e,n,t){"use strict";t.r(n);var i=t(476),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},476:function(e,n,t){"use strict";(function(e){function t(e){return s(e)||o(e)||a(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}function o(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function s(e){if(Array.isArray(e))return u(e)}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{cuponsid:0,yuyuesss:!1,swjorderid:0,swj:0,dinjing:0,buyanzheng:!1,time:0,huoqu:"获取验证码",code:"",shoujihao:e.getStorageSync("user_info").mobile,shoujiyanzheng:!1,xieyi:[],yuedu:!1,nengyong:0,youhuijuanjine:0,youhuijuan_num:0,youhuijuantext:"暂无可用优惠卷",nengyongtext:"选择优惠券",tijiaozjia:0,yf:0,zjia:0,znum:0,img:this.$imgPath,alls_address:{},address_name:"",address_phone:"",address:"",value:"",show:!1,shows:!1,showa:!1,title:"确认订单",goodsdata:[],cartid:0,orderid:"",iscartid:!0,dzg:0,xieyiid:[]}},onLoad:function(n){var i=this;if(e.getStorageSync("address")&&(i.alls_address=e.getStorageSync("address"),i.address=i.alls_address.title+i.alls_address.address,i.address_name=i.alls_address.username,i.address_phone=i.alls_address.phone),e.$on("address",(function(e){i.alls_address=e,i.address=e.title+e.address,i.address_name=e.username,i.address_phone=e.phone})),n.yf&&(i.yf=n.yf),n.iscartid&&(i.iscartid=!1),n.goodsdata){var a=JSON.parse(n.goodsdata),o=[];i.goodsdata=t(a),i.goodsdata.forEach((function(e){i.zjia=i.zjia+e.num*e.xc_price,i.znum=i.znum+e.num,o.push(e.id)})),i.zjia=i.zjia.toFixed(2),i.cartid=o.join(","),i.tijiaozjia=Number(i.zjia)+Number(i.yf),1==i.goodsdata[0].swj&&(i.swj=1,i.swjorderid=i.goodsdata[0].orderid,i.$api.dingj({orderid:i.goodsdata[0].orderid}).then((function(e){1==e.data.code&&e.data.data.status.price<=i.tijiaozjia&&(i.dinjing=e.data.data.status.price,i.tijiaozjia=i.tijiaozjia-i.dinjing)})))}n.title&&(i.title=n.title);var s=e.getStorageSync("xieyi");s.forEach((function(e){4==e.state&&(i.xieyi.push(e),i.xieyiid.push(e.id))})),i.xieyi.length>0?i.buyanzheng=!0:i.buyanzheng=!1,e.$on("youhuijuan",(function(e){i.youhuijuan_num=1,i.youhuijuanjine=e.cupons.yh_price,i.cuponsid=e.coupons_id,i.tijiaozjia=Number(i.tijiaozjia)-Number(e.cupons.yh_price)}));var u=(new Date).getTime(),r=i.zjia-i.dinjing;i.$api.mycupon({user_id:e.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&e.data.data.status.forEach((function(e){null==e.usetime&&u<1e3*e.cupons.endtime&&0==e.state&&Number(e.cupons.cb_price)<r&&(i.nengyong=1)}))}))},methods:{goyouhuijuan:function(){e.navigateTo({url:"../pagesA/gongju4?xuanzhe=1&jiage="+(this.zjia-this.dinjing)})},bjnm:function(){var n=this,t=0,i=[];if(this.xieyi.forEach((function(e){e.check&&(t++,i.push(e))})),this.xieyi.length!=t)return e.showToast({title:"请阅读并同意协议",icon:"none"});i.forEach((function(t){n.$api.userag({userid:e.getStorageSync("user_info").id,agid:t.id})})),this.shoujiyanzheng=!1,this.yuedu=!1,this.xieyiid.forEach((function(e){})),this.yuedu=!1,this.yuyuesss=!0},yuyueyuyue:function(e){this.yuedu=!1,this.dzg=e,this.annui()},go_code:function(){var n=this;0==n.time&&n.$api.emsphone({phone:n.shoujihao,user_id:e.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){n.time=60;var i=setInterval((function(){n.time--,n.huoqu=n.time+"s后获取",0==n.time&&(clearInterval(i),n.huoqu="获取验证码")}),1e3)}else e.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},xianshi:function(){this.address?this.shoujiyanzheng=!0:e.showToast({title:"请选择地址",duration:1e3,icon:"none"})},tongyis:function(n){var t=this;1==n?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(n){1==n.data.code?t.tongyi(1):e.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):e.showToast({title:"验证码错误",duration:1e3,icon:"none"}):(this.time=0,this.code="",this.shoujihao="",this.shoujiyanzheng=!1)},tongyi:function(e){1==e?(this.xieyi.forEach((function(e){e.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},fuwenben:function(n){e.setStorageSync("fuwenbeng",n.content),e.navigateTo({url:"./fuwenben"})},hahaha:function(e){e.check=!e.check},aaaaaa:function(){this.showaaaaaa=!this.showaaaaaa},youhuijuan:function(){e.navigateTo({url:"#"})},seleadd:function(){e.navigateTo({url:"../pagesA/gongju0?xuanzhe=1"})},xuanzhea:function(e){switch(e){case 0:this.showa=!1;break;case 1:this.showa=!1;break;default:}},xuanzhes:function(e){switch(e){case 0:this.shows=!1;break;case 1:this.shows=!1;break;default:}},xuanzhe:function(e){switch(e){case 0:this.show=!1;break;case 1:this.show=!1;break;default:}},annui:function(){var n=this;this.yuyuesss=!1;var t=[],i=[],a=[],o=[];this.goodsdata.forEach((function(e){t.push(e.shopid),i.push(e.specidsize),a.push(e.specid),o.push(e.id)})),this.iscartid&&(o=0),""!=this.address?(console.log(this.tijiaozjia),this.$api.cartpay({cuponsid:this.cuponsid,swj:this.swj,orderid:this.swjorderid,content:this.value,shopid:t,cartid:o,user_id:e.getStorageSync("user_info").id,num:[this.znum],addressid:this.alls_address.id,type:0,specidsize:i,specid:a,price:this.tijiaozjia.toFixed(2),dzg:this.dzg}).then((function(t){if(200==t.data.code){n.orderid=t.data.orderid;var i=n;n.$api.shopcart({id:e.getStorageSync("user_info").id}).then((function(n){var t=0;1==n.data.code&&n.data.data.status.forEach((function(e){t+=1})),t>=99&&(t="..."),e.setStorageSync("cart_num",t)})),e.requestPayment({timeStamp:t.data.data.timeStamp,nonceStr:t.data.data.nonceStr,package:t.data.data.package,signType:t.data.data.signType,paySign:t.data.data.paySign,success:function(e){i.goss()},fail:function(n){e.showToast({title:"支付失败",icon:"none"})}})}else e.showToast({title:t.data.msg,duration:1e3,icon:"none"})}))):e.showToast({title:"请选择地址",duration:1e3,icon:"none"})},goss:function(){this.$api.shopcart({id:e.getStorageSync("user_info").id}).then((function(n){var t=0;1==n.data.code&&n.data.data.status.forEach((function(e){t+=Number(e.num)})),t>=99&&(t="..."),e.setStorageSync("cart_num",t)})),e.navigateTo({url:"../pagesA/goods_data?order_id="+this.orderid}),e.showToast({title:"支付成功",icon:"success",duration:1e3})},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=r}).call(this,t(1)["default"])},477:function(e,n,t){"use strict";t.r(n);var i=t(478),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},478:function(e,n,t){}},[[471,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/quzhifu.js.map