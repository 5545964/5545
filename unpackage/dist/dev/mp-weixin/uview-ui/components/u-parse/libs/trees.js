(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-parse/libs/trees"],{963:function(t,e,r){"use strict";r.r(e);var n=r(964),i=r(966);for(var s in i)"default"!==s&&function(t){r.d(e,t,(function(){return i[t]}))}(s);r(968);var a,o=r(32),u=r(970),c=Object(o["default"])(i["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],a);"function"===typeof u["default"]&&Object(u["default"])(c),c.options.__file="uview-ui/components/u-parse/libs/trees.vue",e["default"]=c.exports},964:function(t,e,r){"use strict";r.r(e);var n=r(965);r.d(e,"render",(function(){return n["render"]})),r.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),r.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),r.d(e,"components",(function(){return n["components"]}))},965:function(t,e,r){"use strict";var n;r.r(e),r.d(e,"render",(function(){return i})),r.d(e,"staticRenderFns",(function(){return a})),r.d(e,"recyclableRender",(function(){return s})),r.d(e,"components",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},s=!1,a=[];i._withStripped=!0},966:function(t,e,r){"use strict";r.r(e);var n=r(967),i=r.n(n);for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},967:function(t,e,r){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.Parser={};var i=function(){Promise.resolve().then(function(){return resolve(r(963))}.bind(null,r)).catch(r.oe)},s=r(714).errorImg,a={components:{trees:i},name:"trees",data:function(){return{ctrl:[],placeholder:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',errorImg:s,loadVideo:"undefined"==typeof plus,c:"",s:""}},props:{nodes:Array,lazyLoad:Boolean,loading:String},mounted:function(){for(this.top=this.$parent;"parser"!=this.top.$options.name;this.top=this.top.$parent);this.init()},methods:{init:function(){for(var t,e=this.nodes.length;t=this.nodes[--e];)if("img"==t.name)this.top.imgList.setItem(t.attrs.i,t.attrs["original-src"]||t.attrs.src);else if("video"==t.name||"audio"==t.name){var r;"video"==t.name?r=n.createVideoContext(t.attrs.id,this):this.$refs[t.attrs.id]&&(r=this.$refs[t.attrs.id][0]),r&&(r.id=t.attrs.id,this.top.videoContexts.push(r))}},play:function(t){var e=this.top.videoContexts;if(e.length>1&&this.top.autopause)for(var r=e.length;r--;)e[r].id!=t.currentTarget.dataset.id&&e[r].pause()},imgtap:function(e){var r=e.currentTarget.dataset.attrs;if(!r.ignore){var i=!0,s={id:e.target.id,src:r.src,ignore:function(){return i=!1}};if(t.Parser.onImgtap&&t.Parser.onImgtap(s),this.top.$emit("imgtap",s),i){var a=this.top.imgList,o=a[r.i]?parseInt(r.i):(a=[r.src],0);n.previewImage({current:o,urls:a})}}},loadImg:function(t){var e=t.currentTarget.dataset.i;this.lazyLoad&&!this.ctrl[e]?this.$set(this.ctrl,e,1):this.loading&&2!=this.ctrl[e]&&this.$set(this.ctrl,e,2)},linkpress:function(e){var r=!0,i=e.currentTarget.dataset.attrs;if(i.ignore=function(){return r=!1},t.Parser.onLinkpress&&t.Parser.onLinkpress(i),this.top.$emit("linkpress",i),r){if(i["app-id"])return n.navigateToMiniProgram({appId:i["app-id"],path:i.path});i.href&&("#"==i.href[0]?this.top.useAnchor&&this.top.navigateTo({id:i.href.substring(1)}):0==i.href.indexOf("http")||0==i.href.indexOf("//")?n.setClipboardData({data:i.href,success:function(){return n.showToast({title:"链接已复制"})}}):n.navigateTo({url:i.href,fail:function(){n.switchTab({url:i.href})}}))}},error:function(t){var e=t.currentTarget,r=e.dataset.source,n=e.dataset.i;if("video"==r||"audio"==r){var i=this.ctrl[n]?this.ctrl[n].i+1:1;i<this.nodes[n].attrs.source.length&&this.$set(this.ctrl,n,i),t.detail.__args__&&(t.detail=t.detail.__args__[0])}else s&&"img"==r&&(this.top.imgList.setItem(e.dataset.index,s),this.$set(this.ctrl,n,3));this.top&&this.top.$emit("error",{source:r,target:e,errMsg:t.detail.errMsg})},_loadVideo:function(t){this.$set(this.ctrl,t.target.dataset.i,0)}}};e.default=a}).call(this,r(2),r(1)["default"])},968:function(t,e,r){"use strict";r.r(e);var n=r(969),i=r.n(n);for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},969:function(t,e,r){},970:function(t,e,r){"use strict";r.r(e);var n=r(971);e["default"]=n["default"]},971:function(t,e,r){"use strict";r.r(e),e["default"]=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])}}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uview-ui/components/u-parse/libs/trees.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-parse/libs/trees-create-component',
    {
        'uview-ui/components/u-parse/libs/trees-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(963))
        })
    },
    [['uview-ui/components/u-parse/libs/trees-create-component']]
]);
