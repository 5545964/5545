(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/shengfen"],{"0284":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-empty/u-empty")]).then(n.bind(null,"d5eb"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"d62c"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"fd95"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"9f16"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"c9d7"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.shoujiyanzheng=!0},t.e1=function(e){t.shoujiyanzheng=!0})},s=[]},"154d":function(t,e,n){"use strict";(function(t){n("c9dc");i(n("66fd"));var e=i(n("c00c"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"20b5":function(t,e,n){},"4c4a":function(t,e,n){"use strict";var i=n("20b5"),a=n.n(i);a.a},7125:function(t,e,n){"use strict";n.r(e);var i=n("d878"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},c00c:function(t,e,n){"use strict";n.r(e);var i=n("0284"),a=n("7125");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("4c4a");var o,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"57b213e8",null,!1,i["a"],o);e["default"]=r.exports},d878:function(t,e,n){"use strict";(function(t){function n(t){return o(t)||s(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{name:"",mnbv:"",jshdsfdfs:!1,shoujihao:t.getStorageSync("user_info").mobile,baozhuangshow:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],id:"",jiage:0,hei:1e4,list:[],title:"身份专区",userinfo:{},isdes:0,usershengfen:"",types:"",mlml:0,pd:0}},onLoad:function(e){e.title&&(this.title=e.title);e.isdes&&(this.isdes=1,"1",this.mlml=1),""!=t.getStorageSync("user_info").bbs&&null!=t.getStorageSync("user_info").bbs&&0==this.isdes&&(this.usershengfen=t.getStorageSync("user_info").bbs.id||0),""!=t.getStorageSync("des_info").bbs&&null!=t.getStorageSync("des_info").bbs&&0!=this.isdes&&(5==t.getStorageSync("des_info").bbs.id&&(this.usershengfen=1),3==t.getStorageSync("des_info").bbs.id&&(this.usershengfen=2),4==t.getStorageSync("des_info").bbs.id&&(this.usershengfen=3)),this.getdata()},watch:{shoujiyanzheng:function(t,e){t||(this.code="")}},methods:{xieyis:function(e){var n="",i=[],a=t.getStorageSync("xieyi");1==this.isdes?(1==e&&(n=1),2==e&&(n=10),3==e&&(n=11)):(1==e&&(n=0),2==e&&(n=8),3==e&&(n=9)),a.forEach((function(t){t.state==n&&i.push(t)})),this.xieyi=[].concat(i),this.xieyi.length>0?this.buyanzheng=!0:this.buyanzheng=!1},hahaha:function(t){t.check=!t.check},fuwenben:function(e){t.setStorageSync("fuwenbeng",e.content),t.navigateTo({url:"../pagesC/fuwenben?title="+e.name})},tongyis:function(e){var n=this;1==e?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(e){1==e.data.code?n.tongyi(1):t.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):t.showToast({title:"请输入验证码",duration:1e3,icon:"none"}):(this.time=0,this.code="",this.shoujihao="",this.shoujiyanzheng=!1)},tongyi:function(t){1==t?(this.xieyi.forEach((function(t){t.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(e){var n=/^1[3-9]\d{9}$/;n.test(e.detail.value)||t.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var e=this;0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:t.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){t.showToast({title:"发送成功",duration:1e3,icon:"none"}),e.timea=60;var i=setInterval((function(){e.timea--,e.huoqu=e.timea+"s后获取",0==e.timea&&(clearInterval(i),e.huoqu="获取验证码")}),1e3)}else t.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},tanchuanbaozhuang:function(){var e=this;if(this.buyanzheng){var n=0,i=[];if(this.xieyi.forEach((function(t){t.check&&(n++,i.push(t))})),this.xieyi.length!=n)return t.showToast({title:"请阅读并同意协议",icon:"none"});i.forEach((function(n){e.$api.userag({userid:t.getStorageSync("user_info").id,agid:n.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}this.baozhuangshow=!1,this.topay()},topay:function(){var e=this;this.$api.buylevel({id:this.id,user_id:t.getStorageSync("user_info").id,level:this.mlml}).then((function(n){if(1==n.data.code&&(t.showToast({title:n.data.msg,icon:"none"}),e.mlml,setTimeout((function(){t.navigateTo({url:"./redsuccess?level="+e.id+"&name="+e.name+"&mlml="+e.mlml})}),1e3)),200==n.data.code){var i=e;t.requestPayment({timeStamp:n.data.data.timeStamp,nonceStr:n.data.data.nonceStr,package:n.data.data.package,signType:n.data.data.signType,paySign:n.data.data.paySign,success:function(e){i.$refs.uToast.show({title:"购买"+i.types+"成功",type:"default"}),t.setStorageSync("yanzheng",!0),1!=i.mlml&&setTimeout((function(){t.navigateTo({url:"./redsuccess?level="+i.id+"&name="+i.name})}),1e3)},fail:function(e){t.showToast({title:"支付失败",icon:"none"})}})}}))},getdata:function(){var e=this;this.$api.shenfen({type:this.isdes,id:t.getStorageSync("user_info").id}).then((function(i){1==i.data.code&&(i.data.data.status.forEach((function(t){t["name"]=t.type.split("（")[0]})),e.list=n(i.data.data.status),1==e.isdes?(5==e.list[0].id&&(e.xieyis(1),e.id=1),3==e.list[0].id&&(e.xieyis(2),e.id=2),4==e.list[0].id&&(e.xieyis(3),e.id=3)):(e.xieyis(e.list[0].id),e.id=e.list[0].id),e.jiage=e.list[0].money+"元","0.00"==e.list[0].money&&(e.jiage="免费"),e.pd=e.list[0].pd,e.types=e.list[0].type,e.name=e.list[0].type,t.setStorageSync("shengfen",i.data.data.user),setTimeout((function(){e.gaodu(0)}),500))}))},gaodu:function(e){var n=this;if(0!=this.list.length){var i=t.createSelectorQuery().in(this),a="#id"+e;i.select(a).boundingClientRect((function(t){n.hei=t.height+57})).exec()}},lunbo:function(t){this.jiage=this.list[t.detail.current].money+"元","0.00"==this.list[t.detail.current].money&&(this.jiage="免费"),1==this.isdes?(5==this.list[t.detail.current].id&&(this.id=1),3==this.list[t.detail.current].id&&(this.id=2),4==this.list[t.detail.current].id&&(this.id=3)):this.id=this.list[t.detail.current].id,this.xieyis(this.id),this.pd=this.list[t.detail.current].pd,this.types=this.list[t.detail.current].type,this.name=this.list[t.detail.current].name,this.gaodu(t.detail.current)},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=r}).call(this,n("543d")["default"])}},[["154d","common/runtime","common/vendor"]]]);