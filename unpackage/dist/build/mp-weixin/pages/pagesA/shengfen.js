(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/shengfen"],{"0f0d":function(e,t,n){"use strict";(function(e){n("c9dc");a(n("66fd"));var t=a(n("4ae9"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"18e3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{huoqu:"获取验证码",timea:0,code:"",zhen:"/uploads/20220225/aa244369646aea5b3024e9491760f969.jpg",bei:"/uploads/20220225/736b8b68834b200ae90d2e6d9178c122.jpg",renxiang_bg:n("abfc"),guohui_bg:n("dbbd"),upname:"image",formData:{},header:{},action:this.$shangchuan+"/api/byd_user/addpostspic",name:"",pgone:"",card_id:"",yinghangka:"",kaihuhang:"",title:"上传身份信息",aa:{}}},onLoad:function(e){e.title&&(this.title=e.title)},methods:{successs:function(t){this.bei=t.data.status,e.showToast({title:"背面上传成功",icon:"success"})},removes:function(e){this.bei=""},success:function(t){this.zhen=t.data.status,e.showToast({title:"正面上传成功",icon:"success"})},remove:function(e){this.zhen=""},dsada:function(){var t=this;this.$api.realname({user_id:e.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){var a={title:"提交成功",text:"你的提佣申请已提交成功",botton:"我知道了",navbar:"提交成功"};e.navigateTo({url:"../pagesD/regSuccess?list="+JSON.stringify(a)+"&tiao=2"})}else t.$refs.uToast.show({title:n.data.data.data})}))},tijiao:function(){var t=this,n=e.getStorageSync("user_info").id;if(""==this.yinghangka||""==this.kaihuhang||""==this.card_id||""==this.name||""==this.pgone||""==this.zhen||""==this.bei||""==this.code)return e.showToast({title:"请检查资料",icon:"error"});this.$api.emsyzphone({phone:this.pgone,yzm:this.code}).then((function(a){if(1!=a.data.code)return e.showToast({title:"验证码错误",icon:"none"});1==a.data.code&&(e.showLoading({title:"上传中",mask:!0}),t.$api.myreg({phone:t.pgone,user_id:n}).then((function(a){1==a.data.code?t.$api.userupload({user_id:n,image:t.zhen,type:0}).then((function(a){1==a.data.code?t.$api.userupload({user_id:n,image:t.bei,type:1}).then((function(a){1==a.data.code?t.$api.zhxmy({userid:n,bankid:t.yinghangka,bankname:t.kaihuhang,idcardnum:t.card_id,realname:t.name}).then((function(n){e.hideLoading(),1==n.data.code?t.dsada():t.$refs.uToast.show({title:n.data.msg})})):(e.hideLoading(),t.$refs.uToast.show({title:a.data.msg+"重试"}))})):(e.hideLoading(),t.$refs.uToast.show({title:a.data.msg}))})):(e.hideLoading(),t.$refs.uToast.show({title:a.data.data.data+",请修改信息重试!"}),t.yinghangka,t.kaihuhang,t.card_id,t.name,t.pgone,t.zhen,t.bei,t.code)})))}))},back:function(t){switch(t){case 0:e.navigateBack({delta:e.getStorageSync("delta")});break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}},go_code:function(){var t=this;""!=this.pgone?0==this.timea&&this.$api.emsphone({phone:this.pgone,user_id:e.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){t.code="",e.showToast({title:"发送成功",duration:1e3,icon:"none"}),t.timea=60;var a=setInterval((function(){t.timea--,t.huoqu=t.timea+"s后获取",0==t.timea&&(clearInterval(a),t.huoqu="获取验证码")}),1e3)}else e.showToast({title:"发送失败",duration:1e3,icon:"none"})})):e.showToast({title:"请输入手机号",duration:1e3,icon:"none"})}}};t.default=a}).call(this,n("543d")["default"])},"1c43":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"fd95"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"7ae7"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"c9d7"))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,"9270"))}},i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"33c6":function(e,t,n){},"3b62":function(e,t,n){"use strict";n.r(t);var a=n("18e3"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"4ae9":function(e,t,n){"use strict";n.r(t);var a=n("1c43"),i=n("3b62");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("8b5e");var u,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1a7c07ea",null,!1,a["a"],u);t["default"]=c.exports},"8b5e":function(e,t,n){"use strict";var a=n("33c6"),i=n.n(a);i.a}},[["0f0d","common/runtime","common/vendor"]]]);