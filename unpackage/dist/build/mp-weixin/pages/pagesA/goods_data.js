(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/goods_data"],{1912:function(i,t,a){"use strict";a.r(t);var n=a("7db7"),s=a.n(n);for(var e in n)"default"!==e&&function(i){a.d(t,i,(function(){return n[i]}))}(e);t["default"]=s.a},"4e81":function(i,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return e})),a.d(t,"a",(function(){return n}));var n={uNavbar:function(){return a.e("uview-ui/components/u-navbar/u-navbar").then(a.bind(null,"452c"))},uHeigth:function(){return a.e("uview-ui/components/u-heigth/u-heigth").then(a.bind(null,"9270"))},uPopup:function(){return a.e("uview-ui/components/u-popup/u-popup").then(a.bind(null,"d62c"))},uInput:function(){return Promise.all([a.e("common/vendor"),a.e("uview-ui/components/u-input/u-input")]).then(a.bind(null,"fd95"))},uKehu:function(){return Promise.all([a.e("common/vendor"),a.e("uview-ui/components/u-kehu/u-kehu")]).then(a.bind(null,"4dd2"))},uIcon:function(){return a.e("uview-ui/components/u-icon/u-icon").then(a.bind(null,"9f16"))}},s=function(){var i=this,t=i.$createElement,a=(i._self._c,i.__map(i.data_list.shop,(function(t,a){var n=i.__get_orig(t),s=0==i.jifen?(t.num*t.sonprice).toFixed(2)||"":null,e=0!=i.jifen?(t.num*t.sonprice).toFixed(2)||"":null;return{$orig:n,g0:s,g1:e}})));i._isMounted||(i.e0=function(t){i.qurren=!1}),i.$mp.data=Object.assign({},{$root:{l0:a}})},e=[]},5945:function(i,t,a){"use strict";a.r(t);var n=a("4e81"),s=a("1912");for(var e in s)"default"!==e&&function(i){a.d(t,i,(function(){return s[i]}))}(e);a("9dfd");var o,u=a("f0c5"),h=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"504dcda6",null,!1,n["a"],o);t["default"]=h.exports},"7db7":function(i,t,a){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{xiaoshoufalse:!1,jifen:0,fdsa:!1,lklklklk:!0,tigongfuwu:!0,qitaren:{},qitarenfasle:"",quxiaoshouhou:!1,dinshiqi:"",shoujihao:i.getStorageSync("user_info").mobile,pingjiaok:0,yianzhaungkaiguan:!0,yianzhaungxieyi:[],shifouanzhaungkaiguan:!0,shifouanzhaungxieyi:[],querenqianshoukaiguan:!0,querenqianshouxieyi:[],bzxq:{},anzhuang:!1,kuaididata:{},kuaididanhao:"",kuaidigongsi:"",kuaidi:!1,hahahaxuanzhe:{},zhuangtai:0,mnbv:"",baozhuangshow:!1,code:"",buyanzheng:!0,timea:0,huoqu:"获取验证码",shoujiyanzheng:!1,yuedu:!1,xieyi:[],qurrsaen:"",qurren:!1,youhuijuan_num:0,img:this.$imgPath,value:"",show:!1,shows:!1,showa:!1,title:"订单详情",data_list:{},img_list:[],order_idsssss:"",daojishi:"",fwid:0,opop:{}}},onLoad:function(t){t.title&&(this.title=t.title),t.jifen&&(this.jifen=t.jifen),this.opop=t,this.order_idsssss=t.order_id,t.qitarenfasle?(this.qitaren={user_id:t.qitarenfasle,id:this.order_idsssss},this.fdsa=!0):(this.qitaren={user_id:i.getStorageSync("user_info").id,id:this.order_idsssss},this.fdsa=!1)},onShow:function(){var t=this;this.allsss();var a=i.getStorageSync("xieyi");a?(this.yiwanchengxieyi=[],this.yianzhaungxieyi=[],this.shifouanzhaungxieyi=[],this.querenqianshouxieyi=[],a.forEach((function(i){3==i.state&&t.yianzhaungxieyi.push(i),5==i.state&&t.shifouanzhaungxieyi.push(i),2==i.state&&t.querenqianshouxieyi.push(i)})),this.yianzhaungxieyi.length>0?this.yianzhaungkaiguan=!0:this.yianzhaungkaiguan=!1,this.shifouanzhaungxieyi.length>0?this.shifouanzhaungkaiguan=!0:this.shifouanzhaungkaiguan=!1,this.querenqianshouxieyi.length>0?this.querenqianshoukaiguan=!0:this.querenqianshoukaiguan=!1):(this.yianzhaungkaiguan=!1,this.shifouanzhaungkaiguan=!1,this.querenqianshoukaiguan=!1)},watch:{shoujiyanzheng:function(i,t){i||(this.code="")}},methods:{xiaoshoufuwenben:function(){var i={content:this.data_list.qd,name:"产品清单"};this.fuwenben(i)},xiaoshouqeihuan:function(){this.xiaoshoufalse=!this.xiaoshoufalse},fou:function(){var i=this;this.$api.fou({orderid:this.data_list.orderid}).then((function(t){i.baozhuangshow=!1}))},tigongfuwus:function(t){var a=this;this.$api.fwsure({user_id:i.getStorageSync("user_info").id,choice:t,id:this.fwid}).then((function(t){i.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(a.lklklklk=!1)}))},shouhoou:function(t){var a=this;1==t?this.$api.xqsh({orderid:this.data_list.orderid}).then((function(t){1==t.data.code&&(a.quxiaoshouhou=!1,i.navigateBack(-1)),i.showToast({title:t.data.msg,icon:"none"})})):this.quxiaoshouhou=!1},baozhuangpngji:function(i){this.pingjiaok=i,this.annui(6)},dakaishouji:function(i){this.zhuangtai=i,0==i&&(this.xieyi=this.querenqianshouxieyi,this.buyanzheng=this.querenqianshoukaiguan,this.shows=!1),1==i&&(this.xieyi=this.shifouanzhaungxieyi,this.buyanzheng=this.shifouanzhaungkaiguan,this.baozhuangshow=!1),2==i&&(this.xieyi=this.yianzhaungxieyi,this.buyanzheng=this.yianzhaungkaiguan,this.qurren=!1),this.shoujiyanzheng=!0},lookdetails:function(i){var t=this;this.$api.bzxq({id:this.data_list.bzid}).then((function(i){1==i.data.code&&(t.bzxq=i.data.data.status,t.anzhuang=!0)}))},kuaidiwow:function(t){var a=this;0==t?this.kuaidi=!1:this.$api.sqexpress({orderid:this.order_idsssss,sqexpress:this.kuaidigongsi,sqexpressorder:this.kuaididanhao}).then((function(t){i.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(a.kuaidi=!1,a.allsss())}))},kuaidiwo:function(i){this.kuaididata=i,this.kuaidi=!0},jiesubaozhaung:function(){this.qurrsaen=this.data_list,this.qurren=!0},tongyixieyi:function(){var t=this;if(this.buyanzheng){var a=0,n=[];if(this.xieyi.forEach((function(i){i.check&&(a++,n.push(i))})),this.xieyi.length!=a)return i.showToast({title:"请阅读并同意协议",icon:"none"});if(!this.xiaoshoufalse)return i.showToast({title:"请同意产品清单",icon:"none"});n.forEach((function(a){t.$api.userag({userid:i.getStorageSync("user_info").id,agid:a.id})})),this.shoujiyanzheng=!1,this.yuedu=!1}0==this.zhuangtai&&this.querenshouhuo(),1==this.zhuangtai&&this.shifouanzhuangdsadas(),2==this.zhuangtai&&this.anzhaungwancheng()},shifouanzhuangdsadas:function(){this.baozhuangshow=!1,i.setStorageSync("baozhaung",this.data_list.shop),i.navigateTo({url:"../pagesB/baozhaung?orderid="+this.mnbv.orderid+"&tiao=2"})},querenshouhuo:function(){var t=this;this.shows=!1,this.$api.sureorder({id:this.data_list.id}).then((function(a){1==a.data.code&&(t.shows=!1,i.showToast({title:"收货成功",icon:"none"}),t.allsss(),t.baozhuangshow=!t.baozhuangshow)}))},anzhaungwancheng:function(){var t=this;this.$api.successloading({orderid:this.qurrsaen.orderid}).then((function(a){1==a.data.code?(i.showToast({title:"安装完成",icon:"success"}),t.qurren=!1,i.navigateBack(-1)):i.showToast({title:a.data.msg,icon:"success"})}))},baozhaung:function(i){this.mnbv=this.data_list,this.baozhuangshow=!this.baozhuangshow},delorder:function(){var t=this;i.showModal({title:"是否删除此订单",content:t.order_idsssss,success:function(a){a.confirm&&t.$api.deleorder({orderid:t.order_idsssss}).then((function(t){i.showToast({title:t.data.msg,duration:1e3,icon:"success"}),1==t.data.code&&i.navigateBack({delta:2})}))}})},countDown:function(){var i=this,t=1e3*i.data_list.cretime;i.dinshiqi=setInterval((function(){var a=i.addtimes(t);i.daojishi=a.hours+":"+a.minutes+":"+a.seconds,"00"==a.hours&&"00"==a.minutes&&"00"==a.seconds&&clearInterval(i.dinshiqi)}),1e3)},addtimes:function(i){var t=new Date,a=1e3*i-t.getTime(),n=a%864e5,s=Math.floor(n/36e5),e=a%36e5,o=Math.floor(e/6e4),u=a%6e4,h=Math.floor(u/1e3);s<10&&(s="0"+s),o<10&&(o="0"+o),h<10&&(h="0"+h);var d={hours:s,minutes:o,seconds:h};return d},allsss:function(){var t=this;this.$api.myorder(this.qitaren).then((function(a){1==a.data.code&&(a.data.data.status.forEach((function(a){if(a.orderid==t.order_idsssss){if(t.data_list=a,t.data_list.paytime&&(t.data_list.paytime=t.$u.timeFormat(t.data_list.paytime,"yyyy-mm-dd hh:MM:ss")),t.data_list.image){var n=t.data_list.image;t.img_list=n.split(",")}if(t.countDown(),t.fdsa){var s={users_id:i.getStorageSync("user_info").id,id:t.data_list.id};t.$api.tgfw(s).then((function(i){0==i.data.code?t.lklklklk=!1:(t.tigongfuwu=!1,t.fwid=i.data.data.status.id,t.lklklklk=!0)}))}}})),"{}"===JSON.stringify(t.data_list)&&(i.showToast({title:"暂无订单",duration:1e3,icon:"none"}),setTimeout((function(){i.navigateBack(-1)}),1e3)))}))},xuanzhea:function(t){1==t&&this.$api.qxorder({orderid:this.order_idsssss}).then((function(t){1==t.data.code&&(i.showToast({title:t.data.msg,icon:"none"}),i.navigateBack(-1))})),this.showa=!1},product:function(t){i.navigateTo({url:"/pages/pagesC/Shopping?shopid="+t.id})},tongyiss:function(i){var t=this;this.$api.agreement({state:i}).then((function(i){1==i.data.code&&(i.data.data.status.forEach((function(i){i["check"]=!1})),t.xieyi=i.data.data.status)}))},xuanzhes:function(i){1==i&&(this.tongyiss(2),this.zhuangtai=0,this.shoujiyanzheng=!0),this.shows=!1},qurrere:function(i){1==i&&(this.tongyiss(3),this.shoujiyanzheng=!0,this.zhuangtai=2),this.qurren=!1},baozhaungshowss:function(i){1==i&&(this.tongyiss(3),this.zhuangtai=1,this.shoujiyanzheng=!0),this.baozhuangshow=!1},xuanzhe:function(t){var a=this;switch(t){case 0:this.show=!1;break;case 1:this.$api.orderdzf({id:this.data_list.id}).then((function(t){1==t.data.code?(i.showToast({title:"订单取消成功",duration:1e3,icon:"success"}),a.show=!1,i.navigateBack(-1)):i.showToast({title:t.data.msg,duration:1e3,icon:"success"})}));break;default:}},annui:function(t){switch(t){case 0:this.show=!0;break;case 1:this.$api.orderpay({prepay_id:this.data_list.id,id:this.data_list.id,dingjin:this.data_list.deposit}).then((function(t){if(200==t.data.code){i.requestPayment({timeStamp:t.data.data.timeStamp,nonceStr:t.data.data.nonceStr,package:t.data.data.package,signType:t.data.data.signType,paySign:t.data.data.paySign,success:function(t){i.showToast({title:"支付成功",icon:"none"}),i.navigateBack(-1)},fail:function(t){i.showToast({title:"支付失败",icon:"none"})}})}else i.showToast({title:t.data.msg,icon:"none"})}));break;case 2:this.showa=!0;break;case 3:i.navigateTo({url:"../pagesC/wuliu?id="+this.data_list.id+"&express="+this.data_list.express+"&expressorder="+this.data_list.expressorder});break;case 4:this.shows=!0;break;case 5:var a="";a=1==this.data_list.state?0:1,i.navigateTo({url:"../pagesA/tuikuan?orderid="+this.data_list.orderid+"&type="+a});break;case 6:i.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(this.data_list)+"&okj="+this.pingjiaok});break;case 7:i.navigateTo({url:"../pagesC/shouhou?item="+JSON.stringify(this.data_list)});break;case 8:this.quxiaoshouhou=!0;break;default:}},back:function(t){switch(t){case 0:i.navigateBack(-1);break;case 1:i.reLaunch({url:"/pages/Home/Home"});break;default:}},hahaha:function(i){i.check=!i.check},fuwenben:function(t){i.setStorageSync("fuwenbeng",t.content),i.navigateTo({url:"../pagesC/fuwenben?title="+t.name})},tongyis:function(t){var a=this;1==t?""!=this.code?this.$api.emsyzphone({phone:this.shoujihao,yzm:this.code}).then((function(t){1==t.data.code?(a.tongyi(1),a.shoujiyanzheng=!1):i.showToast({title:"验证码错误",duration:1e3,icon:"none"})})):i.showToast({title:"请输入验证码",icon:"none"}):this.shoujiyanzheng=!1},tongyi:function(i){1==i?(this.xieyi.forEach((function(i){i.check=!1})),this.yuedu=!0):(this.shoujiyanzheng=!1,this.yuedu=!1)},hahahaa:function(t){var a=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;a.test(t.detail.value)||i.showToast({title:"手机号不正确",icon:"none"})},go_code:function(){var t=this;this.xiaoshoufalse=!1,0==this.timea&&this.$api.emsphone({phone:this.shoujihao,user_id:i.getStorageSync("user_info").id}).then((function(a){if(1==a.data.code){i.showToast({title:"发送成功",duration:1e3,icon:"none"}),t.timea=60;var n=setInterval((function(){t.timea--,t.huoqu=t.timea+"s后获取",0==t.timea&&(clearInterval(n),t.huoqu="获取验证码")}),1e3)}else i.showToast({title:"发送失败",duration:1e3,icon:"none"})}))}}};t.default=a}).call(this,a("543d")["default"])},"9dfd":function(i,t,a){"use strict";var n=a("fc56"),s=a.n(n);s.a},c0b4:function(i,t,a){"use strict";(function(i){a("c9dc");n(a("66fd"));var t=n(a("5945"));function n(i){return i&&i.__esModule?i:{default:i}}wx.__webpack_require_UNI_MP_PLUGIN__=a,i(t.default)}).call(this,a("543d")["createPage"])},fc56:function(i,t,a){}},[["c0b4","common/runtime","common/vendor"]]]);