(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-video/u-video"],{769:function(t,n,e){"use strict";e.r(n);var i=e(770),r=e(772);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e(774);var u,s=e(11),c=Object(s["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"385956f0",null,!1,i["components"],u);c.options.__file="uview-ui/components/u-video/u-video.vue",n["default"]=c.exports},770:function(t,n,e){"use strict";e.r(n);var i=e(771);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},771:function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return u})),e.d(n,"recyclableRender",(function(){return o})),e.d(n,"components",(function(){return i}));var r=function(){var t=this,n=t.$createElement;t._self._c},o=!1,u=[];r._withStripped=!0},772:function(t,n,e){"use strict";e.r(n);var i=e(773),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a},773:function(t,n,e){"use strict";(function(t){function e(t){return u(t)||o(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return s(t)}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={name:"u-video",props:{vlist:{type:Array,default:function(){return[]}},scrollTop:{type:Number,default:0}},data:function(){return{videoContent:"",list:[],dijige:0,ghgh:!0,xuan:{},vide:{},scrollTops:0}},watch:{vlist:function(t){this.list=e(this.vlist),this.list[this.dijige].showComment&&this.$emit("pinglun",this.list[this.dijige],this.dijige)},scrollTop:function(t){this.scrollTops,this.scrollTops}},mounted:function(){this.list=e(this.vlist)},methods:{bofang:function(n){this.xuan=n,this.videoContent=t.createVideoContext("video"+n.id,this),this.videoContent.play(),this.scrollTops=this.scrollTop,n.isimg=!n.isimg},playing:function(n){var e=this;e.videoContent=t.createVideoContext(n.currentTarget.id,e),e.vide=n.currentTarget.id,e.list.forEach((function(i,r){if(null!=i.video&&""!=i.video){var o="video"+i.id;o!=n.currentTarget.id&&(t.createVideoContext("video"+i.id,e).pause(),i.isimg=!0)}})),e.videoContent.requestFullScreen()},share:function(t){this.$emit("share",t)},collection:function(t){this.$emit("collection",t)},pinglun:function(t,n){this.dijige=n,this.$emit("pinglun",t,n)},dianzhan:function(t,n){this.list[n].iszan?this.list[n].zan=this.list[n].zan-1:this.list[n].zan=this.list[n].zan+1,this.$emit("dianzhan",t)},del:function(t){this.$emit("del",t)}}};n.default=c}).call(this,e(1)["default"])},774:function(t,n,e){"use strict";e.r(n);var i=e(775),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a},775:function(t,n,e){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-video/u-video.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-video/u-video-create-component',
    {
        'uview-ui/components/u-video/u-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(769))
        })
    },
    [['uview-ui/components/u-video/u-video-create-component']]
]);
