(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/fuwenben"],{"0d59":function(n,e,t){"use strict";t.r(e);var u=t("dd3d"),a=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,(function(){return u[n]}))}(r);e["default"]=a.a},1242:function(n,e,t){"use strict";t.r(e);var u=t("2838"),a=t("0d59");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("a386");var c,o=t("f0c5"),i=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"25478364",null,!1,u["a"],c);e["default"]=i.exports},2838:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return u}));var u={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,"452c"))},uParse:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-parse/u-parse")]).then(t.bind(null,"ac6a"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[]},8989:function(n,e,t){"use strict";(function(n){t("c9dc");u(t("66fd"));var e=u(t("1242"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"97a5":function(n,e,t){},a386:function(n,e,t){"use strict";var u=t("97a5"),a=t.n(u);a.a},dd3d:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{content:"",title:"富文本"}},onLoad:function(e){e.title&&(this.title=e.title);var t=n.getStorageSync("fuwenbeng");t&&(this.content=t)},methods:{back:function(e){switch(e){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=t}).call(this,t("543d")["default"])}},[["8989","common/runtime","common/vendor"]]]);