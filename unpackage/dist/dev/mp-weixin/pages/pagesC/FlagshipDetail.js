(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/FlagshipDetail"],{410:function(e,t,n){"use strict";(function(e){n(5);a(n(3));var t=a(n(411));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},411:function(e,t,n){"use strict";n.r(t);var a=n(412),i=n(414);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n(416);var o,s=n(11),u=Object(s["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],o);u.options.__file="pages/pagesC/FlagshipDetail.vue",t["default"]=u.exports},412:function(e,t,n){"use strict";n.r(t);var a=n(413);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},413:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,600))},uDesignDet:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-designDet/u-designDet")]).then(n.bind(null,838))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null,644))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement;e._self._c},r=!1,o=[];i._withStripped=!0},414:function(e,t,n){"use strict";n.r(t);var a=n(415),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},415:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(26));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,i,r,o){try{var s=e[r](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(a,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function s(e){r(o,a,i,s,u,"next",e)}function u(e){r(o,a,i,s,u,"throw",e)}s(void 0)}))}}function s(e){return l(e)||d(e)||c(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return f(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h={data:function(){return{heigthss:1e4,shouzhi:e.getStorageSync("shouzhi"),img:this.$imgPath,current:"",desInfo:{},video:"",vr_image:"",xq_img:[],xq:[],alls:{},title:"详情",list:[],active:0,leftlist:[],shenme_id:"",heigths:580}},onLoad:function(e){this.shenme_id=e.id},onShow:function(){var t=this;this.allss(this.shenme_id),this.$api.setleft({setleft_id:this.shenme_id}).then((function(n){1==n.data.code&&(t.leftlist=s(n.data.data.status),setTimeout((function(){var n=e.createSelectorQuery().in(t);n.select("#descard").boundingClientRect((function(e){console.log(e.height),t.heigths=e.height})).exec()}),1e3))}))},methods:{dianjishouzhi:function(){this.shouzhi=1,e.setStorageSync("shouzhi",1)},goshop:function(t){e.navigateTo({url:"./Shopping?shopid="+t})},kaniamg:function(t){var n=[t];e.previewImage({urls:n,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){},fail:function(e){}}})},pinglun:function(t){var n=this;return o(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}e.navigateTo({url:"./ClubStar?id="+t.id});case 4:case"end":return a.stop()}}),i)})))()},xuanxinxin:function(t){var n=this;return o(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}n.$api.star({user_id:e.getStorageSync("user_info").id,des_id:t.id,star:t.star}).then((function(t){e.showToast({title:t.data.msg,duration:1e3,icon:"none"})}));case 4:case"end":return a.stop()}}),i)})))()},dianzhan:function(t){var n=this;return o(a.default.mark((function i(){var r;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=6;break}r="",r=null!=t.zans&&""!=t.zans?1:0,n.$api.zan({type:r,user_id:e.getStorageSync("user_info").id,video_id:t.id,state:1}).then((function(e){1==e.data.code&&(0==r?(n.desInfo.zan=n.desInfo.zan+1,n.desInfo.zans={name:"kkkkkkk"}):(n.desInfo.zan=n.desInfo.zan-1,n.desInfo.zans=null))}));case 6:case"end":return a.stop()}}),i)})))()},guanzhu:function(t){var n=this;return o(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}n.$api.desfollow({user_id:e.getStorageSync("user_info").id,tes_id:t.id}).then((function(t){e.showToast({title:t.data.msg,duration:1e3,icon:"none"}),1==t.data.code&&(0!=n.desInfo.follows?n.desInfo.follows=0:n.desInfo.follows=1)}));case 4:case"end":return a.stop()}}),i)})))()},desDetails:function(t){var n=this;console.log(t,11111111111),this.$api.desxq({id:t,user_id:e.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&(n.desInfo=[],n.desInfo=e.data.data.status)}))},goVR:function(t){var n=this;return o(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}e.navigateTo({url:"../Home/URL/URL?url="+t.url});case 4:case"end":return a.stop()}}),i)})))()},gosheji:function(){var t=this;return o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=4;break}e.navigateTo({url:"../Home/booking/AppointmentDesign"});case 4:case"end":return n.stop()}}),n)})))()},allss:function(t){var n=this;this.$api.setxq({id:t}).then((function(t){if(1==t.data.code){var a;n.alls=t.data.data.status,n.xq=t.data.data.status.xq,n.title=t.data.data.status.name,setTimeout((function(){n.change(0)}),1e3);var i=n.alls.image.split(","),r=[],o=n.$imgPath;i.forEach((function(e){r.push(o+e)})),n.list=[],(a=n.list).push.apply(a,r),""!=t.data.data.status.vrimage&&null!=t.data.data.status.vrimage&&(n.vr_image=n.$imgPath+t.data.data.status.vrimage),""!=t.data.data.status.video&&null!=t.data.data.status.video&&(n.video=n.$imgPath+t.data.data.status.video)}else e.showToast({title:"暂无数据",duration:1e3,icon:"none"}),setTimeout((function(){e.navigateTo(-1)}),1e3)}))},qeihuan:function(e){this.xq_img=[],this.xq_img=s(e)},change:function(e){var t=this;if(this.active=e,0==e||1==e)this.desDetails(this.alls.designer);else{var n=[];this.alls.xq.forEach((function(a){t.leftlist[e].id==a.leftid&&n.push(a)})),this.qeihuan(n)}},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=h}).call(this,n(1)["default"])},416:function(e,t,n){"use strict";n.r(t);var a=n(417),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},417:function(e,t,n){}},[[410,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/FlagshipDetail.js.map