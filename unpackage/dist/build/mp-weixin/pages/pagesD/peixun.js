(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/peixun"],{"3ea8":function(t,e,n){"use strict";var i=n("9f4b"),a=n.n(i);a.a},"4c6a":function(t,e,n){"use strict";(function(t){n("c9dc");i(n("66fd"));var e=i(n("ee8c"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},8654:function(t,e,n){"use strict";(function(t){function n(t){return r(t)||o(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{datas:Date.parse(new Date),monList:[],monLists:[],title:"我的佣金",show:!1,imgList:[],action:this.$shangchuan+"/api/byd_user/addpostspic",formData:{},time:{},money:0,mobanid:["qFe_Sxyot4g5R2qJhpo5ECIp6TvRjYFY3g-WIVAgjXU"]}},onLoad:function(t){t.title&&(this.title=t.title);var e=this.$u.timeFormat(this.datas,"yyyy-mm"),n=new Date(e.substr(0,e.length-3),e.substr(5)-1,1),i=new Date(e.substr(0,e.length-3),e.substr(5),0);this.time={start:Date.parse(n)/1e3,end:Date.parse(i)/1e3},this.getdata()},onShow:function(){this.money=0,this.$api.myuser({user_id:t.getStorageSync("user_info").id||0}).then((function(e){1==e.data.code&&(t.setStorageSync("user_info",e.data.data.myuser),t.stopPullDownRefresh())}))},methods:{tixians:function(t){var e=[];this.monLists.forEach((function(n){n.tixian==t&&e.push(n)})),this.monList=[].concat(e)},openDatetimePicker:function(){this.$refs.myPicker.show()},handleSubmit:function(t){var e=t.year+"-"+t.month;this.datas=e;var n=new Date(t.year,t.month-1,1),i=new Date(t.year,t.month,0);this.time={start:Date.parse(n)/1e3,end:Date.parse(i)/1e3},this.getdata()},tongyi:function(){var e=this,n=[];this.monList.forEach((function(t){n.push(t.id)})),this.$api.pxsq({user_id:t.getStorageSync("user_info").id,id:n,image:this.imgList}).then((function(n){1==n.data.code&&(e.show=!1),t.showToast({title:n.data.msg,icon:"none"})}))},asdfg:function(t){this.imgList.push(t.data.status)},deleteimg:function(t){this.imgList.splice(t,1)},peiun:function(){var e=this;t.requestSubscribeMessage({provider:"weixin",tmplIds:e.mobanid,complete:function(t){e.peiunshi()}})},peiunshi:function(){var e=this;this.$api.querysuccess({user_id:t.getStorageSync("user_info").id}).then((function(n){if(200==n.data.code&&(0==t.getStorageSync("user_info").rw?e.rw():e.show=!0),1!=n.data.code)return 0!=t.getStorageSync("user_info").freelance_id?e.show=!0:0==n.data.code?(t.showToast({title:n.data.data.data,icon:"error",duration:1e3}),t.setStorageSync("delta",1),void setTimeout((function(){t.navigateTo({url:"../pagesA/shengfen"})}),1e3)):void 0;e.$api.contract({user_id:t.getStorageSync("user_info").id}).then((function(e){t.setStorageSync("bbghb",e.data.data.data),1==e.data.code&&t.navigateTo({url:"../Home/URL/URL?url=0"})}))}))},rw:function(){var e=this;this.$api.gettask({user_id:t.getStorageSync("user_info").id}).then((function(t){1!=t.data.code?e.rw():e.show=!0}))},getdata:function(){var e=this;this.$api.pxxr({user_id:t.getStorageSync("user_info").id,start:this.time.start,end:this.time.end}).then((function(t){1==t.data.code?(t.data.data.status.forEach((function(t){e.money=e.money+Number(t.price)})),e.money,e.monList=n(t.data.data.status),e.monLists=n(t.data.data.status)):(e.monList=[],e.monLists=[])}))},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=s}).call(this,n("543d")["default"])},"992f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"9f16"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"d62c"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"7ae7"))},uTimeSelects:function(){return n.e("uview-ui/components/u-timeSelects/u-timeSelects").then(n.bind(null,"b01c"))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,"4dd2"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$u.timeFormat(t.datas,"yyyy-mm")),i=t.__map(t.monList,(function(e,n){var i=t.__get_orig(e),a=t.$u.timeFormat(e.createtime,"yyyy-mm-dd");return{$orig:i,g1:a}}));t._isMounted||(t.e0=function(e){t.show=!1}),t.$mp.data=Object.assign({},{$root:{g0:n,l0:i}})},o=[]},"9f4b":function(t,e,n){},adcb:function(t,e,n){"use strict";n.r(e);var i=n("8654"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},ee8c:function(t,e,n){"use strict";n.r(e);var i=n("992f"),a=n("adcb");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3ea8");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"01896c24",null,!1,i["a"],r);e["default"]=s.exports}},[["4c6a","common/runtime","common/vendor"]]]);