(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/redsuccess"],{"0036":function(e,n,t){},"6d9a":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var a={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,"452c"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,"fd95"))},uCitySelect:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-city-select/u-city-select")]).then(t.bind(null,"34d2"))}},i=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.show=!0})},o=[]},7154:function(e,n,t){"use strict";t.r(n);var a=t("ddd2"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},"9a7c":function(e,n,t){"use strict";var a=t("0036"),i=t.n(a);i.a},a967:function(e,n,t){"use strict";(function(e){t("c9dc");a(t("66fd"));var n=a(t("d68e"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},d68e:function(e,n,t){"use strict";t.r(n);var a=t("6d9a"),i=t("7154");for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("9a7c");var u,s=t("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3440c9de",null,!1,a["a"],u);n["default"]=c.exports},ddd2:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLoad:function(n){this.level=n.level,this.name=n.name;var t=e.getStorageSync("user_info");t&&(this.phone=t.mobile)},data:function(){return{sex:"",names:"",name:"",level:"",addressxq:"",address:"",emal:"",idcard:"",code:"",huoqu:"获取验证码",phone:"",show:!1,title:"注册销售员",timea:0}},methods:{go_code:function(){var n=this;0==this.timea&&this.$api.emsphone({phone:this.phone,user_id:e.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){n.timea=60,e.showToast({title:"发送成功",duration:1e3,icon:"none"});var a=setInterval((function(){n.timea--,n.huoqu=n.timea+"s后获取",0==n.timea&&(clearInterval(a),n.huoqu="获取验证码")}),1e3)}else e.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},cityChange:function(e){this.address=e.province.label+e.city.label+e.area.label},back:function(n){switch(n){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}},submit:function(){var n=this;if(""==this.code||""==this.idcard||""==this.address||""==this.emal||""==this.phone||""==this.addressxq||""==this.level)return e.showToast({title:"请检查资料",icon:"none"});this.$api.emsyzphone({phone:this.phone,yzm:this.code}).then((function(t){1==t.data.code?n.$api.sqb({user_id:e.getStorageSync("user_info").id,idcart:n.idcard,address:n.address,email:n.emal,mobile:n.phone,level:n.level,levelname:n.name,addressxq:n.addressxq,name:n.names,sex:n.sex}).then((function(n){e.showToast({title:n.data.msg,duration:1e3,icon:"none"}),1==n.data.code&&setTimeout((function(){e.reLaunch({url:"/pages/Home/User"})}),1e3)})):e.showToast({title:"验证码错误",duration:1e3,icon:"none"})}))}}};n.default=t}).call(this,t("543d")["default"])}},[["a967","common/runtime","common/vendor"]]]);