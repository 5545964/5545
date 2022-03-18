(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-parse/u-parse"],{700:function(t,e,n){"use strict";n.r(e);var i=n(701),r=n(703);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n(708);var s,a=n(11),c=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],s);c.options.__file="uview-ui/components/u-parse/u-parse.vue",e["default"]=c.exports},701:function(t,e,n){"use strict";n.r(e);var i=n(702);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},702:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=!1,s=[];r._withStripped=!0},703:function(t,e,n){"use strict";n.r(e);var i=n(704),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},704:function(t,e,n){"use strict";(function(t){var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=function(){n.e("uview-ui/components/u-parse/libs/trees").then(function(){return resolve(n(955))}.bind(null,n)).catch(n.oe)},s={},a=t.getFileSystemManager?t.getFileSystemManager():null,c=n(705);function l(t){for(var e=t.length,n=5381;e--;)n+=(n<<5)+t.charCodeAt(e);return n}var u={name:"parser",data:function(){return{showAm:"",nodes:[]}},components:{trees:o},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},compress:Number,loadingImg:String,useCache:Boolean,domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){var n=this;if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,r=e.split("://")[0],o=r.length;i=e[o];o++){if("/"==i&&"/"!=e[o-1]&&"/"!=e[o+1])break;r+=Math.random()>.5?i.toUpperCase():i}return r+=e.substr(o),this[t]=r}if(this[t]=e,e.includes("data:image")){var s,c=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!c)return;s="".concat(wx.env.USER_DATA_PATH,"/").concat(Date.now(),".").concat(c[1]),a&&a.writeFile({filePath:s,data:c[3],encoding:c[2],success:function(){return n[t]=s}})}}}},mounted:function(){var t=this;r&&(this.document=new r(this)),i&&(this.search=function(e){return i(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this.imgList.each((function(e){e&&e.includes(t.env.USER_DATA_PATH)&&a&&a.unlink({filePath:e})})),clearInterval(this._timer)},methods:{setContent:function(e,n){var i,r=this;if(!e)return this.nodes=[];var o,a=new c(e,this);if(this.useCache){var u=l(e);s[u]?i=s[u]:(i=a.parse(),s[u]=i)}else i=a.parse();this.$emit("parse",i),this.nodes=n?this.nodes.concat(i):i,i.length&&i.title&&this.autosetTitle&&t.setNavigationBarTitle({title:i.title}),this.imgList&&(this.imgList.length=0),this.videoContexts=[],this.$nextTick((function(){(function t(e){for(var n=e.length;n--;)e[n].top&&(e[n].controls=[],e[n].init(),t(e[n].$children))})(r.$children),r.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){t.createSelectorQuery().in(r).select("#_top").boundingClientRect().exec((function(t){t&&(r.rect=t[0],r.rect.height==o&&(r.$emit("ready",r.rect),clearInterval(r._timer)),o=r.rect.height)}))}),350),this.showWithAnimation&&!n&&(this.showAm="animation:_show .5s")},getText:function(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.nodes,n="",i=0;t=e[i++];)if("text"==t.type)n+=t.text.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");else if("br"==t.type)n+="\n";else{var r="p"==t.name||"div"==t.name||"tr"==t.name||"li"==t.name||"h"==t.name[0]&&t.name[1]>"0"&&t.name[1]<"7";r&&n&&"\n"!=n[n.length-1]&&(n+="\n"),t.children&&(n+=this.getText(t.children)),r&&"\n"!=n[n.length-1]?n+="\n":"td"!=t.name&&"th"!=t.name||(n+="\t")}return n},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(e){var n=this;if(!this.useAnchor)return e.fail&&e.fail("Anchor is disabled");var i=" ";i=">>>";var r=t.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(e.id?"".concat(i,"#").concat(e.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(e.id):"")).boundingClientRect();this._in?r.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(i){if(!i[0])return e.fail&&e.fail("Label not found");var r=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(e.offset||0);n._in?n._in.page[n._in.scrollTop]=r:t.pageScrollTo({scrollTop:r,duration:300}),e.success&&e.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]}}};e.default=u}).call(this,n(1)["default"])},708:function(t,e,n){"use strict";n.r(e);var i=n(709),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},709:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-parse/u-parse.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-parse/u-parse-create-component',
    {
        'uview-ui/components/u-parse/u-parse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(700))
        })
    },
    [['uview-ui/components/u-parse/u-parse-create-component']]
]);
