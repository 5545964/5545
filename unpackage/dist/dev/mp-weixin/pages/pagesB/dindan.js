(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/dindan"],{313:function(n,i,t){"use strict";(function(n){t(5);a(t(3));var i=a(t(314));function a(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t(1)["createPage"])},314:function(n,i,t){"use strict";t.r(i);var a=t(315),e=t(317);for(var s in e)"default"!==s&&function(n){t.d(i,n,(function(){return e[n]}))}(s);t(319);var o,u=t(11),h=Object(u["default"])(e["default"],a["render"],a["staticRenderFns"],!1,null,"ca3a6720",null,!1,a["components"],o);h.options.__file="pages/pagesB/dindan.vue",i["default"]=h.exports},315:function(n,i,t){"use strict";t.r(i);var a=t(316);t.d(i,"render",(function(){return a["render"]})),t.d(i,"staticRenderFns",(function(){return a["staticRenderFns"]})),t.d(i,"recyclableRender",(function(){return a["recyclableRender"]})),t.d(i,"components",(function(){return a["components"]}))},316:function(n,i,t){"use strict";var a;t.r(i),t.d(i,"render",(function(){return e})),t.d(i,"staticRenderFns",(function(){return o})),t.d(i,"recyclableRender",(function(){return s})),t.d(i,"components",(function(){return a}));try{a={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,642))},uSearch:function(){return t.e("uview-ui/components/u-search/u-search").then(t.bind(null,649))},uTabs:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-tabs/u-tabs")]).then(t.bind(null,711))},uEmpty:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-empty/u-empty")]).then(t.bind(null,770))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,821))},uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,735))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,806))},uKehu:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-kehu/u-kehu")]).then(t.bind(null,663))},uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,742))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var e=function(){var n=this,i=n.$createElement;n._self._c;n._isMounted||(n.e0=function(i){n.qurren=!1},n.e1=function(i){n.shows=!1})},s=!1,o=[];e._withStripped=!0},317:function(n,i,t){"use strict";t.r(i);var a=t(318),e=t.n(a);for(var s in a)"default"!==s&&function(n){t.d(i,n,(function(){return a[n]}))}(s);i["default"]=e.a},318:function(n,i,t){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t={data:function(){return{shouhouitem:"",quxiaoshouhou:!1,shoujihao:n.getStorageSync("user_info").mobile,yianzhaungkaiguan:!0,yianzhaungxieyi:[],shifouanzhaungkaiguan:!0,shifouanzhaungxieyi:[],querenqianshoukaiguan:!0,querenqianshouxieyi:[],bzxq:{},anzhuang:!1,kuaididata:{},kuaididanhao:"",kuaidigongsi:"",kuaidi:!1,zhuangtai:0,qurrsaen:"",qurren:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],mnbv:"",baozhuangshow:!1,hahahaxuanzhe:{},imgtitle:this.$imgPath,show:!1,shows:!1,showa:!1,height:0,current:0,title:"",lists:[{name:"全部"},{name:"待发货"},{name:"发货中"},{name:"已收货"},{name:"报装中"},{name:"已安装"}],list:[{status:"all",data_list:[]},{status:1,data_list:[]},{status:2,data_list:[]},{status:3,data_list:[]},{status:4,data_list:[]},{status:5,data_list:[]}],time:"",pingjiaok:0}},onLoad:function(i){var t=this;n.$on("number",(function(){})),n.$on("yuwancheng",(function(){t.current=3})),this.title=i.title,i.current&&(this.current=i.current),this.$api.orderset().then((function(n){1==n.data.code&&(t.time=n.data.data.status.ordertime)}))},onShow:function(){var i=this;this.system(),this.allsss();var t=n.getStorageSync("xieyi");t?(this.yiwanchengxieyi=[],this.yianzhaungxieyi=[],this.shifouanzhaungxieyi=[],this.querenqianshouxieyi=[],t.forEach((function(n){3==n.state&&i.yianzhaungxieyi.push(n),5==n.state&&i.shifouanzhaungxieyi.push(n),2==n.state&&i.querenqianshouxieyi.push(n)})),this.yianzhaungxieyi.length>0?this.yianzhaungkaiguan=!0:this.yianzhaungkaiguan=!1,this.shifouanzhaungxieyi.length>0?this.shifouanzhaungkaiguan=!0:this.shifouanzhaungkaiguan=!1,this.querenqianshouxieyi.length>0?this.querenqianshoukaiguan=!0:this.querenqianshoukaiguan=!1):(this.yianzhaungkaiguan=!1,this.shifouanzhaungkaiguan=!1,this.querenqianshoukaiguan=!1)},watch:{shoujiyanzheng:function(n,i){n||(this.code="")}},methods:{fou:function(){var n=this;this.$api.successloading({orderid:this.mnbv.orderid}).then((function(i){n.baozhuangshow=!1}))},shouhoou:function(i){var t=this;1==i?this.$api.xqsh({orderid:this.shouhouitem.orderid}).then((function(i){1==i.data.code&&(t.allsss(),t.quxiaoshouhou=!1),n.showToast({title:i.data.msg,icon:"none"})})):this.quxiaoshouhou=!1},baozhuangpngji:function(n,i){this.pingjiaok=n,this.annui(6,i)},dakaishouji:function(n){this.zhuangtai=n,0==n&&(this.xieyi=this.querenqianshouxieyi,this.buyanzheng=this.querenqianshoukaiguan,this.shows=!1),1==n&&(this.xieyi=this.shifouanzhaungxieyi,this.buyanzheng=this.shifouanzhaungkaiguan,this.baozhuangshow=!1),2==n&&(this.xieyi=this.yianzhaungxieyi,this.buyanzheng=this.yianzhaungkaiguan,this.qurren=!1),this.shoujiyanzheng=!0},lookdetails:function(n){var i=this;this.$api.bzxq({id:n.bzid}).then((function(n){1==n.data.code&&(i.bzxq=n.data.data.status,i.anzhuang=!0)}))},kuaidiwow:function(i){var t=this;0==i?this.kuaidi=!1:this.$api.sqexpress({orderid:this.kuaididata.orderid,sqexpress:this.kuaidigongsi,sqexpressorder:this.kuaididanhao}).then((function(i){n.showToast({title:i.data.msg,icon:"none"}),1==i.data.code&&(t.kuaidi=!1,t.allsss())}))},kuaidiwo:function(n){this.kuaididata=n,this.kuaidi=!0},jiesubaozhaung:function(n){this.qurrsaen=n,this.qurren=!0},tongyixieyi:function(){var i=this;if(this.buyanzheng){var t=0,a=[];if(this.xieyi.forEach((function(n){n.check&&(t++,a.push(n))})),this.xieyi.length!=t)return n.showToast({title:"请阅读并同意协议",icon:"none"});a.forEach((function(t){i.$api.userag({userid:n.getStorageSync("user_info").id,agid:t.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}0==this.zhuangtai&&this.querenshouhuo(),1==this.zhuangtai&&this.shifouanzhuangdsadas(),2==this.zhuangtai&&this.anzhaungwancheng()},shifouanzhuangdsadas:function(){this.baozhuangshow=!1,n.setStorageSync("baozhaung",this.mnbv.shop),n.navigateTo({url:"./baozhaung?orderid="+this.mnbv.orderid+"&tiao=1"})},querenshouhuo:function(){var i=this;this.shows=!1,this.$api.sureorder({id:this.order_id}).then((function(t){1==t.data.code&&(i.shows=!1,n.showToast({title:"收货成功",icon:"none"}),i.baozhuangshow=!i.baozhuangshow,i.allsss(),i.current=3)}))},anzhaungwancheng:function(){var i=this;this.$api.successloading({orderid:this.qurrsaen.orderid}).then((function(t){1==t.data.code?(n.showToast({title:"安装完成",icon:"success"}),i.qurren=!1,i.allsss()):n.showToast({title:t.data.msg,icon:"none"})}))},baozhaung:function(n){this.mnbv=n,this.baozhuangshow=!this.baozhuangshow},delorder:function(i){var t=this;n.showModal({title:"是否删除此订单",content:i.orderid,success:function(a){a.confirm&&t.$api.deleorder({orderid:i.orderid}).then((function(i){n.showToast({title:i.data.msg,duration:1e3,icon:"none"}),1==i.data.code&&t.allsss()}))}})},allsss:function(){var i=this;this.$api.myorder({user_id:n.getStorageSync("user_info").id}).then((function(n){i.list.forEach((function(n,i){n.data_list=[]})),1==n.data.code&&(i.list[0].data_list=n.data.data.status,n.data.data.status.forEach((function(n){switch(n.state){case"1":i.list[1].data_list.push(n);break;case"2":i.list[2].data_list.push(n);break;case"3":i.list[3].data_list.push(n);break;case"4":i.list[3].data_list.push(n);break;case"16":i.list[4].data_list.push(n);break;case"17":i.list[5].data_list.push(n);break;default:}})))}))},goods:function(i){n.navigateTo({url:"../pagesA/goods_data?order_id="+i.orderid})},xuanzhea:function(i){var t=this;1==i&&this.$api.qxorder({orderid:this.order_id}).then((function(i){1==i.data.code&&(n.showToast({title:i.data.msg,icon:"none"}),t.allsss())})),this.showa=!1},xuanzhe:function(i){var t=this;1==i&&this.$api.orderdzf({id:this.hahahaxuanzhe.id}).then((function(i){1==i.data.code?(n.showToast({title:"订单取消成功",duration:1e3,icon:"success"}),t.show=!1,t.current=0,t.allsss()):n.showToast({title:i.data.msg,duration:1e3,icon:"none"})})),this.show=!1},annui:function(i,t){var a=this;switch(i){case 0:this.order_id=t.id,this.show=!0,this.hahahaxuanzhe=t;break;case 1:this.$api.orderpay({prepay_id:t.id,id:t.id,dingjin:t.deposit}).then((function(i){if(200==i.data.code){var t=a;n.requestPayment({timeStamp:i.data.data.timeStamp,nonceStr:i.data.data.nonceStr,package:i.data.data.package,signType:i.data.data.signType,paySign:i.data.data.paySign,success:function(i){n.showToast({title:"支付成功",icon:"none"}),t.allsss(),t.current=1},fail:function(i){n.showToast({title:"支付失败",icon:"none"})}})}else n.showToast({title:i.data.msg,icon:"none"})}));break;case 2:this.order_id=t.orderid,this.showa=!0;break;case 3:n.navigateTo({url:"../pagesC/wuliu?id="+t.id+"&express="+t.express+"&expressorder="+t.expressorder});break;case 4:this.order_id=t.id,this.mnbv=t,this.shows=!0;break;case 5:var e="";e=2==this.current?0:1,n.navigateTo({url:"../pagesA/tuikuan?orderid="+t.orderid+"&type="+e});break;case 6:n.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(t)+"&okj="+this.pingjiaok});break;case 7:n.navigateTo({url:"../pagesC/shouhou?item="+JSON.stringify(t)});break;case 8:this.shouhouitem=t,this.quxiaoshouhou=!0;break;default:}},system:function(){var i=n.getSystemInfoSync();this.height=i.windowHeight},lun_change:function(n){this.current=n.detail.current},change:function(n){this.current=n,this.title=this.lists[n].name},back:function(i){switch(i){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}},hahaha:function(n){n.check=!n.check},fuwenben:function(i){n.setStorageSync("fuwenbeng",i.content),n.navigateTo({url:"../pagesC/fuwenben?title="+i.name})},tongyis:function(i){var t=this;1==i?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(i){1==i.data.code?(t.tongyi(1),t.shoujiyanzheng=!1):n.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):n.showToast({title:"请输入验证码",icon:"none"}):this.shoujiyanzheng=!1},tongyi:function(n){1==n?this.yuedu=!0:(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(i){var t=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;t.test(i.detail.value)||n.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var i=this;0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:n.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){n.showToast({title:"发送成功",duration:1e3,icon:"none"}),i.timea=60;var a=setInterval((function(){i.timea--,i.huoqu=i.timea+"s后获取",0==i.timea&&(clearInterval(a),i.huoqu="获取验证码")}),1e3)}else n.showToast({title:"发送失败",duration:1e3,icon:"none"})}))}}};i.default=t}).call(this,t(1)["default"])},319:function(n,i,t){"use strict";t.r(i);var a=t(320),e=t.n(a);for(var s in a)"default"!==s&&function(n){t.d(i,n,(function(){return a[n]}))}(s);i["default"]=e.a},320:function(n,i,t){}},[[313,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/dindan.js.map