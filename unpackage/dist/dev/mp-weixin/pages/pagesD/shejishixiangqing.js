(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesD/shejishixiangqing"],{602:function(t,e,i){"use strict";(function(t){i(5);s(i(3));var e=s(i(603));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i(1)["createPage"])},603:function(t,e,i){"use strict";i.r(e);var s=i(604),n=i(606);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i(608);var r,o=i(11),d=Object(o["default"])(n["default"],s["render"],s["staticRenderFns"],!1,null,"23107602",null,!1,s["components"],r);d.options.__file="pages/pagesD/shejishixiangqing.vue",e["default"]=d.exports},604:function(t,e,i){"use strict";i.r(e);var s=i(605);i.d(e,"render",(function(){return s["render"]})),i.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]})),i.d(e,"recyclableRender",(function(){return s["recyclableRender"]})),i.d(e,"components",(function(){return s["components"]}))},605:function(t,e,i){"use strict";var s;i.r(e),i.d(e,"render",(function(){return n})),i.d(e,"staticRenderFns",(function(){return r})),i.d(e,"recyclableRender",(function(){return a})),i.d(e,"components",(function(){return s}));try{s={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,641))},uPopup:function(){return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null,720))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var t=this,e=t.$createElement;t._self._c},a=!1,r=[];n._withStripped=!0},606:function(t,e,i){"use strict";i.r(e);var s=i(607),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},607:function(t,e,i){"use strict";(function(t){function i(t){return r(t)||a(t)||n(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"===typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return o(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d={data:function(){return{jujueliyouss:"",jujue:!1,imgtitle:this.$imgPath,showa:!1,mony:"9980.00",isyuyue:0,poplist:[],sel_list:"",popshow:"",name:"",formData:{},header:{},action:"#",isadd:!0,man_data:[{id:0,age:"",select:1e4},{id:1,age:"",select:1e4},{id:2,age:"",select:1e4}],man_list:[{id:0,text:"先生"},{id:1,text:"女士"},{id:2,text:"男孩"},{id:3,text:"女孩"}],numbers:1e3,title:"订单详情",data_list:[],chuanzhi:{},list:[{title:"基本信息",list:[{id:0,name:"姓名",text:"张三",type:"Displays_data"},{id:0,name:"性别",text:"先生",type:"Displays_data"},{id:0,name:"联系电话",text:"13800138000",type:"Displays_data"}]},{title:"项目概括",list:[{id:3,name:"所在地区",text:"四川省成都市你妈家",type:"Displays_data"},{id:4,name:"详细地址",text:"四川省成都市你妈家，哈哈哈哈哈",type:"Displays_data"},{id:5,name:"房屋户型",text:"挖掘机类型",type:"Displays_data"},{id:6,name:"交付时间",text:"2021.12.21",type:"Displays_data"},{id:7,name:"入住时间",text:"2021.12.21",type:"Displays_data"},{id:8,name:"喜欢风格",text:"伊拉克风格",type:"Displays_data"},{id:9,name:"喜欢色调",text:"猛男粉",type:"Displays_data"},{id:10,name:"新房居住成员",type:"xuan",list:[{sex:"先生",age:20},{sex:"女士",age:20},{sex:"蓝湖",age:20},{sex:"女孩",age:20}]}]},{title:"相关文件",list:[{id:11,name:"平面图",text:"(手机拍照/购房宣传册)",type:"upload",img_list:[]},{id:12,name:"现场照片或视频",text:"",type:"upload",img_list:[]}]}],isdes:0,desOrder:{}}},onLoad:function(e){if(e.jiedan&&(this.isyuyue=1),e.isdes){this.isdes=e.isdes;var i=[];this.desOrder=t.getStorageSync("des_order"),this.desOrder.people=this.desOrder.people.split(","),this.desOrder.people.forEach((function(t){var e={sex:"",age:""},s=t.split("_")[1];0==s?e.sex="先生":1==s?e.sex="女士":2==s?e.sex="男孩":3==s&&(e.sex="女孩"),e.age=t.split("_")[0],i.push(e)})),this.list[0].list[0].text=this.desOrder.name,this.list[0].list[1].text=0==this.desOrder.sex?"先生":"女士",this.list[0].list[2].text=this.desOrder.phone,this.list[1].list[0].text=this.desOrder.city||"",this.list[1].list[1].text=this.desOrder.dire||"",this.list[1].list[2].text=this.desOrder.housetype||"",this.list[1].list[3].text=this.desOrder.jf||"",this.list[1].list[4].text=this.desOrder.rz||"",this.list[1].list[5].text=this.desOrder.style||"",this.list[1].list[6].text=this.desOrder.color||"",this.list[1].list[7].list=i,this.list[2].list[0].img_list=this.desOrder.aboveimage.split(","),this.list[2].list[1].img_list=this.desOrder.image.split(",")}},methods:{kan:function(e,i){var s=this,n=this.list[2].list[i].img_list;n.forEach((function(t,e){n[e]=s.$imgPath+t})),t.previewImage({urls:n,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})},jujueshanshu:function(e){0!=e?this.$api.desorder({bhnew:this.jujueliyouss,id:this.desOrder.id,state:0}).then((function(e){1==e.data.code&&(t.showToast({title:"拒绝成功"}),t.navigateBack({delta:1}))})):this.jujue=!1},xuanzhea:function(e){var i=this;switch(e){case 0:this.showa=!1;break;case 1:this.$api.desorder({id:this.desOrder.id,state:2}).then((function(e){1==e.data.code&&(t.showToast({title:"确认成功"}),t.navigateBack(-1),i.showa=!1)}));break;default:}},xunhuan:function(t){var e=this;this.poplist.forEach((function(i,s){s==t?(e.poplist[t].check=!0,e.sel_list=e.poplist[t].name):e.poplist[s].check=!1}))},change:function(){this.data_list[this.chuanzhi.id]=this.sel_list,this.popshow=!1},re:function(){this.poplist.forEach((function(t){t.check=!1}))},tijiao:function(e){switch(e){case 0:t.previewImage({urls:[this.$imgPath+this.desOrder.ewm],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}});break;case 1:this.showa=!0;break;case 3:this.jujue=!0;break;case 4:this.$api.desorder({id:this.desOrder.id,state:1}).then((function(e){if(1==e.data.code){var i={title:"接单成功",text:"请前往进行中查看订单",botton:"我知道了"};t.navigateTo({url:"./regSuccess?list="+JSON.stringify(i)})}}));break;default:}},guan:function(){this.popshow=!1},add:function(){var t=this.man_data.length;if(t<=10){for(var e=0;e<3;e++)this.man_data.push({id:t+e,age:"",select:1e4});this.man_data.length>=10&&(this.isadd=!1)}},danxuans:function(t,e,s){var n,a=this.man_data;this.man_data=[],a[s].select=t,(n=this.man_data).push.apply(n,i(a)),this.data_list[e]=this.man_data},danxuan:function(t,e){this.numbers=t,this.data_list[e]=t},open:function(t){this.re(),this.chuanzhi=t,this.popshow=!0},back:function(e){switch(e){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}}}};e.default=d}).call(this,i(1)["default"])},608:function(t,e,i){"use strict";i.r(e);var s=i(609),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},609:function(t,e,i){}},[[602,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesD/shejishixiangqing.js.map