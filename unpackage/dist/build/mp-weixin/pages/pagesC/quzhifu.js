(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/quzhifu"],{1852:function(i,e,t){"use strict";(function(i){t("c9dc");n(t("66fd"));var e=n(t("7569"));function n(i){return i&&i.__esModule?i:{default:i}}wx.__webpack_require_UNI_MP_PLUGIN__=t,i(e.default)}).call(this,t("543d")["createPage"])},5585:function(i,e,t){"use strict";(function(i){function t(i){return s(i)||o(i)||a(i)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(i,e){if(i){if("string"===typeof i)return u(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);return"Object"===t&&i.constructor&&(t=i.constructor.name),"Map"===t||"Set"===t?Array.from(i):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(i,e):void 0}}function o(i){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(i))return Array.from(i)}function s(i){if(Array.isArray(i))return u(i)}function u(i,e){(null==e||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d={data:function(){return{cuponsid:0,yuyuesss:!1,swjorderid:0,swj:0,dinjing:0,buyanzheng:!1,time:0,huoqu:"获取验证码",code:"",shoujihao:i.getStorageSync("user_info").mobile,shoujiyanzheng:!1,xieyi:[],yuedu:!1,nengyong:0,youhuijuanjine:0,youhuijuan_num:0,youhuijuantext:"暂无可用优惠卷",nengyongtext:"选择优惠券",tijiaozjia:0,yf:0,zjia:0,znum:0,img:this.$imgPath,alls_address:{},address_name:"",address_phone:"",address:"",value:"",show:!1,shows:!1,showa:!1,title:"确认订单",goodsdata:[],cartid:0,orderid:"",iscartid:!0,dzg:0,xieyiid:[],jifen:0}},onLoad:function(e){var n=this;if(e.jifen&&(n.jifen=e.jifen),e.yf&&(n.yf=e.yf),e.jifen&&(n.jifen=e.jifen),e.iscartid&&(n.iscartid=!1),e.title&&(n.title=e.title),i.getStorageSync("address")&&(n.alls_address=i.getStorageSync("address"),n.address=n.alls_address.title+n.alls_address.address,n.address_name=n.alls_address.username,n.address_phone=n.alls_address.phone),i.$on("address",(function(i){n.alls_address=i,n.address=i.title+i.address,n.address_name=i.username,n.address_phone=i.phone})),i.$on("youhuijuan",(function(i){n.youhuijuan_num=1,n.youhuijuanjine=i.cupons.yh_price,n.cuponsid=i.coupons_id,n.tijiaozjia=Number(n.tijiaozjia)-Number(i.cupons.yh_price)})),e.goodsdata){var a=JSON.parse(e.goodsdata),o=[];n.goodsdata=t(a),n.goodsdata.forEach((function(i){n.zjia=n.zjia+i.num*i.xc_price,n.znum=n.znum+i.num,o.push(i.id)})),n.zjia=n.zjia.toFixed(2),n.cartid=o.join(","),n.tijiaozjia=Number(n.zjia)+Number(n.yf),1==n.goodsdata[0].swj&&0==n.jifen&&(n.swj=1,n.swjorderid=n.goodsdata[0].orderid,n.$api.dingj({orderid:n.goodsdata[0].orderid}).then((function(i){1==i.data.code&&i.data.data.status.price<=n.tijiaozjia&&(n.dinjing=i.data.data.status.price,n.tijiaozjia=n.tijiaozjia-n.dinjing)})))}if(0==n.jifen){var s=i.getStorageSync("xieyi");s.forEach((function(i){4==i.state&&(n.xieyi.push(i),n.xieyiid.push(i.id))})),n.xieyi.length>0?n.buyanzheng=!0:n.buyanzheng=!1;var u=(new Date).getTime(),d=n.zjia-n.dinjing;n.$api.mycupon({user_id:i.getStorageSync("user_info").id}).then((function(i){1==i.data.code&&i.data.data.status.forEach((function(i){null==i.usetime&&u<1e3*i.cupons.endtime&&0==i.state&&Number(i.cupons.cb_price)<d&&(n.nengyong=1)}))}))}else{var r=i.getStorageSync("xieyi");r.forEach((function(i){14==i.state&&(n.xieyi.push(i),n.xieyiid.push(i.id))})),n.xieyi.length>0?n.buyanzheng=!0:n.buyanzheng=!1}},methods:{goyouhuijuan:function(){i.navigateTo({url:"../pagesA/gongju4?xuanzhe=1&jiage="+(this.zjia-this.dinjing)})},bjnm:function(){var e=this,t=0,n=[];if(this.xieyi.forEach((function(i){i.check&&(t++,n.push(i))})),this.xieyi.length!=t)return i.showToast({title:"请阅读并同意协议",icon:"none"});n.forEach((function(t){e.$api.userag({userid:i.getStorageSync("user_info").id,agid:t.id})})),this.shoujiyanzheng=!1,this.yuedu=!1,this.yuedu=!1,this.yuyuesss=!0},yuyueyuyue:function(i){this.yuedu=!1,this.dzg=i,this.annui()},go_code:function(){var e=this;0==e.time&&e.$api.emsphone({phone:e.shoujihao,user_id:i.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){e.time=60;var n=setInterval((function(){e.time--,e.huoqu=e.time+"s后获取",0==e.time&&(clearInterval(n),e.huoqu="获取验证码")}),1e3)}else i.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},xianshi:function(){this.address?this.shoujiyanzheng=!0:i.showToast({title:"请选择地址",duration:1e3,icon:"none"})},tongyis:function(e){var t=this;1==e?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(e){1==e.data.code?t.tongyi(1):i.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):i.showToast({title:"验证码错误",duration:1e3,icon:"none"}):(this.time=0,this.code="",this.shoujihao="",this.shoujiyanzheng=!1)},tongyi:function(i){1==i?(this.xieyi.forEach((function(i){i.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},fuwenben:function(e){i.setStorageSync("fuwenbeng",e.content),i.navigateTo({url:"./fuwenben"})},hahaha:function(i){i.check=!i.check},aaaaaa:function(){this.showaaaaaa=!this.showaaaaaa},youhuijuan:function(){i.navigateTo({url:"#"})},seleadd:function(){i.navigateTo({url:"../pagesA/gongju0?xuanzhe=1"})},xuanzhea:function(i){switch(i){case 0:this.showa=!1;break;case 1:this.showa=!1;break;default:}},xuanzhes:function(i){switch(i){case 0:this.shows=!1;break;case 1:this.shows=!1;break;default:}},xuanzhe:function(i){switch(i){case 0:this.show=!1;break;case 1:this.show=!1;break;default:}},annui:function(){var e=this;this.yuyuesss=!1;var t=[],n=[],a=[],o=[];this.goodsdata.forEach((function(i){t.push(i.shopid),n.push(i.specidsize),a.push(i.specid),o.push(i.id)})),this.iscartid&&(o=0),""!=this.address?0==this.jifen?this.$api.cartpay({cuponsid:this.cuponsid,swj:this.swj,orderid:this.swjorderid,content:this.value,shopid:t,cartid:o,user_id:i.getStorageSync("user_info").id,num:[this.znum],addressid:this.alls_address.id,type:0,specidsize:n,specid:a,price:this.tijiaozjia.toFixed(2),dzg:this.dzg,dj:this.dinjing}).then((function(t){if(200==t.data.code){e.orderid=t.data.orderid;var n=e;e.$api.shopcart({id:i.getStorageSync("user_info").id}).then((function(e){var t=0;1==e.data.code&&e.data.data.status.forEach((function(i){t+=1})),t>=99&&(t="..."),i.setStorageSync("cart_num",t)})),i.requestPayment({timeStamp:t.data.data.timeStamp,nonceStr:t.data.data.nonceStr,package:t.data.data.package,signType:t.data.data.signType,paySign:t.data.data.paySign,success:function(i){n.goss()},fail:function(e){i.showToast({title:"支付失败",icon:"none"})}})}else i.showToast({title:t.data.msg,duration:1e3,icon:"none"})})):this.$api.shoppay({cuponsid:this.cuponsid,swj:this.swj,orderid:this.swjorderid,content:this.value,shopid:t,cartid:o,user_id:i.getStorageSync("user_info").id,num:[this.znum],addressid:this.alls_address.id,type:0,specidsize:n,specid:a,price:this.tijiaozjia.toFixed(2),dzg:this.dzg,dj:this.dinjing}).then((function(e){i.showToast({title:e.data.msg,icon:"none",duration:1e3}),1==e.data.code&&setTimeout((function(){i.switchTab({url:"/pages/Home/User"})}),1e3)})):i.showToast({title:"请选择地址",duration:1e3,icon:"none"})},goss:function(){this.$api.shopcart({id:i.getStorageSync("user_info").id}).then((function(e){var t=0;1==e.data.code&&e.data.data.status.forEach((function(i){t+=Number(i.num)})),t>=99&&(t="..."),i.setStorageSync("cart_num",t)})),i.navigateTo({url:"../pagesA/goods_data?order_id="+this.orderid}),i.showToast({title:"支付成功",icon:"success",duration:1e3})},back:function(e){switch(e){case 0:i.navigateBack(-1);break;case 1:i.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=d}).call(this,t("543d")["default"])},6738:function(i,e,t){},"6e36":function(i,e,t){"use strict";t.r(e);var n=t("5585"),a=t.n(n);for(var o in n)"default"!==o&&function(i){t.d(e,i,(function(){return n[i]}))}(o);e["default"]=a.a},7569:function(i,e,t){"use strict";t.r(e);var n=t("bcb3"),a=t("6e36");for(var o in a)"default"!==o&&function(i){t.d(e,i,(function(){return a[i]}))}(o);t("c860");var s,u=t("f0c5"),d=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"364382ca",null,!1,n["a"],s);e["default"]=d.exports},bcb3:function(i,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n}));var n={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,"452c"))},uKehu:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-kehu/u-kehu")]).then(t.bind(null,"4dd2"))},uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,"d62c"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,"fd95"))},uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,"9f16"))}},a=function(){var i=this,e=i.$createElement,t=(i._self._c,0==i.jifen?i.tijiaozjia.toFixed(2)||"":null),n=0!=i.jifen?i.tijiaozjia.toFixed(2)||"":null;i._isMounted||(i.e0=function(e){i.yuyuesss=!0}),i.$mp.data=Object.assign({},{$root:{g0:t,g1:n}})},o=[]},c860:function(i,e,t){"use strict";var n=t("6738"),a=t.n(n);a.a}},[["1852","common/runtime","common/vendor"]]]);