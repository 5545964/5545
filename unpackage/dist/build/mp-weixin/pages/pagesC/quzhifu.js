(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/quzhifu"],{1852:function(t,n,e){"use strict";(function(t){e("c9dc");i(e("66fd"));var n=i(e("7569"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"22d6":function(t,n,e){"use strict";var i=e("86d9"),a=e.n(i);a.a},5585:function(t,n,e){"use strict";(function(t){function e(t){return s(t)||o(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{cuponsid:0,yuyuesss:!1,swjorderid:0,swj:0,dinjing:0,buyanzheng:!1,time:0,huoqu:"获取验证码",code:"",shoujihao:t.getStorageSync("user_info").mobile,shoujiyanzheng:!1,xieyi:[],yuedu:!1,nengyong:0,youhuijuanjine:0,youhuijuan_num:0,youhuijuantext:"暂无可用优惠卷",nengyongtext:"选择优惠券",tijiaozjia:0,yf:0,zjia:0,znum:0,img:this.$imgPath,alls_address:{},address_name:"",address_phone:"",address:"",value:"",show:!1,shows:!1,showa:!1,title:"确认订单",goodsdata:[],cartid:0,orderid:"",iscartid:!0,dzg:0,xieyiid:[]}},onLoad:function(n){var i=this;if(t.getStorageSync("address")&&(i.alls_address=t.getStorageSync("address"),i.address=i.alls_address.title+i.alls_address.address,i.address_name=i.alls_address.username,i.address_phone=i.alls_address.phone),t.$on("address",(function(t){i.alls_address=t,i.address=t.title+t.address,i.address_name=t.username,i.address_phone=t.phone})),n.yf&&(i.yf=n.yf),n.iscartid&&(i.iscartid=!1),n.goodsdata){var a=JSON.parse(n.goodsdata),o=[];i.goodsdata=e(a),i.goodsdata.forEach((function(t){i.zjia=i.zjia+t.num*t.xc_price,i.znum=i.znum+t.num,o.push(t.id)})),i.zjia=i.zjia.toFixed(2),i.cartid=o.join(","),i.tijiaozjia=Number(i.zjia)+Number(i.yf),1==i.goodsdata[0].swj&&(i.swj=1,i.swjorderid=i.goodsdata[0].orderid,i.$api.dingj({orderid:i.goodsdata[0].orderid}).then((function(t){1==t.data.code&&t.data.data.status.price<=i.tijiaozjia&&(i.dinjing=t.data.data.status.price,i.tijiaozjia=i.tijiaozjia-i.dinjing)})))}n.title&&(i.title=n.title);var s=t.getStorageSync("xieyi");s.forEach((function(t){4==t.state&&(i.xieyi.push(t),i.xieyiid.push(t.id))})),i.xieyi.length>0?i.buyanzheng=!0:i.buyanzheng=!1,t.$on("youhuijuan",(function(t){i.youhuijuan_num=1,i.youhuijuanjine=t.cupons.yh_price,i.cuponsid=t.coupons_id,i.tijiaozjia=Number(i.tijiaozjia)-Number(t.cupons.yh_price)}));var u=(new Date).getTime(),r=i.zjia-i.dinjing;i.$api.mycupon({user_id:t.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t){null==t.usetime&&u<1e3*t.cupons.endtime&&0==t.state&&Number(t.cupons.cb_price)<r&&(i.nengyong=1)}))}))},methods:{goyouhuijuan:function(){t.navigateTo({url:"../pagesA/gongju4?xuanzhe=1&jiage="+(this.zjia-this.dinjing)})},bjnm:function(){var n=this,e=0,i=[];if(this.xieyi.forEach((function(t){t.check&&(e++,i.push(t))})),this.xieyi.length!=e)return t.showToast({title:"请阅读并同意协议",icon:"none"});i.forEach((function(e){n.$api.userag({userid:t.getStorageSync("user_info").id,agid:e.id})})),this.shoujiyanzheng=!1,this.yuedu=!1,this.xieyiid.forEach((function(t){})),this.yuedu=!1,this.yuyuesss=!0},yuyueyuyue:function(t){this.yuedu=!1,this.dzg=t,this.annui()},go_code:function(){var n=this;0==n.time&&n.$api.emsphone({phone:n.shoujihao,user_id:t.getStorageSync("user_info").id}).then((function(e){if(1==e.data.code){n.time=60;var i=setInterval((function(){n.time--,n.huoqu=n.time+"s后获取",0==n.time&&(clearInterval(i),n.huoqu="获取验证码")}),1e3)}else t.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},xianshi:function(){this.address?this.shoujiyanzheng=!0:t.showToast({title:"请选择地址",duration:1e3,icon:"none"})},tongyis:function(n){var e=this;1==n?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(n){1==n.data.code?e.tongyi(1):t.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):t.showToast({title:"验证码错误",duration:1e3,icon:"none"}):(this.time=0,this.code="",this.shoujihao="",this.shoujiyanzheng=!1)},tongyi:function(t){1==t?(this.xieyi.forEach((function(t){t.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},fuwenben:function(n){t.setStorageSync("fuwenbeng",n.content),t.navigateTo({url:"./fuwenben"})},hahaha:function(t){t.check=!t.check},aaaaaa:function(){this.showaaaaaa=!this.showaaaaaa},youhuijuan:function(){t.navigateTo({url:"#"})},seleadd:function(){t.navigateTo({url:"../pagesA/gongju0?xuanzhe=1"})},xuanzhea:function(t){switch(t){case 0:this.showa=!1;break;case 1:this.showa=!1;break;default:}},xuanzhes:function(t){switch(t){case 0:this.shows=!1;break;case 1:this.shows=!1;break;default:}},xuanzhe:function(t){switch(t){case 0:this.show=!1;break;case 1:this.show=!1;break;default:}},annui:function(){var n=this;this.yuyuesss=!1;var e=[],i=[],a=[],o=[];this.goodsdata.forEach((function(t){e.push(t.shopid),i.push(t.specidsize),a.push(t.specid),o.push(t.id)})),this.iscartid&&(o=0),""!=this.address?this.$api.cartpay({cuponsid:this.cuponsid,swj:this.swj,orderid:this.swjorderid,content:this.value,shopid:e,cartid:o,user_id:t.getStorageSync("user_info").id,num:[this.znum],addressid:this.alls_address.id,type:0,specidsize:i,specid:a,price:this.tijiaozjia.toFixed(2),dzg:this.dzg,dj:this.dinjing}).then((function(e){if(200==e.data.code){n.orderid=e.data.orderid;var i=n;n.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(n){var e=0;1==n.data.code&&n.data.data.status.forEach((function(t){e+=1})),e>=99&&(e="..."),t.setStorageSync("cart_num",e)})),t.requestPayment({timeStamp:e.data.data.timeStamp,nonceStr:e.data.data.nonceStr,package:e.data.data.package,signType:e.data.data.signType,paySign:e.data.data.paySign,success:function(t){i.goss()},fail:function(n){t.showToast({title:"支付失败",icon:"none"})}})}else t.showToast({title:e.data.msg,duration:1e3,icon:"none"})})):t.showToast({title:"请选择地址",duration:1e3,icon:"none"})},goss:function(){this.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(n){var e=0;1==n.data.code&&n.data.data.status.forEach((function(t){e+=Number(t.num)})),e>=99&&(e="..."),t.setStorageSync("cart_num",e)})),t.navigateTo({url:"../pagesA/goods_data?order_id="+this.orderid}),t.showToast({title:"支付成功",icon:"success",duration:1e3})},back:function(n){switch(n){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=r}).call(this,e("543d")["default"])},"6e36":function(t,n,e){"use strict";e.r(n);var i=e("5585"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},7569:function(t,n,e){"use strict";e.r(n);var i=e("f396"),a=e("6e36");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("22d6");var s,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"7acb92c2",null,!1,i["a"],s);n["default"]=r.exports},"86d9":function(t,n,e){},f396:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"452c"))},uKehu:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-kehu/u-kehu")]).then(e.bind(null,"4dd2"))},uPopup:function(){return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null,"d62c"))},uInput:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-input/u-input")]).then(e.bind(null,"fd95"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"9f16"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.tijiaozjia.toFixed(2)||"");t._isMounted||(t.e0=function(n){t.yuyuesss=!0}),t.$mp.data=Object.assign({},{$root:{g0:e}})},o=[]}},[["1852","common/runtime","common/vendor"]]]);