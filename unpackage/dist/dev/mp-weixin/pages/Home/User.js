(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/User"],{205:function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));try{t={uKehu:function(){return Promise.all([a.e("common/vendor"),a.e("uview-ui/components/u-kehu/u-kehu")]).then(a.bind(null,741))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];o._withStripped=!0},27:function(e,n,a){"use strict";a.r(n);var t=a(28),o=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=o.a},28:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{user_info_id:"",img:this.$imgPath,user_info:"",num_list:["","","",""],gongju_list:[{name:"收货地址",url:"../pagesA/gongju0"},{name:"我的收藏",url:"../pagesA/gongju1"},{name:"我的关注",url:"../pagesA/gongju2"},{name:"我的足迹",url:"../pagesA/gongju3"},{name:"我的优惠券",url:"../pagesA/gongju4"},{name:"我的佣金",url:"../pagesD/designyongjin"},{name:"安装评价",url:"../pagesA/gongju6"},{name:"产品评价",url:"../pagesA/gongju7"},{name:"站内信息",url:"../pagesA/gongju8"},{name:"我的售后",url:"../pagesA/gongju9"},{name:"我的报装",url:"../pagesA/gongju10"},{name:"我的团队",url:"../pagesA/gongju11"},{name:"预约记录",url:"../pagesA/gongju12"}],list:[{id:1,name:"待付款"},{id:2,name:"待发货"},{id:3,name:"待收货"},{id:4,name:"待评价"},{id:0,name:"全部订单"}]}},onShow:function(){e.getStorageSync("user_info")&&(this.user_info=e.getStorageSync("user_info"),this.shuliang(this.user_info.id))},methods:{shuliang:function(n){var a=this;this.$api.addressshow({id:n}).then((function(n){1==n.data.code&&n.data.data.status.forEach((function(n){1==n.auto&&e.setStorageSync("address",n)}))})),this.$api.myuser({user_id:n}).then((function(n){1==n.data.code&&(a.user_info=n.data.data.myuser,e.setStorageSync("user_info",n.data.data.myuser))})),this.$api.myorder({user_id:n}).then((function(e){if(1==e.data.code){var n=[0,0,0,0];e.data.data.status.forEach((function(e){switch(e.state){case"0":n[0]+=1;break;case"1":n[1]+=1;break;case"2":n[2]+=1;break;case"3":n[3]+=1;break;default:}})),a.num_list=[].concat(n)}}))},login:function(){var n="",a="",t="",o=this,i=0,u=0;e.getStorageSync("yaoqinglevel")&&(i=e.getStorageSync("yaoqinglevel")),e.getStorageSync("yaoqinguid")&&(u=e.getStorageSync("yaoqinguid")),e.getUserProfile({desc:"Wexin",success:function(s){a=s.iv,t=s.encryptedData,e.login({provider:"weixin",success:function(s){n=s.code,o.$api.wxlogin({level:i,code:n,iv:a,encryptedData:t,pid:u}).then((function(n){1==n.data.code?(o.user_info_id=n.data.data.status.id,e.setStorageSync("token",n.data.data.token),o.shuliang(o.user_info_id)):e.showToast({title:n.data.msg,duration:1e3,icon:"none"})}))}})}})},gomy:function(){e.navigateTo({url:"../pagesB/my"})},gos:function(n){0==n?e.navigateTo({url:"../pagesB/card"}):1==n&&e.navigateTo({url:"../pagesB/erweima"})},shengfenzhuanqu:function(){e.navigateTo({url:"../pagesB/shengfen"})},changeDesign:function(){e.navigateTo({url:"../pagesD/designPage/designPage"})},go:function(n){e.navigateTo({url:"../pagesB/dindan?title="+n.name+"&current="+n.id})},gongju_go:function(n,a){e.navigateTo({url:n+"?title="+a})}}};n.default=a}).call(this,a(0)["default"])},29:function(e,n,a){},337:function(e,n,a){"use strict";(function(e){a(3);t(a(2));var n=t(a(338));function t(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(n.default)}).call(this,a(0)["createPage"])},338:function(e,n,a){"use strict";a.r(n);var t=a(205),o=a(27);for(var i in o)"default"!==i&&function(e){a.d(n,e,(function(){return o[e]}))}(i);a(339);var u,s=a(1),r=Object(s["a"])(o["default"],t["b"],t["c"],!1,null,"1197255c",null,!1,t["a"],u);r.options.__file="pages/Home/User.vue",n["default"]=r.exports},339:function(e,n,a){"use strict";var t=a(29),o=a.n(t);o.a}},[[337,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/User.js.map