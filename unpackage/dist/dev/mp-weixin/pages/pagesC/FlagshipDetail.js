(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/FlagshipDetail"],{140:function(t,e,n){"use strict";n.r(e);var a=n(141),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},141:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n(4));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,i,r,s){try{var o=t[r](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(a,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var s=t.apply(e,n);function o(t){r(s,a,i,o,u,"next",t)}function u(t){r(s,a,i,o,u,"throw",t)}o(void 0)}))}}function o(t){return d(t)||l(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var h={data:function(){return{heigthss:1e4,shouzhi:t.getStorageSync("shouzhi"),img:this.$imgPath,current:"",desInfo:{},video:"",vr_image:"",xq_img:[],xq:[],alls:{},title:"详情",list:[],active:0,leftlist:[],shenme_id:"",heigths:580}},onLoad:function(t){this.shenme_id=t.id},onShow:function(){var e=this;this.allss(this.shenme_id),this.$api.setleft({setleft_id:this.shenme_id}).then((function(n){1==n.data.code&&(e.leftlist=o(n.data.data.status),setTimeout((function(){var n=t.createSelectorQuery().in(e);n.select("#mianleft").boundingClientRect((function(t){})).exec()}),1e3))}))},methods:{dianjishouzhi:function(){this.shouzhi=1,t.setStorageSync("shouzhi",1)},goshop:function(e){t.navigateTo({url:"./Shopping?shopid="+e})},kaniamg:function(e){var n=[e];t.previewImage({urls:n,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},pinglun:function(e){var n=this;return s(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}t.navigateTo({url:"./ClubStar?id="+e.id});case 4:case"end":return a.stop()}}),i)})))()},xuanxinxin:function(e){var n=this;return s(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}n.$api.star({user_id:t.getStorageSync("user_info").id,des_id:e.id,star:e.star}).then((function(e){t.showToast({title:e.data.msg,duration:1e3,icon:"none"})}));case 4:case"end":return a.stop()}}),i)})))()},dianzhan:function(e){var n=this;return s(a.default.mark((function i(){var r;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=6;break}r="",r=null!=e.zans&&""!=e.zans?1:0,n.$api.zan({type:r,user_id:t.getStorageSync("user_info").id,video_id:e.id,state:1}).then((function(t){1==t.data.code&&n.allss(n.shenme_id)}));case 6:case"end":return a.stop()}}),i)})))()},guanzhu:function(e){var n=this;return s(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}n.$api.desfollow({user_id:t.getStorageSync("user_info").id,tes_id:e.id}).then((function(e){t.showToast({title:e.data.msg,duration:1e3,icon:"success"}),1==e.data.code&&n.allss(n.shenme_id)}));case 4:case"end":return a.stop()}}),i)})))()},desDetails:function(e){var n=this;console.log(e,11111111111),this.$api.desxq({id:e,user_id:t.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&(n.desInfo=[],n.desInfo=t.data.data.status)}))},goVR:function(e){var n=this;return s(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}t.navigateTo({url:"../Home/URL/URL?url="+e.url});case 4:case"end":return a.stop()}}),i)})))()},gosheji:function(){var e=this;return s(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$login();case 2:if(!n.sent){n.next=4;break}t.navigateTo({url:"../Home/booking/AppointmentDesign"});case 4:case"end":return n.stop()}}),n)})))()},allss:function(e){var n=this;this.$api.setxq({id:e}).then((function(e){if(1==e.data.code){var a;n.alls=e.data.data.status,n.xq=e.data.data.status.xq,n.title=e.data.data.status.name,setTimeout((function(){n.change(0)}),1e3);var i=n.alls.image.split(","),r=[],s=n.$imgPath;i.forEach((function(t){r.push(s+t)})),n.list=[],(a=n.list).push.apply(a,r),""!=e.data.data.status.vrimage&&null!=e.data.data.status.vrimage&&(n.vr_image=n.$imgPath+e.data.data.status.vrimage),""!=e.data.data.status.video&&null!=e.data.data.status.video&&(n.video=n.$imgPath+e.data.data.status.video)}else t.showToast({title:"暂无数据",duration:1e3,icon:"none"}),setTimeout((function(){t.navigateTo(-1)}),1e3)}))},qeihuan:function(t){this.xq_img=[],this.xq_img=o(t)},change:function(t){var e=this;if(this.active=t,0==t||1==t)this.desDetails(this.alls.designer);else{var n=[];this.alls.xq.forEach((function(a){e.leftlist[t].id==a.leftid&&n.push(a)})),this.qeihuan(n)}},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}}}};e.default=h}).call(this,n(0)["default"])},142:function(t,e,n){},243:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,738))},uDesignDet:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-designDet/u-designDet")]).then(n.bind(null,767))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null,744))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];i._withStripped=!0},452:function(t,e,n){"use strict";(function(t){n(3);a(n(2));var e=a(n(453));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(0)["createPage"])},453:function(t,e,n){"use strict";n.r(e);var a=n(243),i=n(140);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n(454);var s,o=n(1),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);u.options.__file="pages/pagesC/FlagshipDetail.vue",e["default"]=u.exports},454:function(t,e,n){"use strict";var a=n(142),i=n.n(a);i.a}},[[452,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesC/FlagshipDetail.js.map