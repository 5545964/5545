(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-switch/u-switch"],{867:function(e,t,n){"use strict";n.r(t);var i=n(868),o=n(870);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(872);var u,a=n(11),c=Object(a["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"7cafa8c0",null,!1,i["components"],u);c.options.__file="uview-ui/components/u-switch/u-switch.vue",t["default"]=c.exports},868:function(e,t,n){"use strict";n.r(t);var i=n(869);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},869:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return i}));try{i={uLoading:function(){return n.e("uview-ui/components/u-loading/u-loading").then(n.bind(null,1030))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__get_style([e.switchStyle])),i=e.$u.addUnit(this.size),o=e.$u.addUnit(this.size);e.$mp.data=Object.assign({},{$root:{s0:n,g0:i,g1:o}})},r=!1,u=[];o._withStripped=!0},870:function(e,t,n){"use strict";n.r(t);var i=n(871),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},871:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-switch",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:50},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#ffffff"},value:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},data:function(){return{}},computed:{switchStyle:function(){var e={};return e.fontSize=this.size+"rpx",e.backgroundColor=this.value?this.activeColor:this.inactiveColor,e},loadingColor:function(){return this.value?this.activeColor:null}},methods:{onClick:function(){var t=this;this.disabled||this.loading||(this.vibrateShort&&e.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){t.$emit("change",t.value?t.activeValue:t.inactiveValue)})))}}};t.default=n}).call(this,n(1)["default"])},872:function(e,t,n){"use strict";n.r(t);var i=n(873),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},873:function(e,t,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-switch/u-switch.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-switch/u-switch-create-component',
    {
        'uview-ui/components/u-switch/u-switch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(867))
        })
    },
    [['uview-ui/components/u-switch/u-switch-create-component']]
]);
