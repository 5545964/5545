(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-FlagshipSuite/u-FlagshipSuite"],{605:function(t,n,e){"use strict";e.r(n);var i=e(606),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},606:function(t,n,e){"use strict";(function(t){function e(t){return r(t)||a(t)||o(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={name:"FlagshipSuite",data:function(){return{list:[],current:0,data_list:[],img:this.$imgPath}},mounted:function(){this.alls()},methods:{alls:function(){var t=this;this.$api.setcategory().then((function(n){1==n.data.code&&(t.list=n.data.data.status,t.list.forEach((function(t){t["name"]=t.title})),t.quehuan(t.list[0].id))}))},change:function(t){this.current=t,this.quehuan(this.list[t].id)},quehuan:function(n){var i=this;this.$api.qjset({setid:n}).then((function(n){1==n.data.code?(i.data_list=[],i.data_list=e(n.data.data.status)):(i.data_list=[],t.showToast({title:"暂无数据",duration:1e3,icon:"none"}))}))},topage:function(n){console.log(n),t.navigateTo({url:"./FlagshipDetail?id="+n.id})}}};n.default=s}).call(this,e(0)["default"])},607:function(t,n,e){},679:function(t,n,e){"use strict";var i=e(607),o=e.n(i);o.a},722:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));try{i={uTabs:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-tabs/u-tabs")]).then(e.bind(null,743))},uEmpty:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-empty/u-empty")]).then(e.bind(null,747))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];o._withStripped=!0},765:function(t,n,e){"use strict";e.r(n);var i=e(722),o=e(605);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e(679);var r,u=e(1),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"3f2d3eb2",null,!1,i["a"],r);s.options.__file="uview-ui/components/u-FlagshipSuite/u-FlagshipSuite.vue",n["default"]=s.exports}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-FlagshipSuite/u-FlagshipSuite.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-FlagshipSuite/u-FlagshipSuite-create-component',
    {
        'uview-ui/components/u-FlagshipSuite/u-FlagshipSuite-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(765))
        })
    },
    [['uview-ui/components/u-FlagshipSuite/u-FlagshipSuite-create-component']]
]);
