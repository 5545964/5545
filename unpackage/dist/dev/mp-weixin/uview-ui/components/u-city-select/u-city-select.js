(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-city-select/u-city-select"],{605:function(e,t,n){"use strict";n.r(t);var i=n(606),s=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=s.a},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(281)),s=u(n(279)),o=u(n(280));function u(e){return e&&e.__esModule?e:{default:e}}var a={name:"u-city-select",props:{value:{type:Boolean,default:!1},defaultRegion:{type:Array,default:function(){return[]}},areaCode:{type:Array,default:function(){return[]}},maskCloseAble:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:0}},data:function(){return{cityValue:"",isChooseP:!1,province:0,provinces:i.default,isChooseC:!1,city:0,citys:s.default[0],isChooseA:!1,area:0,areas:o.default[0][0],tabsIndex:0}},mounted:function(){this.init()},computed:{isChange:function(){return this.tabsIndex>1},genTabsList:function(){var e=[{name:"请选择"}];return this.isChooseP&&(e[0]["name"]=this.provinces[this.province]["label"],e[1]={name:"请选择"}),this.isChooseC&&(e[1]["name"]=this.citys[this.city]["label"],e[2]={name:"请选择"}),this.isChooseA&&(e[2]["name"]=this.areas[this.area]["label"]),e},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{init:function(){3==this.areaCode.length?(this.setProvince("",this.areaCode[0]),this.setCity("",this.areaCode[1]),this.setArea("",this.areaCode[2])):3==this.defaultRegion.length&&(this.setProvince(this.defaultRegion[0],""),this.setCity(this.defaultRegion[1],""),this.setArea(this.defaultRegion[2],""))},setProvince:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.provinces.map((function(i,s){(n?i.value==n:i.label==t)&&e.provinceChange(s)}))},setCity:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.citys.map((function(i,s){(n?i.value==n:i.label==t)&&e.cityChange(s)}))},setArea:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.areas.map((function(i,s){(n?i.value==n:i.label==t)&&(e.isChooseA=!0,e.area=s)}))},close:function(){this.$emit("input",!1)},tabsChange:function(e){this.tabsIndex=e},provinceChange:function(e){this.isChooseP=!0,this.isChooseC=!1,this.isChooseA=!1,this.province=e,this.citys=s.default[e],this.tabsIndex=1},cityChange:function(e){this.isChooseC=!0,this.isChooseA=!1,this.city=e,this.areas=o.default[this.province][e],this.tabsIndex=2},areaChange:function(e){this.isChooseA=!0,this.area=e;var t={};t.province=this.provinces[this.province],t.city=this.citys[this.city],t.area=this.areas[this.area],this.$emit("city-change",t),this.close()}}};t.default=a},607:function(e,t,n){},689:function(e,t,n){"use strict";var i=n(607),s=n.n(i);s.a},734:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));try{i={uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,759))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,760))},uCellGroup:function(){return n.e("uview-ui/components/u-cell-group/u-cell-group").then(n.bind(null,793))},uCellItem:function(){return n.e("uview-ui/components/u-cell-item/u-cell-item").then(n.bind(null,794))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,775))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,t=e.$createElement;e._self._c},o=[];s._withStripped=!0},779:function(e,t,n){"use strict";n.r(t);var i=n(734),s=n(605);for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o);n(689);var u,a=n(1),r=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);r.options.__file="uview-ui/components/u-city-select/u-city-select.vue",t["default"]=r.exports}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-city-select/u-city-select.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-city-select/u-city-select-create-component',
    {
        'uview-ui/components/u-city-select/u-city-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(779))
        })
    },
    [['uview-ui/components/u-city-select/u-city-select-create-component']]
]);
