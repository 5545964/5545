(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/regDesigner/regDesigner"],{502:function(t,e,n){"use strict";(function(t){n(5);i(n(3));var e=i(n(503));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},503:function(t,e,n){"use strict";n.r(e);var i=n(504),s=n(506);for(var o in s)"default"!==o&&function(t){n.d(e,t,(function(){return s[t]}))}(o);n(508);var a,r=n(11),u=Object(r["default"])(s["default"],i["render"],i["staticRenderFns"],!1,null,"501777d9",null,!1,i["components"],a);u.options.__file="pages/pagesD/regDesigner/regDesigner.vue",e["default"]=u.exports},504:function(t,e,n){"use strict";n.r(e);var i=n(505);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},505:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return s})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return i}));try{i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,614))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,718))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,726))},uCitySelect:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-city-select/u-city-select")]).then(n.bind(null,803))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.show=!0},t.e1=function(e){t.show=!0})},o=!1,a=[];s._withStripped=!0},506:function(t,e,n){"use strict";n.r(e);var i=n(507),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=s.a},507:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLoad:function(e){var n=this;this.ididiidid=e.nageid,console.log(e),this.action=this.$shangchuan+"/api/byd_user/addpostspic";var i=t.getStorageSync("inpList");i&&(this.inpList[0].text=i[0].text,this.inpList[1].text=i[1].text,this.inpList[2].text=i[2].text,this.inpList[3].text=i[3].text,this.inpList[4].text=i[4].text,this.inpList[5].text=i[5].text);var s=t.getStorageSync("upimgs");s&&(this.upimgs=s,s.forEach((function(t){n.kanimg.push({url:n.$imgPath+t})})))},data:function(){return{ididiidid:0,huoqu:"获取验证码",time:0,code:"",kanimg:[],header:{},formData:{},action:"",show:!1,title:"注册设计师",inpList:[{id:0,name:"姓名",placeholder:"请输入您的姓名",text:"",aa:""},{id:1,name:"身份证号码",placeholder:"请输入您的身份证号码",text:"",aa:""},{id:2,name:"手机号码",placeholder:"请输入您的手机号码",text:"",aa:"phone"},{id:3,name:"电子邮箱",placeholder:"请输入您的电子邮箱",text:"",aa:""},{id:4,name:"所在地区",placeholder:"请选择您的所在地区",text:"请选择您的所在地区",aa:""},{id:5,name:"详细地址",placeholder:"街道、小区门牌等详细地址",text:"",aa:""}],imgList:[],upimgs:[]}},methods:{go_code:function(){var e=this;if(0==this.time){if(!/^[1]([3-9])[0-9]{9}$/.test(this.inpList[2].text))return void t.showToast({title:"请检查手机号码",icon:"none"});this.time=60;var n=setInterval((function(){e.time--,e.huoqu=e.time+"s后获取",0==e.time&&(clearInterval(n),e.huoqu="获取验证码")}),1e3)}},shangchuan:function(t){this.upimgs.push(t.data.status)},cityChange:function(t){this.inpList[4].text=t.province.label+t.city.label+t.area.label},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}},deleteimg:function(t){this.upimgs.splice(t,1)},submit:function(){if(!/^[1]([3-9])[0-9]{9}$/.test(this.inpList[2].text))return t.showToast({title:"手机号码有误，请重填",icon:"none"}),this.inpList[2].text="",!1;this.inpList.push({level:this.ididiidid}),t.setStorageSync("inpList",this.inpList),t.setStorageSync("upimgs",this.upimgs);var e=[];this.inpList.forEach((function(t){if(""==t.text)return!1;e.push("1")})),this.inpList.length==e.length&&""!=this.upimgs?this.$api.adddes({user_id:t.getStorageSync("user_info").id,username:this.inpList[0].text,idcart:this.inpList[1].text,address:this.inpList[4].text,email:this.inpList[3].text,mobile:this.inpList[2].text,desimage:this.upimgs,addressxq:this.inpList[5].text,level:this.inpList[6].level}).then((function(e){if(1==e.data.code){var n={title:"提交成功",text:"你的资料平台正在加紧审核中，请留意电话",botton:"我知道了",navbar:"注册设计师"};t.navigateTo({url:"../regSuccess?list="+JSON.stringify(n)})}else t.showToast({title:e.data.msg,icon:"none"})})):t.showToast({title:"请检查资料",icon:"none"})}}};e.default=n}).call(this,n(1)["default"])},508:function(t,e,n){"use strict";n.r(e);var i=n(509),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=s.a},509:function(t,e,n){}},[[502,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/pagesD/regDesigner/regDesigner.js.map