(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesB/dindan"],{"074b":function(i,n,t){"use strict";var a=t("33fb"),e=t.n(a);e.a},"0963":function(i,n,t){"use strict";t.d(n,"b",(function(){return e})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return a}));var a={uNavbar:function(){return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null,"452c"))},uSearch:function(){return t.e("uview-ui/components/u-search/u-search").then(t.bind(null,"92c6"))},uTabs:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-tabs/u-tabs")]).then(t.bind(null,"c85c"))},uEmpty:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-empty/u-empty")]).then(t.bind(null,"d5eb"))},uHeigth:function(){return t.e("uview-ui/components/u-heigth/u-heigth").then(t.bind(null,"9270"))},uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,"d62c"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,"fd95"))},uKehu:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-kehu/u-kehu")]).then(t.bind(null,"4dd2"))},uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,"9f16"))}},e=function(){var i=this,n=i.$createElement;i._self._c;i._isMounted||(i.e0=function(n){i.qurren=!1},i.e1=function(n){i.shows=!1})},s=[]},1363:function(i,n,t){"use strict";(function(i){t("c9dc");a(t("66fd"));var n=a(t("38d1"));function a(i){return i&&i.__esModule?i:{default:i}}wx.__webpack_require_UNI_MP_PLUGIN__=t,i(n.default)}).call(this,t("543d")["createPage"])},"33fb":function(i,n,t){},"38d1":function(i,n,t){"use strict";t.r(n);var a=t("0963"),e=t("757d");for(var s in e)"default"!==s&&function(i){t.d(n,i,(function(){return e[i]}))}(s);t("074b");var u,o=t("f0c5"),h=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"255f0bc5",null,!1,a["a"],u);n["default"]=h.exports},"757d":function(i,n,t){"use strict";t.r(n);var a=t("b16a"),e=t.n(a);for(var s in a)"default"!==s&&function(i){t.d(n,i,(function(){return a[i]}))}(s);n["default"]=e.a},b16a:function(i,n,t){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{shouhouitem:"",quxiaoshouhou:!1,shoujihao:i.getStorageSync("user_info").mobile,yianzhaungkaiguan:!0,yianzhaungxieyi:[],shifouanzhaungkaiguan:!0,shifouanzhaungxieyi:[],querenqianshoukaiguan:!0,querenqianshouxieyi:[],bzxq:{},anzhuang:!1,kuaididata:{},kuaididanhao:"",kuaidigongsi:"",kuaidi:!1,zhuangtai:0,qurrsaen:"",qurren:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],mnbv:"",baozhuangshow:!1,hahahaxuanzhe:{},imgtitle:this.$imgPath,show:!1,shows:!1,showa:!1,height:0,current:0,title:"",lists:[{name:"全部"},{name:"待发货"},{name:"发货中"},{name:"已收货"},{name:"报装中"},{name:"已安装"}],list:[{status:"all",data_list:[]},{status:1,data_list:[]},{status:2,data_list:[]},{status:3,data_list:[]},{status:4,data_list:[]},{status:5,data_list:[]}],time:"",pingjiaok:0}},onLoad:function(n){var t=this;i.$on("number",(function(){})),i.$on("yuwancheng",(function(){t.current=3})),this.title=n.title,n.current&&(this.current=n.current),this.$api.orderset().then((function(i){1==i.data.code&&(t.time=i.data.data.status.ordertime)}))},onShow:function(){var n=this;this.system(),this.allsss();var t=i.getStorageSync("xieyi");t?(this.yiwanchengxieyi=[],this.yianzhaungxieyi=[],this.shifouanzhaungxieyi=[],this.querenqianshouxieyi=[],t.forEach((function(i){3==i.state&&n.yianzhaungxieyi.push(i),5==i.state&&n.shifouanzhaungxieyi.push(i),2==i.state&&n.querenqianshouxieyi.push(i)})),this.yianzhaungxieyi.length>0?this.yianzhaungkaiguan=!0:this.yianzhaungkaiguan=!1,this.shifouanzhaungxieyi.length>0?this.shifouanzhaungkaiguan=!0:this.shifouanzhaungkaiguan=!1,this.querenqianshouxieyi.length>0?this.querenqianshoukaiguan=!0:this.querenqianshoukaiguan=!1):(this.yianzhaungkaiguan=!1,this.shifouanzhaungkaiguan=!1,this.querenqianshoukaiguan=!1)},watch:{shoujiyanzheng:function(i,n){i||(this.code="")}},methods:{fou:function(){var i=this;this.$api.successloading({orderid:this.mnbv.orderid}).then((function(n){i.baozhuangshow=!1}))},shouhoou:function(n){var t=this;1==n?this.$api.xqsh({orderid:this.shouhouitem.orderid}).then((function(n){1==n.data.code&&(t.allsss(),t.quxiaoshouhou=!1),i.showToast({title:n.data.msg,icon:"none"})})):this.quxiaoshouhou=!1},baozhuangpngji:function(i,n){this.pingjiaok=i,this.annui(6,n)},dakaishouji:function(i){this.zhuangtai=i,0==i&&(this.xieyi=this.querenqianshouxieyi,this.buyanzheng=this.querenqianshoukaiguan,this.shows=!1),1==i&&(this.xieyi=this.shifouanzhaungxieyi,this.buyanzheng=this.shifouanzhaungkaiguan,this.baozhuangshow=!1),2==i&&(this.xieyi=this.yianzhaungxieyi,this.buyanzheng=this.yianzhaungkaiguan,this.qurren=!1),this.shoujiyanzheng=!0},lookdetails:function(i){var n=this;this.$api.bzxq({id:i.bzid}).then((function(i){1==i.data.code&&(n.bzxq=i.data.data.status,n.anzhuang=!0)}))},kuaidiwow:function(n){var t=this;0==n?this.kuaidi=!1:this.$api.sqexpress({orderid:this.kuaididata.orderid,sqexpress:this.kuaidigongsi,sqexpressorder:this.kuaididanhao}).then((function(n){i.showToast({title:n.data.msg,icon:"none"}),1==n.data.code&&(t.kuaidi=!1,t.allsss())}))},kuaidiwo:function(i){this.kuaididata=i,this.kuaidi=!0},jiesubaozhaung:function(i){this.qurrsaen=i,this.qurren=!0},tongyixieyi:function(){var n=this;if(this.buyanzheng){var t=0,a=[];if(this.xieyi.forEach((function(i){i.check&&(t++,a.push(i))})),this.xieyi.length!=t)return i.showToast({title:"请阅读并同意协议",icon:"none"});a.forEach((function(t){n.$api.userag({userid:i.getStorageSync("user_info").id,agid:t.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}0==this.zhuangtai&&this.querenshouhuo(),1==this.zhuangtai&&this.shifouanzhuangdsadas(),2==this.zhuangtai&&this.anzhaungwancheng()},shifouanzhuangdsadas:function(){this.baozhuangshow=!1,i.setStorageSync("baozhaung",this.mnbv.shop),i.navigateTo({url:"./baozhaung?orderid="+this.mnbv.orderid+"&tiao=1"})},querenshouhuo:function(){var n=this;this.shows=!1,this.$api.sureorder({id:this.order_id}).then((function(t){1==t.data.code&&(n.shows=!1,i.showToast({title:"收货成功",icon:"none"}),n.baozhuangshow=!n.baozhuangshow,n.allsss(),n.current=3)}))},anzhaungwancheng:function(){var n=this;this.$api.successloading({orderid:this.qurrsaen.orderid}).then((function(t){1==t.data.code?(i.showToast({title:"安装完成",icon:"success"}),n.qurren=!1,n.allsss()):i.showToast({title:t.data.msg,icon:"none"})}))},baozhaung:function(i){this.mnbv=i,this.baozhuangshow=!this.baozhuangshow},delorder:function(n){var t=this;i.showModal({title:"是否删除此订单",content:n.orderid,success:function(a){a.confirm&&t.$api.deleorder({orderid:n.orderid}).then((function(n){i.showToast({title:n.data.msg,duration:1e3,icon:"none"}),1==n.data.code&&t.allsss()}))}})},allsss:function(){var n=this;this.$api.myorder({user_id:i.getStorageSync("user_info").id}).then((function(i){n.list.forEach((function(i,n){i.data_list=[]})),1==i.data.code&&(n.list[0].data_list=i.data.data.status,i.data.data.status.forEach((function(i){switch(i.state){case"1":n.list[1].data_list.push(i);break;case"2":n.list[2].data_list.push(i);break;case"3":n.list[3].data_list.push(i);break;case"4":n.list[3].data_list.push(i);break;case"16":n.list[4].data_list.push(i);break;case"17":n.list[5].data_list.push(i);break;default:}})))}))},goods:function(n){i.navigateTo({url:"../pagesA/goods_data?order_id="+n.orderid})},xuanzhea:function(n){var t=this;1==n&&this.$api.qxorder({orderid:this.order_id}).then((function(n){1==n.data.code&&(i.showToast({title:n.data.msg,icon:"none"}),t.allsss())})),this.showa=!1},xuanzhe:function(n){var t=this;1==n&&this.$api.orderdzf({id:this.hahahaxuanzhe.id}).then((function(n){1==n.data.code?(i.showToast({title:"订单取消成功",duration:1e3,icon:"success"}),t.show=!1,t.current=0,t.allsss()):i.showToast({title:n.data.msg,duration:1e3,icon:"none"})})),this.show=!1},annui:function(n,t){var a=this;switch(n){case 0:this.order_id=t.id,this.show=!0,this.hahahaxuanzhe=t;break;case 1:this.$api.orderpay({prepay_id:t.id,id:t.id,dingjin:t.deposit}).then((function(n){if(200==n.data.code){var t=a;i.requestPayment({timeStamp:n.data.data.timeStamp,nonceStr:n.data.data.nonceStr,package:n.data.data.package,signType:n.data.data.signType,paySign:n.data.data.paySign,success:function(n){i.showToast({title:"支付成功",icon:"none"}),t.allsss(),t.current=1},fail:function(n){i.showToast({title:"支付失败",icon:"none"})}})}else i.showToast({title:n.data.msg,icon:"none"})}));break;case 2:this.order_id=t.orderid,this.showa=!0;break;case 3:i.navigateTo({url:"../pagesC/wuliu?id="+t.id+"&express="+t.express+"&expressorder="+t.expressorder});break;case 4:this.order_id=t.id,this.mnbv=t,this.shows=!0;break;case 5:var e="";e=2==this.current?0:1,i.navigateTo({url:"../pagesA/tuikuan?orderid="+t.orderid+"&type="+e});break;case 6:i.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(t)+"&okj="+this.pingjiaok});break;case 7:i.navigateTo({url:"../pagesC/shouhou?item="+JSON.stringify(t)});break;case 8:this.shouhouitem=t,this.quxiaoshouhou=!0;break;default:}},system:function(){var n=i.getSystemInfoSync();this.height=n.windowHeight},lun_change:function(i){this.current=i.detail.current},change:function(i){this.current=i,this.title=this.lists[i].name},back:function(n){switch(n){case 0:i.navigateBack(-1);break;case 1:i.reLaunch({url:"/pages/Home/Home"});break;default:}},hahaha:function(i){i.check=!i.check},fuwenben:function(n){i.setStorageSync("fuwenbeng",n.content),i.navigateTo({url:"../pagesC/fuwenben?title="+n.name})},tongyis:function(n){var t=this;1==n?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(n){1==n.data.code?(t.tongyi(1),t.shoujiyanzheng=!1):i.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):i.showToast({title:"请输入验证码",icon:"none"}):this.shoujiyanzheng=!1},tongyi:function(i){1==i?this.yuedu=!0:(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(n){var t=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;t.test(n.detail.value)||i.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var n=this;0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:i.getStorageSync("user_info").id}).then((function(t){if(1==t.data.code){i.showToast({title:"发送成功",duration:1e3,icon:"none"}),n.timea=60;var a=setInterval((function(){n.timea--,n.huoqu=n.timea+"s后获取",0==n.timea&&(clearInterval(a),n.huoqu="获取验证码")}),1e3)}else i.showToast({title:"发送失败",duration:1e3,icon:"none"})}))}}};n.default=t}).call(this,t("543d")["default"])}},[["1363","common/runtime","common/vendor"]]]);