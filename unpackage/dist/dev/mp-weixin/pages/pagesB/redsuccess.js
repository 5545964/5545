(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/redsuccess"],{362:function(e,n,t){"use strict";(function(e){t(5);i(t(4));var n=i(t(363));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},363:function(e,n,t){"use strict";t.r(n);var i=t(364),s=t(366);for(var o in s)"default"!==o&&function(e){t.d(n,e,(function(){return s[e]}))}(o);t(368);var a,r=t(11),u=Object(r["default"])(s["default"],i["render"],i["staticRenderFns"],!1,null,"59e4bb5a",null,!1,i["components"],a);u.options.__file="pages/pagesB/redsuccess.vue",n["default"]=u.exports},364:function(e,n,t){"use strict";t.r(n);var i=t(365);t.d(n,"render",(function(){return i["render"]})),t.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(n,"components",(function(){return i["components"]}))},365:function(e,n,t){"use strict";var i;t.r(n),t.d(n,"render",(function(){return s})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return i}));try{i={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,659))},uRadioGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-radio-group/u-radio-group")]).then(t.bind(null,899))},uRadio:function(){return t.e("uview-ui/components/u-radio/u-radio").then(t.bind(null,906))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,823))},uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,752))},uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,759))},uCitySelect:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-city-select/u-city-select")]).then(t.bind(null,892))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.tan=!0},e.e1=function(n){e.show=!0},e.e2=function(n){e.tan=!1})},o=!1,a=[];s._withStripped=!0},366:function(e,n,t){"use strict";t.r(n);var i=t(367),s=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=s.a},367:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{popetext:"",yaoqing:!0,peoplelist:[],pepepe:!0,pages:1,tan:!1,yqr:"",user:"",sex:"",names:"",name:"",level:"",addressxq:"",address:"",emal:"",idcard:"",code:"",huoqu:"获取验证码",phone:"",show:!1,title:"注册美居合伙人",timea:0,list:[{name:"男",disabled:!1},{name:"女",disabled:!1}],value:""}},onLoad:function(n){var t=this;this.level=n.level,this.name=n.name;var i=e.getStorageSync("user_info");i&&(this.phone=i.mobile);var s=e.getStorageSync("shengfen");null!=s&&(this.user=s,this.names=this.user.name,0==this.user.sex?(this.sex=0,this.value="男"):1==this.user.sex&&(this.sex=1,this.value="女"),this.idcard=this.user.idcart,this.emal=this.user.email,this.address=this.user.address,this.addressxq=this.user.addressxq),this.$api.qsj({user_id:e.getStorageSync("user_info").id}).then((function(e){if(1==e.data.code){t.yaoqing=!1;var n=e.data.data.status;t.yqr=n.pname,t.names=n.name,0==n.sex?(t.sex=0,t.value="男"):1==t.user.sex&&(t.sex=1,t.value="女"),t.idcard=n.idcart,t.emal=n.email,t.address=n.address,t.addressxq=n.addressxq}})),this.$api.puser({user_id:e.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&(t.yaoqing=!1,t.yqr=e.data.data.status.nickname)})),this.$api.yqpeople().then((function(e){1==e.data.code&&(e.data.data.status.forEach((function(e){e["check"]=!1})),t.peoplelist=e.data.data.status)}))},methods:{quxiao:function(){this.yqr="",this.peoplelist.forEach((function(e,n){e.check=!1})),this.pope()},pope:function(){this.tan=!1},hahaha:function(e){this.yqr=this.peoplelist[e].nickname,this.peoplelist.forEach((function(n,t){n.check=e==t}))},radioGroupChange:function(e){this.sex="男"==e?"0":"1",this.value=e},go_code:function(){var n=this;0==this.timea&&this.$api.emsphone({phone:this.phone,user_id:e.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){n.timea=60,e.showToast({title:"发送成功",duration:1e3,icon:"none"});var i=setInterval((function(){n.timea--,n.huoqu=n.timea+"s后获取",0==n.timea&&(clearInterval(i),n.huoqu="获取验证码")}),1e3)}else e.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},cityChange:function(e){this.address=e.province.label+e.city.label+e.area.label},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}},isMobile:function(e){return null!=e&&""!=e&&/^1[3456789][0-9]{9}$/.test(e)},checkEmail:function(e){},submit:function(){var n=this;if(!/^1[3-9]\d{9}$/.test(this.phone))return e.showToast({title:"请检查手机号",icon:"none"});if(!/^\w+((-\w+)|(\.\w+))*@\w+(\.\w{2,3}){1,3}$/.test(this.emal))return e.showToast({title:"请检查邮箱",icon:"none"});var t=/^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,i=/^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/;return t.test(this.idcard)||i.test(this.idcard)?""==this.code||""==this.address||""==this.addressxq||""==this.level||""==this.name||""===this.sex?e.showToast({title:"请检查资料",icon:"none"}):void this.$api.emsyzphone({phone:this.phone,yzm:this.code}).then((function(t){1==t.data.code?(""==n.yqr&&(n.yqr="无"),n.$api.sqb({user_id:e.getStorageSync("user_info").id,idcart:n.idcard,address:n.address,email:n.emal,mobile:n.phone,level:n.level,levelname:n.name,addressxq:n.addressxq,name:n.names,sex:n.sex,pname:n.yqr}).then((function(n){e.showToast({title:n.data.msg,duration:1e3,icon:"none"}),1==n.data.code&&setTimeout((function(){e.reLaunch({url:"/pages/Home/User"})}),1e3)}))):e.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):e.showToast({title:"请检查身份证号码",icon:"none"})}}};n.default=t}).call(this,t(1)["default"])},368:function(e,n,t){"use strict";t.r(n);var i=t(369),s=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=s.a},369:function(e,n,t){}},[[362,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/redsuccess.js.map