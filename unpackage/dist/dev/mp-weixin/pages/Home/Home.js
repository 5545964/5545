(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Home"],{68:function(t,e,n){"use strict";(function(t){n(5);a(n(3));var e=a(n(69));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},69:function(t,e,n){"use strict";n.r(e);var a=n(70),i=n(72);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n(74);var s,r=n(11),u=Object(r["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"2bc86734",null,!1,a["components"],s);u.options.__file="pages/Home/Home.vue",e["default"]=u.exports},70:function(t,e,n){"use strict";n.r(e);var a=n(71);n.d(e,"render",(function(){return a["render"]})),n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(e,"components",(function(){return a["components"]}))},71:function(t,e,n){"use strict";var a;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,659))},uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,666))},uAdata:function(){return n.e("uview-ui/components/u-adata/u-adata").then(n.bind(null,673))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,680))},uLogins:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-logins/u-logins")]).then(n.bind(null,689))},uBackTop:function(){return n.e("uview-ui/components/u-back-top/u-back-top").then(n.bind(null,714))},uDianji:function(){return n.e("uview-ui/components/u-dianji/u-dianji").then(n.bind(null,721))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement;t._self._c},o=!1,s=[];i._withStripped=!0},72:function(t,e,n){"use strict";n.r(e);var a=n(73),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},73:function(t,e,n){"use strict";(function(t){function n(t){return s(t)||o(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return r(t)}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{scrollTop:0,zhongjian:0,system:0,px:0,widthwidth:0,tabberheigth:0,navbarheigth:0,navbar:0,videoContext:"",autoplay:!0,showssss:!1,current:0,show:!1,data_list:[],lun_list:[],keyword:"",list:[],imgurl:this.$imgPath,imgsss:'<img src="'+this.$imgPath,xinxi:[]}},onLoad:function(e){var n=t.getSystemInfoSync();t.setStorageSync("bottomheigth",n.safeAreaInsets.bottom)},onShow:function(e){var n=this;t.setStorageSync("yanzheng",!0),t.setStorageSync("shouzhi",0),this.$api.pots({limit:1e3}).then((function(t){1==t.data.code&&(t.data.data.status.data.forEach((function(t){t.content=t.content.replace(/\<img src=\"/gi,n.imgsss)})),n.xinxi=t.data.data.status.data)})),this.budenglugengxin(),this.alls()},onPullDownRefresh:function(){this.budenglugengxin(),this.alls()},onPageScroll:function(t){this.scrollTop=t.scrollTop},methods:{budenglugengxin:function(){this.showssss=t.getStorageSync("showssss"),t.createSelectorQuery().in(this).select("#navbar").boundingClientRect((function(e){t.setStorageSync("navbarheigth",e.height)})).exec(),this.$api.shopcart({id:t.getStorageSync("user_info").id}).then((function(e){var n=0;1==e.data.code&&e.data.data.status.forEach((function(t){n+=1})),n>=99&&(n="..."),t.setStorageSync("cart_num",n)})),this.$api.addressshow({id:t.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&e.data.data.status.forEach((function(e){1==e.auto&&(t.setStorageSync("address",e),t.stopPullDownRefresh())}))})),1==t.getStorageSync("user_info_login")&&(t.getStorageSync("user_info")&&t.setStorageSync("user_info_login",2),this.$api.mymake({user_id:t.getStorageSync("user_info").id,limit:1e3}).then((function(e){if(1==e.data.code){var n=0;e.data.data.status.data.forEach((function(t){"1"==t.state&&(n+=1)})),t.setStorageSync("yuyuejilunum",e.data.data.status.data.length),t.setStorageSync("yuyuele",n)}})),this.$api.letter({user_id:t.getStorageSync("user_info").id}).then((function(e){1==e.data.code&&t.setStorageSync("letter",e.data.data.status.length)})),this.$api.activtz().then((function(e){1==e.data.code&&t.setStorageSync("activtz",e.data.data.status.length)})))},denglu:function(){this.budenglugengxin()},budenglu:function(){t.setStorageSync("showssss",!1)},ended:function(t){this.autoplay=!0},pause:function(t){this.autoplay=!0},bofang:function(t){this.autoplay=!1},gaizhi:function(t){this.current=t.detail.current,t.detail.current==this.lun_list.length-1||this.videoContext.pause()},linkOthers:function(e){t.navigateTo({url:"./URL/URL?url="+e})},lunbochang:function(){var t=this.lun_list[this.current];this.gosss(t)},gosss:function(e){switch(console.log(e),Number(e.link)){case 0:""!=e.head?this.linkOthers(e.head):t.previewImage({urls:[this.imgurl+e.image],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}});break;case 1:t.navigateTo({url:"../pagesC/Shopping?shopid="+e.shopid});break;case 2:t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;case 4:t.navigateTo({url:"../pagesC/youhuijuan?id="+e.cupons});break;case 5:var n={};this.xinxi.forEach((function(t){t.id==e.wz&&(n=t)})),""==e.wz?t.reLaunch({url:"./About?titit=0"}):(t.setStorageSync("fuwenbeng",n.content),t.navigateTo({url:"../pagesC/fuwenben?title="+n.title}));break;default:}},go_shop:function(e){if(""!=e.alls.video&&null!=e.alls.video)return!0;switch(Number(e.alls.link)){case 0:""!=e.alls.head?this.linkOthers(e.alls.head):t.previewImage({urls:[this.$imgPath+e.image],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}});break;case 1:t.navigateTo({url:"../pagesC/Shopping?shopid="+e.alls.shopid});break;case 2:t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.alls.tc});break;case 3:t.switchTab({url:"/pages/Home/About"});break;case 4:t.navigateTo({url:"../pagesC/youhuijuan?id="+e.alls.cupons});break;default:}},seach_go:function(){t.navigateTo({url:"./search/search"})},go:function(e,n){t.navigateTo({url:e})},alls:function(){var e=this;this.$api.banner().then((function(n){if(1==n.data.code){e.lun_list=[];var a=[],i=Date.parse(new Date)/1e3;n.data.data.status.forEach((function(t){0==t.position&&t.endtime>i&&(t.video=e.$imgs(t.video),a.push(t))})),e.lun_list=a,t.stopPullDownRefresh()}else e.lun_list=[]})),this.$api.indexcontent().then((function(n){1==n.data.code?(e.data_list=[],n.data.data.status.forEach((function(t,n){""!=t.video&&null!=t.video?e.data_list.push({id:t.id,title:t.name,image:"",video:e.$imgs(t.video),alls:t}):e.data_list.push({id:t.id,title:t.name,image:t.image,video:"",alls:t})})),t.stopPullDownRefresh()):e.data_list=[]})),this.$api.shopicon().then((function(a){if(1==a.data.code){var i={shop:[],home:[],wanghong:[]};a.data.data.data.forEach((function(t){0==t.state&&i.shop.push(t),1==t.state&&i.home.push(t),2==t.state&&i.wanghong.push(t)}));var o=0;i.wanghong.forEach((function(e){1==e.switch&&0==o&&(o++,t.setStorageSync("ggug",e.id))})),0==o&&t.setStorageSync("ggug",0),e.list=n(i.home),t.setStorageSync("icon",i)}})),this.videoContext=t.createVideoContext("video")},islogin:function(e){t.setStorageSync("showssss",e.data.data.edit),t.setStorageSync("edits",e.data.data.edits),t.setStorageSync("kehu",e.data.data.kefu),this.showssss=e.data.data.edit,t.getStorageSync("user_info")&&(this.showssss=!1)},yidong:function(){t.createSelectorQuery().in(this).select("#navbar").boundingClientRect((function(e){t.setStorageSync("navbarheigth",e.height)})).exec(),this.system=t.getSystemInfoSync(),this.zhongjian=parseInt(this.system.screenWidth/2);var e=parseInt(this.system.screenHeight/(t.upx2px(100)/100)),n=parseInt((t.getStorageSync("bottomheigth")+t.getStorageSync("setheigth"))/(t.upx2px(100)/100));this.px=parseInt(t.upx2px(90)),this.px=parseInt(this.px/(t.upx2px(100)/100)),this.widthwidth=parseInt(this.system.windowWidth/(t.upx2px(100)/100))-this.px,this.tabberheigth=e-n-this.px,this.navbarheigth=parseInt(t.getStorageSync("navbarheigth")/(t.upx2px(100)/100))}}};e.default=u}).call(this,n(1)["default"])},74:function(t,e,n){"use strict";n.r(e);var a=n(75),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},75:function(t,e,n){}},[[68,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Home/Home.js.map