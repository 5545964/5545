(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/FlagshipDetail"],{"4c6a":function(t,e,n){},"6f2a":function(t,e,n){"use strict";n.r(e);var a=n("9461"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"701a":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uDesignDet:function(){return n.e("uview-ui/components/u-designDet/u-designDet").then(n.bind(null,"bb08"))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,"9270"))}},i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"713b":function(t,e,n){"use strict";n.r(e);var a=n("701a"),i=n("6f2a");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b1b0");var u,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"42cfa4fc",null,!1,a["a"],u);e["default"]=s.exports},9461:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return c(t)||s(t)||o(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function f(t,e,n,a,i,r,u){try{var o=t[r](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(a,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function u(t){f(r,a,i,u,o,"next",t)}function o(t){f(r,a,i,u,o,"throw",t)}u(void 0)}))}}var h={data:function(){return{autoplay:!1,videoContext:"",desdesdesdesde:0,shouzhi:t.getStorageSync("shouzhi"),img:this.$imgPath,desInfo:{},video:"",vr_image:"",xq_img:[],xq:[],alls:{},title:"详情",list:[],active:0,leftlist:[],shenme_id:"",heigths:520,currents:0,scrollTop:0,oldScrollTop:0,current:0,menuHeight:0,menuItemHeight:0,itemId:"",tabbar:[],menuItemPos:[],arr:[],scrollRightTop:0,timer:null}},onLoad:function(e){this.shenme_id=e.id,this.allss(this.shenme_id),this.videoContext=t.createVideoContext("video")},onShow:function(){var t=this;this.getMenuItemTop(),setTimeout((function(){t.autoplay=!0}),5e3)},methods:{gaizhi:function(t){var e=this.alls.imagexq.length;""!=this.vr_image&&(e+=1),t.detail.current==e?this.videoContext.play():this.videoContext.pause()},ended:function(t){this.autoplay=!0},pause:function(t){this.autoplay=!0},bofang:function(t){this.autoplay=!1},dianjishouzhi:function(e){this.shouzhi=1,t.navigateTo({url:"./Shopping?shopid="+e.shop.id}),t.setStorageSync("shouzhi",0)},dianjishouzhis:function(e){this.shouzhi=1,t.setStorageSync("shouzhi",0)},goshop:function(e){t.navigateTo({url:"./Shopping?shopid="+e})},kaniamgss:function(e){if(0==e.jump){var n=[this.img+e.image];t.previewImage({urls:n,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})}else this.gosheji()},kaniamg:function(e){var n=[e];t.previewImage({urls:n,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},pinglun:function(e){var n=this;return d(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}t.navigateTo({url:"./ClubStar?id="+e.id});case 4:case"end":return a.stop()}}),i)})))()},xuanxinxin:function(e){var n=this;return d(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}n.$api.star({user_id:t.getStorageSync("user_info").id,des_id:e.id,star:e.star}).then((function(e){t.showToast({title:e.data.msg,duration:1e3,icon:"none"})}));case 4:case"end":return a.stop()}}),i)})))()},dianzhan:function(e){var n=this;return d(a.default.mark((function i(){var r;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=6;break}r="",r=null!=e.zans&&""!=e.zans?1:0,n.$api.zan({type:r,user_id:t.getStorageSync("user_info").id,video_id:e.id,state:1}).then((function(t){1==t.data.code&&(0==r?(n.desInfo.zan=n.desInfo.zan+1,n.desInfo.zans={name:"kkkkkkk"}):(n.desInfo.zan=n.desInfo.zan-1,n.desInfo.zans=null))}));case 6:case"end":return a.stop()}}),i)})))()},guanzhu:function(e){var n=this;return d(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}n.$api.desfollow({user_id:t.getStorageSync("user_info").id,tes_id:e.id}).then((function(e){t.showToast({title:e.data.msg,duration:1e3,icon:"none"}),1==e.data.code&&(0!=n.desInfo.follows?n.desInfo.follows=0:n.desInfo.follows=1)}));case 4:case"end":return a.stop()}}),i)})))()},desDetails:function(e){var n=this;this.$api.desxq({id:e,user_id:t.getStorageSync("user_info").id}).then((function(t){1==t.data.code&&(n.desInfo=[],n.desInfo=t.data.data.status,n.desdesdesdesde=1)}))},goVR:function(e){var n=this;return d(a.default.mark((function i(){return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$login();case 2:if(!a.sent){a.next=4;break}t.navigateTo({url:"../Home/URL/URL?url="+e.url});case 4:case"end":return a.stop()}}),i)})))()},gosheji:function(){var e=this;return d(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$login();case 2:if(!n.sent){n.next=4;break}t.navigateTo({url:"../Home/booking/AppointmentDesign"});case 4:case"end":return n.stop()}}),n)})))()},allss:function(e){var n=this;this.$api.setxq({id:e}).then((function(e){if(1==e.data.code){var a;n.title=e.data.data.status.name,e.data.data.status.xq.forEach((function(t){null!=t.fzb&&(t.fzb=t.fzb.split(",")),null!=t.pzb&&(t.pzb=t.pzb.split(",")),null!=t.vzb&&(t.vzb=t.vzb.split(","))})),n.alls=e.data.data.status;for(var i=e.data.data.left,u=e.data.data.status.xq,o=0;o<i.length;o++){if(i[o]["leftdata"]=[],i[o]["desdesdesdesde"]=0,1==i[o].id||2==i[o].id)if(""==n.alls.designer)for(var s=0;s<u.length;s++)i[o].id==u[s].leftid&&i[o].leftdata.push(u[s]);else n.desDetails(n.alls.designer),i[o].desdesdesdesde=1;if(1!=i[o].id)for(s=0;s<u.length;s++)i[o].id==u[s].leftid&&i[o].leftdata.push(u[s])}n.tabbar=r(i),n.xq=e.data.data.status.xq;var c=n.alls.image.split(","),l=[];c.forEach((function(t){l.push(n.$imgPath+t)})),n.list=[],(a=n.list).push.apply(a,l),""!=e.data.data.status.vrimage&&null!=e.data.data.status.vrimage&&(n.vr_image=e.data.data.status.vrimage),""!=e.data.data.status.video&&null!=e.data.data.status.video&&(n.video=n.$imgPath+e.data.data.status.video)}else t.showToast({title:"暂无数据",duration:1e3,icon:"none"}),setTimeout((function(){t.navigateTo(-1)}),1e3)}))},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}},swichMenu:function(t){var e=this;return d(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=e.arr.length){n.next=3;break}return n.next=3,e.getMenuItemTop();case 3:if(t!=e.current){n.next=5;break}return n.abrupt("return");case 5:e.scrollRightTop=e.oldScrollTop,e.$nextTick((function(){this.scrollRightTop=this.arr[t],this.current=t,this.leftMenuStatus(t)}));case 7:case"end":return n.stop()}}),n)})))()},getElRect:function(e,n){var a=this;new Promise((function(i,r){var u=t.createSelectorQuery().in(a);u.select("."+e).fields({size:!0},(function(t){t?(a[n]=t.height,i()):setTimeout((function(){a.getElRect(e)}),10)})).exec()}))},observer:function(){var e=this;return d(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.tabbar.map((function(n,a){var i=t.createIntersectionObserver(e);i.relativeTo(".right-box",{top:0}).observe("#item"+a,(function(t){if(t.intersectionRatio>0){var n=t.id.substring(4);e.leftMenuStatus(n)}}))}));case 1:case"end":return n.stop()}}),n)})))()},leftMenuStatus:function(t){var e=this;return d(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.current=t,0!=e.menuHeight&&0!=e.menuItemHeight){n.next=6;break}return n.next=4,e.getElRect("menu-scroll-view","menuHeight");case 4:return n.next=6,e.getElRect("u-tab-item","menuItemHeight");case 6:e.scrollTop=t*e.menuItemHeight+e.menuItemHeight/2-e.menuHeight/2;case 7:case"end":return n.stop()}}),n)})))()},getMenuItemTop:function(){var e=this;new Promise((function(n){var a=t.createSelectorQuery();a.selectAll(".class-item").boundingClientRect((function(t){t.length?t.forEach((function(a){e.arr.push(a.top.toFixed(2)-t[0].top.toFixed(2)),n()})):setTimeout((function(){e.getMenuItemTop()}),1e4)})).exec()}))},rightScroll:function(t){var e=this;return d(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.oldScrollTop=t.detail.scrollTop,0!=e.arr.length){n.next=4;break}return n.next=4,e.getMenuItemTop();case 4:if(!e.timer){n.next=6;break}return n.abrupt("return");case 6:if(e.menuHeight){n.next=9;break}return n.next=9,e.getElRect("menu-scroll-view","menuHeight");case 9:setTimeout((function(){e.timer=null;for(var n=t.detail.scrollTop+e.menuHeight/2,a=0;a<e.arr.length;a++){var i=e.arr[a],r=e.arr[a+1];if(!r||n>=i&&n<r)return void e.leftMenuStatus(a)}}),10);case 10:case"end":return n.stop()}}),n)})))()}}};e.default=h}).call(this,n("543d")["default"])},a54c:function(t,e,n){"use strict";(function(t){n("c9dc");a(n("66fd"));var e=a(n("713b"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},b1b0:function(t,e,n){"use strict";var a=n("4c6a"),i=n.n(a);i.a}},[["a54c","common/runtime","common/vendor"]]]);