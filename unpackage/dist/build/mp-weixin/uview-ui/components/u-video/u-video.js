(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-video/u-video"],{"007e":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var r=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"00c6":function(t,n,i){"use strict";i.r(n);var e=i("8746"),r=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=r.a},4131:function(t,n,i){},"52bf":function(t,n,i){"use strict";i.r(n);var e=i("007e"),r=i("00c6");for(var o in r)"default"!==o&&function(t){i.d(n,t,(function(){return r[t]}))}(o);i("a7f0");var a,u=i("f0c5"),s=Object(u["a"])(r["default"],e["b"],e["c"],!1,null,"43a21d35",null,!1,e["a"],a);n["default"]=s.exports},8746:function(t,n,i){"use strict";(function(t){function i(t){return a(t)||o(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return u(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,n):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return u(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={name:"u-video",props:{vlist:{type:Array,default:function(){return[]}}},data:function(){return{videoContent:"",list:[],dijige:0}},watch:{vlist:function(t){this.list=i(this.vlist),this.list[this.dijige].showComment&&this.$emit("pinglun",this.list[this.dijige],this.dijige)}},mounted:function(){this.list=i(this.vlist)},methods:{playing:function(n){var i=this,e=n.currentTarget.id;i.videoContent=t.createVideoContext(e);var r=i.list;r.forEach((function(n,r){if(null!=n.video&&""!=n.video){var o="video"+n.id;o!=e&&t.createVideoContext(o,i).pause()}}))},share:function(t){this.$emit("share",t)},collection:function(t){this.$emit("collection",t)},pinglun:function(t,n){this.dijige=n,this.$emit("pinglun",t,n)},dianzhan:function(t,n){this.list[n].iszan?this.list[n].zan=this.list[n].zan-1:this.list[n].zan=this.list[n].zan+1,this.$emit("dianzhan",t)},del:function(t){this.$emit("del",t)}}};n.default=s}).call(this,i("543d")["default"])},a7f0:function(t,n,i){"use strict";var e=i("4131"),r=i.n(e);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-video/u-video-create-component',
    {
        'uview-ui/components/u-video/u-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("52bf"))
        })
    },
    [['uview-ui/components/u-video/u-video-create-component']]
]);
