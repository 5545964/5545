(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/tixian"],{"00a8":function(e,t,n){"use strict";n.r(t);var i=n("c646"),r=n("477a");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("934e");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"487db3d9",null,!1,i["a"],o);t["default"]=s.exports},"04f3":function(e,t,n){"use strict";(function(e){function n(e){return o(e)||a(e)||r(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{zjmoney:0,zjgeshi:0,dispro:0,yinghangka:!1,datas:[],current:0,currents:0,lists:[{name:"未提佣"},{name:"已提佣"}],list:[{name:"采购佣金"},{name:"推荐佣金"}],title:"提现申请",tiao:!0}},onLoad:function(e){e.title&&(this.title=e.title),e.isshejishiss&&(this.dispro=e.isshejishiss)},onShow:function(){var t=this,i=e.getStorageSync("monList");if(0!=i.length&&(i.forEach((function(e){e["checked"]=!1,e.createtime=t.$u.timeFormat(e.createtime,"yyyy-mm-dd hh:MM:ss")})),this.datas=n(i)),this.$api.myuser({user_id:e.getStorageSync("user_info").id||0}).then((function(t){1==t.data.code&&(e.setStorageSync("user_info",t.data.data.myuser),e.stopPullDownRefresh())})),"0"!=e.getStorageSync("user_info").freelance_id)return this.tiao=!0;this.$api.querysuccess({user_id:e.getStorageSync("user_info").id}).then((function(n){if(200==n.data.code){if(0!=e.getStorageSync("user_info").rw)return t.tiao=!0;t.rw()}if(1!=n.data.code)return 0==n.data.code?(t.tiao=!1,e.showToast({title:"您未实名认证！",icon:"error",duration:1e3}),void setTimeout((function(){e.navigateTo({url:"./shengfen"})}),1e3)):void 0;t.tiao=!1}))},methods:{qianyue:function(){this.$api.contract({user_id:e.getStorageSync("user_info").id}).then((function(t){e.setStorageSync("bbghb",t.data.data.data),1==t.data.code&&e.navigateTo({url:"../Home/URL/URL?url=0"})}))},rw:function(){var t=this;this.$api.gettask({user_id:e.getStorageSync("user_info").id}).then((function(e){1!=e.data.code&&t.rw()}))},god:function(t){0==this.dispro?e.navigateTo({url:"./goods_data?order_id="+t.order_id+"&qitarenfasle="+t.user_id+"&id="+t.id}):(e.setStorageSync("des_order",t),e.navigateTo({url:"../pagesD/shejishixiangqing?isdes=1"}))},shengfen:function(){if(null!=e.getStorageSync("user_info").freelance_id&&""!=e.getStorageSync("user_info").freelance_id){var t=[];0==this.dispro?this.datas.forEach((function(e){e.checked&&t.push(e.id)})):this.datas.forEach((function(e){e.checked&&t.push(e.dipro.id)})),t.length>=1&&this.$api.sqty({userid:e.getStorageSync("user_info").id,orderid:t}).then((function(t){if(1==t.data.code){var n={title:"提佣申请成功",text:"你的提佣申请已成功",botton:"我知道了",navbar:"提佣成功"};e.navigateTo({url:"../pagesD/regSuccess?list="+JSON.stringify(n)})}else e.showToast({title:t.data.msg,icon:"none"})}))}else e.navigateTo({url:"./shengfen"})},xuanzhe:function(e){var t=this;this.datas[e].checked=!this.datas[e].checked,this.zjgeshi=0,this.zjmoney=0,this.datas.forEach((function(e){e.checked&&(t.zjgeshi=t.zjgeshi+1,t.zjmoney=t.zjmoney+Number(e.price))}))},changes:function(e){this.currents=e},change:function(e){this.currents=0,this.current=e},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}}}};t.default=s}).call(this,n("543d")["default"])},3709:function(e,t,n){},"477a":function(e,t,n){"use strict";n.r(t);var i=n("04f3"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"934e":function(e,t,n){"use strict";var i=n("3709"),r=n.n(i);r.a},c646:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"c85c"))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,"9270"))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,"4dd2"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.tiao?e.zjmoney.toFixed(2):null);e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[]},fcc7:function(e,t,n){"use strict";(function(e){n("c9dc");i(n("66fd"));var t=i(n("00a8"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["fcc7","common/runtime","common/vendor"]]]);