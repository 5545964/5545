(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/address"],{"04a1":function(t,n,e){},"176a":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"452c"))},uInput:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-input/u-input")]).then(e.bind(null,"fd95"))},uSwitch:function(){return e.e("uview-ui/components/u-switch/u-switch").then(e.bind(null,"d342"))},uHeigth:function(){return e.e("uview-ui/components/u-heigth/u-heigth").then(e.bind(null,"9270"))}},i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},2872:function(t,n,e){"use strict";e.r(n);var a=e("176a"),i=e("63a8");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("52b4");var s,o=e("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"692f4506",null,!1,a["a"],s);n["default"]=c.exports},"29b6":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{mnmn:"",title:"",data:{},name:"",phone:"",address:"",moren:0,type:1,id:0}},onLoad:function(t){this.title=t.title,t.data&&(this.data=JSON.parse(t.data),this.name=this.data.username,this.phone=this.data.phone,this.address=this.data.address,this.mnmn=this.data.title,this.moren=this.data.auto,this.type=0,this.id=this.data.id)},methods:{selece:function(){var n=this;t.showModal({title:"提示",content:"是否删除地址？",success:function(e){e.confirm?n.$api.addressdel({userid:t.getStorageSync("user_info").id,id:n.id}).then((function(n){1==n.data.code?t.navigateBack({delta:1}):t.showModal({title:n.data.msg})})):e.cancel}})},submit:function(){var n=this.phone;if(!/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(n))return t.showToast({title:"手机号码有误，请重填",icon:"none"}),this.phone="",!1;this.$api.address({userid:t.getStorageSync("user_info").id,username:this.name,phone:this.phone,address:this.address,title:this.mnmn,auto:this.moren,type:this.type,id:this.id}).then((function(n){1==n.data.code?t.navigateBack({delta:1}):t.showModal({title:n.data.msg})}))},xuanzhe:function(){var n=this;t.chooseLocation({success:function(t){n.mnmn=t.address,n.address=t.name}})},change:function(t){this.moren=t},back:function(n){switch(n){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};n.default=e}).call(this,e("543d")["default"])},"52b4":function(t,n,e){"use strict";var a=e("04a1"),i=e.n(a);i.a},"63a8":function(t,n,e){"use strict";e.r(n);var a=e("29b6"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},e3b7:function(t,n,e){"use strict";(function(t){e("c9dc");a(e("66fd"));var n=a(e("2872"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])}},[["e3b7","common/runtime","common/vendor"]]]);