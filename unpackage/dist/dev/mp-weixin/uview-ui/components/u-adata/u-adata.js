(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-adata/u-adata"],{656:function(t,n,e){"use strict";e.r(n);var r=e(657),u=e(659);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e(661);var i,o=e(11),c=Object(o["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"4a6abaa8",null,!1,r["components"],i);c.options.__file="uview-ui/components/u-adata/u-adata.vue",n["default"]=c.exports},657:function(t,n,e){"use strict";e.r(n);var r=e(658);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},658:function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return u})),e.d(n,"staticRenderFns",(function(){return i})),e.d(n,"recyclableRender",(function(){return a})),e.d(n,"components",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=!1,i=[];u._withStripped=!0},659:function(t,n,e){"use strict";e.r(n);var r=e(660),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},660:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"u-adata",props:{list:{type:Array},height:{type:Number,default:70}},data:function(){return{imgPath:this.$imgPath}},methods:{xuanzhong:function(t){this.$emit("click",t)},playing:function(n){var e=this,r=n.currentTarget.id;e.videoContent=t.createVideoContext(r);var u=e.list;u.forEach((function(n,u){if(null!=n.video&&""!=n.video){var a="video"+n.id;a!=r&&t.createVideoContext(a,e).pause()}}))}}};n.default=e}).call(this,e(1)["default"])},661:function(t,n,e){"use strict";e.r(n);var r=e(662),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},662:function(t,n,e){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-adata/u-adata.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-adata/u-adata-create-component',
    {
        'uview-ui/components/u-adata/u-adata-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(656))
        })
    },
    [['uview-ui/components/u-adata/u-adata-create-component']]
]);
