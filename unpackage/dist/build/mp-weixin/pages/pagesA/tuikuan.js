(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/tuikuan"],{"07c1":function(t,e,n){"use strict";n.r(e);var i=n("565d"),u=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=u.a},"12fc":function(t,e,n){"use strict";n.r(e);var i=n("579c"),u=n("07c1");for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("22ac");var a,o=n("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"35def494",null,!1,i["a"],a);e["default"]=r.exports},"22ac":function(t,e,n){"use strict";var i=n("42fc"),u=n.n(i);u.a},"42fc":function(t,e,n){},"565d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{shangchuan:!1,name:"image",formData:{},header:{token:t.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",list:[{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"},{check:!1,title:"不是自己想要的样式和颜色"}],text:"",title:"申请退款",orderid:"",imgf:[],type:""}},onLoad:function(t){t.title&&(this.title=t.title),this.type=t.type,this.orderid=t.orderid},methods:{uploaded:function(e,n){var i=e,u=[];i.forEach((function(t){u.push(t.response.data.status)})),this.imgf=u,this.shangchuan=!0,t.showToast({title:"图片上传完成",icon:"none"})},tuikuan:function(){this.$api.ordertui({type:this.type,orderid:this.orderid,user_id:t.getStorageSync("user_info").id,content:this.text,image:this.imgf}).then((function(e){1==e.data.code?(t.showToast({title:"申请成功",duration:1e3,icon:"success"}),t.$emit("number"),setTimeout((function(){t.navigateBack({delta:2})}),1e3)):t.showToast({title:e.data.msg,duration:1e3,icon:"success"})}))},xuanzhe:function(t){this.list[t].check=!this.list[t].check},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=n}).call(this,n("543d")["default"])},"579c":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"7ae7"))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,"9270"))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,"4dd2"))}},u=function(){var t=this,e=t.$createElement;t._self._c},c=[]},a1dd:function(t,e,n){"use strict";(function(t){n("c9dc");i(n("66fd"));var e=i(n("12fc"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["a1dd","common/runtime","common/vendor"]]]);