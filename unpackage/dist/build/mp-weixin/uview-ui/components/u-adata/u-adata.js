(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-adata/u-adata"],{2062:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"2aa0":function(t,e,n){"use strict";n.r(e);var a=n("f804"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=u.a},"38ea":function(t,e,n){"use strict";var a=n("63ee"),u=n.n(a);u.a},"63ee":function(t,e,n){},"791a":function(t,e,n){"use strict";n.r(e);var a=n("2062"),u=n("2aa0");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("38ea");var r,o=n("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"cbded44a",null,!1,a["a"],r);e["default"]=c.exports},f804:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-adata",props:{list:{type:Array},height:{type:Number,default:70}},data:function(){return{imgPath:this.$imgPath}},methods:{xuanzhong:function(t){this.$emit("click",t)},playing:function(e){var n=this,a=e.currentTarget.id;n.videoContent=t.createVideoContext(a);var u=n.list;u.forEach((function(e,u){if(null!=e.video&&""!=e.video){var i="video"+e.id;i!=a&&t.createVideoContext(i,n).pause()}}))}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-adata/u-adata-create-component',
    {
        'uview-ui/components/u-adata/u-adata-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("791a"))
        })
    },
    [['uview-ui/components/u-adata/u-adata-create-component']]
]);
