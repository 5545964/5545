(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-video/u-video"],{548:function(t,i,n){"use strict";n.r(i);var e=n(549),r=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=r.a},549:function(t,i,n){"use strict";function e(t){return s(t)||u(t)||o(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,i){if(t){if("string"===typeof t)return a(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,i):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return a(t)}function a(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,e=new Array(i);n<i;n++)e[n]=t[n];return e}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var c={name:"u-video",props:{vlist:{type:Array,default:function(){return[]}}},data:function(){return{list:[],dijige:0}},watch:{vlist:function(t){this.list=e(this.vlist),this.list[this.dijige].showComment&&this.$emit("pinglun",this.list[this.dijige],this.dijige)}},mounted:function(){this.list=e(this.vlist)},methods:{playing:function(t){this.$emit("play",t)},share:function(t){this.$emit("share",t)},collection:function(t){this.$emit("collection",t)},pinglun:function(t,i){this.dijige=i,this.$emit("pinglun",t,i)},dianzhan:function(t,i){this.list[i].iszan?this.list[i].zan=this.list[i].zan-1:this.list[i].zan=this.list[i].zan+1,this.$emit("dianzhan",t)},del:function(t){this.$emit("del",t)}}};i.default=c},550:function(t,i,n){},660:function(t,i,n){"use strict";var e=n(550),r=n.n(e);r.a},703:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return r})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var r=function(){var t=this,i=t.$createElement;t._self._c},o=[];r._withStripped=!0},746:function(t,i,n){"use strict";n.r(i);var e=n(703),r=n(548);for(var o in r)"default"!==o&&function(t){n.d(i,t,(function(){return r[t]}))}(o);n(660);var u,s=n(1),a=Object(s["a"])(r["default"],e["b"],e["c"],!1,null,"385956f0",null,!1,e["a"],u);a.options.__file="uview-ui/components/u-video/u-video.vue",i["default"]=a.exports}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-video/u-video.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-video/u-video-create-component',
    {
        'uview-ui/components/u-video/u-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(746))
        })
    },
    [['uview-ui/components/u-video/u-video-create-component']]
]);