(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-parse/u-parse"],{540:function(t,e,n){"use strict";n.r(e);var i=n(541),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},541:function(t,e,n){"use strict";(function(t){var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,s=function(){n.e("uview-ui/components/u-parse/libs/trees").then(function(){return resolve(n(651))}.bind(null,n)).catch(n.oe)},r={},a=t.getFileSystemManager?t.getFileSystemManager():null,c=n(518);function l(t){for(var e=t.length,n=5381;e--;)n+=(n<<5)+t.charCodeAt(e);return n}var u={name:"parser",data:function(){return{showAm:"",nodes:[]}},components:{trees:s},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},compress:Number,loadingImg:String,useCache:Boolean,domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){var n=this;if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,o=e.split("://")[0],s=o.length;i=e[s];s++){if("/"==i&&"/"!=e[s-1]&&"/"!=e[s+1])break;o+=Math.random()>.5?i.toUpperCase():i}return o+=e.substr(s),this[t]=o}if(this[t]=e,e.includes("data:image")){var r,c=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!c)return;r="".concat(wx.env.USER_DATA_PATH,"/").concat(Date.now(),".").concat(c[1]),a&&a.writeFile({filePath:r,data:c[3],encoding:c[2],success:function(){return n[t]=r}})}}}},mounted:function(){var t=this;o&&(this.document=new o(this)),i&&(this.search=function(e){return i(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this.imgList.each((function(e){e&&e.includes(t.env.USER_DATA_PATH)&&a&&a.unlink({filePath:e})})),clearInterval(this._timer)},methods:{setContent:function(e,n){var i,o=this;if(!e)return this.nodes=[];var s,a=new c(e,this);if(this.useCache){var u=l(e);r[u]?i=r[u]:(i=a.parse(),r[u]=i)}else i=a.parse();this.$emit("parse",i),this.nodes=n?this.nodes.concat(i):i,i.length&&i.title&&this.autosetTitle&&t.setNavigationBarTitle({title:i.title}),this.imgList&&(this.imgList.length=0),this.videoContexts=[],this.$nextTick((function(){(function t(e){for(var n=e.length;n--;)e[n].top&&(e[n].controls=[],e[n].init(),t(e[n].$children))})(o.$children),o.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){t.createSelectorQuery().in(o).select("#_top").boundingClientRect().exec((function(t){t&&(o.rect=t[0],o.rect.height==s&&(o.$emit("ready",o.rect),clearInterval(o._timer)),s=o.rect.height)}))}),350),this.showWithAnimation&&!n&&(this.showAm="animation:_show .5s")},getText:function(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.nodes,n="",i=0;t=e[i++];)if("text"==t.type)n+=t.text.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");else if("br"==t.type)n+="\n";else{var o="p"==t.name||"div"==t.name||"tr"==t.name||"li"==t.name||"h"==t.name[0]&&t.name[1]>"0"&&t.name[1]<"7";o&&n&&"\n"!=n[n.length-1]&&(n+="\n"),t.children&&(n+=this.getText(t.children)),o&&"\n"!=n[n.length-1]?n+="\n":"td"!=t.name&&"th"!=t.name||(n+="\t")}return n},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(e){var n=this;if(!this.useAnchor)return e.fail&&e.fail("Anchor is disabled");var i=" ";i=">>>";var o=t.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(e.id?"".concat(i,"#").concat(e.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(e.id):"")).boundingClientRect();this._in?o.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():o.selectViewport().scrollOffset(),o.exec((function(i){if(!i[0])return e.fail&&e.fail("Label not found");var o=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(e.offset||0);n._in?n._in.page[n._in.scrollTop]=o:t.pageScrollTo({scrollTop:o,duration:300}),e.success&&e.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]}}};e.default=u}).call(this,n(0)["default"])},542:function(t,e,n){},658:function(t,e,n){"use strict";var i=n(542),o=n.n(i);o.a},701:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];o._withStripped=!0},744:function(t,e,n){"use strict";n.r(e);var i=n(701),o=n(540);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n(658);var r,a=n(1),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);c.options.__file="uview-ui/components/u-parse/u-parse.vue",e["default"]=c.exports}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-parse/u-parse.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-parse/u-parse-create-component',
    {
        'uview-ui/components/u-parse/u-parse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(744))
        })
    },
    [['uview-ui/components/u-parse/u-parse-create-component']]
]);
