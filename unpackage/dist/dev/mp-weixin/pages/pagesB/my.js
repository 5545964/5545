(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/my"],{353:function(t,i,s){"use strict";(function(t){s(5);e(s(3));var i=e(s(354));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=s,t(i.default)}).call(this,s(1)["createPage"])},354:function(t,i,s){"use strict";s.r(i);var e=s(355),n=s(357);for(var a in n)"default"!==a&&function(t){s.d(i,t,(function(){return n[t]}))}(a);s(359);var o,d=s(11),u=Object(d["default"])(n["default"],e["render"],e["staticRenderFns"],!1,null,"0019ec98",null,!1,e["components"],o);u.options.__file="pages/pagesB/my.vue",i["default"]=u.exports},355:function(t,i,s){"use strict";s.r(i);var e=s(356);s.d(i,"render",(function(){return e["render"]})),s.d(i,"staticRenderFns",(function(){return e["staticRenderFns"]})),s.d(i,"recyclableRender",(function(){return e["recyclableRender"]})),s.d(i,"components",(function(){return e["components"]}))},356:function(t,i,s){"use strict";var e;s.r(i),s.d(i,"render",(function(){return n})),s.d(i,"staticRenderFns",(function(){return o})),s.d(i,"recyclableRender",(function(){return a})),s.d(i,"components",(function(){return e}));try{e={uNavbar:function(){return s.e("uview-ui/components/u-navbar/u-navbar").then(s.bind(null,641))},uInput:function(){return Promise.all([s.e("common/vendor"),s.e("uview-ui/components/u-input/u-input")]).then(s.bind(null,791))},uUpload:function(){return Promise.all([s.e("common/vendor"),s.e("uview-ui/components/u-upload/u-upload")]).then(s.bind(null,799))},uPopup:function(){return s.e("uview-ui/components/u-popup/u-popup").then(s.bind(null,720))},uCitySelect:function(){return Promise.all([s.e("common/vendor"),s.e("uview-ui/components/u-city-select/u-city-select")]).then(s.bind(null,862))}}}catch(d){if(-1===d.message.indexOf("Cannot find module")||-1===d.message.indexOf(".vue"))throw d;console.error(d.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.show=!0})},a=!1,o=[];n._withStripped=!0},357:function(t,i,s){"use strict";s.r(i);var e=s(358),n=s.n(e);for(var a in e)"default"!==a&&function(t){s.d(i,t,(function(){return e[t]}))}(a);i["default"]=n.a},358:function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{yanzhengshoujihao:"",time:0,huoqu:"获取验证码",code:"",showcity:!1,header:{},formData:{},imgtitle:this.$imgPath,action:this.$shangchuan+"/api/byd_user/addpostspic",active:-1,show:!1,data_list:[],list:[{id:0,name:"头像上传",status:"upload"},{id:1,name:"昵称",placeholder:"请填写昵称",status:"text",inp:""},{id:2,name:"个人编号",text:"",status:"disabled"},{id:3,name:"真实姓名",placeholder:"请填写真实姓名",status:"text",inp:""},{id:4,name:"名片职务",text:"名片",status:"disabled",inp:"名片"},{id:5,name:"微信号",placeholder:"请填写微信号",status:"text",inp:""},{id:6,name:"手机号",placeholder:"请填写手机号",status:"phone",inp:""},{id:7,name:"邮编",placeholder:"请填写邮编",status:"text",inp:""},{id:8,name:"邮箱",placeholder:"请填写邮箱",status:"text",inp:""},{id:9,name:"所在地区",placeholder:"请填写所在地区",status:"text",inp:"请填写所在地区"},{id:10,name:"详细地址",placeholder:"街道、小区门牌等详细地址",status:"textarea",inp:""},{id:11,name:"设计师标签",status:"designbiao"},{id:12,name:"设计师代表作",status:"designupload"}],title:"个人资料编辑",desinfo:{},modeList:[],actList:[],isdes:"",imgList:[],imgListsss:[],avatar:"",avatarss:"",djsahkdjhaslk:""}},onLoad:function(i){var s=this;i.title&&(this.title=i.title),1==i.isdesign?(this.isdes=i.isdesign,this.getmode(),this.desinfo=t.getStorageSync("des_info"),this.avatarss=this.desinfo.avatar,-1==this.desinfo.avatar.indexOf("https")?this.avatar=[{url:this.$imgPath+this.desinfo.avatar}]:this.avatar=[{url:this.desinfo.avatar}],this.list[1].inp=this.desinfo.nickname,this.list[2].inp=this.desinfo.myself,this.list[3].inp=this.desinfo.username,this.list[4].inp=this.desinfo.bbs.type,this.list[5].inp=this.desinfo.wechat,this.list[6].inp=this.desinfo.mobile,this.yanzhengshoujihao=this.desinfo.mobile,this.list[7].inp=this.desinfo.yb,this.list[8].inp=this.desinfo.email,this.list[9].inp=this.desinfo.address,this.list[10].inp=this.desinfo.addressxq,this.actList=this.desinfo.label.split(","),""!=this.desinfo.work&&(this.imgListsss=this.desinfo.work.split(","),this.desinfo.work.split(",").forEach((function(t){s.imgList.push({url:s.$imgPath+t})})))):(this.desinfo=t.getStorageSync("user_info"),this.avatar=[{url:this.desinfo.avatar}],this.avatarss=this.desinfo.avatar.slice(this.$imgPath.length),this.list[1].inp=this.desinfo.nickname,this.list[2].inp=this.desinfo.bh,this.list[3].inp=this.desinfo.username,this.list[4].inp=this.desinfo.bbs.type,this.list[5].inp=this.desinfo.wechat,this.list[6].inp=this.desinfo.mobile,this.list[7].inp=this.desinfo.yb,this.list[8].inp=this.desinfo.email,this.list[9].inp=this.desinfo.address,this.list[10].inp=this.desinfo.addressxq,this.yanzhengshoujihao=this.list[6].inp)},methods:{go_code:function(){var i=this;0==this.time&&this.$api.emsphone({phone:this.list[6].inp,user_id:t.getStorageSync("user_info").id}).then((function(s){if(1==s.data.code){t.showToast({title:"发送成功",duration:1e3,icon:"none"}),i.timea=60;var e=setInterval((function(){i.timea--,i.huoqu=i.timea+"s后获取",0==i.timea&&(clearInterval(e),i.huoqu="获取验证码")}),1e3)}else t.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},asdfg:function(t){console.log(t),this.imgListsss.push(t.data.status)},deleteimg:function(t){this.imgListsss.splice(t,1),console.log(this.imgListsss)},shangchuan:function(t){1==this.isdes?(this.avatarss=t.data.status,this.avatar=this.$imgPath+t.data.status):(this.avatarss=t.data.status,this.avatar=t.data.status),console.log(this.avatarss,this.avatar)},showcitys:function(t){9==t.id&&(this.showcity=!0)},cityChange:function(t){this.list[9].inp=t.province.label+t.city.label+t.area.label},chooseavatar:function(){var i=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(s){s.tempFilePaths.forEach((function(s){t.uploadFile({url:i.$shangchuan+"/api/byd_user/addpostspic",filePath:s,name:"image",formData:{},success:function(t){var s=JSON.parse(t.data);1==s.code&&(i.avatar=s.data.status,-1!=s.data.status.indexOf("/uploads")&&(s.data.status=i.$imgPath+s.data.status),i.desinfo.avatar=s.data.status)}})}))}})},resest:function(){this.modeList.forEach((function(t){t.act=!1}))},activeMode:function(){var t=this;this.actList=[],this.modeList.forEach((function(i){i.act&&t.actList.push(i.title)})),this.show=!1},change:function(t){t.act=!t.act},getmode:function(){var t=this;this.$api.desmode().then((function(i){1==i.data.code&&(i.data.data.status.forEach((function(t){t["act"]=!1})),t.modeList=i.data.data.status)}))},tijiao:function(i){var s=this;this.yanzhengshoujihao!=this.list[6].inp?""!=this.code?this.$api.emsyzphone({phone:this.list[6].inp,yzm:this.code}).then((function(e){1==e.data.code?s.tijiaos(i):t.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):t.showToast({title:"请输入验证码",duration:1e3,icon:"none"}):this.tijiaos(i)},tijiaos:function(i){var s=this;if(1==this.isdes){if(!this.list[1].inp||!this.list[3].inp||!this.list[5].inp||!this.list[6].inp||!this.list[7].inp||!this.list[8].inp)return void t.showModal({title:"请填写完整信息"});if(0==this.actList.length)return void t.showToast({title:"请检查标签",icon:"none"});this.$api.editdes({id:this.desinfo.id,nickname:this.list[1].inp,username:this.list[3].inp,level:this.list[4].text,wechat:this.list[5].inp,yb:this.list[7].inp,email:this.list[8].inp,address:this.list[9].inp,addressxq:this.list[10].inp,avatar:this.avatarss,label:this.actList,work:this.imgListsss,mobile:this.list[6].inp}).then((function(i){1==i.data.code&&(t.showToast({title:i.data.msg,duration:1e3,icon:"success"}),s.$api.desmyuser({user_id:t.getStorageSync("user_info").id}).then((function(i){1==i.data.code&&t.setStorageSync("des_info",i.data.data.myuser)})),setTimeout((function(){t.navigateBack(-1)}),500))}))}else this.$api.edituser({id:t.getStorageSync("user_info").id,avatar:this.avatarss,nickname:this.list[1].inp,username:this.list[3].inp,wechat:this.list[5].inp,mobile:this.list[6].inp,yb:this.list[7].inp,email:this.list[8].inp,address:this.list[9].inp,addressxq:this.list[10].inp}).then((function(i){t.showToast({title:i.data.msg,duration:1e3,icon:"none"}),1==i.data.code&&s.$api.myuser({user_id:t.getStorageSync("user_info").id}).then((function(i){1==i.data.code&&(t.setStorageSync("user_info",i.data.data.myuser),t.navigateBack(-1))}))}))},back:function(i){switch(i){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};i.default=s}).call(this,s(1)["default"])},359:function(t,i,s){"use strict";s.r(i);var e=s(360),n=s.n(e);for(var a in e)"default"!==a&&function(t){s.d(i,t,(function(){return e[t]}))}(a);i["default"]=n.a},360:function(t,i,s){}},[[353,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/my.js.map