(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-swiper/u-swiper"],{609:function(t,e,n){"use strict";n.r(e);var i=n(610),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},610:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=i},611:function(t,e,n){},695:function(t,e,n){"use strict";var i=n(611),r=n.n(i);r.a},740:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,(function(e,n){var i=t.__get_orig(e),r=t.title&&e.title?t.__get_style([{"padding-bottom":t.titlePaddingBottom},t.titleStyle]):null;return{$orig:i,s0:r}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[];r._withStripped=!0},785:function(t,e,n){"use strict";n.r(e);var i=n(740),r=n(609);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n(695);var u,a=n(1),f=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"a5b2d580",null,!1,i["a"],u);f.options.__file="uview-ui/components/u-swiper/u-swiper.vue",e["default"]=f.exports}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-swiper/u-swiper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-swiper/u-swiper-create-component',
    {
        'uview-ui/components/u-swiper/u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(785))
        })
    },
    [['uview-ui/components/u-swiper/u-swiper-create-component']]
]);
