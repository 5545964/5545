(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/goods_data"],{293:function(i,t,n){"use strict";(function(i){n(5);a(n(3));var t=a(n(294));function a(i){return i&&i.__esModule?i:{default:i}}wx.__webpack_require_UNI_MP_PLUGIN__=n,i(t.default)}).call(this,n(1)["createPage"])},294:function(i,t,n){"use strict";n.r(t);var a=n(295),e=n(297);for(var s in e)"default"!==s&&function(i){n.d(t,i,(function(){return e[i]}))}(s);n(299);var o,u=n(32),h=Object(u["default"])(e["default"],a["render"],a["staticRenderFns"],!1,null,"0b7fe99c",null,!1,a["components"],o);h.options.__file="pages/pagesA/goods_data.vue",t["default"]=h.exports},295:function(i,t,n){"use strict";n.r(t);var a=n(296);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},296:function(i,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return e})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,648))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,669))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,827))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,741))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,812))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,748))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var e=function(){var i=this,t=i.$createElement,n=(i._self._c,i.__map(i.data_list.shop,(function(t,n){var a=i.__get_orig(t),e=(t.num*t.sonprice).toFixed(2);return{$orig:a,g0:e}})));i._isMounted||(i.e0=function(t){i.qurren=!1},i.e1=function(t){i.baozhuangshow=!1}),i.$mp.data=Object.assign({},{$root:{l0:n}})},s=!1,o=[];e._withStripped=!0},297:function(i,t,n){"use strict";n.r(t);var a=n(298),e=n.n(a);for(var s in a)"default"!==s&&function(i){n.d(t,i,(function(){return a[i]}))}(s);t["default"]=e.a},298:function(i,t,n){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{quxiaoshouhou:!1,dinshiqi:"",shoujihao:i.getStorageSync("user_info").mobile,pingjiaok:0,yianzhaungkaiguan:!0,yianzhaungxieyi:[],shifouanzhaungkaiguan:!0,shifouanzhaungxieyi:[],querenqianshoukaiguan:!0,querenqianshouxieyi:[],bzxq:{},anzhuang:!1,kuaididata:{},kuaididanhao:"",kuaidigongsi:"",kuaidi:!1,hahahaxuanzhe:{},zhuangtai:0,mnbv:"",baozhuangshow:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],qurrsaen:"",qurren:!1,youhuijuan_num:0,img:this.$imgPath,value:"",show:!1,shows:!1,showa:!1,title:"订单详情",data_list:{},img_list:[],order_idsssss:"",daojishi:""}},onLoad:function(i){i.title&&(this.title=i.title),this.order_idsssss=i.order_id},onShow:function(){var t=this;this.allsss();var n=i.getStorageSync("xieyi");n?(this.yiwanchengxieyi=[],this.yianzhaungxieyi=[],this.shifouanzhaungxieyi=[],this.querenqianshouxieyi=[],n.forEach((function(i){3==i.state&&t.yianzhaungxieyi.push(i),5==i.state&&t.shifouanzhaungxieyi.push(i),2==i.state&&t.querenqianshouxieyi.push(i)})),this.yianzhaungxieyi.length>0?this.yianzhaungkaiguan=!0:this.yianzhaungkaiguan=!1,this.shifouanzhaungxieyi.length>0?this.shifouanzhaungkaiguan=!0:this.shifouanzhaungkaiguan=!1,this.querenqianshouxieyi.length>0?this.querenqianshoukaiguan=!0:this.querenqianshoukaiguan=!1):(this.yianzhaungkaiguan=!1,this.shifouanzhaungkaiguan=!1,this.querenqianshoukaiguan=!1)},watch:{shoujiyanzheng:function(i,t){i||(this.code="")}},methods:{shouhoou:function(t){var n=this;1==t?this.$api.xqsh({orderid:this.data_list.orderid}).then((function(t){1==t.data.code&&(n.quxiaoshouhou=!1,i.navigateBack(-1)),i.showToast({title:t.data.msg,icon:"none"})})):this.quxiaoshouhou=!1},baozhuangpngji:function(i,t){this.pingjiaok=i,this.annui(6,t)},dakaishouji:function(i){this.zhuangtai=i,0==i&&(this.xieyi=this.querenqianshouxieyi,this.buyanzheng=this.querenqianshoukaiguan,this.shows=!1),1==i&&(this.xieyi=this.shifouanzhaungxieyi,this.buyanzheng=this.shifouanzhaungkaiguan,this.baozhuangshow=!1),2==i&&(this.xieyi=this.yianzhaungxieyi,this.buyanzheng=this.yianzhaungkaiguan,this.qurren=!1),this.shoujiyanzheng=!0},lookdetails:function(i){var t=this;this.$api.bzxq({id:this.data_list.bzid}).then((function(i){1==i.data.code&&(t.bzxq=i.data.data.status,t.anzhuang=!0)}))},kuaidiwow:function(t){var n=this;0==t?this.kuaidi=!1:this.$api.sqexpress({orderid:this.order_idsssss,sqexpress:this.kuaidigongsi,sqexpressorder:this.kuaididanhao}).then((function(t){i.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(n.kuaidi=!1,n.allsss())}))},kuaidiwo:function(i){this.kuaididata=i,this.kuaidi=!0},jiesubaozhaung:function(){this.qurrsaen=this.data_list,this.qurren=!0},tongyixieyi:function(){var t=this;if(this.buyanzheng){var n=0,a=[];if(this.xieyi.forEach((function(i){i.check&&(n++,a.push(i))})),this.xieyi.length!=n)return i.showToast({title:"请阅读并同意协议",icon:"none"});a.forEach((function(n){t.$api.userag({userid:i.getStorageSync("user_info").id,agid:n.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}0==this.zhuangtai&&this.querenshouhuo(),1==this.zhuangtai&&this.shifouanzhuangdsadas(),2==this.zhuangtai&&this.anzhaungwancheng()},shifouanzhuangdsadas:function(){this.baozhuangshow=!1,i.setStorageSync("baozhaung",this.mnbv.shop),i.navigateTo({url:"../pagesB/baozhaung?orderid="+this.mnbv.orderid+"&tiao=2"})},querenshouhuo:function(){var t=this;this.shows=!1,this.$api.sureorder({id:this.data_list.id}).then((function(n){1==n.data.code&&(t.shows=!1,i.showToast({title:"收货成功",icon:"none"}),i.navigateBack(-1))}))},anzhaungwancheng:function(){var t=this;this.$api.successloading({orderid:this.qurrsaen.orderid}).then((function(n){1==n.data.code?(i.showToast({title:"安装完成",icon:"success"}),t.qurren=!1,i.navigateBack(-1)):i.showToast({title:n.data.msg,icon:"success"})}))},baozhaung:function(i){this.mnbv=this.data_list,this.baozhuangshow=!this.baozhuangshow},delorder:function(){var t=this;i.showModal({title:"是否删除此订单",content:t.order_idsssss,success:function(n){n.confirm&&t.$api.deleorder({orderid:t.order_idsssss}).then((function(t){i.showToast({title:t.data.msg,duration:1e3,icon:"success"}),1==t.data.code&&i.navigateBack({delta:2})}))}})},countDown:function(){var i=this,t=1e3*i.data_list.cretime;i.dinshiqi=setInterval((function(){var n=i.addtimes(t);i.daojishi=n.hours+":"+n.minutes+":"+n.seconds,"00"==n.hours&&"00"==n.minutes&&"00"==n.seconds&&clearInterval(i.dinshiqi)}),1e3)},addtimes:function(i){var t=new Date,n=1e3*i-t.getTime(),a=n%864e5,e=Math.floor(a/36e5),s=n%36e5,o=Math.floor(s/6e4),u=n%6e4,h=Math.floor(u/1e3);e<10&&(e="0"+e),o<10&&(o="0"+o),h<10&&(h="0"+h);var r={hours:e,minutes:o,seconds:h};return r},allsss:function(){var t=this;this.$api.myorder({user_id:i.getStorageSync("user_info").id,id:this.order_idsssss}).then((function(i){1==i.data.code&&i.data.data.status.forEach((function(i){if(i.orderid==t.order_idsssss){if(t.data_list=i,t.data_list.paytime&&(t.data_list.paytime=t.$u.timeFormat(t.data_list.paytime,"yyyy-mm-dd hh:MM:ss")),t.data_list.image){var n=t.data_list.image;t.img_list=n.split(",")}t.countDown()}}))}))},xuanzhea:function(t){1==t&&this.$api.qxorder({orderid:this.order_idsssss}).then((function(t){1==t.data.code&&(i.showToast({title:t.data.msg,icon:"none"}),i.navigateBack(-1))})),this.showa=!1},product:function(t){i.navigateTo({url:"/pages/pagesC/Shopping?shopid="+t.id})},tongyiss:function(i){var t=this;this.$api.agreement({state:i}).then((function(i){1==i.data.code&&(i.data.data.status.forEach((function(i){i["check"]=!1})),t.xieyi=i.data.data.status)}))},xuanzhes:function(i){1==i&&(this.tongyiss(2),this.zhuangtai=0,this.shoujiyanzheng=!0),this.shows=!1},qurrere:function(i){1==i&&(this.tongyiss(3),this.shoujiyanzheng=!0,this.zhuangtai=2),this.qurren=!1},baozhaungshowss:function(i){1==i&&(this.tongyiss(3),this.zhuangtai=1,this.shoujiyanzheng=!0),this.baozhuangshow=!1},xuanzhe:function(t){var n=this;switch(t){case 0:this.show=!1;break;case 1:this.$api.orderdzf({id:this.data_list.id}).then((function(t){1==t.data.code?(i.showToast({title:"订单取消成功",duration:1e3,icon:"success"}),n.show=!1,i.navigateBack(-1)):i.showToast({title:t.data.msg,duration:1e3,icon:"success"})}));break;default:}},annui:function(t){switch(t){case 0:this.show=!0;break;case 1:this.$api.orderpay({prepay_id:this.data_list.id,id:this.data_list.id}).then((function(t){if(200==t.data.code){i.requestPayment({timeStamp:t.data.data.timeStamp,nonceStr:t.data.data.nonceStr,package:t.data.data.package,signType:t.data.data.signType,paySign:t.data.data.paySign,success:function(t){i.showToast({title:"支付成功",icon:"none"}),i.navigateBack(-1)},fail:function(t){i.showToast({title:"支付失败",icon:"none"})}})}else i.showToast({title:t.data.msg,icon:"none"})}));break;case 2:this.showa=!0;break;case 3:i.navigateTo({url:"../pagesC/wuliu?id="+this.data_list.id+"&express="+this.data_list.express+"&expressorder="+this.data_list.expressorder});break;case 4:this.shows=!0;break;case 5:var n="";n=1==this.data_list.state?0:1,i.navigateTo({url:"../pagesA/tuikuan?orderid="+this.data_list.orderid+"&type="+n});break;case 6:i.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(this.data_list)+"&okj="+this.pingjiaok});break;case 7:i.navigateTo({url:"../pagesC/shouhou?item="+JSON.stringify(this.data_list)});break;case 8:this.quxiaoshouhou=!0;break;default:}},back:function(t){switch(t){case 0:i.navigateBack(-1);break;case 1:i.reLaunch({url:"/pages/Home/Home"});break;default:}},hahaha:function(i){i.check=!i.check},fuwenben:function(t){i.setStorageSync("fuwenbeng",t.content),i.navigateTo({url:"../pagesC/fuwenben?title="+t.name})},tongyis:function(t){var n=this;1==t?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(t){1==t.data.code?(n.tongyi(1),n.shoujiyanzheng=!1):i.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):i.showToast({title:"请输入验证码",icon:"none"}):this.shoujiyanzheng=!1},tongyi:function(i){1==i?(this.xieyi.forEach((function(i){i.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(t){var n=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;n.test(t.detail.value)||i.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var t=this;0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:i.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){i.showToast({title:"发送成功",duration:1e3,icon:"none"}),t.timea=60;var a=setInterval((function(){t.timea--,t.huoqu=t.timea+"s后获取",0==t.timea&&(clearInterval(a),t.huoqu="获取验证码")}),1e3)}else i.showToast({title:"发送失败",duration:1e3,icon:"none"})}))}}};t.default=n}).call(this,n(1)["default"])},299:function(i,t,n){"use strict";n.r(t);var a=n(300),e=n.n(a);for(var s in a)"default"!==s&&function(i){n.d(t,i,(function(){return a[i]}))}(s);t["default"]=e.a},300:function(i,t,n){}},[[293,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesA/goods_data.js.map