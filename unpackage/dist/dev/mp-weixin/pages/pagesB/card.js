(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/card"],{343:function(t,e,n){"use strict";(function(t){n(5);a(n(3));var e=a(n(344));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},344:function(t,e,n){"use strict";n.r(e);var a=n(345),i=n(347);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n(349);var u,o=n(11),r=Object(o["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"3de20918",null,!1,a["components"],u);r.options.__file="pages/pagesB/card.vue",e["default"]=r.exports},345:function(t,e,n){"use strict";n.r(e);var a=n(346);n.d(e,"render",(function(){return a["render"]})),n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(e,"components",(function(){return a["components"]}))},346:function(t,e,n){"use strict";var a;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return s})),n.d(e,"components",(function(){return a}));try{a={uSwiper:function(){return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null,874))},uAdata:function(){return n.e("uview-ui/components/u-adata/u-adata").then(n.bind(null,662))},uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,648))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement;t._self._c},s=!1,u=[];i._withStripped=!0},347:function(t,e,n){"use strict";n.r(e);var a=n(348),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},348:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{backsss:this.$imgPath+"/uploads/20220221/7999ee50b489c9084c7861cc5192a74f.jpg",tuijian:[],imgList:[],rinima:[],imgtitle:this.$imgPath,userinfo:"",list:{},background:{background:""},title:"电子名片",state:0,cardinfo:{},desinfo:{},ewmsrc:"",latitude:30.602673,longitude:103.975896}},onLoad:function(e){var n=this;e.title&&(this.title=e.title),this.state=1,e.state&&(this.state=e.state),this.getcard(),this.userinfo=t.getStorageSync("user_info"),this.rinima.push(this.userinfo.mobile),this.rinima.push(this.userinfo.email),this.rinima.push(this.userinfo.wechat),this.rinima.push("导航到我的公司！"),this.$api.setcategory().then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t){null!=t.image&&""!=t.image&&n.imgList.push({image:n.$imgPath+t.image,id:t.id})}))})),this.$api.indexcontent().then((function(t){1==t.data.code?(t.data.data.status.sort((function(){return Math.random()-.5})),n.tuijian=[],t.data.data.status.forEach((function(t,e){e<=1&&n.tuijian.push({id:t.id,title:t.name,image:t.image,video:"",alls:t})}))):n.data_list=[]})),this.$api.ewm({id:t.getStorageSync("user_info").id,level:t.getStorageSync("des_info").bbs.id||0}).then((function(t){1==t.data.code&&(n.ewmsrc=t.data.data.status,t.data.data.status.longitude&&t.data.data.status.latitude&&(n.longitude=t.data.data.status.longitude,n.latitude=t.data.data.status.latitude))}))},methods:{kan:function(e){t.previewImage({urls:[e],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},goss:function(e){t.navigateTo({url:"../pagesC/FlagshipSet?id="+this.imgList[e].id})},go_shop:function(e){t.navigateTo({url:"../pagesC/FlagshipDetail?id="+e.id})},getcard:function(){var t=this;this.$api.business({state:this.state}).then((function(e){1==e.data.code&&(t.cardinfo=e.data.data.status)}))},gohome:function(){t.reLaunch({url:"/pages/Home/Home"})},go:function(){var e=this;t.openLocation({latitude:Number(e.latitude),longitude:Number(e.longitude),name:"宝芸邸生活家具(成都体验中心)",address:"四川省成都市武侯区成双大道585号旭耀鞋业4栋",success:function(){},fail:function(t){}})},copy:function(e,n){0==n?t.makePhoneCall({phoneNumber:e,success:function(t){},fail:function(t){}}):n==this.rinima.length-1?this.go():t.setClipboardData({data:e.toString(),success:function(){}})},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=n}).call(this,n(1)["default"])},349:function(t,e,n){"use strict";n.r(e);var a=n(350),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},350:function(t,e,n){}},[[343,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/card.js.map