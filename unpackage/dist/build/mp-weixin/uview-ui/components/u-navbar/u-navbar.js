(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-navbar/u-navbar"],{"452c":function(t,e,n){"use strict";n.r(e);var i=n("9c2d"),a=n("b11c");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("c22c");var r,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"ec3e47b8",null,!1,i["a"],r);e["default"]=o.exports},"6a58":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t.getSystemInfoSync(),i={};i=t.getMenuButtonBoundingClientRect();var a={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:i,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};t.height=this.navbarHeight+"px";var e=n.windowWidth-i.left;return t.marginRight=e+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var e={},a=n.windowWidth-i.left;return e.left=(n.windowWidth-t.upx2px(this.titleWidth))/2+"px",e.right=a-(n.windowWidth-t.upx2px(this.titleWidth))/2+a+"px",e.width=t.upx2px(this.titleWidth)+"px",e},navbarHeight:function(){var t="ios"==n.platform?44:48;return this.height?this.height:t}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():t.navigateBack()}}};e.default=a}).call(this,n("543d")["default"])},"9c2d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"9f16"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.navbarStyle])),i=t.__get_style([t.navbarInnerStyle]),a=t.isBack&&t.backText?t.__get_style([t.backTextStyle]):null,u=t.title?t.__get_style([t.titleStyle]):null,r=t.isFixed&&!t.immersive?Number(t.navbarHeight):null;t.$mp.data=Object.assign({},{$root:{s0:n,s1:i,s2:a,s3:u,m0:r}})},u=[]},a843:function(t,e,n){},b11c:function(t,e,n){"use strict";n.r(e);var i=n("6a58"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},c22c:function(t,e,n){"use strict";var i=n("a843"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-navbar/u-navbar-create-component',
    {
        'uview-ui/components/u-navbar/u-navbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("452c"))
        })
    },
    [['uview-ui/components/u-navbar/u-navbar-create-component']]
]);
