(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/User"],{205:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));try{a={uKehu:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-kehu/u-kehu")]).then(t.bind(null,741))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},o=[];r._withStripped=!0},27:function(e,n,t){"use strict";t.r(n);var a=t(28),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=r.a},28:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(4));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,a,r,o,u){try{var i=e[o](u),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var u=e.apply(n,t);function i(e){o(u,a,r,i,s,"next",e)}function s(e){o(u,a,r,i,s,"throw",e)}i(void 0)}))}}var i={data:function(){return{user_info_id:"",img:this.$imgPath,user_info:"",num_list:["","","",""],gongju_list:[{name:"收货地址",url:"../pagesA/gongju0"},{name:"我的收藏",url:"../pagesA/gongju1"},{name:"我的关注",url:"../pagesA/gongju2"},{name:"我的足迹",url:"../pagesA/gongju3"},{name:"我的优惠券",url:"../pagesA/gongju4"},{name:"我的佣金",url:"../pagesD/designyongjin"},{name:"安装评价",url:"../pagesA/gongju6"},{name:"产品评价",url:"../pagesA/gongju7"},{name:"站内信息",url:"../pagesA/gongju8"},{name:"我的售后",url:"../pagesA/gongju9"},{name:"我的报装",url:"../pagesA/gongju10"},{name:"我的团队",url:"../pagesA/gongju11"},{name:"预约记录",url:"../pagesA/gongju12"}],list:[{id:1,name:"待付款"},{id:2,name:"待发货"},{id:3,name:"待收货"},{id:4,name:"待评价"},{id:0,name:"全部订单"}]}},onShow:function(){e.getStorageSync("user_info")&&(this.user_info=e.getStorageSync("user_info"),this.shuliang(this.user_info.id))},methods:{shuliang:function(n){var t=this;this.$api.addressshow({id:n}).then((function(n){1==n.data.code&&n.data.data.status.forEach((function(n){1==n.auto&&e.setStorageSync("address",n)}))})),this.$api.myuser({user_id:n}).then((function(n){1==n.data.code&&(t.user_info=n.data.data.myuser,e.setStorageSync("user_info",n.data.data.myuser))})),this.$api.myorder({user_id:n}).then((function(e){if(1==e.data.code){var n=[0,0,0,0];e.data.data.status.forEach((function(e){switch(e.state){case"0":n[0]+=1;break;case"1":n[1]+=1;break;case"2":n[2]+=1;break;case"3":n[3]+=1;break;default:}})),t.num_list=[].concat(n)}}))},login:function(){var n="",t="",a="",r=this,o=0,u=0;e.getStorageSync("yaoqinglevel")&&(o=e.getStorageSync("yaoqinglevel")),e.getStorageSync("yaoqinguid")&&(u=e.getStorageSync("yaoqinguid")),e.getUserProfile({desc:"Wexin",success:function(i){t=i.iv,a=i.encryptedData,e.login({provider:"weixin",success:function(i){n=i.code,r.$api.wxlogin({level:o,code:n,iv:t,encryptedData:a,pid:u}).then((function(n){1==n.data.code?(r.user_info_id=n.data.data.status.id,e.setStorageSync("token",n.data.data.token),r.shuliang(r.user_info_id)):e.showToast({title:n.data.msg,duration:1e3,icon:"none"})}))}})}})},gomy:function(){e.navigateTo({url:"../pagesB/my"})},gos:function(n){0==n?e.navigateTo({url:"../pagesB/card"}):1==n&&e.navigateTo({url:"../pagesB/erweima"})},shengfenzhuanqu:function(){var n=this;return u(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$login();case 2:if(!t.sent){t.next=4;break}e.navigateTo({url:"../pagesB/shengfen"});case 4:case"end":return t.stop()}}),t)})))()},changeDesign:function(){var n=this;return u(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$login();case 2:if(!t.sent){t.next=4;break}e.navigateTo({url:"../pagesD/designPage/designPage"});case 4:case"end":return t.stop()}}),t)})))()},go:function(n){var t=this;return u(a.default.mark((function r(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$login();case 2:if(!a.sent){a.next=5;break}console.log(n),e.navigateTo({url:"../pagesB/dindan?title="+n.name+"&current="+n.id});case 5:case"end":return a.stop()}}),r)})))()},gongju_go:function(n,t){var r=this;return u(a.default.mark((function o(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$login();case 2:if(!a.sent){a.next=4;break}e.navigateTo({url:n+"?title="+t});case 4:case"end":return a.stop()}}),o)})))()}}};n.default=i}).call(this,t(0)["default"])},29:function(e,n,t){},337:function(e,n,t){"use strict";(function(e){t(3);a(t(2));var n=a(t(338));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(0)["createPage"])},338:function(e,n,t){"use strict";t.r(n);var a=t(205),r=t(27);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t(339);var u,i=t(1),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"1197255c",null,!1,a["a"],u);s.options.__file="pages/Home/User.vue",n["default"]=s.exports},339:function(e,n,t){"use strict";var a=t(29),r=t.n(a);r.a}},[[337,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/User.js.map