(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/hetong"],{195:function(e,t,n){"use strict";n.r(t);var o=n(196),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=a.a},196:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"相关合同",alls:[]}},onLoad:function(e){e.title&&(this.title=e.title)},onShow:function(){this.alls=[{type:"合同一",doc_url:this.$imgPath+e.getStorageSync("hetong")}]},methods:{kan:function(t){var n=t.doc_url;-1==n.indexOf("http")&&(n=this.$imgPath+n),e.downloadFile({url:n,success:function(t){var n=t.tempFilePath;e.openDocument({filePath:n,success:function(e){}})}})},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}}}};t.default=n}).call(this,n(0)["default"])},197:function(e,t,n){},262:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));try{o={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,738))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];a._withStripped=!0},508:function(e,t,n){"use strict";(function(e){n(3);o(n(2));var t=o(n(509));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(0)["createPage"])},509:function(e,t,n){"use strict";n.r(t);var o=n(262),a=n(195);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n(510);var c,r=n(1),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"155bd792",null,!1,o["a"],c);i.options.__file="pages/pagesD/hetong.vue",t["default"]=i.exports},510:function(e,t,n){"use strict";var o=n(197),a=n.n(o);a.a}},[[508,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesD/hetong.js.map