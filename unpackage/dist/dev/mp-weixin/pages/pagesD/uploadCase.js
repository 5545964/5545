(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/uploadCase"],{582:function(e,t,i){"use strict";(function(e){i(5);n(i(3));var t=n(i(583));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i(1)["createPage"])},583:function(e,t,i){"use strict";i.r(t);var n=i(584),s=i(586);for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i(591);var o,r=i(11),u=Object(r["default"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"cb7d7bd2",null,!1,n["components"],o);u.options.__file="pages/pagesD/uploadCase.vue",t["default"]=u.exports},584:function(e,t,i){"use strict";i.r(t);var n=i(585);i.d(t,"render",(function(){return n["render"]})),i.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(t,"components",(function(){return n["components"]}))},585:function(e,t,i){"use strict";var n;i.r(t),i.d(t,"render",(function(){return s})),i.d(t,"staticRenderFns",(function(){return o})),i.d(t,"recyclableRender",(function(){return a})),i.d(t,"components",(function(){return n}));try{n={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,658))},uInput:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null,822))},uUpload:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-upload/u-upload")]).then(i.bind(null,830))},uCitySelect:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-city-select/u-city-select")]).then(i.bind(null,891))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,t=e.$createElement;e._self._c},a=!1,o=[];s._withStripped=!0},586:function(e,t,i){"use strict";i.r(t);var n=i(587),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},587:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(i(588)),n(i(589)),n(i(590));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return u(e)||r(e)||o(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(e,t):void 0}}function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={data:function(){return{sheng:"",shi:"",qu:"",shengshiqu:"",showcity:!1,vider:this.$imgPath,namess:"image",formData:{},header:{token:e.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",name:"",content:"",labelName:"sf",selindex:-1,show:!1,title:"上传方案",fenmian:[],imgList:[],dropList:[{id:0,name:"请选择省市区",keys:"sf",value:""},{id:3,name:"请输入楼盘",keys:"loupan",value:""},{id:4,name:"请输入户型",keys:"huxin",value:""},{id:5,name:"请输入楼层",keys:"lc",value:""},{id:6,name:"请输入栋号",keys:"dh",value:""},{id:7,name:"请输入期数",keys:"qs",value:""}],options1:[],options2:[],upimgs:[],upimgss:[],fenleiimg:[],fenleiimgs:[],suolv_fenleiimg:[],suolv_fenleiimgs:[],vr_fenleiimg:[],vr_fenleiimgs:[],arrs:[],vrurl:"",videoList:""}},onLoad:function(){var t=this;this.getChooseData();var i=e.getStorageSync("chengshi");i&&(this.sheng=i[0],this.shi=i[1],this.qu=i[2]);var n=e.getStorageSync("dropList");n&&(this.dropList=n);var a=e.getStorageSync("fanganname");a&&(this.name=a);var o=e.getStorageSync("fangancontent");o&&(this.content=o);var r=e.getStorageSync("fanganvrurl");r&&(this.vrurl=r);var u=e.getStorageSync("videoList");u&&(this.videoList=u);var c=e.getStorageSync("fenleiimg");c&&(this.fenleiimg=s(c),c.forEach((function(e){t.fenleiimgs.push({url:t.$imgPath+e})})));var l=e.getStorageSync("upimgs");l&&(this.upimgs=s(l),l.forEach((function(e){t.upimgss.push({url:t.$imgPath+e})})));var h=e.getStorageSync("vr_fenleiimg");h&&(this.vr_fenleiimg=s(h),h.forEach((function(e){t.vr_fenleiimgs.push({url:t.$imgPath+e})})))},methods:{fcun:function(){e.setStorageSync("dropList",this.dropList),e.setStorageSync("fanganname",this.name),e.setStorageSync("fangancontent",this.content),e.setStorageSync("fanganvrurl",this.vrurl)},gossss:function(){e.navigateTo({url:"../pagesB/images"})},selectImg:function(){e.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(t){var i=t.tempFilePaths;e.navigateTo({url:"../pagesB/images?img="+i[0]})}})},open:function(){this.showcity=!0},cityChange:function(t){this.sheng=t.province.label,this.shi=t.city.label,this.qu=t.area.label,e.setStorageSync("chengshi",[this.sheng,this.shi,this.qu]),this.shengshiqu=t.province.label+t.city.label+t.area.label,this.dropList[0].name=this.shengshiqu,this.dropList[0].value=this.shengshiqu},shanghcuanvideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(i){e.showLoading({title:"上传中",mask:!0}),e.uploadFile({url:t.action,filePath:i.tempFilePath,name:"image",formData:{},success:function(i){var n=JSON.parse(i.data);t.videoList=n.data.status,e.setStorageSync("videoList",t.videoList),e.hideLoading()},fail:function(){e.hideLoading()}})}})},vr_remove:function(t){this.vr_fenleiimg.splice(t,1),e.setStorageSync("vr_fenleiimg",this.vr_fenleiimg)},vr_uploaded:function(t){var i=t,n=[];i.forEach((function(e){n.push(e.response.data.status)})),this.vr_fenleiimg=[].concat(n),e.setStorageSync("vr_fenleiimg",this.vr_fenleiimg)},suolv_remove:function(t){this.fenleiimg.splice(t,1),e.setStorageSync("fenleiimg",this.fenleiimg)},suolv_uploaded:function(t){var i=t,n=[];i.forEach((function(e){n.push(e.response.data.status)})),this.fenleiimg=[].concat(n),e.setStorageSync("fenleiimg",this.fenleiimg)},remove:function(t){this.upimgs.splice(t,1),e.setStorageSync("upimgs",this.upimgs)},uploaded:function(t){var i=t,n=[];i.forEach((function(e){n.push(e.response.data.status)})),this.upimgs=[].concat(n),e.setStorageSync("upimgs",this.upimgs)},getChooseData:function(){var e=this;this.$api.loupancategory().then((function(t){1==t.data.code&&(t.data.data.status.forEach((function(e){e.lc=e.lc+"楼",e.dh=e.dh+"栋",e.qs=e.qs+"期"})),e.options1=t.data.data.status,e.arrs=e.options1)}))},deletesame:function(e,t){var i=this,n=this.labelName,s="";t>0&&(s=this.dropList[t-1].keys);var a=[];this.arrs.forEach((function(n,o){t>0&&i.arrs[o]["".concat(s)]==i.dropList[t-1].name&&a.push(n),1==e&&a.push(n)})),this.arrs=a,this.options2=[];for(var o=0;o<a.length;o++)o>0&&a[o]["".concat(n)]==a[o-1]["".concat(n)]||this.options2.push(a[o])},confirm:function(e){this.dropList[this.selindex].name=e[0].label},showSelect:function(e){var t="";if(!(e>0&&(t=this.dropList[e-1].name,-1!=this.dropList[e-1].name.indexOf("选择")))){0==e&&(t=1),this.labelName=this.dropList[e].keys,this.deletesame(t,e),this.show=!0,this.selindex=e}},back:function(t){switch(t){case 0:e.navigateBack(-1);break;case 1:e.reLaunch({url:"/pages/Home/Home"});break;default:}},fenmianssss:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(i){t.fenmian=i.tempFilePaths,e.uploadFile({url:"http://bao.scwushen.com/index.php/api/byd_user/addpostspic",filePath:t.fenmian[0],name:"image",formData:{},success:function(e){var i=JSON.parse(e.data);1==i.code&&(t.fenleiimg=i.data.status)}})}})},chooseImg:function(){var t=this;e.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(i){t.imgList=i.tempFilePaths,i.tempFilePaths.forEach((function(i){e.uploadFile({url:"http://bao.scwushen.com/index.php/api/byd_user/addpostspic",filePath:i,name:"image",formData:{},success:function(e){var i=JSON.parse(e.data);1==i.code&&t.upimgs.push(i.data.status)}})}))}})},sanchuvideo:function(){this.videoList="",e.setStorageSync("videoList","")},sanchufenmian:function(){this.fenmian=""},deleteimg:function(e){this.imgList.splice(e,1)},submit:function(){var t=[this.sheng,this.shi,this.qu,this.dropList[1].value,this.dropList[2].value,this.dropList[3].value,this.dropList[4].value,this.dropList[5].value,this.name,this.upimgs,this.fenleiimg,this.vr_fenleiimg,this.vrurl,this.videoList],i=[];t.forEach((function(t){if(""==t)return e.showToast({title:"请检查",icon:"none"});i.push("1")})),t.length==i.length&&this.$api.addprogramme({des_id:e.getStorageSync("des_info").id,sf:this.sheng,city:this.shi,county:this.qu,loupan:this.dropList[1].value,huxin:this.dropList[2].value,lc:this.dropList[3].value,dh:this.dropList[4].value,qs:this.dropList[5].value,name:this.name,content:this.content,image:this.upimgs,simage:this.fenleiimg,vr_image:this.vr_fenleiimg,vr_rul:this.vrurl,video:this.videoList}).then((function(t){if(1==t.data.code){var i={title:"提交成功",text:"你的资料平台正在加紧审核中，请留意电话",botton:"我知道了"};e.navigateTo({url:"./regSuccess?list="+JSON.stringify(i)})}}))}}};t.default=l}).call(this,i(1)["default"])},591:function(e,t,i){"use strict";i.r(t);var n=i(592),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},592:function(e,t,i){}},[[582,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesD/uploadCase.js.map