(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/start"],{"05e6":function(t,e,a){"use strict";(function(t){a("c9dc");n(a("66fd"));var e=n(a("3883"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=a,t(e.default)}).call(this,a("543d")["createPage"])},"1e3b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={onLoad:function(e){var a=this;e.url&&(this.path=e.url),this.videoContext=t.createVideoContext("video_play"),this.time=setTimeout((function(){a.ended()}),9500),setTimeout((function(){a.xianshi=!0}),3e3),this.$api.indexbar().then((function(e){if(1==e.data.code){var n=[];if(e.data.data.status.forEach((function(t){n.push({pagePath:t.url.url,iconPath:a.$imgPath+t.fimage,selectedIconPath:a.$imgPath+t.image,text:t.title})})),t.setStorageSync("tabber",n),t.setStorageSync("edits",e.data.data.edits),t.setStorageSync("kehu",e.data.data.kefu),t.getStorageSync("user_info"))return void t.setStorageSync("showssss",!1);t.setStorageSync("showssss",e.data.data.edit)}})),this.$api.agreements().then((function(e){1==e.data.code?(e.data.data.status.forEach((function(t){t["check"]=!1})),t.setStorageSync("xieyi",e.data.data.status)):t.setStorageSync("xieyi",[])}))},data:function(){return{xianshi:!1,time:"",videoContext:"",path:"",videosrc:"https://wawu-house.oss-cn-shenzhen.aliyuncs.com/api/77b0e5c3c6ee5f8174fa72bb3a399d4d9124e811.m4v"}},methods:{ended:function(){clearTimeout(this.time),this.videoContext.pause(),t.switchTab({url:"/pages/Home/Home"})}}};e.default=a}).call(this,a("543d")["default"])},2353:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},3883:function(t,e,a){"use strict";a.r(e);var n=a("2353"),i=a("5416");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("730c");var c,u=a("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"2fe24880",null,!1,n["a"],c);e["default"]=s.exports},5416:function(t,e,a){"use strict";a.r(e);var n=a("1e3b"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"730c":function(t,e,a){"use strict";var n=a("89cf"),i=a.n(n);i.a},"89cf":function(t,e,a){}},[["05e6","common/runtime","common/vendor"]]]);