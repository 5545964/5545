(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/dindan"],{313:function(t,i,n){"use strict";(function(t){n(5);a(n(3));var i=a(n(314));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n(1)["createPage"])},314:function(t,i,n){"use strict";n.r(i);var a=n(315),e=n(317);for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);n(319);var o,u=n(11),h=Object(u["default"])(e["default"],a["render"],a["staticRenderFns"],!1,null,"ca3a6720",null,!1,a["components"],o);h.options.__file="pages/pagesB/dindan.vue",i["default"]=h.exports},315:function(t,i,n){"use strict";n.r(i);var a=n(316);n.d(i,"render",(function(){return a["render"]})),n.d(i,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(i,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(i,"components",(function(){return a["components"]}))},316:function(t,i,n){"use strict";var a;n.r(i),n.d(i,"render",(function(){return e})),n.d(i,"staticRenderFns",(function(){return o})),n.d(i,"recyclableRender",(function(){return s})),n.d(i,"components",(function(){return a}));try{a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,658))},uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,665))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,727))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-empty/u-empty")]).then(n.bind(null,786))},uHeigth:function(){return n.e("uview-ui/components/u-heigth/u-heigth").then(n.bind(null,837))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,751))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,822))},uKehu:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-kehu/u-kehu")]).then(n.bind(null,679))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,758))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var e=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.qurren=!1},t.e1=function(i){t.shows=!1})},s=!1,o=[];e._withStripped=!0},317:function(t,i,n){"use strict";n.r(i);var a=n(318),e=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);i["default"]=e.a},318:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{jifen:0,shouhouitem:"",quxiaoshouhou:!1,shoujihao:t.getStorageSync("user_info").mobile,yianzhaungkaiguan:!0,yianzhaungxieyi:[],shifouanzhaungkaiguan:!0,shifouanzhaungxieyi:[],querenqianshoukaiguan:!0,querenqianshouxieyi:[],bzxq:{},anzhuang:!1,kuaididata:{},kuaididanhao:"",kuaidigongsi:"",kuaidi:!1,zhuangtai:0,qurrsaen:"",qurren:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],mnbv:"",baozhuangshow:!1,hahahaxuanzhe:{},imgtitle:this.$imgPath,show:!1,shows:!1,showa:!1,height:0,current:0,title:"",lists:[{name:"全部"},{name:"待发货"},{name:"发货中"},{name:"已收货"},{name:"报装中"},{name:"已安装"}],list:[{status:"all",data_list:[]},{status:1,data_list:[]},{status:2,data_list:[]},{status:3,data_list:[]},{status:4,data_list:[]},{status:5,data_list:[]}],time:"",pingjiaok:0}},onLoad:function(i){var n=this;i.jifen&&(this.jifen=i.jifen,this.lists=[{name:"全部"},{name:"待发货"},{name:"待收货"},{name:"已完成"}],this.list=[{status:"all",data_list:[]},{status:1,data_list:[]},{status:2,data_list:[]},{status:3,data_list:[]}]),t.$on("number",(function(){})),t.$on("yuwancheng",(function(){n.current=3})),this.title=i.title,i.current&&(this.current=i.current)},onShow:function(){var i=this;this.system(),this.allsss();var n=t.getStorageSync("xieyi");n?(this.yiwanchengxieyi=[],this.yianzhaungxieyi=[],this.shifouanzhaungxieyi=[],this.querenqianshouxieyi=[],n.forEach((function(t){3==t.state&&i.yianzhaungxieyi.push(t),5==t.state&&i.shifouanzhaungxieyi.push(t),2==t.state&&i.querenqianshouxieyi.push(t)})),this.yianzhaungxieyi.length>0?this.yianzhaungkaiguan=!0:this.yianzhaungkaiguan=!1,this.shifouanzhaungxieyi.length>0?this.shifouanzhaungkaiguan=!0:this.shifouanzhaungkaiguan=!1,this.querenqianshouxieyi.length>0?this.querenqianshoukaiguan=!0:this.querenqianshoukaiguan=!1):(this.yianzhaungkaiguan=!1,this.shifouanzhaungkaiguan=!1,this.querenqianshoukaiguan=!1)},watch:{shoujiyanzheng:function(t,i){t||(this.code="")}},methods:{jfquerenshouhuo:function(i){var n=this;this.$api.sureorder({id:i.id}).then((function(i){1==i.data.code&&(t.showToast({title:"收货成功",icon:"none"}),n.allsss(),n.current=3)}))},fou:function(){var t=this;this.$api.fou({orderid:this.mnbv.orderid}).then((function(i){t.baozhuangshow=!1}))},shouhoou:function(i){var n=this;1==i?this.$api.xqsh({orderid:this.shouhouitem.orderid}).then((function(i){1==i.data.code&&(n.allsss(),n.quxiaoshouhou=!1),t.showToast({title:i.data.msg,icon:"none"})})):this.quxiaoshouhou=!1},baozhuangpngji:function(t,i){this.pingjiaok=t,this.annui(6,i)},dakaishouji:function(t){this.zhuangtai=t,0==t&&(this.xieyi=this.querenqianshouxieyi,this.buyanzheng=this.querenqianshoukaiguan,this.shows=!1),1==t&&(this.xieyi=this.shifouanzhaungxieyi,this.buyanzheng=this.shifouanzhaungkaiguan,this.baozhuangshow=!1),2==t&&(this.xieyi=this.yianzhaungxieyi,this.buyanzheng=this.yianzhaungkaiguan,this.qurren=!1),this.shoujiyanzheng=!0},lookdetails:function(t){var i=this;this.$api.bzxq({id:t.bzid}).then((function(t){1==t.data.code&&(i.bzxq=t.data.data.status,i.anzhuang=!0)}))},kuaidiwow:function(i){var n=this;0==i?this.kuaidi=!1:this.$api.sqexpress({orderid:this.kuaididata.orderid,sqexpress:this.kuaidigongsi,sqexpressorder:this.kuaididanhao}).then((function(i){t.showToast({title:i.data.msg,icon:"none"}),1==i.data.code&&(n.kuaidi=!1,n.allsss())}))},kuaidiwo:function(t){this.kuaididata=t,this.kuaidi=!0},jiesubaozhaung:function(t){this.qurrsaen=t,this.qurren=!0},tongyixieyi:function(){var i=this;if(this.buyanzheng){var n=0,a=[];if(this.xieyi.forEach((function(t){t.check&&(n++,a.push(t))})),this.xieyi.length!=n)return t.showToast({title:"请阅读并同意协议",icon:"none"});a.forEach((function(n){i.$api.userag({userid:t.getStorageSync("user_info").id,agid:n.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}0==this.zhuangtai&&this.querenshouhuo(),1==this.zhuangtai&&this.shifouanzhuangdsadas(),2==this.zhuangtai&&this.anzhaungwancheng()},shifouanzhuangdsadas:function(){this.baozhuangshow=!1,t.setStorageSync("baozhaung",this.mnbv.shop),t.navigateTo({url:"./baozhaung?orderid="+this.mnbv.orderid+"&tiao=1"})},querenshouhuo:function(){var i=this;this.shows=!1,this.$api.sureorder({id:this.order_id}).then((function(n){1==n.data.code&&(i.shows=!1,t.showToast({title:"收货成功",icon:"none"}),i.baozhuangshow=!i.baozhuangshow,i.allsss(),i.current=3)}))},anzhaungwancheng:function(){var i=this;this.$api.successloading({orderid:this.qurrsaen.orderid}).then((function(n){1==n.data.code?(t.showToast({title:"安装完成",icon:"success"}),i.qurren=!1,i.allsss()):t.showToast({title:n.data.msg,icon:"none"})}))},baozhaung:function(t){this.mnbv=t,this.baozhuangshow=!this.baozhuangshow},delorder:function(i){var n=this;t.showModal({title:"是否删除此订单",content:i.orderid,success:function(a){a.confirm&&n.$api.deleorder({orderid:i.orderid}).then((function(i){t.showToast({title:i.data.msg,duration:1e3,icon:"none"}),1==i.data.code&&n.allsss()}))}})},allsss:function(){var i=this;this.$api.myorder({user_id:t.getStorageSync("user_info").id}).then((function(t){i.list.forEach((function(t,i){t.data_list=[]})),1==t.data.code&&(0==i.jifen?(t.data.data.status.forEach((function(t,n){0==t.score&&i.list[0].data_list.push(t)})),t.data.data.status.forEach((function(t){if(0==t.score)switch(t.state){case"1":i.list[1].data_list.push(t);break;case"2":i.list[2].data_list.push(t);break;case"3":i.list[3].data_list.push(t);break;case"4":i.list[3].data_list.push(t);break;case"16":i.list[4].data_list.push(t);break;case"17":i.list[5].data_list.push(t);break;default:}}))):1==t.data.code&&(t.data.data.status.forEach((function(t,n){1==t.score&&i.list[0].data_list.push(t)})),t.data.data.status.forEach((function(t){if(1==t.score)switch(t.state){case"1":i.list[1].data_list.push(t);break;case"2":i.list[2].data_list.push(t);break;case"4":i.list[3].data_list.push(t);break;default:}}))))}))},goods:function(i){t.navigateTo({url:"../pagesA/goods_data?order_id="+i.orderid+"&jifen=1"})},xuanzhea:function(i){var n=this;1==i&&this.$api.qxorder({orderid:this.order_id}).then((function(i){1==i.data.code&&(t.showToast({title:i.data.msg,icon:"none"}),n.allsss())})),this.showa=!1},jfquxiao:function(i){var n=this;console.log(i),this.$api.orderdzf({id:i.id}).then((function(i){1==i.data.code?(t.showToast({title:"订单取消成功",duration:1e3,icon:"success"}),n.current=0,n.allsss()):t.showToast({title:i.data.msg,duration:1e3,icon:"none"})}))},xuanzhe:function(i){var n=this;1==i&&this.$api.orderdzf({id:this.hahahaxuanzhe.id}).then((function(i){1==i.data.code?(t.showToast({title:"订单取消成功",duration:1e3,icon:"success"}),n.show=!1,n.current=0,n.allsss()):t.showToast({title:i.data.msg,duration:1e3,icon:"none"})})),this.show=!1},annui:function(i,n){var a=this;switch(i){case 0:this.order_id=n.id,this.show=!0,this.hahahaxuanzhe=n;break;case 1:this.$api.orderpay({prepay_id:n.id,id:n.id,dingjin:n.deposit}).then((function(i){if(200==i.data.code){var n=a;t.requestPayment({timeStamp:i.data.data.timeStamp,nonceStr:i.data.data.nonceStr,package:i.data.data.package,signType:i.data.data.signType,paySign:i.data.data.paySign,success:function(i){t.showToast({title:"支付成功",icon:"none"}),n.allsss(),n.current=1},fail:function(i){t.showToast({title:"支付失败",icon:"none"})}})}else t.showToast({title:i.data.msg,icon:"none"})}));break;case 2:this.order_id=n.orderid,this.showa=!0;break;case 3:t.navigateTo({url:"../pagesC/wuliu?id="+n.id+"&express="+n.express+"&expressorder="+n.expressorder});break;case 4:this.order_id=n.id,this.mnbv=n,this.shows=!0;break;case 5:var e="";e=2==this.current?0:1,t.navigateTo({url:"../pagesA/tuikuan?orderid="+n.orderid+"&type="+e});break;case 6:t.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(n)+"&okj="+this.pingjiaok});break;case 7:t.navigateTo({url:"../pagesC/shouhou?item="+JSON.stringify(n)});break;case 8:this.shouhouitem=n,this.quxiaoshouhou=!0;break;default:}},system:function(){var i=t.getSystemInfoSync();this.height=i.windowHeight},lun_change:function(t){this.current=t.detail.current},change:function(t){this.current=t,this.title=this.lists[t].name},back:function(i){switch(i){case 0:t.navigateBack(-1);break;case 1:t.reLaunch({url:"/pages/Home/Home"});break;default:}},hahaha:function(t){t.check=!t.check},fuwenben:function(i){t.setStorageSync("fuwenbeng",i.content),t.navigateTo({url:"../pagesC/fuwenben?title="+i.name})},tongyis:function(i){var n=this;1==i?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(i){1==i.data.code?(n.tongyi(1),n.shoujiyanzheng=!1):t.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):t.showToast({title:"请输入验证码",icon:"none"}):this.shoujiyanzheng=!1},tongyi:function(t){1==t?this.yuedu=!0:(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(i){var n=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;n.test(i.detail.value)||t.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var i=this;0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:t.getStorageSync("user_info").id}).then((function(n){if(1==n.data.code){t.showToast({title:"发送成功",duration:1e3,icon:"none"}),i.timea=60;var a=setInterval((function(){i.timea--,i.huoqu=i.timea+"s后获取",0==i.timea&&(clearInterval(a),i.huoqu="获取验证码")}),1e3)}else t.showToast({title:"发送失败",duration:1e3,icon:"none"})}))}}};i.default=n}).call(this,n(1)["default"])},319:function(t,i,n){"use strict";n.r(i);var a=n(320),e=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);i["default"]=e.a},320:function(t,i,n){}},[[313,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pagesB/dindan.js.map