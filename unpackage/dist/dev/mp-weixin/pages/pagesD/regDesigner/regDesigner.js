(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/regDesigner/regDesigner"],{169:function(t,e,i){"use strict";i.r(e);var n=i(170),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},170:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(){var e=this;this.action=this.$shangchuan+"/api/byd_user/addpostspic";var i=t.getStorageSync("inpList");i&&(this.inpList[0].text=i[0].text,this.inpList[1].text=i[1].text,this.inpList[2].text=i[2].text,this.inpList[3].text=i[3].text,this.inpList[4].text=i[4].text,this.inpList[5].text=i[5].text);var n=t.getStorageSync("upimgs");n&&(this.upimgs=n,n.forEach((function(t){e.kanimg.push({url:e.$imgPath+t})})))},data:function(){return{kanimg:[],header:{},formData:{},action:"",show:!1,title:"注册设计师",inpList:[{id:0,name:"姓名",placeholder:"请输入您的姓名",text:""},{id:1,name:"身份证号码",placeholder:"请输入您的身份证号码",text:""},{id:2,name:"手机号码",placeholder:"请输入您的手机号码",text:""},{id:3,name:"电子邮箱",placeholder:"请输入您的电子邮箱",text:""},{id:4,name:"所在地区",placeholder:"请选择您的所在地区",text:"请选择您的所在地区"},{id:5,name:"详细地址",placeholder:"街道、小区门牌等详细地址",text:""}],imgList:[],upimgs:[]}},methods:{shangchuan:function(t){this.upimgs.push(t.data.status)},cityChange:function(t){this.inpList[4].text=t.province.label+t.city.label+t.area.label},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.switchTab({url:"/pages/Home/Home"});break;default:}},deleteimg:function(t){this.upimgs.splice(t,1)},submit:function(){if(!/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(this.inpList[2].text))return t.showToast({title:"手机号码有误，请重填",icon:"none"}),this.inpList[2].text="",!1;t.setStorageSync("inpList",this.inpList),t.setStorageSync("upimgs",this.upimgs);var e=[];this.inpList.forEach((function(t){if(""==t.text)return!1;e.push("1")})),this.inpList.length==e.length&&""!=this.upimgs?this.$api.adddes({user_id:t.getStorageSync("user_info").id,username:this.inpList[0].text,idcart:this.inpList[1].text,address:this.inpList[4].text,email:this.inpList[3].text,mobile:this.inpList[2].text,desimage:this.upimgs,addressxq:this.inpList[5].text}).then((function(e){if(1==e.data.code){var i={title:"提交成功",text:"你的资料平台正在加紧审核中，请留意电话",botton:"我知道了",navbar:"注册设计师"};t.navigateTo({url:"../regSuccess?list="+JSON.stringify(i)})}else t.showToast({title:e.data.msg,icon:"none"})})):t.showToast({title:"请检查资料",icon:"none"})}}};e.default=i}).call(this,i(0)["default"])},171:function(t,e,i){},257:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));try{n={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,755))},uUpload:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-upload/u-upload")]).then(i.bind(null,770))},uCitySelect:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-city-select/u-city-select")]).then(i.bind(null,779))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.show=!0})},a=[];s._withStripped=!0},486:function(t,e,i){"use strict";(function(t){i(3);n(i(2));var e=n(i(487));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i(0)["createPage"])},487:function(t,e,i){"use strict";i.r(e);var n=i(257),s=i(169);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i(488);var o,r=i(1),u=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"501777d9",null,!1,n["a"],o);u.options.__file="pages/pagesD/regDesigner/regDesigner.vue",e["default"]=u.exports},488:function(t,e,i){"use strict";var n=i(171),s=i.n(n);s.a}},[[486,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/pagesD/regDesigner/regDesigner.js.map