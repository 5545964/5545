(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/gongju8"],{229:function(t,e,n){"use strict";(function(t){n(5);a(n(3));var e=a(n(230));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},230:function(t,e,n){"use strict";n.r(e);var a=n(231),i=n(233);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n(235);var u,o=n(32),s=Object(o["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"6b7438b3",null,!1,a["components"],u);s.options.__file="pages/pagesA/gongju8.vue",e["default"]=s.exports},231:function(t,e,n){"use strict";n.r(e);var a=n(232);n.d(e,"render",(function(){return a["render"]})),n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(e,"components",(function(){return a["components"]}))},232:function(t,e,n){"use strict";var a;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,632))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,701))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,804))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement;t._self._c},r=!1,u=[];i._withStripped=!0},233:function(t,e,n){"use strict";n.r(e);var a=n(234),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},234:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{data_list:[],data_lists:[],current:0,title:"站内信息",list:[{name:"系统消息"},{name:"活动通知"}]}},onLoad:function(t){t.title&&(this.title=t.title)},onShow:function(){var e=this;this.data_list=[],this.data_lists=[],this.$api.letter({user_id:t.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){t.setStorageSync("letter",n.data.data.status.length);var a=-1;n.data.data.status.forEach((function(t,i){i>0&&t.create_at.split(" ")[0]==n.data.data.status[i-1].create_at.split(" ")[0]?e.data_list[a].list.push({title:t.zt,text:t.content}):(e.data_list.push({time:t.create_at,list:[{title:t.zt,text:t.content}]}),a++)}))}})),this.$api.activtz().then((function(n){if(1==n.data.code){t.setStorageSync("activtz",n.data.data.status.length);var a=-1;n.data.data.status.forEach((function(t,i){i>0&&t.stime_text.split(" ")[0]==n.data.data.status[i-1].stime_text.split(" ")[0]?e.data_lists[a].list.push({title:t.name,text:t.content}):(e.data_lists.push({time:t.stime_text,list:[{title:t.name,text:t.content}]}),a++)}))}}))},methods:{go:function(e){t.navigateTo({url:"./xiangqing"})},gos:function(e){t.setStorageSync("fuwenben",e),t.navigateTo({url:"./xiangqing"})},change:function(t){this.current=t},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=n}).call(this,n(1)["default"])},235:function(t,e,n){"use strict";n.r(e);var a=n(236),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},236:function(t,e,n){}},[[229,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/gongju8.js.map