(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-FlagshipSuite/u-FlagshipSuite"],{941:function(t,e,n){"use strict";n.r(e);var r=n(942),a=n(944);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n(946);var u,o=n(11),s=Object(o["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"3f2d3eb2",null,!1,r["components"],u);s.options.__file="uview-ui/components/u-FlagshipSuite/u-FlagshipSuite.vue",e["default"]=s.exports},942:function(t,e,n){"use strict";n.r(e);var r=n(943);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},943:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return r}));try{r={uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,728))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-empty/u-empty")]).then(n.bind(null,787))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c},i=!1,u=[];a._withStripped=!0},944:function(t,e,n){"use strict";n.r(e);var r=n(945),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},945:function(t,e,n){"use strict";(function(t){function n(t){return u(t)||i(t)||a(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return o(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"FlagshipSuite",props:{pages:{type:Number,default:1},currents:{type:Number,default:13}},data:function(){return{aas:0,list:[{id:0,name:""}],current:13,data_list:[],img:this.$imgPath,pagess:1}},watch:{pages:function(t){this.pagess=this.pages,this.quehuan(this.current)}},mounted:function(){this.current=this.currents,this.pagess=this.pages,this.alls()},methods:{alls:function(){var t=this;this.$api.setcategory().then((function(e){1==e.data.code&&(t.list=e.data.data.status,t.list.forEach((function(t){t["name"]=t.title})),t.quehuan(t.currents))}))},change:function(t){this.$emit("pageB",this.pagess),this.current=t,this.quehuan(t),this.data_list=[]},checks:function(){this.$emit("pageA",this.pagess)},quehuan:function(t){var e=this;this.$api.qjset({setid:t,page:this.pagess,limit:10}).then((function(t){1==t.data.code&&(0!=t.data.data.status.data.length?e.data_list=[].concat(n(e.data_list),n(t.data.data.status.data)):e.checks())}))},topage:function(e){t.navigateTo({url:"./FlagshipDetail?id="+e.id})}}};e.default=s}).call(this,n(1)["default"])},946:function(t,e,n){"use strict";n.r(e);var r=n(947),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},947:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-FlagshipSuite/u-FlagshipSuite.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-FlagshipSuite/u-FlagshipSuite-create-component',
    {
        'uview-ui/components/u-FlagshipSuite/u-FlagshipSuite-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(941))
        })
    },
    [['uview-ui/components/u-FlagshipSuite/u-FlagshipSuite-create-component']]
]);
