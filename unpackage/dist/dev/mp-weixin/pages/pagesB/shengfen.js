(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/shengfen"],{327:function(e,t,n){"use strict";(function(e){n(5);i(n(3));var t=i(n(328));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},328:function(e,t,n){"use strict";n.r(t);var i=n(329),o=n(331);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n(333);var s,u=n(32),r=Object(u["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"b54858e4",null,!1,i["components"],s);r.options.__file="pages/pagesB/shengfen.vue",t["default"]=r.exports},329:function(e,t,n){"use strict";n.r(t);var i=n(330);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},330:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,648))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-empty/u-empty")]).then(n.bind(null,776))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,741))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,812))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,748))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.shoujiyanzheng=!0})},a=!1,s=[];o._withStripped=!0},331:function(e,t,n){"use strict";n.r(t);var i=n(332),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},332:function(e,t,n){"use strict";(function(e){function n(e){return s(e)||a(e)||o(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function s(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{name:"",mnbv:"",jshdsfdfs:!1,shoujihao:e.getStorageSync("user_info").mobile,baozhuangshow:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],id:"",jiage:0,hei:1e4,list:[],title:"身份专区",userinfo:{},isdes:0,usershengfen:"",types:""}},onLoad:function(t){var n=this;t.title&&(this.title=t.title);var i="0";t.isdes&&(this.isdes=1,i="1");var o=e.getStorageSync("xieyi");o.forEach((function(e){e.state===i&&n.xieyi.push(e)})),this.xieyi.length>0?this.buyanzheng=!0:this.buyanzheng=!1,""!=e.getStorageSync("user_info").bbs&&null!=e.getStorageSync("user_info").bbs&&(0==this.isdes?this.usershengfen=e.getStorageSync("user_info").bbs.id||0:this.usershengfen=e.getStorageSync("des_info").bbs.id||0),this.getdata()},watch:{shoujiyanzheng:function(e,t){e||(this.code="")}},methods:{hahaha:function(e){e.check=!e.check},fuwenben:function(t){e.setStorageSync("fuwenbeng",t.content),e.navigateTo({url:"../pagesC/fuwenben?title="+t.name})},tongyis:function(t){var n=this;1==t?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(t){1==t.data.code?n.tongyi(1):e.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):e.showToast({title:"请输入验证码",duration:1e3,icon:"none"}):(this.time=0,this.code="",this.shoujihao="",this.shoujiyanzheng=!1)},tongyi:function(e){1==e?(this.xieyi.forEach((function(e){e.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(t){var n=/^1[3-9]\d{9}$/;n.test(t.detail.value)||e.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var t=this;0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:e.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){e.showToast({title:"发送成功",duration:1e3,icon:"none"}),t.timea=60;var i=setInterval((function(){t.timea--,t.huoqu=t.timea+"s后获取",0==t.timea&&(clearInterval(i),t.huoqu="获取验证码")}),1e3)}else e.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},tanchuanbaozhuang:function(){var t=this;if(this.buyanzheng){var n=0,i=[];if(this.xieyi.forEach((function(e){e.check&&(n++,i.push(e))})),this.xieyi.length!=n)return e.showToast({title:"请阅读并同意协议",icon:"none"});i.forEach((function(n){t.$api.userag({userid:e.getStorageSync("user_info").id,agid:n.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}this.baozhuangshow=!1,this.topay()},topay:function(){var t=this;this.$api.buylevel({id:this.id,user_id:e.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code&&(e.showToast({title:n.data.msg,icon:"none"}),setTimeout((function(){e.navigateTo({url:"./redsuccess?level="+t.id+"&name="+t.name})}),1e3)),200==n.data.code){var i=t;e.requestPayment({timeStamp:n.data.data.timeStamp,nonceStr:n.data.data.nonceStr,package:n.data.data.package,signType:n.data.data.signType,paySign:n.data.data.paySign,success:function(t){e.showToast({title:"购买"+i.types+"成功",icon:"success"}),e.setStorageSync("yanzheng",!0),setTimeout((function(){e.navigateTo({url:"./redsuccess?level="+i.id+"&name="+i.name})}),1e3)},fail:function(t){e.showToast({title:"支付失败",icon:"none"})}})}}))},getdata:function(){var t=this;this.$api.shenfen({type:this.isdes,id:e.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&(e.data.data.status.forEach((function(e){e["name"]=e.type.split("（")[0]})),t.list=n(e.data.data.status),t.jiage=t.list[0].money+"元","0.00"==t.list[0].money&&(t.jiage="免费"),t.id=t.list[0].id,t.types=t.list[0].type,t.name=t.list[0].type,setTimeout((function(){t.gaodu(0)}),500))}))},gaodu:function(t){var n=this;if(0!=this.list.length){var i=e.createSelectorQuery().in(this),o="#id"+t;i.select(o).boundingClientRect((function(e){n.hei=e.height+57})).exec()}},lunbo:function(e){this.jiage=this.list[e.detail.current].money+"元","0.00"==this.list[e.detail.current].money&&(this.jiage="免费"),this.id=this.list[e.detail.current].id,this.types=this.list[e.detail.current].type,this.name=this.list[e.detail.current].name,this.gaodu(e.detail.current)},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};t.default=r}).call(this,n(1)["default"])},333:function(e,t,n){"use strict";n.r(t);var i=n(334),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},334:function(e,t,n){}},[[327,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/shengfen.js.map