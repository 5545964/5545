(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/shengfen"],{295:function(e,n,t){"use strict";(function(e){t(5);a(t(3));var n=a(t(296));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},296:function(e,n,t){"use strict";t.r(n);var a=t(297),i=t(299);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t(303);var u,s=t(11),r=Object(s["default"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"7903ec22",null,!1,a["components"],u);r.options.__file="pages/pagesA/shengfen.vue",n["default"]=r.exports},297:function(e,n,t){"use strict";t.r(n);var a=t(298);t.d(n,"render",(function(){return a["render"]})),t.d(n,"staticRenderFns",(function(){return a["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return a["recyclableRender"]})),t.d(n,"components",(function(){return a["components"]}))},298:function(e,n,t){"use strict";var a;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return a}));try{a={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,642))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,806))},uUpload:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-upload/u-upload")]).then(t.bind(null,814))},uToast:function(){return t.e("uview-ui/components/u-toast/u-toast").then(t.bind(null,749))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,821))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c},o=!1,u=[];i._withStripped=!0},299:function(e,n,t){"use strict";t.r(n);var a=t(300),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},300:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{huoqu:"获取验证码",timea:0,code:"",zhen:"/uploads/20220225/aa244369646aea5b3024e9491760f969.jpg",bei:"/uploads/20220225/736b8b68834b200ae90d2e6d9178c122.jpg",renxiang_bg:t(301),guohui_bg:t(302),upname:"image",formData:{},header:{},action:this.$shangchuan+"/api/byd_user/addpostspic",name:"",pgone:"",card_id:"",yinghangka:"",kaihuhang:"",title:"上传身份信息",aa:{}}},onLoad:function(e){e.title&&(this.title=e.title)},methods:{successs:function(n){this.bei=n.data.status,e.showToast({title:"背面上传成功",icon:"success"})},removes:function(e){this.bei=""},success:function(n){this.zhen=n.data.status,e.showToast({title:"正面上传成功",icon:"success"})},remove:function(e){this.zhen=""},dsada:function(){var n=this;this.$api.realname({user_id:e.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){var a={title:"提交成功",text:"你的提佣申请已提交成功",botton:"我知道了",navbar:"提交成功"};e.navigateTo({url:"../pagesD/regSuccess?list="+JSON.stringify(a)+"&tiao=2"})}else n.$refs.uToast.show({title:t.data.data.data})}))},tijiao:function(){var n=this,t=e.getStorageSync("user_info").id;if(""==this.yinghangka||""==this.kaihuhang||""==this.card_id||""==this.name||""==this.pgone||""==this.zhen||""==this.bei||""==this.code)return e.showToast({title:"请检查资料",icon:"error"});this.$api.emsyzphone({phone:this.pgone,yzm:this.code}).then((function(a){if(1!=a.data.code)return e.showToast({title:"验证码错误",icon:"none"});1==a.data.code&&(e.showLoading({title:"上传中",mask:!0}),n.$api.myreg({phone:n.pgone,user_id:t}).then((function(a){1==a.data.code?n.$api.userupload({user_id:t,image:n.zhen,type:0}).then((function(a){1==a.data.code?n.$api.userupload({user_id:t,image:n.bei,type:1}).then((function(a){1==a.data.code?n.$api.zhxmy({userid:t,bankid:n.yinghangka,bankname:n.kaihuhang,idcardnum:n.card_id,realname:n.name}).then((function(t){e.hideLoading(),1==t.data.code?n.dsada():n.$refs.uToast.show({title:t.data.msg})})):(e.hideLoading(),n.$refs.uToast.show({title:a.data.msg+"重试"}))})):(e.hideLoading(),n.$refs.uToast.show({title:a.data.msg}))})):(e.hideLoading(),n.$refs.uToast.show({title:a.data.data.data+",请修改信息重试!"}),n.yinghangka,n.kaihuhang,n.card_id,n.name,n.pgone,n.zhen,n.bei,n.code)})))}))},back:function(n){switch(n){case 0:e.navigateBack({delta:e.getStorageSync("delta")});break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}},go_code:function(){var n=this;""!=this.pgone?0==this.timea&&this.$api.emsphone({phone:this.pgone,user_id:e.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){n.code="",e.showToast({title:"发送成功",duration:1e3,icon:"none"}),n.timea=60;var a=setInterval((function(){n.timea--,n.huoqu=n.timea+"s后获取",0==n.timea&&(clearInterval(a),n.huoqu="获取验证码")}),1e3)}else e.showToast({title:"发送失败",duration:1e3,icon:"none"})})):e.showToast({title:"请输入手机号",duration:1e3,icon:"none"})}}};n.default=a}).call(this,t(1)["default"])},303:function(e,n,t){"use strict";t.r(n);var a=t(304),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},304:function(e,n,t){}},[[295,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/shengfen.js.map