(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/quzhifu"],{440:function(e,t,n){"use strict";(function(e){n(5);a(n(3));var t=a(n(441));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},441:function(e,t,n){"use strict";n.r(t);var a=n(442),i=n(444);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(446);var s,r=n(11),u=Object(r["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"39d613e2",null,!1,a["components"],s);u.options.__file="pages/pagesC/quzhifu.vue",t["default"]=u.exports},442:function(e,t,n){"use strict";n.r(t);var a=n(443);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},443:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,614))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,635))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,644))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,718))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,768))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.tijiaozjia.toFixed(2));e.$mp.data=Object.assign({},{$root:{g0:n}})},o=!1,s=[];i._withStripped=!0},444:function(e,t,n){"use strict";n.r(t);var a=n(445),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},445:function(e,t,n){"use strict";(function(e){function n(e){return s(e)||o(e)||i(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function o(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function s(e){if(Array.isArray(e))return r(e)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{buyanzheng:!1,time:0,huoqu:"获取验证码",code:"",shoujihao:"",shoujiyanzheng:!1,xieyi:[],yuedu:!1,youhuijuan_num:0,tijiaozjia:0,yf:0,zjia:0,znum:0,img:this.$imgPath,alls_address:{},address_name:"",address_phone:"",address:"",value:"",show:!1,shows:!1,showa:!1,title:"确认订单",goodsdata:[],cartid:0,orderid:"",iscartid:!0}},onLoad:function(t){var a=this,i=this;if(e.getStorageSync("address")&&(i.alls_address=e.getStorageSync("address"),i.address=i.alls_address.title+i.alls_address.address,i.address_name=i.alls_address.username,i.address_phone=i.alls_address.phone),e.$on("address",(function(e){i.alls_address=e,i.address=e.title+e.address,i.address_name=e.username,i.address_phone=e.phone})),e.$on("youhuijuan",(function(e){i.youhuijuan_num=e.id})),t.yf&&(i.yf=t.yf),t.iscartid&&(i.iscartid=!1),t.goodsdata){var o=JSON.parse(t.goodsdata);console.log(o,"ss");var s=[];i.goodsdata=n(o),i.goodsdata.forEach((function(e){i.zjia=i.zjia+e.num*e.xc_price,i.znum=i.znum+e.num,s.push(e.id)})),i.zjia=i.zjia.toFixed(2),i.cartid=s.join(","),i.tijiaozjia=Number(i.zjia)+Number(i.yf)}t.title&&(i.title=t.title),this.$api.agreement({state:4}).then((function(e){1==e.data.code?(e.data.data.status.forEach((function(e){e["check"]=!1})),a.xieyi=e.data.data.status):a.buyanzheng=!1}))},methods:{go_code:function(){var e=this;if(0==this.time){this.time=60;var t=setInterval((function(){e.time--,e.huoqu=e.time+"s后获取",0==e.time&&(clearInterval(t),e.huoqu="获取验证码")}),1e3)}},xianshi:function(){this.shoujiyanzheng=!0},tongyis:function(t){1==t?""!=this.code?this.tongyi(1):e.showToast({title:"请输入验证码",icon:"none"}):this.shoujiyanzheng=!1},tongyi:function(e){1==e?(this.xieyi.forEach((function(e){e.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},fuwenben:function(){e.navigateTo({url:"./fuwenben"})},hahaha:function(e){console.log(e),e.check=!e.check},aaaaaa:function(){this.showaaaaaa=!this.showaaaaaa},youhuijuan:function(){e.navigateTo({url:"#"})},seleadd:function(){e.navigateTo({url:"../pagesA/gongju0?xuanzhe=1"})},xuanzhea:function(e){switch(e){case 0:this.showa=!1;break;case 1:this.showa=!1;break;default:}},xuanzhes:function(e){switch(e){case 0:this.shows=!1;break;case 1:this.shows=!1;break;default:}},xuanzhe:function(e){switch(e){case 0:this.show=!1;break;case 1:this.show=!1;break;default:}},annui:function(){var t=this;if(this.buyanzheng){var n=0;if(this.xieyi.forEach((function(e){e.check&&n++})),this.xieyi.length!=n)return e.showToast({title:"请阅读并同意协议",icon:"none"});this.shoujiyanzheng=!1,this.yuedu=!1}var a=[],i=[],o=[],s=[];this.goodsdata.forEach((function(e){a.push(e.shopid),i.push(e.specidsize),o.push(e.specid),s.push(e.id)})),this.iscartid&&(s=0),""!=this.address?this.$api.cartpay({swj:0,orderid:0,content:this.value,shopid:a,cartid:s,user_id:e.getStorageSync("user_info").id,num:[this.znum],addressid:this.alls_address.id,type:0,specidsize:i,specid:o,price:this.tijiaozjia}).then((function(n){if(200==n.data.code){t.orderid=n.data.orderid;var a=t;t.$api.shopcart({id:e.getStorageSync("user_info").id}).then((function(t){var n=0;1==t.data.code&&t.data.data.status.forEach((function(e){n+=1})),n>=99&&(n="..."),e.setStorageSync("cart_num",n)})),e.requestPayment({timeStamp:n.data.data.timeStamp,nonceStr:n.data.data.nonceStr,package:n.data.data.package,signType:n.data.data.signType,paySign:n.data.data.paySign,success:function(e){a.goss()},fail:function(t){e.showToast({title:"支付失败",icon:"none"})}})}})):e.showToast({title:"请选择地址",duration:1e3,icon:"none"})},goss:function(){this.$api.shopcart({id:e.getStorageSync("user_info").id}).then((function(t){var n=0;1==t.data.code&&t.data.data.status.forEach((function(e){n+=Number(e.num)})),n>=99&&(n="..."),e.setStorageSync("cart_num",n)})),e.navigateTo({url:"../pagesA/goods_data?order_id="+this.orderid}),e.showToast({title:"支付成功",icon:"success",duration:1e3})},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=u}).call(this,n(1)["default"])},446:function(e,t,n){"use strict";n.r(t);var a=n(447),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},447:function(e,t,n){}},[[440,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/quzhifu.js.map