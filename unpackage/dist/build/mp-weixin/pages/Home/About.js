(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/About"],{2133:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return d})),n.d(i,"a",(function(){return e}));var e={uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"c85c"))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"ac6a"))},uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,"92c6"))},uSelect:function(){return n.e("uview-ui/components/u-select/u-select").then(n.bind(null,"575f"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"d62c"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"9f16"))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,"4dd2"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"c9d7"))},uBackTop:function(){return n.e("uview-ui/components/u-back-top/u-back-top").then(n.bind(null,"b8b6"))},uDianji:function(){return n.e("uview-ui/components/u-dianji/u-dianji").then(n.bind(null,"7b42"))}},a=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.show=!0},t.e1=function(i){t.yuedu=!1},t.e2=function(i){t.shengqings=!1},t.e3=function(i){t.shenghe=!1})},d=[]},"2efb":function(t,i,n){"use strict";(function(t){n("c9dc");e(n("66fd"));var i=e(n("f61f"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("543d")["createPage"])},"4f57":function(t,i,n){"use strict";var e=n("d57e"),a=n.n(e);a.a},a7ef:function(t,i,n){"use strict";n.r(i);var e=n("fd4a"),a=n.n(e);for(var d in e)"default"!==d&&function(t){n.d(i,t,(function(){return e[t]}))}(d);i["default"]=a.a},d57e:function(t,i,n){},f61f:function(t,i,n){"use strict";n.r(i);var e=n("2133"),a=n("a7ef");for(var d in a)"default"!==d&&function(t){n.d(i,t,(function(){return a[t]}))}(d);n("4f57");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"7f10f63c",null,!1,e["a"],u);i["default"]=o.exports},fd4a:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function d(t,i,n,e,a,d,u){try{var s=t[d](u),o=s.value}catch(c){return void n(c)}s.done?i(o):Promise.resolve(o).then(e,a)}function u(t){return function(){var i=this,n=arguments;return new Promise((function(e,a){var u=t.apply(i,n);function s(t){d(u,e,a,s,o,"next",t)}function o(t){d(u,e,a,s,o,"throw",t)}s(void 0)}))}}function s(t){return l(t)||r(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,i){if(t){if("string"===typeof t)return h(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,i):void 0}}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return h(t)}function h(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,e=new Array(i);n<i;n++)e[n]=t[n];return e}var f={data:function(){return{shengqings:"",shengqing:!1,user_infos:t.getStorageSync("user_info"),mm:[],zhuangtai:0,xuanzhe:"",show:!1,columns:[],cduan:!1,nmnm:"",mnmn:"",shenghe:!1,idid:1,loupanid:"",qianyue:"",huxing:"",yuedus:!1,yuedu:!1,xieyi:[],keyword:"",heigth:0,list:[{id:0,name:"品牌故事",content:""},{id:2,name:"创始人",content:""},{id:3,name:"方黄股份",content:""},{id:1,name:"业务地图",content:""},{name:"资讯中心"}],lists:[{id:0,name:"品牌故事",content:""},{id:2,name:"创始人",content:""},{id:3,name:"方黄股份",content:""}],current:0,xinxi:[],imgPath:this.$imgPath,imgsss:'<img src="'+this.$imgPath,active:0,datalist:[],active0:0,datalist0:[],active1:0,datalist1:[],active2:0,active22:0,datalist2:[],tanchaung:{},agid:"",lickc:[],klklkl:0,lickid:0,jiji:""}},onLoad:function(t){t.titit&&(this.current=4)},onShow:function(){this.active=0,this.active0=0,this.active1=0,this.active2=0,this.idid=t.getStorageSync("idid")||1,this.alls();var i=t.getSystemInfoSync();this.heigth=i.windowHeight},methods:{tuihuang:function(){var i=this;this.$api.blp({lpid:this.tanchaung.id,user_id:this.user_infos.id}).then((function(n){1==n.data.code?i.shengqings=!1:t.showToast({title:"暂无数据",icon:"none"})}))},duan:function(i){0==i?t.reLaunch({url:"./Investment?is_re=1"}):t.navigateTo({url:"../pagesB/shengfen"})},like:function(){var i=this;this.$api.likelp({title:this.keyword,id:this.lickid}).then((function(n){1==n.data.code?(n.data.data.status.forEach((function(t){t["check"]=!1,t["name"]=t.title+"的相关协议"})),i.datalist2=n.data.data.status,i.active2=0):(i.datalist2=[],t.showToast({title:"暂无数据",icon:"none"}))}))},kkkk:function(){t.navigateTo({url:"../pagesC/HouseDesign?current=2"})},llll:function(){1==this.klklkl?t.navigateTo({url:"../pagesD/uploadCase"}):t.navigateTo({url:"../pagesC/HouseDesign"})},fuwenben:function(i){t.setStorageSync("fuwenbeng",i.content),t.navigateTo({url:"../pagesC/fuwenben?title="+i.name})},hahaha:function(t){t.check=!t.check,this.$forceUpdate()},hahahas:function(t){this.xieyi[t].check=!this.xieyi[t].check},tongyixieyi:function(i){var n=this;if(0==i){return this.xieyi.forEach((function(i){i.check&&n.$api.userag({userid:t.getStorageSync("user_info").id,agid:i.id,title:i.name})})),void this.$api.tjsq({user_id:t.getStorageSync("user_info").id,bid:this.xieyi[0].datalist.id,sole_type:2,cate:1}).then((function(t){1==t.data.code&&(n.yuedu=!1,n.$refs.uToast.show({title:"区域申请成功，请留意系统消息查看审核结果。",type:"default"}))}))}if(i.check){var e=0;1==this.idid&&(e=48),0==this.idid&&(e=49),this.$api.userag({userid:t.getStorageSync("user_info").id,agid:e,lpid:this.tanchaung.id,title:this.tanchaung.title}),this.$api.tjsq({user_id:t.getStorageSync("user_info").id,bid:this.loupanid,sole_type:this.idid,cate:0}).then((function(t){1==t.data.code&&(n.yuedu=!1,n.$refs.uToast.show({title:"楼盘申请成功，请留意系统消息查看审核结果。",type:"default"}))}))}else t.showToast({title:"请阅读并同意协议",icon:"none"})},confirm:function(t){this.xuanzhe=t[0].label,this.mao(t[0].value,0,0)},changeTokens:function(i,n){var e=this;if(this.datalist[i].forEach((function(t){t.active=n})),this.datalist[i][n].address)this.changeTokens2(this.datalist[i][n]);else{if(3==this.user_infos.bbs.id&&0==this.datalist[i][n].did&&this.datalist[i][n].level>=3){this.tanchaung["quxian"]=!0;var a=t.getStorageSync("xieyi"),d=[];a.forEach((function(t){12==t.state&&(t["datalist"]=e.datalist[i][n],t["quxian"]=!0,t.name=e.datalist[i][n].title+"的相关协议",d.push(t))})),this.xieyi=[].concat(d),this.yuedu=!0}var u=[];this.datalist.forEach((function(t,n){n>i&&u.push(n)})),u.forEach((function(t){e.datalist.splice(t,1)})),this.mao(this.datalist[i][n].id,i+1,n)}},mao:function(t,i,n){var e=this;this.$api.map({pid:t}).then((function(n){if(1==n.data.code)if(n.data.data.status.forEach((function(t){t["active"]=0})),0!=n.data.data.status.length)e.datalist0=[],e.datalist0=s(e.datalist),e.datalist0[i]=s(n.data.data.status),e.datalist=s(e.datalist0),e.mao(e.datalist[i][0].id,i+1,0),e.zhuangtai=i+1;else{e.datalist.length;e.lp(t,i)}}))},lp:function(t,i){var n=this;this.$api.lpmap({id:t}).then((function(t){1==t.data.code&&(t.data.data.status.forEach((function(t){t["check"]=!1,t["name"]=t.title+"的相关协议",t["names"]=t.title,t["active"]=0,t["quxian"]=!1})),n.datalist0=s(n.datalist),n.datalist0[i]=s(t.data.data.status),n.datalist=s(n.datalist0))}))},alls:function(){var i=this;this.$api.myuser({user_id:t.getStorageSync("user_info").id||0}).then((function(i){1==i.data.code&&t.setStorageSync("user_info",i.data.data.myuser)})),this.$api.map({pid:this.pid}).then((function(n){1==n.data.code&&(n.data.data.status.forEach((function(t,i){t["value"]=t.id,t["label"]=t.title,t["active"]=0})),i.columns=n.data.data.status,i.xuanzhe=i.columns[0].title,i.mao(i.columns[0].id,0,0),t.stopPullDownRefresh())})),this.$api.pots({limit:1e3}).then((function(n){1==n.data.code&&(n.data.data.status.data.forEach((function(t){t.content=t.content.replace(/\<img src=\"/gi,i.imgsss)})),i.xinxi=n.data.data.status.data,t.stopPullDownRefresh())}));var n=function(t){i.$api.bydadout({state:i.lists[t].id}).then((function(n){1==n.data.code&&(i.lists[t].content=n.data.data.status[0].content.replace(/\<img src=\"/gi,i.imgsss))}))};for(var e in this.lists)n(e)},klkl:function(t,i){var n=this;this.$api.lpagreement({id:t}).then((function(t){1==t.data.code&&(0==i&&(n.jiji=t.data.data.status.dcontents),1==i&&(n.jiji=t.data.data.status.bcontents))}))},changeTokens2:function(i){var n=this;return u(e.default.mark((function a(){var d;return e.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.lickc=[],e.next=3,n.$login();case 3:if(!e.sent){e.next=15;break}if(n.loupanid=i.id,i.check=!1,n.tanchaung=i,d=n.user_infos,d.bbs.id||0!=d.des){e.next=14;break}return n.qianyue="您还不是设计师或美居会员",n.huxing="点击前往成为美居设计师或美居会员",n.cduan=!0,n.yuedus=!0,e.abrupt("return");case 14:n.$api.mapstation({user_id:d.id,bid:i.id,type:n.idid}).then((function(e){if(0==e.data.code){if(d){if(1==n.idid&&0==i.sign_did&&0!=d.des)return n.idid=1,t.setStorageSync("idid",n.idid),n.klkl(i.id,0),void(n.yuedu=!0);if(0==i.sign_bid){if(1==d.bbs.id)return n.shengqing=n.tanchaung.names,void(n.shengqings=!0);if(2==d.bbs.id)return n.idid=0,t.setStorageSync("idid",n.idid),n.klkl(i.id,1),void(n.yuedu=!0)}0==i.sign_bid&&0==i.sign_did||(n.qianyue="该楼盘已被签约",i.sign_bid==d.id||i.sign_did==d.id?n.huxing="该楼盘已被您签约，您可签约其他楼盘或查看楼盘设计和户型攻略。":n.huxing="该楼盘已被其他设计师签约，您可签约其他楼盘或查看楼盘设计和户型攻略。",1==n.idid?n.idid=0:n.idid=1,t.setStorageSync("idid",n.idid),n.yuedus=!0)}}else 1==e.data.code?(1==n.idid?(n.qianyue="美居独家设计权申请已通过",n.klklkl=1):(n.qianyue="美居独家经营权申请已通过",n.klklkl=0),n.huxing="您的申请已通过，请及时上传对应楼盘方案及户型攻略。",n.yuedus=!0,1==n.idid?n.idid=0:n.idid=1,t.setStorageSync("idid",n.idid)):2==e.data.code?(1==n.idid?n.mnmn="美居独家设计权申请正在审核":n.mnmn="美居独家经营权申请正在审核",n.nmnm="楼盘申请成功，请留意系统消息查看审核结果",n.shenghe=!0):3==e.data.code&&(1==n.idid?n.mnmn="美居独家设计权申请被拒绝":n.mnmn="美居独家经营权申请被拒绝",n.nmnm=e.data.data,1==n.idid?n.idid=0:n.idid=1,n.shenghe=!0,t.setStorageSync("idid",n.idid))}));case 15:case"end":return e.stop()}}),a)})))()},lidsadsa:function(i,n){var a=this;return u(e.default.mark((function d(){var u;return e.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$login();case 2:if(!e.sent){e.next=15;break}if(a.active22=i,a.loupanid=n.id,n.check=!1,a.tanchaung=n,u=t.getStorageSync("user_info"),u.bbs.id){e.next=14;break}return a.qianyue="您还不是设计师或美居会员",a.huxing="点击前往成为美居设计师或美居会员",a.cduan=!0,a.yuedus=!0,e.abrupt("return");case 14:a.$api.mapstation({user_id:u.id,bid:n.id,type:a.idid}).then((function(i){if(0==i.data.code){if(u){if(1==a.idid&&0==n.sign_did)return void(0!=u.des&&(a.yuedu=!0,a.idid=1,t.setStorageSync("idid",a.idid)));if(0==n.sign_bid)return void(0!=u.bbs.id&&(a.yuedu=!0,a.idid=0,t.setStorageSync("idid",a.idid)));if(0!=n.sign_bid||0!=n.sign_did)return a.qianyue="该楼盘已被签约",n.sign_bid==u.id||n.sign_did==u.id?a.huxing="该楼盘已被您签约，您可签约其他楼盘或查看楼盘设计和户型攻略。":a.huxing="该楼盘已被其他设计师签约，您可签约其他楼盘或查看楼盘设计和户型攻略。",1==a.idid?a.idid=0:a.idid=1,t.setStorageSync("idid",a.idid),void(a.yuedus=!0)}}else 1==i.data.code?(1==a.idid?a.qianyue="美居独家设计权申请已通过":a.qianyue="美居独家经营权申请已通过",a.huxing="您的申请已通过，请及时上传对应楼盘方案及户型攻略。",a.yuedus=!0,1==a.idid?a.idid=0:a.idid=1,t.setStorageSync("idid",a.idid)):2==i.data.code?(1==a.idid?a.mnmn="美居独家设计权申请正在审核":a.mnmn="美居独家经营权申请正在审核",a.nmnm="楼盘申请成功，请留意系统消息查看审核结果",a.shenghe=!0):3==i.data.code&&(1==a.idid?a.mnmn="美居独家设计权申请被拒绝":a.mnmn="美居独家经营权申请被拒绝",a.nmnm=i.data.data,1==a.idid?a.idid=0:a.idid=1,a.shenghe=!0,t.setStorageSync("idid",a.idid))}));case 15:case"end":return e.stop()}}),d)})))()},changeTokens1:function(t,i){this.lickc=[],this.lp(i.id),this.lickid=i.id,this.active1=t},changeTokens0:function(t,i){this.lickc=[],i.child?(this.datalist1=s(i.child),this.lp(this.datalist1[0].id)):(this.datalist1=[],this.datalist2=[]),this.active0=t},shouURl:function(i){t.setStorageSync("fuwenbeng",i.content),t.navigateTo({url:"../pagesC/fuwenben?title="+i.title})},shouURls:function(i){i.quxian?(t.setStorageSync("fuwenbeng",i.content),t.navigateTo({url:"../pagesC/fuwenben?title="+i.name})):(t.setStorageSync("fuwenbeng",this.jiji),t.navigateTo({url:"../pagesC/fuwenben?title="+i.title}))},lun_change:function(t){this.current=t.detail.current},change:function(t){this.current=t}}};i.default=f}).call(this,n("543d")["default"])}},[["2efb","common/runtime","common/vendor"]]]);