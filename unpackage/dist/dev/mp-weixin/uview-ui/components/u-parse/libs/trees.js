(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-parse/libs/trees"],{648:function(t,e,i){"use strict";i.r(e);var r=i(649),s=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=s.a},649:function(t,e,i){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.Parser={};var s=function(){Promise.resolve().then(function(){return resolve(i(663))}.bind(null,i)).catch(i.oe)},n=i(272).errorImg,a={components:{trees:s},name:"trees",data:function(){return{ctrl:[],placeholder:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',errorImg:n,loadVideo:"undefined"==typeof plus,c:"",s:""}},props:{nodes:Array,lazyLoad:Boolean,loading:String},mounted:function(){for(this.top=this.$parent;"parser"!=this.top.$options.name;this.top=this.top.$parent);this.init()},methods:{init:function(){for(var t,e=this.nodes.length;t=this.nodes[--e];)if("img"==t.name)this.top.imgList.setItem(t.attrs.i,t.attrs["original-src"]||t.attrs.src);else if("video"==t.name||"audio"==t.name){var i;"video"==t.name?i=r.createVideoContext(t.attrs.id,this):this.$refs[t.attrs.id]&&(i=this.$refs[t.attrs.id][0]),i&&(i.id=t.attrs.id,this.top.videoContexts.push(i))}},play:function(t){var e=this.top.videoContexts;if(e.length>1&&this.top.autopause)for(var i=e.length;i--;)e[i].id!=t.currentTarget.dataset.id&&e[i].pause()},imgtap:function(e){var i=e.currentTarget.dataset.attrs;if(!i.ignore){var s=!0,n={id:e.target.id,src:i.src,ignore:function(){return s=!1}};if(t.Parser.onImgtap&&t.Parser.onImgtap(n),this.top.$emit("imgtap",n),s){var a=this.top.imgList,o=a[i.i]?parseInt(i.i):(a=[i.src],0);r.previewImage({current:o,urls:a})}}},loadImg:function(t){var e=t.currentTarget.dataset.i;this.lazyLoad&&!this.ctrl[e]?this.$set(this.ctrl,e,1):this.loading&&2!=this.ctrl[e]&&this.$set(this.ctrl,e,2)},linkpress:function(e){var i=!0,s=e.currentTarget.dataset.attrs;if(s.ignore=function(){return i=!1},t.Parser.onLinkpress&&t.Parser.onLinkpress(s),this.top.$emit("linkpress",s),i){if(s["app-id"])return r.navigateToMiniProgram({appId:s["app-id"],path:s.path});s.href&&("#"==s.href[0]?this.top.useAnchor&&this.top.navigateTo({id:s.href.substring(1)}):0==s.href.indexOf("http")||0==s.href.indexOf("//")?r.setClipboardData({data:s.href,success:function(){return r.showToast({title:"链接已复制"})}}):r.navigateTo({url:s.href,fail:function(){r.switchTab({url:s.href})}}))}},error:function(t){var e=t.currentTarget,i=e.dataset.source,r=e.dataset.i;if("video"==i||"audio"==i){var s=this.ctrl[r]?this.ctrl[r].i+1:1;s<this.nodes[r].attrs.source.length&&this.$set(this.ctrl,r,s),t.detail.__args__&&(t.detail=t.detail.__args__[0])}else n&&"img"==i&&(this.top.imgList.setItem(e.dataset.index,n),this.$set(this.ctrl,r,3));this.top&&this.top.$emit("error",{source:i,target:e,errMsg:t.detail.errMsg})},_loadVideo:function(t){this.$set(this.ctrl,t.target.dataset.i,0)}}};e.default=a}).call(this,i(11),i(0)["default"])},650:function(t,e,i){},663:function(t,e,i){"use strict";i.r(e);var r=i(749),s=i(648);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i(704);var a,o=i(1),u=i(750),c=Object(o["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);"function"===typeof u["a"]&&Object(u["a"])(c),c.options.__file="uview-ui/components/u-parse/libs/trees.vue",e["default"]=c.exports},704:function(t,e,i){"use strict";var r=i(650),s=i.n(r);s.a},749:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var s=function(){var t=this,e=t.$createElement;t._self._c},n=[];s._withStripped=!0},750:function(t,e,i){"use strict";var r=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=r}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uview-ui/components/u-parse/libs/trees.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-parse/libs/trees-create-component',
    {
        'uview-ui/components/u-parse/libs/trees-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(663))
        })
    },
    [['uview-ui/components/u-parse/libs/trees-create-component']]
]);
