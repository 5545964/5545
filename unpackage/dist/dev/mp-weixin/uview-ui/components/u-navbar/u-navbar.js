(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-navbar/u-navbar"],{648:function(t,e,n){"use strict";n.r(e);var r=n(649),i=n(651);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(653);var u,o=n(32),c=Object(o["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"1194bf80",null,!1,r["components"],u);c.options.__file="uview-ui/components/u-navbar/u-navbar.vue",e["default"]=c.exports},649:function(t,e,n){"use strict";n.r(e);var r=n(650);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},650:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return r}));try{r={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,748))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.navbarStyle])),r=t.__get_style([t.navbarInnerStyle]),i=t.isBack&&t.backText?t.__get_style([t.backTextStyle]):null,a=t.title?t.__get_style([t.titleStyle]):null,u=t.isFixed&&!t.immersive?Number(t.navbarHeight):null;t.$mp.data=Object.assign({},{$root:{s0:n,s1:r,s2:i,s3:a,m0:u}})},a=!1,u=[];i._withStripped=!0},651:function(t,e,n){"use strict";n.r(e);var r=n(652),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},652:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t.getSystemInfoSync(),r={};r=t.getMenuButtonBoundingClientRect();var i={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:r,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};t.height=this.navbarHeight+"px";var e=n.windowWidth-r.left;return t.marginRight=e+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var e={},i=n.windowWidth-r.left;return e.left=(n.windowWidth-t.upx2px(this.titleWidth))/2+"px",e.right=i-(n.windowWidth-t.upx2px(this.titleWidth))/2+i+"px",e.width=t.upx2px(this.titleWidth)+"px",e},navbarHeight:function(){var t="ios"==n.platform?44:48;return this.height?this.height:t}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():t.navigateBack()}}};e.default=i}).call(this,n(1)["default"])},653:function(t,e,n){"use strict";n.r(e);var r=n(654),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},654:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-navbar/u-navbar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-navbar/u-navbar-create-component',
    {
        'uview-ui/components/u-navbar/u-navbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(648))
        })
    },
    [['uview-ui/components/u-navbar/u-navbar-create-component']]
]);
