(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/card"],{"2df0":function(t,a,i){"use strict";i.r(a);var e=i("9779"),n=i("72b4");for(var u in n)"default"!==u&&function(t){i.d(a,t,(function(){return n[t]}))}(u);i("4fe0");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"6f384afb",null,!1,e["a"],s);a["default"]=c.exports},"458d":function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{backsss:this.$imgPath+"/uploads/20220221/7999ee50b489c9084c7861cc5192a74f.jpg",tuijian:[],imgList:[],rinima:[],imgtitle:this.$imgPath,userinfo:"",list:{},background:{background:""},title:"电子名片",state:0,cardinfo:{},desinfo:{},ewmsrc:"",latitude:30.602673,longitude:103.975896}},onLoad:function(a){var i=this;a.title&&(this.title=a.title),this.state=1,a.state&&(this.state=a.state),this.getcard(),this.userinfo=t.getStorageSync("user_info"),this.rinima.push(this.userinfo.mobile),this.rinima.push(this.userinfo.email),this.rinima.push(this.userinfo.wechat),this.rinima.push("导航到我的公司！"),this.$api.setcategory().then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t){null!=t.image&&""!=t.image&&i.imgList.push({image:i.$imgPath+t.image,id:t.id})}))})),this.$api.qjset({setid:13,page:1,limit:10}).then((function(t){1==t.data.code&&(t.data.data.status.data.forEach((function(t){t.image=t.simage})),t.data.data.status.data.sort((function(){return Math.random()-.5})),i.tuijian=[t.data.data.status.data[0],t.data.data.status.data[1]])})),this.$api.ewm({id:t.getStorageSync("user_info").id,level:t.getStorageSync("des_info").bbs.id||0}).then((function(t){1==t.data.code&&(i.ewmsrc=t.data.data.status,t.data.data.status.longitude&&t.data.data.status.latitude&&(i.longitude=t.data.data.status.longitude,i.latitude=t.data.data.status.latitude))}))},methods:{kan:function(a){t.previewImage({urls:[a],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},goss:function(a){console.log(a),t.navigateTo({url:"../pagesC/FlagshipSet?id="+this.imgList[a].id})},go_shop:function(a){t.navigateTo({url:"../pagesC/FlagshipDetail?id="+a.id})},getcard:function(){var t=this;this.$api.business({state:this.state}).then((function(a){1==a.data.code&&(t.cardinfo=a.data.data.status)}))},gohome:function(){t.reLaunch({url:"/pages/Home/Home"})},go:function(){var a=this;console.log(a.latitude,a.longitude,Number(a.latitude),Number(a.longitude)),t.openLocation({latitude:Number(a.latitude),longitude:Number(a.longitude),name:"宝芸邸生活家具(成都体验中心)",address:"四川省成都市武侯区成双大道585号旭耀鞋业4栋",success:function(){},fail:function(t){}})},copy:function(a,i){0==i?t.makePhoneCall({phoneNumber:a,success:function(t){},fail:function(t){}}):i==this.rinima.length-1?this.go():t.setClipboardData({data:a.toString(),success:function(){}})},back:function(a){switch(a){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};a.default=i}).call(this,i("543d")["default"])},"4fe0":function(t,a,i){"use strict";var e=i("ab8a"),n=i.n(e);n.a},"72b4":function(t,a,i){"use strict";i.r(a);var e=i("458d"),n=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(a,t,(function(){return e[t]}))}(u);a["default"]=n.a},9779:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return u})),i.d(a,"a",(function(){return e}));var e={uSwiper:function(){return i.e("uview-ui/components/u-swiper/u-swiper").then(i.bind(null,"0d37"))},uAdata:function(){return i.e("uview-ui/components/u-adata/u-adata").then(i.bind(null,"791a"))},uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,"452c"))}},n=function(){var t=this,a=t.$createElement;t._self._c},u=[]},ab8a:function(t,a,i){},e091:function(t,a,i){"use strict";(function(t){i("c9dc");e(i("66fd"));var a=e(i("2df0"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(a.default)}).call(this,i("543d")["createPage"])}},[["e091","common/runtime","common/vendor"]]]);