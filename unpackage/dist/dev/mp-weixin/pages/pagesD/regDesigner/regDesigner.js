(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/regDesigner/regDesigner"],{554:function(t,e,i){"use strict";(function(t){i(5);n(i(4));var e=n(i(555));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i(1)["createPage"])},555:function(t,e,i){"use strict";i.r(e);var n=i(556),o=i(558);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i(560);var a,r=i(11),u=Object(r["default"])(o["default"],n["render"],n["staticRenderFns"],!1,null,"501777d9",null,!1,n["components"],a);u.options.__file="pages/pagesD/regDesigner/regDesigner.vue",e["default"]=u.exports},556:function(t,e,i){"use strict";i.r(e);var n=i(557);i.d(e,"render",(function(){return n["render"]})),i.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(e,"components",(function(){return n["components"]}))},557:function(t,e,i){"use strict";var n;i.r(e),i.d(e,"render",(function(){return o})),i.d(e,"staticRenderFns",(function(){return a})),i.d(e,"recyclableRender",(function(){return s})),i.d(e,"components",(function(){return n}));try{n={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,659))},uRadioGroup:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-radio-group/u-radio-group")]).then(i.bind(null,899))},uRadio:function(){return i.e("uview-ui/components/u-radio/u-radio").then(i.bind(null,906))},uInput:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null,823))},uUpload:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-upload/u-upload")]).then(i.bind(null,831))},uCitySelect:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-city-select/u-city-select")]).then(i.bind(null,892))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.show=!0},t.e1=function(e){t.show=!0})},s=!1,a=[];o._withStripped=!0},558:function(t,e,i){"use strict";i.r(e);var n=i(559),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},559:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(e){var i=this;e.nageid?this.ididiidid=e.nageid:this.ididiidid=t.getStorageSync("level"),this.inpList[6].text=t.getStorageSync("user_info").mobile,this.action=this.$shangchuan+"/api/byd_user/addpostspic";var n=t.getStorageSync("inpList");n&&(this.inpList[0].text=n[0].text,this.inpList[1].text=n[1].text,this.inpList[2].text=n[2].text,this.inpList[3].text=n[4].text,this.inpList[4].text=n[5].text,this.inpList[5].text=n[6].text,this.inpList[6].text=n[3].text,0==n[1].text?this.value="男":this.value="女");var o=t.getStorageSync("upimgs");o&&(this.upimgs=o,o.forEach((function(t){i.kanimg.push({url:i.$imgPath+t})})))},data:function(){return{value:"",ididiidid:0,huoqu:"获取验证码",time:0,code:"",kanimg:[],header:{},formData:{},action:"",show:!1,title:"注册设计师合伙人",inpList:[{id:0,name:"姓名",placeholder:"请输入您的姓名",text:"",aa:""},{id:1,name:"性别",placeholder:"街道、小区门牌等详细地址",text:"",aa:"sex"},{id:2,name:"身份证号码",placeholder:"请输入您的身份证号码",text:"",aa:""},{id:3,name:"电子邮箱",placeholder:"请输入您的电子邮箱",text:"",aa:""},{id:4,name:"所在地区",placeholder:"请选择您的所在地区",text:"请选择您的所在地区",aa:""},{id:5,name:"详细地址",placeholder:"街道、小区门牌等详细地址",text:"",aa:""},{id:6,name:"手机号码",placeholder:"请输入您的手机号码",text:"",aa:"phone"}],imgList:[],upimgs:[],timea:0,list:[{name:"男",disabled:!1},{name:"女",disabled:!1}]}},methods:{radioGroupChange:function(t){this.value=t,this.inpList[1].text="男"==t?"0":"1"},go_code:function(){var e=this;0==this.timea&&this.$api.emsphone({phone:this.inpList[6].text,user_id:t.getStorageSync("user_info").id}).then((function(i){if(1==i.data.code){t.showToast({title:"发送成功",duration:1e3,icon:"none"}),e.timea=60;var n=setInterval((function(){e.timea--,e.huoqu=e.timea+"s后获取",0==e.timea&&(clearInterval(n),e.huoqu="获取验证码")}),1e3)}else t.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},shangchuan:function(t){this.upimgs.push(t.data.status)},cityChange:function(t){this.inpList[4].text=t.province.label+t.city.label+t.area.label},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}},deleteimg:function(t){this.upimgs.splice(t,1)},submit:function(){var e=this;t.setStorageSync("level",this.ididiidid),t.setStorageSync("inpList",this.inpList),t.setStorageSync("upimgs",this.upimgs),""!=this.code?this.$api.emsyzphone({phone:this.inpList[6].text,yzm:this.code}).then((function(i){console.log(e.inpList),1==i.data.code?e.submits():t.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):t.showToast({title:"请输入验证码",duration:1e3,icon:"none"})},submits:function(){var e=[];this.inpList.forEach((function(t){if(""===t.text)return!1;e.push("1")})),this.inpList.length==e.length&&""!=this.upimgs?this.$api.adddes({user_id:t.getStorageSync("user_info").id,username:this.inpList[0].text,idcart:this.inpList[2].text,address:this.inpList[4].text,email:this.inpList[3].text,mobile:this.inpList[6].text,desimage:this.upimgs,addressxq:this.inpList[5].text,sex:this.inpList[1].text,level:this.ididiidid}).then((function(e){if(1==e.data.code){var i={title:"提交成功",text:"你的资料平台正在加紧审核中，请留意站内信息",botton:"我知道了",navbar:"注册设计师"};t.navigateTo({url:"../regSuccess?list="+JSON.stringify(i)})}else t.showToast({title:e.data.msg,icon:"none"})})):t.showToast({title:"请检查资料",icon:"none"})}}};e.default=i}).call(this,i(1)["default"])},560:function(t,e,i){"use strict";i.r(e);var n=i(561),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},561:function(t,e,i){}},[[554,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/pagesD/regDesigner/regDesigner.js.map