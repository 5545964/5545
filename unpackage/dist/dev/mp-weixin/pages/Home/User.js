(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/User"],{100:function(e,t,n){"use strict";(function(e){n(5);a(n(3));var t=a(n(101));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},101:function(e,t,n){"use strict";n.r(t);var a=n(102),s=n(104);for(var i in s)"default"!==i&&function(e){n.d(t,e,(function(){return s[e]}))}(i);n(106);var r,o=n(11),u=Object(o["default"])(s["default"],a["render"],a["staticRenderFns"],!1,null,"1197255c",null,!1,a["components"],r);u.options.__file="pages/Home/User.vue",t["default"]=u.exports},102:function(e,t,n){"use strict";n.r(t);var a=n(103);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},103:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return s})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return a}));try{a={uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,680))},uLogins:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-logins/u-logins")]).then(n.bind(null,689))},uDianji:function(){return n.e("uview-ui/components/u-dianji/u-dianji").then(n.bind(null,721))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,t=e.$createElement;e._self._c},i=!1,r=[];s._withStripped=!0},104:function(e,t,n){"use strict";n.r(t);var a=n(105),s=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=s.a},105:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(20));function s(e){return e&&e.__esModule?e:{default:e}}function i(e){return c(e)||u(e)||o(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function u(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t,n,a,s,i,r){try{var o=e[i](r),u=o.value}catch(c){return void n(c)}o.done?t(u):Promise.resolve(u).then(a,s)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function r(e){f(i,a,s,r,o,"next",e)}function o(e){f(i,a,s,r,o,"throw",e)}r(void 0)}))}}var g={data:function(){return{qiangzhishuaxin:0,qeihuan:"切换设计师",zhanleixin:!1,showssss:!1,fkjsfjdisfjsl:!1,user_info_id:"",img:this.$imgPath,user_info:"",num_list:["","","","",""],gongju_list:[{name:"收货地址",url:"../pagesA/gongju0"},{name:"我的收藏",url:"../pagesA/gongju1"},{name:"我的关注",url:"../pagesA/gongju2"},{name:"我的足迹",url:"../pagesA/gongju3"},{name:"我的优惠券",url:"../pagesA/gongju4"},{name:"我的佣金",url:"../pagesD/designyongjin"},{name:"安装评价",url:"../pagesA/gongju6"},{name:"产品评价",url:"../pagesA/gongju7"},{name:"站内信息",url:"../pagesA/gongju8"},{name:"我的售后",url:"../pagesA/gongju9"},{name:"我的报装",url:"../pagesA/gongju10"},{name:"我的团队",url:"../pagesA/gongju11"},{name:"预约记录",url:"../pagesA/gongju12"}],list:[{id:1,name:"待发货"},{id:2,name:"发货中"},{id:3,name:"已收货"},{id:4,name:"报装中"},{id:5,name:"已安装"}],des_user:"",mobanid:["qFe_Sxyot4g5R2qJhpo5ECIp6TvRjYFY3g-WIVAgjXU"]}},onShow:function(){this.qiangzhishuaxin=0,this.alls(),this.showssss=e.getStorageSync("showssss")},onPullDownRefresh:function(){var t=this;this.qiangzhishuaxin++,this.qiangzhishuaxin>e.getStorageSync("sx")?(e.clearStorageSync(),setTimeout((function(){t.$api.indexbar().then((function(n){if(1==n.data.code){var a=[];if(n.data.data.status.forEach((function(e){a.push({pagePath:e.url.url,iconPath:t.$imgPath+e.fimage,selectedIconPath:t.$imgPath+e.image,text:e.title})})),e.setStorageSync("tabber",a),e.setStorageSync("edits",n.data.data.edits),e.setStorageSync("sx",n.data.data.sx),e.setStorageSync("kehu",n.data.data.kefu),e.getStorageSync("user_info"))return void e.setStorageSync("showssss",!1);e.setStorageSync("showssss",n.data.data.edit)}})),t.$api.agreements().then((function(t){1==t.data.code?(t.data.data.status.forEach((function(e){e["check"]=!1})),e.setStorageSync("xieyi",t.data.data.status)):e.setStorageSync("xieyi",[])}))}),100),e.reLaunch({url:"/pages/Home/start"})):this.alls()},methods:{kan:function(t){e.previewImage({urls:[t],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){},fail:function(e){}}})},kkkk:function(){e.getStorageSync("user_info")?this.showssss=!1:this.showssss=!0},alls:function(){var t=this;this.user_info=e.getStorageSync("user_info"),this.shuliang(this.user_info.id),this.$api.desmyuser({user_id:this.user_info.id}).then((function(n){1==n.data.code?(e.setStorageSync("des_info",n.data.data.myuser),t.qeihuan="切换设计师",t.des_user=n.data.data.myuser,e.stopPullDownRefresh()):(t.qeihuan="成为设计师",e.setStorageSync("des_info",{}))}))},login:function(){var t=this;return l(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=5;break}t.user_info=e.getStorageSync("user_info"),t.shuliang(t.user_info.id);case 5:case"end":return n.stop()}}),n)})))()},denglu:function(){this.alls(),this.showssss=!1},budenglu:function(){this.showssss=!1},quxiao:function(e){var t=this.num_list;t[e]=0,this.num_list=i(t)},yidong:function(){this.system=e.getSystemInfoSync(),this.zhongjian=parseInt(this.system.screenWidth/2);var t=parseInt(this.system.screenHeight/(e.upx2px(100)/100)),n=parseInt((e.getStorageSync("bottomheigth")+e.getStorageSync("setheigth"))/(e.upx2px(100)/100));this.px=parseInt(e.upx2px(90)),this.px=parseInt(this.px/(e.upx2px(100)/100)),this.widthwidth=parseInt(this.system.windowWidth/(e.upx2px(100)/100))-this.px,this.tabberheigth=t-n-this.px-parseInt(e.getStorageSync("navbarheigth")/(e.upx2px(100)/100)),this.navbarheigth=0},shuliang:function(t){var n=this;this.$api.letter({user_id:e.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&(t.data.data.status.length>e.getStorageSync("letter")?n.zhanleixin=!0:n.zhanleixin=!1)})),this.$api.activtz().then((function(t){1==t.data.code&&t.data.data.status.length>e.getStorageSync("activtz")&&(n.zhanleixin=!0)})),this.$api.mymake({user_id:e.getStorageSync("user_info").id,limit:1e3}).then((function(t){if(1==t.data.code){var a=e.getStorageSync("yuyuejilunum"),s=e.getStorageSync("yuyuele"),i=0;t.data.data.status.data.forEach((function(e){"1"==e.state&&(i+=1)})),t.data.data.status.data.length>a||i>s?n.fkjsfjdisfjsl=!0:n.fkjsfjdisfjsl=!1,e.stopPullDownRefresh()}})),this.$api.addressshow({id:e.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t){1==t.auto&&(e.setStorageSync("address",t),e.stopPullDownRefresh())}))})),this.$api.myuser({user_id:e.getStorageSync("user_info").id||0}).then((function(t){1==t.data.code&&(n.user_info=t.data.data.myuser,e.setStorageSync("user_info",t.data.data.myuser),e.stopPullDownRefresh())})),this.$api.myorder({user_id:e.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){var a=[0,0,0,0,0];t.data.data.status.forEach((function(e){if(0==e.score)switch(e.state){case"1":a[0]+=1;break;case"2":a[1]+=1;break;case"3":a[2]+=1;break;case"16":a[3]+=1;break;case"17":a[4]+=1;break;default:}})),n.num_list=[].concat(a)}else n.num_list=[0,0,0,0,0];e.stopPullDownRefresh()}))},gomy:function(){e.navigateTo({url:"../pagesB/my"})},gos:function(t){0==t?e.navigateTo({url:"../pagesB/card"}):1==t&&e.navigateTo({url:"../pagesB/erweima"})},shengfenzhuanqu:function(){var t=this;return l(a.default.mark((function n(){var s;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=5;break}s=t,e.requestSubscribeMessage({provider:"weixin",tmplIds:s.mobanid,complete:function(t){e.navigateTo({url:"../pagesB/shengfen"})}});case 5:case"end":return n.stop()}}),n)})))()},changeDesign:function(){var t=this;return l(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$login();case 2:if(!n.sent){n.next=4;break}e.navigateTo({url:"../pagesD/designPage/designPage"});case 4:case"end":return n.stop()}}),n)})))()},go:function(t){var n=this;return l(a.default.mark((function s(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}e.navigateTo({url:"../pagesB/dindan?title="+t.name+"&current="+t.id});case 4:case"end":return a.stop()}}),s)})))()},gongju_go:function(t,n){var s=this;return l(a.default.mark((function i(){var r;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(t,n),a.next=3,s.$login();case 3:if(!a.sent){a.next=5;break}"../pagesD/designyongjin"==t||"../pagesD/peixun"==t?(r=s,e.requestSubscribeMessage({provider:"weixin",tmplIds:r.mobanid,complete:function(a){e.navigateTo({url:t+"?title="+n})}})):e.navigateTo({url:t+"?title="+n});case 5:case"end":return a.stop()}}),i)})))()}}};t.default=g}).call(this,n(1)["default"])},106:function(e,t,n){"use strict";n.r(t);var a=n(107),s=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=s.a},107:function(e,t,n){}},[[100,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/User.js.map