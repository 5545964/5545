(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/peixun"],{634:function(t,e,n){"use strict";(function(t){n(5);i(n(3));var e=i(n(635));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},635:function(t,e,n){"use strict";n.r(e);var i=n(636),o=n(638);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(640);var a,u=n(11),s=Object(u["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"095d55c3",null,!1,i["components"],a);s.options.__file="pages/pagesD/peixun.vue",e["default"]=s.exports},636:function(t,e,n){"use strict";n.r(e);var i=n(637);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},637:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,642))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,742))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,735))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,814))},uTimeSelects:function(){return n.e("uview-ui/components/u-timeSelects/u-timeSelects").then(n.bind(null,980))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,663))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$u.timeFormat(t.datas,"yyyy-mm")),i=t.__map(t.monList,(function(e,n){var i=t.__get_orig(e),o=t.$u.timeFormat(e.createtime,"yyyy-mm-dd");return{$orig:i,g1:o}})),o=t.money.toFixed(2);t._isMounted||(t.e0=function(e){t.show=!1}),t.$mp.data=Object.assign({},{$root:{g0:n,l0:i,g2:o}})},r=!1,a=[];o._withStripped=!0},638:function(t,e,n){"use strict";n.r(e);var i=n(639),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},639:function(t,e,n){"use strict";(function(t){function n(t){return a(t)||r(t)||o(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{datas:Date.parse(new Date),monList:[],monLists:[],title:"我的佣金",show:!1,imgList:[],action:this.$shangchuan+"/api/byd_user/addpostspic",formData:{},time:{},money:0,mobanid:["qFe_Sxyot4g5R2qJhpo5ECIp6TvRjYFY3g-WIVAgjXU"]}},onLoad:function(t){t.title&&(this.title=t.title);var e=this.$u.timeFormat(this.datas,"yyyy-mm"),n=new Date(e.substr(0,e.length-3),e.substr(5)-1,1),i=new Date(e.substr(0,e.length-3),e.substr(5),0);this.time={start:Date.parse(n)/1e3,end:Date.parse(i)/1e3},this.getdata()},onShow:function(){this.money=0,this.$api.myuser({user_id:t.getStorageSync("user_info").id||0}).then((function(e){1==e.data.code&&(t.setStorageSync("user_info",e.data.data.myuser),t.stopPullDownRefresh())}))},methods:{tixians:function(t){var e=[];this.monLists.forEach((function(n){n.tixian==t&&e.push(n)})),this.monList=[].concat(e)},openDatetimePicker:function(){this.$refs.myPicker.show()},handleSubmit:function(t){var e=t.year+"-"+t.month;this.datas=e;var n=new Date(t.year,t.month-1,1),i=new Date(t.year,t.month,0);this.time={start:Date.parse(n)/1e3,end:Date.parse(i)/1e3},this.getdata()},tongyi:function(){var e=this,n=[];this.monList.forEach((function(t){n.push(t.id)})),this.$api.pxsq({user_id:t.getStorageSync("user_info").id,id:n,image:this.imgList}).then((function(n){1==n.data.code&&(e.show=!1),t.showToast({title:n.data.msg,icon:"none"})}))},asdfg:function(t){this.imgList.push(t.data.status)},deleteimg:function(t){this.imgList.splice(t,1)},peiun:function(){var e=this;t.requestSubscribeMessage({provider:"weixin",tmplIds:e.mobanid,complete:function(t){e.peiunshi()}})},peiunshi:function(){var e=this;this.$api.querysuccess({user_id:t.getStorageSync("user_info").id}).then((function(n){if(200==n.data.code&&(0==t.getStorageSync("user_info").rw?e.rw():e.show=!0),1!=n.data.code)return 0!=t.getStorageSync("user_info").freelance_id?e.show=!0:0==n.data.code?(t.showToast({title:"您未实名认证！",icon:"error",duration:1e3}),t.setStorageSync("delta",1),void setTimeout((function(){t.navigateTo({url:"../pagesA/shengfen"})}),1e3)):void 0;e.$api.contract({user_id:t.getStorageSync("user_info").id}).then((function(e){t.setStorageSync("bbghb",e.data.data.data),1==e.data.code&&t.navigateTo({url:"../Home/URL/URL?url=0"})}))}))},rw:function(){var e=this;this.$api.gettask({user_id:t.getStorageSync("user_info").id}).then((function(t){1!=t.data.code?e.rw():e.show=!0}))},getdata:function(){var e=this;this.$api.pxxr({user_id:t.getStorageSync("user_info").id,start:this.time.start,end:this.time.end}).then((function(t){1==t.data.code?(t.data.data.status.forEach((function(t){e.money=e.money+Number(t.price)})),e.money,e.monList=n(t.data.data.status),e.monLists=n(t.data.data.status)):(e.monList=[],e.monLists=[])}))},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=s}).call(this,n(1)["default"])},640:function(t,e,n){"use strict";n.r(e);var i=n(641),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},641:function(t,e,n){}},[[634,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesD/peixun.js.map