(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/shengfen"],{"154d":function(t,e,n){"use strict";(function(t){n("c9dc");i(n("66fd"));var e=i(n("c00c"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},1988:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-empty/u-empty")]).then(n.bind(null,"d5eb"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"d62c"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"fd95"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"9f16"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.shoujiyanzheng=!0})},o=[]},7125:function(t,e,n){"use strict";n.r(e);var i=n("d878"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},9150:function(t,e,n){},b248:function(t,e,n){"use strict";var i=n("9150"),a=n.n(i);a.a},c00c:function(t,e,n){"use strict";n.r(e);var i=n("1988"),a=n("7125");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b248");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"129d9301",null,!1,i["a"],u);e["default"]=r.exports},d878:function(t,e,n){"use strict";(function(t){function n(t){return u(t)||o(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return s(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{name:"",mnbv:"",jshdsfdfs:!1,shoujihao:t.getStorageSync("user_info").mobile,baozhuangshow:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],id:"",jiage:0,hei:1e4,list:[],title:"身份专区",userinfo:{},isdes:0,usershengfen:"",types:""}},onLoad:function(e){var n=this;e.title&&(this.title=e.title);var i="0";e.isdes&&(this.isdes=1,i="1");var a=t.getStorageSync("xieyi");a.forEach((function(t){t.state===i&&n.xieyi.push(t)})),this.xieyi.length>0?this.buyanzheng=!0:this.buyanzheng=!1,""!=t.getStorageSync("user_info").bbs&&null!=t.getStorageSync("user_info").bbs&&(0==this.isdes?this.usershengfen=t.getStorageSync("user_info").bbs.id||0:this.usershengfen=t.getStorageSync("des_info").bbs.id||0),this.getdata()},watch:{shoujiyanzheng:function(t,e){t||(this.code="")}},methods:{hahaha:function(t){t.check=!t.check},fuwenben:function(e){t.setStorageSync("fuwenbeng",e.content),t.navigateTo({url:"../pagesC/fuwenben?title="+e.name})},tongyis:function(e){var n=this;1==e?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(e){1==e.data.code?n.tongyi(1):t.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):t.showToast({title:"请输入验证码",duration:1e3,icon:"none"}):(this.time=0,this.code="",this.shoujihao="",this.shoujiyanzheng=!1)},tongyi:function(t){1==t?(this.xieyi.forEach((function(t){t.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(e){var n=/^1[3-9]\d{9}$/;n.test(e.detail.value)||t.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var e=this;0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:t.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){t.showToast({title:"发送成功",duration:1e3,icon:"none"}),e.timea=60;var i=setInterval((function(){e.timea--,e.huoqu=e.timea+"s后获取",0==e.timea&&(clearInterval(i),e.huoqu="获取验证码")}),1e3)}else t.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},tanchuanbaozhuang:function(){var e=this;if(this.buyanzheng){var n=0,i=[];if(this.xieyi.forEach((function(t){t.check&&(n++,i.push(t))})),this.xieyi.length!=n)return t.showToast({title:"请阅读并同意协议",icon:"none"});i.forEach((function(n){e.$api.userag({userid:t.getStorageSync("user_info").id,agid:n.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}this.baozhuangshow=!1,this.topay()},topay:function(){var e=this;this.$api.buylevel({id:this.id,user_id:t.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code&&(t.showToast({title:n.data.msg,icon:"none"}),setTimeout((function(){t.navigateTo({url:"./redsuccess?level="+e.id+"&name="+e.name})}),1e3)),200==n.data.code){var i=e;t.requestPayment({timeStamp:n.data.data.timeStamp,nonceStr:n.data.data.nonceStr,package:n.data.data.package,signType:n.data.data.signType,paySign:n.data.data.paySign,success:function(e){t.showToast({title:"购买"+i.types+"成功",icon:"success"}),t.setStorageSync("yanzheng",!0),setTimeout((function(){t.navigateTo({url:"./redsuccess?level="+i.id+"&name="+i.name})}),1e3)},fail:function(e){t.showToast({title:"支付失败",icon:"none"})}})}}))},getdata:function(){var e=this;this.$api.shenfen({type:this.isdes,id:t.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&(t.data.data.status.forEach((function(t){t["name"]=t.type.split("（")[0]})),e.list=n(t.data.data.status),e.jiage=e.list[0].money+"元","0.00"==e.list[0].money&&(e.jiage="免费"),e.id=e.list[0].id,e.types=e.list[0].type,e.name=e.list[0].type,setTimeout((function(){e.gaodu(0)}),500))}))},gaodu:function(e){var n=this;if(0!=this.list.length){var i=t.createSelectorQuery().in(this),a="#id"+e;i.select(a).boundingClientRect((function(t){n.hei=t.height+57})).exec()}},lunbo:function(t){this.jiage=this.list[t.detail.current].money+"元","0.00"==this.list[t.detail.current].money&&(this.jiage="免费"),this.id=this.list[t.detail.current].id,this.types=this.list[t.detail.current].type,this.name=this.list[t.detail.current].name,this.gaodu(t.detail.current)},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=r}).call(this,n("543d")["default"])}},[["154d","common/runtime","common/vendor"]]]);