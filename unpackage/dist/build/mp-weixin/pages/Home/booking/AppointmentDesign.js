(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/booking/AppointmentDesign"],{"2c1d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"452c"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"fd95"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"7ae7"))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,"9270"))},uSelect:function(){return n.e("uview-ui/components/u-select/u-select").then(n.bind(null,"575f"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"c9d7"))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-picker/u-picker")]).then(n.bind(null,"31a4"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"d62c"))}},a=function(){var t=this,e=t.$createElement;t._self._c},s=[]},"2f16":function(t,e,n){},7502:function(t,e,n){"use strict";n.r(e);var i=n("e01b"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},d260:function(t,e,n){"use strict";n.r(e);var i=n("2c1d"),a=n("7502");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("e7fc");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"539df781",null,!1,i["a"],o);e["default"]=c.exports},e01b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,s,o){try{var u=t[s](o),c=u.value}catch(r){return void n(r)}u.done?e(c):Promise.resolve(c).then(i,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function u(t){s(o,i,a,u,c,"next",t)}function c(t){s(o,i,a,u,c,"throw",t)}u(void 0)}))}}function u(t){return d(t)||h(t)||r(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var p={data:function(){return{code:"",niannum:0,nianlist:[],nianning:!1,shijianshow:!1,state:1,fans:{},mony:"9980.00",isyuyue:0,poplist:[],sel_list:"",popshow:"",name:"image",formData:{},header:{token:t.getStorageSync("token")},action:this.$shangchuan+"/api/byd_user/addpostspic",isadd:!0,man_data:[{id:0,age:"",select:1e4,del:!1},{id:1,age:"",select:1e4,del:!0}],man_list:[{id:0,text:"先生"},{id:1,text:"女士"},{id:2,text:"男孩"},{id:3,text:"女孩"}],numbers:1e3,title:"预约设计",data_list:{},chuanzhi:{},list:[{title:"基本信息",list:[{id:0,name:"姓名",obj:"name",text:"请填写真实姓名",type:"input"},{id:1,name:"性别",obj:"sex",select:["先生","女士"],type:"checkbox"},{id:2,name:"联系电话",obj:"phone",text:"请填写您的联系电话",type:"input"}]},{title:"项目概括",list:[{id:3,name:"所在地区",obj:"city",text:"请填写所在地区",type:"address",show:!1},{id:4,name:"详细地址",obj:"dire",text:"小区名字、栋号单元号等详细地址",type:"textarea"},{id:5,name:"房屋户型",obj:"housetype",text:"请选择您的户型",type:"Picker",show:!1},{id:12,name:"交付时间",obj:"jf",text:"请选择交付时间",type:"Picker",show:!1},{id:12,name:"入住时间",obj:"rz",text:"请选择入住时间",type:"Picker",show:!1},{id:6,name:"装修现状",obj:"zx",text:"请选择装修现状",type:"Picker",show:!1},{id:7,name:"喜欢风格",obj:"style",text:"请选择喜欢风格",type:"Picker",show:!1},{id:8,name:"喜欢色调",obj:"color",text:"请选择装修色调",type:"Picker",show:!1},{id:9,name:"新房居住成员",obj:"people",type:"xuan",list:[]}]},{title:"相关文件",list:[{id:10,name:"平面图",obj:"aboveimage",text:"(手机拍照/购房宣传册)",type:"upload",img_list:[]},{id:11,name:"现场照片",obj:"image",text:"",type:"upload",img_list:[]}]}],img:this.$imgPath,states:"",colorssss:[],stylessss:[],huxinssss:[],timea:0,huoqu:"获取验证码"}},onLoad:function(e){for(var n=this,i=1;i<=100;i++)this.nianlist.push({value:i,label:i+"岁"});e.yuyue&&(this.isyuyue=e.yuyue,this.gethomepage()),this.data_list=t.getStorageSync("dataKKlist")||{},this.$api.color().then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t){n.colorssss.push({check:!1,name:t.title,id:t.id,image:""})}))})),this.$api.huxincategory().then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t){n.huxinssss.push({check:!1,name:t.title,id:t.id,image:""})}))})),this.$api.style().then((function(t){1==t.data.code&&t.data.data.status.forEach((function(t){n.stylessss.push({check:!1,name:t.title,id:t.id,image:n.$imgPath+t.image})}))}))},methods:{baochun:function(){t.setStorageSync("dataKKlist",this.data_list)},go_code:function(){var e=this;0==e.timea&&e.$api.emsphone({phone:e.data_list.phone}).then((function(n){if(1==n.data.code){t.showToast({title:"发送成功",duration:1e3,icon:"none"}),e.timea=60;var i=setInterval((function(){e.timea--,e.huoqu=e.timea+"s后获取",0==e.timea&&(clearInterval(i),e.huoqu="获取验证码")}),1e3)}else t.showToast({title:"发送失败",duration:1e3,icon:"none"})}))},nianopen:function(t){this.niannum=t,this.nianning=!0},confirm:function(t){this.man_data[this.niannum].age=t[0].value},kan1:function(e){t.previewImage({urls:[e],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},kan:function(e){t.previewImage({urls:[this.$imgPath+e],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},sanchuhsuahsuhd:function(t){this.man_data.splice(t,1),this.isadd=!0},zhishizhege:function(t){this.data_list[this.chuanzhi.obj]=t.year+"-"+t.month+"-"+t.day,this.baochun()},address:function(e){var n=this,i=n.data_list;t.chooseLocation({success:function(t){i[e.obj]=t.address,n.data_list={},n.data_list=i,n.baochun()}})},zhifuyuyue:function(e){this.$api.paymoney({type:e,user_id:t.getStorageSync("user_info").id,id:this.fans.id}).then((function(e){200==e.data.code&&t.requestPayment({timeStamp:e.data.data.timeStamp,nonceStr:e.data.data.nonceStr,package:e.data.data.package,signType:e.data.data.signType,paySign:e.data.data.paySign,success:function(e){t.showToast({title:"支付成功",icon:"none"}),t.navigateBack({delta:1})},fail:function(e){t.showToast({title:"支付失败",icon:"none"})}})}))},gethomepage:function(){var e=this;this.fans=t.getStorageSync("yuyue_info"),this.state=this.fans.state,this.states=this.fans.states,this.mony=this.fans.price;var n=this.fans.image.split(","),i=this.fans.aboveimage.split(","),a=this.fans.people.split(","),s=[],o=[],c="";c=0==this.fans.sex?"男":"女",n.forEach((function(t){t=e.$imgPath+t})),i.forEach((function(t){t=e.$imgPath+t})),a.forEach((function(t){s.push(t.split("_"))})),s.forEach((function(t){o.push({sex:t[1],age:t[0]})})),this.list=[],this.list.push({title:"基本信息",list:[{id:0,name:"姓名",obj:"name",text:this.fans.name,type:"Displays_data"},{id:1,name:"性别",obj:"sex",text:c,select:["先生","女士"],type:"Displays_data"},{id:2,name:"联系电话",obj:"phone",text:this.fans.phone,type:"Displays_data"}]},{title:"项目概括",list:[{id:3,name:"所在地区",obj:"city",text:this.fans.city,type:"Displays_data",show:!1},{id:4,name:"详细地址",obj:"dire",text:this.fans.dire,type:"Displays_data"},{id:5,name:"房屋户型",obj:"housetype",text:this.fans.housetype,type:"Displays_data",show:!1},{id:12,name:"交付时间",obj:"jf",text:this.fans.jf,type:"Displays_data",show:!1},{id:6,name:"入住时间",obj:"rz",text:this.fans.rz,type:"Displays_data",show:!1},{id:6,name:"装修现状",obj:"zx",text:this.fans.zx,type:"Displays_data",show:!1},{id:7,name:"喜欢风格",obj:"style",text:this.fans.style,type:"Displays_data",show:!1},{id:8,name:"喜欢色调",obj:"color",text:this.fans.color,type:"Displays_data",show:!1},{id:13,name:"提交时间",obj:"jf",text:this.fans.tjtime,type:"Displays_data",show:!1},{id:9,name:"新房居住成员",obj:"people",type:"xuan",list:[].concat(o)}]},{title:"相关文件",list:[{id:10,name:"平面图",obj:"aboveimage",text:"(手机拍照/购房宣传册)",type:"upload",img_list:u(i)},{id:11,name:"现场照片或视频",obj:"image",text:"",type:"upload",img_list:u(n)}]})},uploaded:function(t,e){var n=t,i=[];n.forEach((function(t){i.push(t.response.data.status)})),this.data_list[e.obj]=i},xunhuan:function(t){var e=this;this.poplist.forEach((function(n,i){i==t?(e.poplist[t].check=!0,e.sel_list=e.poplist[t].name):e.poplist[i].check=!1}))},change:function(){this.data_list[this.chuanzhi.obj]=this.sel_list,this.baochun(),this.popshow=!1},re:function(){this.poplist.forEach((function(t){t.check=!1}))},tijiao:function(){var e=this;return o(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$login();case 2:if(!n.sent){n.next=8;break}if(""==e.code){n.next=7;break}e.$api.emsyzphone({phone:e.data_list.phone,yzm:e.code}).then((function(n){if(1!=n.data.code)return t.showToast({title:"验证码错误",duration:1e3,icon:"none"});var i=e;t.requestSubscribeMessage({tmplIds:["auLnrnvAYh0neKlgtVQ5OEDvbppe0KEF8lXVVC0tLZU"],complete:function(e){i.data_list["user_id"]=t.getStorageSync("user_info").id;var n=i.data_list.people,a=[],s=!1;if(!i.data_list.people)return t.showToast({title:"请选择人员",duration:1e3,icon:"none"});for(var o in n){if(1e4==n[o].select||""==n[o].age){s=!0;break}a.push(n[o].age+"_"+n[o].id)}if(s)return t.showToast({title:"请检查人员选项",icon:"none"});i.data_list.people=a;var u=Object.keys(i.data_list).length;if(15!=u)return t.showToast({title:"请检查",icon:"none"});i.$api.yydes(i.data_list).then((function(e){1==e.data.code?(setTimeout((function(){t.navigateBack(-1)}),2e3),i.$refs.uToast.show({title:"提交预约成功，请到个人中心-预约设计查看进度安排",duration:2e3})):t.showToast({title:e.data.msg,duration:1e3,icon:"none"})}))}})})),n.next=8;break;case 7:return n.abrupt("return",t.showToast({title:"请输入验证码",icon:"none"}));case 8:case"end":return n.stop()}}),n)})))()},guan:function(){this.popshow=!1,this.shijianshow=!1},add:function(){var t=this.man_data.length;if(t<=10){for(var e=0;e<1;e++)this.man_data.push({id:t+e,age:"",select:1e4,del:!0});this.man_data.length>=10&&(this.isadd=!1)}},danxuans:function(t,e,n,i){var a,s=this.man_data;s[n].select=t,this.man_data=[],(a=this.man_data).push.apply(a,u(s)),this.data_list[i.obj]=this.man_data},danxuan:function(t,e,n){this.numbers=t,this.data_list[n.obj]=t},open:function(t){"style"==t.obj?(this.poplist=[],this.poplist=u(this.stylessss),this.popshow=!0):"color"==t.obj?(this.poplist=[],this.poplist=u(this.colorssss),this.popshow=!0):"zx"==t.obj?(this.poplist=[],this.poplist=[{check:!1,name:"精装房",id:0,image:""},{check:!1,name:"毛坯房",id:1,image:""},{check:!1,name:"旧房",id:12,image:""},{check:!1,name:"其他",id:100,image:""}],this.popshow=!0):"housetype"==t.obj?(this.poplist=[],this.poplist=u(this.huxinssss),this.popshow=!0):"jf"!=t.obj&&"rz"!=t.obj||(this.shijianshow=!0),this.re(),this.chuanzhi=t},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=p}).call(this,n("543d")["default"])},e7fc:function(t,e,n){"use strict";var i=n("2f16"),a=n.n(i);a.a},f411:function(t,e,n){"use strict";(function(t){n("c9dc");i(n("66fd"));var e=i(n("d260"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["f411","common/runtime","common/vendor"]]]);