(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/uploadCase"],{180:function(e,t,i){"use strict";i.r(t);var s=i(181),n=i.n(s);for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);t["default"]=n.a},181:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(i(279)),s(i(280)),s(i(281));function s(e){return e&&e.__esModule?e:{default:e}}var n={data:function(){return{sheng:"",shi:"",qu:"",shengshiqu:"",showcity:!1,vider:this.$imgPath,namess:"image",formData:{},header:{token:e.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",name:"",content:"",labelName:"sf",selindex:-1,show:!1,title:"上传方案",fenmian:[],imgList:[],dropList:[{id:0,name:"请选择省市区",keys:"sf",value:""},{id:3,name:"请输入楼盘",keys:"loupan",value:""},{id:4,name:"请输入户型",keys:"huxin",value:""},{id:5,name:"请输入楼层",keys:"lc",value:""},{id:6,name:"请输入栋号",keys:"dh",value:""},{id:7,name:"请输入期数",keys:"qs",value:""}],options1:[],options2:[],upimgs:[],fenleiimg:[],suolv_fenleiimg:[],vr_fenleiimg:[],arrs:[],vrurl:"",videoList:""}},onLoad:function(){this.getChooseData()},methods:{gossss:function(){e.navigateTo({url:"../pagesB/images"})},selectImg:function(){e.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(t){var i=t.tempFilePaths;e.navigateTo({url:"../pagesB/images?img="+i[0]})}})},open:function(){this.showcity=!0},cityChange:function(e){this.sheng=e.province.label,this.shi=e.city.label,this.qu=e.area.label,this.shengshiqu=e.province.label+e.city.label+e.area.label,this.dropList[0].name=this.shengshiqu,this.dropList[0].value=this.shengshiqu},shanghcuanvideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(i){e.showLoading({title:"上传中",mask:!0}),e.uploadFile({url:t.action,filePath:i.tempFilePath,name:"image",formData:{},success:function(i){var s=JSON.parse(i.data);t.videoList=s.data.status,e.hideLoading()},fail:function(){e.hideLoading()}})}})},vr_remove:function(e){this.vr_fenleiimg.splice(e,1)},vr_uploaded:function(e){var t=e,i=[];t.forEach((function(e){i.push(e.response.data.status)})),this.vr_fenleiimg=[].concat(i)},suolv_remove:function(e){this.fenleiimg.splice(e,1)},suolv_uploaded:function(e){var t=e,i=[];t.forEach((function(e){i.push(e.response.data.status)})),this.fenleiimg=[].concat(i)},remove:function(e){this.upimgs.splice(e,1)},uploaded:function(e){var t=e,i=[];t.forEach((function(e){i.push(e.response.data.status)})),this.upimgs=[].concat(i)},getChooseData:function(){var e=this;this.$api.loupancategory().then((function(t){1==t.data.code&&(t.data.data.status.forEach((function(e){e.lc=e.lc+"楼",e.dh=e.dh+"栋",e.qs=e.qs+"期"})),e.options1=t.data.data.status,e.arrs=e.options1)}))},deletesame:function(e,t){var i=this,s=this.labelName,n="";t>0&&(n=this.dropList[t-1].keys);var a=[];this.arrs.forEach((function(s,o){t>0&&i.arrs[o]["".concat(n)]==i.dropList[t-1].name&&a.push(s),1==e&&a.push(s)})),this.arrs=a,this.options2=[];for(var o=0;o<a.length;o++)o>0&&a[o]["".concat(s)]==a[o-1]["".concat(s)]||this.options2.push(a[o])},confirm:function(e){this.dropList[this.selindex].name=e[0].label},showSelect:function(e){var t="";if(!(e>0&&(t=this.dropList[e-1].name,-1!=this.dropList[e-1].name.indexOf("选择")))){0==e&&(t=1),this.labelName=this.dropList[e].keys,this.deletesame(t,e),this.show=!0,this.selindex=e}},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.switchTab({url:"/pages/Home/Home"});break;default:}},fenmianssss:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(i){t.fenmian=i.tempFilePaths,e.uploadFile({url:"http://bao.scwushen.com/index.php/api/byd_user/addpostspic",filePath:t.fenmian[0],name:"image",formData:{},success:function(e){var i=JSON.parse(e.data);1==i.code&&(t.fenleiimg=i.data.status)}})}})},chooseImg:function(){var t=this;e.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(i){t.imgList=i.tempFilePaths,i.tempFilePaths.forEach((function(i){e.uploadFile({url:"http://bao.scwushen.com/index.php/api/byd_user/addpostspic",filePath:i,name:"image",formData:{},success:function(e){var i=JSON.parse(e.data);1==i.code&&t.upimgs.push(i.data.status)}})}))}})},sanchuvideo:function(){this.videoList=""},sanchufenmian:function(){this.fenmian=""},deleteimg:function(e){this.imgList.splice(e,1)},submit:function(){console.log(this.dropList);var t=[this.sheng,this.shi,this.qu,this.dropList[1].value,this.dropList[2].value,this.dropList[3].value,this.dropList[4].value,this.dropList[5].value,this.name,this.content,this.upimgs,this.fenleiimg,this.vr_fenleiimg,this.vrurl,this.videoList],i=[];t.forEach((function(t){if(""==t)return e.showToast({title:"请检查",icon:"none"});i.push("1")})),t.length==i.length&&this.$api.addprogramme({des_id:e.getStorageSync("des_info").id,sf:this.sheng,city:this.shi,county:this.qu,loupan:this.dropList[1].value,huxin:this.dropList[2].value,lc:this.dropList[3].value,dh:this.dropList[4].value,qs:this.dropList[5].value,name:this.name,content:this.content,image:this.upimgs,simage:this.fenleiimg,vr_image:this.vr_fenleiimg,vr_rul:this.vrurl,video:this.videoList}).then((function(t){if(1==t.data.code){var i={title:"提交成功",text:"你的资料平台正在加紧审核中，请留意电话",botton:"我知道了"};e.navigateTo({url:"./regSuccess?list="+JSON.stringify(i)})}}))}}};t.default=n}).call(this,i(0)["default"])},182:function(e,t,i){},261:function(e,t,i){"use strict";var s;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return s}));try{s={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,755))},uInput:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null,769))},uUpload:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-upload/u-upload")]).then(i.bind(null,770))},uCitySelect:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-city-select/u-city-select")]).then(i.bind(null,779))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];n._withStripped=!0},497:function(e,t,i){"use strict";(function(e){i(3);s(i(2));var t=s(i(498));function s(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i(0)["createPage"])},498:function(e,t,i){"use strict";i.r(t);var s=i(261),n=i(180);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i(499);var o,u=i(1),c=Object(u["a"])(n["default"],s["b"],s["c"],!1,null,"cb7d7bd2",null,!1,s["a"],o);c.options.__file="pages/pagesD/uploadCase.vue",t["default"]=c.exports},499:function(e,t,i){"use strict";var s=i(182),n=i.n(s);n.a}},[[497,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesD/uploadCase.js.map