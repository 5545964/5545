(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/dindan"],{100:function(t,e,a){"use strict";a.r(e);var n=a(101),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},101:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a(10));function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return u(t)||o(t)||r(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var d={data:function(){return{hahahaxuanzhe:{},imgtitle:this.$imgPath,show:!1,shows:!1,showa:!1,height:0,current:0,title:"",lists:[{name:"全部"},{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"待评价"},{name:"已完成"},{name:"退换货"}],list:[{status:"all",data_list:[]},{status:0,data_list:[]},{status:1,data_list:[]},{status:2,data_list:[]},{status:3,data_list:[]},{status:4,data_list:[]},{status:5,data_list:[]}],time:""}},onLoad:function(e){var a=this;t.$on("number",(function(){a.current=6})),t.$on("yuwancheng",(function(){a.current=5})),this.title=e.title,e.current&&(this.current=e.current),this.$api.orderset().then((function(t){1==t.data.code&&(a.time=t.data.data.status.ordertime)}))},onShow:function(){this.system(),this.allsss()},methods:{allsss:function(){var e=this;this.$api.myorder({user_id:t.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&(e.list[0].data_list=[],e.list[0].data_list=i(t.data.data.status),e.chulidata())}))},order:function(){this.$api.myorderI({user_id:1}).then((function(t){t.data.code}))},goods:function(e){t.navigateTo({url:"../pagesA/goods_data?order_id="+e.orderid})},xuanzhea:function(e){var a=this;switch(e){case 0:this.showa=!1;break;case 1:this.$api.qxorder({orderid:this.order_id}).then((function(e){1==e.data.code&&(t.showToast({title:e.data.msg,icon:"none"}),a.allsss())})),this.showa=!1;break;default:}},xuanzhes:function(e){var a=this;switch(e){case 0:this.shows=!1;break;case 1:this.$api.sureorder({id:this.order_id}).then((function(e){1==e.data.code&&(t.showToast({title:"收货成功",icon:"none"}),a.allsss(),a.current=4)})),this.shows=!1;break;default:}},xuanzhe:function(e){var a=this;switch(e){case 0:this.show=!1;break;case 1:this.$api.orderdzf({id:this.hahahaxuanzhe.id}).then((function(e){1==e.data.code?(t.showToast({title:"订单取消成功",duration:1e3,icon:"success"}),a.allsss(),a.show=!1,a.current=0):t.showToast({title:e.data.msg,duration:1e3,icon:"success"})}));break;default:}},annui:function(e,a){var n=this;switch(e){case 0:this.order_id=a.id,this.show=!0,this.hahahaxuanzhe=a;break;case 1:this.$api.orderpay({prepay_id:a.id,id:a.id}).then((function(e){if(200==e.data.code){var a=n;t.requestPayment({timeStamp:e.data.data.timeStamp,nonceStr:e.data.data.nonceStr,package:e.data.data.package,signType:e.data.data.signType,paySign:e.data.data.paySign,success:function(e){t.showToast({title:"支付成功",icon:"none"}),a.allsss(),a.current=2},fail:function(e){t.showToast({title:"支付失败",icon:"none"})}})}else t.showToast({title:e.data.msg,icon:"none"})}));break;case 2:this.order_id=a.orderid,this.showa=!0;break;case 3:t.navigateTo({url:"../pagesC/wuliu?id="+a.id});break;case 4:this.order_id=a.id,this.shows=!0;break;case 5:var i="";i=2==this.current?0:1,t.navigateTo({url:"../pagesA/tuikuan?orderid="+a.orderid+"&type="+i});break;case 6:t.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(a)});break;case 7:t.navigateTo({url:"../pagesC/shouhou?item="+JSON.stringify(a)});break;default:}},chulidata:function(){var t=this;this.list.forEach((function(t,e){0!=e&&(t.data_list=[])}));var e=this.list[0].data_list;e.forEach((function(e){switch(e.state){case"0":t.list[1].data_list.push(e);break;case"1":t.list[2].data_list.push(e);break;case"2":t.list[3].data_list.push(e);break;case"3":t.list[4].data_list.push(e);break;case"4":t.list[5].data_list.push(e);break;default:9!=e.state&&t.list[6].data_list.push(e)}}))},system:function(){var e=t.getSystemInfoSync();this.height=e.windowHeight},lun_change:function(t){this.current=t.detail.current},change:function(t){this.current=t},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};e.default=d}).call(this,a(0)["default"])},102:function(t,e,a){},230:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));try{n={uNavbar:function(){return a.e("uview-ui/components/u-navbar/u-navbar").then(a.bind(null,738))},uSearch:function(){return a.e("uview-ui/components/u-search/u-search").then(a.bind(null,739))},uTabs:function(){return Promise.all([a.e("common/vendor"),a.e("uview-ui/components/u-tabs/u-tabs")]).then(a.bind(null,743))},uEmpty:function(){return Promise.all([a.e("common/vendor"),a.e("uview-ui/components/u-empty/u-empty")]).then(a.bind(null,747))},uPopup:function(){return a.e("uview-ui/components/u-popup/u-popup").then(a.bind(null,742))},uKehu:function(){return Promise.all([a.e("common/vendor"),a.e("uview-ui/components/u-kehu/u-kehu")]).then(a.bind(null,741))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];i._withStripped=!0},412:function(t,e,a){"use strict";(function(t){a(3);n(a(2));var e=n(a(413));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=a,t(e.default)}).call(this,a(0)["createPage"])},413:function(t,e,a){"use strict";a.r(e);var n=a(230),i=a(100);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a(414);var r,o=a(1),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"ca3a6720",null,!1,n["a"],r);u.options.__file="pages/pagesB/dindan.vue",e["default"]=u.exports},414:function(t,e,a){"use strict";var n=a(102),i=a.n(n);i.a}},[[412,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/dindan.js.map