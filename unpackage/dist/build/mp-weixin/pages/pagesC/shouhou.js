(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesC/shouhou"],{3496:function(t,e,n){"use strict";(function(t){function n(t){return u(t)||o(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return r(t)}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{qwer:"请选择",show:!1,list:[{value:"1",label:"不是自己想要的样式和颜色"},{value:"2",label:"商品与页面描述不符"},{value:"2",label:"商品价格变化"},{value:"2",label:"商品质量问题"},{value:"2",label:"其他"}],imgtitle:this.$imgPath,imglist:[],name:"image",formData:{},header:{token:t.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",text:"",title:"申请售后",shopid:"",orderid:"",alls_item:{},shangchuan:!1,shsh:0,shop_data:[]}},onLoad:function(t){t.title&&(this.title=t.title),this.alls_item=JSON.parse(t.item),this.alls_item.shop.forEach((function(t){t["checked"]=!1})),this.shop_data=n(this.alls_item.shop)},methods:{changyong:function(t){this.qwer=t[0].label},xuansss:function(t){var e=this.shop_data;e[t].checked=!e[t].checked,this.shop_data=[],this.shop_data=n(e)},xuan:function(t){this.shsh=t},remove:function(t){this.imglist.splice(t,1)},uploaded:function(e){var n=e,i=[];n.forEach((function(t){i.push(t.response.data.status)})),this.imglist=i,this.shangchuan=!0,t.showToast({title:"图片上传完成",icon:"none"})},fa:function(){var e=[],n=[];this.shop_data.forEach((function(t){t.checked&&(e.push(t.id),n.push(t.num))})),this.$api.sqorder({user_id:t.getStorageSync("user_info").id,type:this.shsh,orderid:this.alls_item.orderid,shopid:e,num:n,tuik_ly:this.text+"-"+this.qwer,image:this.imglist.length>0?this.imglist:""}).then((function(e){1==e.data.code?(t.showToast({title:"申请售后成功",duration:1e3,icon:"success"}),setTimeout((function(){t.navigateBack(-1)}),1e3)):t.showToast({title:e.data.msg,duration:1e3,icon:"success"})}))},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=s}).call(this,n("543d")["default"])},"4b35":function(t,e,n){"use strict";n.r(e);var i=n("3496"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7180:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"7ae7"))},uSelect:function(){return n.e("uview-ui/components/u-select/u-select").then(n.bind(null,"575f"))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,"4dd2"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.show=!0})},o=[]},7914:function(t,e,n){"use strict";(function(t){n("c9dc");i(n("66fd"));var e=i(n("90b4"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"90b4":function(t,e,n){"use strict";n.r(e);var i=n("7180"),a=n("4b35");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("fef3");var u,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"6667fa75",null,!1,i["a"],u);e["default"]=s.exports},"9a8f":function(t,e,n){},fef3:function(t,e,n){"use strict";var i=n("9a8f"),a=n.n(i);a.a}},[["7914","common/runtime","common/vendor"]]]);