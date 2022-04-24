(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-adata/u-adata"],{"16ef":function(t,n,a){"use strict";var e=a("8683"),u=a.n(e);u.a},"2aa0":function(t,n,a){"use strict";a.r(n);var e=a("f804"),u=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=u.a},"791a":function(t,n,a){"use strict";a.r(n);var e=a("ffa3"),u=a("2aa0");for(var i in u)"default"!==i&&function(t){a.d(n,t,(function(){return u[t]}))}(i);a("16ef");var r,o=a("f0c5"),f=Object(o["a"])(u["default"],e["b"],e["c"],!1,null,"0584a2ac",null,!1,e["a"],r);n["default"]=f.exports},8683:function(t,n,a){},f804:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"u-adata",props:{list:{type:Array},height:{type:Number,default:70}},data:function(){return{imgPath:this.$imgPath}},methods:{xuanzhong:function(t){this.$emit("click",t)},playing:function(n){var a=this,e=n.currentTarget.id;a.videoContent=t.createVideoContext(e);var u=a.list;u.forEach((function(n,u){if(null!=n.video&&""!=n.video){var i="video"+n.id;i!=e&&t.createVideoContext(i,a).pause()}}))}}};n.default=a}).call(this,a("543d")["default"])},ffa3:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return u})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var u=function(){var t=this,n=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-adata/u-adata-create-component',
    {
        'uview-ui/components/u-adata/u-adata-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("791a"))
        })
    },
    [['uview-ui/components/u-adata/u-adata-create-component']]
]);
