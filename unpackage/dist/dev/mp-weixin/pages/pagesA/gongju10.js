(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/gongju10"],{245:function(n,t,i){"use strict";(function(n){i(5);a(i(3));var t=a(i(246));function a(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=i,n(t.default)}).call(this,i(1)["createPage"])},246:function(n,t,i){"use strict";i.r(t);var a=i(247),e=i(249);for(var u in e)"default"!==u&&function(n){i.d(t,n,(function(){return e[n]}))}(u);i(251);var s,o=i(32),r=Object(o["default"])(e["default"],a["render"],a["staticRenderFns"],!1,null,"11c72898",null,!1,a["components"],s);r.options.__file="pages/pagesA/gongju10.vue",t["default"]=r.exports},247:function(n,t,i){"use strict";i.r(t);var a=i(248);i.d(t,"render",(function(){return a["render"]})),i.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),i.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),i.d(t,"components",(function(){return a["components"]}))},248:function(n,t,i){"use strict";var a;i.r(t),i.d(t,"render",(function(){return e})),i.d(t,"staticRenderFns",(function(){return s})),i.d(t,"recyclableRender",(function(){return u})),i.d(t,"components",(function(){return a}));try{a={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,648))},uTabs:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-tabs/u-tabs")]).then(i.bind(null,717))},uPopup:function(){return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null,741))},uInput:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null,812))},uHeigth:function(){return i.e("uview-ui/components/u-heigth/u-heigth").then(i.bind(null,827))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var e=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.baozhuangshow=!1},n.e1=function(t){n.qurren=!1})},u=!1,s=[];e._withStripped=!0},249:function(n,t,i){"use strict";i.r(t);var a=i(250),e=i.n(a);for(var u in a)"default"!==u&&function(n){i.d(t,n,(function(){return a[n]}))}(u);t["default"]=e.a},250:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{anzhuang:!1,bzxq:{},qurrsaen:"",qurren:!1,buyanzheng:!0,mnbv:"",zhuangtai:0,yianzhaungkaiguan:!0,yianzhaungxieyi:[],shifouanzhaungkaiguan:!0,shifouanzhaungxieyi:[],baozhuangshow:!1,imgtitle:this.$imgPath,current:0,pingjiaok:0,title:"我的报装",list:[{name:"全部"},{name:"待安装"},{name:"安装中"},{name:"已完成"}],lists:[{status:"all",data_list:[]},{status:1,data_list:[]},{status:2,data_list:[]},{status:3,data_list:[]}]}},onLoad:function(t){var i=this,a=n.getStorageSync("xieyi");a?(this.yiwanchengxieyi=[],this.yianzhaungxieyi=[],this.shifouanzhaungxieyi=[],this.querenqianshouxieyi=[],a.forEach((function(n){3==n.state&&i.yianzhaungxieyi.push(n),5==n.state&&i.shifouanzhaungxieyi.push(n),2==n.state&&i.querenqianshouxieyi.push(n)})),this.yianzhaungxieyi.length>0?this.yianzhaungkaiguan=!0:this.yianzhaungkaiguan=!1,this.shifouanzhaungxieyi.length>0?this.shifouanzhaungkaiguan=!0:this.shifouanzhaungkaiguan=!1,this.querenqianshouxieyi.length>0?this.querenqianshoukaiguan=!0:this.querenqianshoukaiguan=!1):(this.yianzhaungkaiguan=!1,this.shifouanzhaungkaiguan=!1,this.querenqianshoukaiguan=!1),this.title=t.title},onShow:function(){this.allsss()},methods:{lookdetails:function(n){var t=this;this.$api.bzxq({id:n.bzid}).then((function(n){1==n.data.code&&(t.bzxq=n.data.data.status,t.anzhuang=!0)}))},allsss:function(){var t=this;this.$api.myorder({user_id:n.getStorageSync("user_info").id}).then((function(n){1==n.data.code&&(t.lists.forEach((function(n,t){n.data_list=[]})),n.data.data.status.forEach((function(n){switch(n.state){case"3":t.lists[0].data_list.push(n),t.lists[1].data_list.push(n);break;case"16":t.lists[0].data_list.push(n),t.lists[2].data_list.push(n);break;case"17":t.lists[0].data_list.push(n),t.lists[3].data_list.push(n);break;default:}})))}))},baozhuangpngji:function(n,t){this.pingjiaok=n,this.annui(6,t)},annui:function(t,i){switch(t){case 6:n.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(i)+"&okj="+this.pingjiaok});break;default:}},anzhaungwancheng:function(){var t=this;this.$api.successloading({orderid:this.qurrsaen.orderid}).then((function(i){1==i.data.code?(n.showToast({title:"安装完成",icon:"success"}),t.qurren=!1,t.allsss()):n.showToast({title:i.data.msg,icon:"none"})}))},jiesubaozhaung:function(n){this.qurrsaen=n,this.qurren=!0},goods:function(t){n.navigateTo({url:"./goods_data?order_id="+t.orderid})},shifouanzhuangdsadas:function(){this.baozhuangshow=!1,n.setStorageSync("baozhaung",this.mnbv.shop),n.navigateTo({url:"../pagesB/baozhaung?orderid="+this.mnbv.orderid+"&tiao=1"})},dakaishouji:function(n){this.zhuangtai=n,1==n&&(this.xieyi=this.shifouanzhaungxieyi,this.buyanzheng=this.shifouanzhaungkaiguan,this.baozhuangshow=!1),2==n&&(this.xieyi=this.yianzhaungxieyi,this.buyanzheng=this.yianzhaungkaiguan,this.qurren=!1),this.shoujiyanzheng=!0},baozhaung:function(n){this.mnbv=n,this.baozhuangshow=!this.baozhuangshow},change:function(n){this.current=n},back:function(t){switch(t){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}}}};t.default=i}).call(this,i(1)["default"])},251:function(n,t,i){"use strict";i.r(t);var a=i(252),e=i.n(a);for(var u in a)"default"!==u&&function(n){i.d(t,n,(function(){return a[n]}))}(u);t["default"]=e.a},252:function(n,t,i){}},[[245,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/gongju10.js.map