(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pagesA/gongju10"],{"0881":function(n,a,i){"use strict";i.r(a);var t=i("f731"),u=i.n(t);for(var s in t)"default"!==s&&function(n){i.d(a,n,(function(){return t[n]}))}(s);a["default"]=u.a},"176c":function(n,a,i){"use strict";(function(n){i("c9dc");t(i("66fd"));var a=t(i("535e"));function t(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=i,n(a.default)}).call(this,i("543d")["createPage"])},"535e":function(n,a,i){"use strict";i.r(a);var t=i("668a"),u=i("0881");for(var s in u)"default"!==s&&function(n){i.d(a,n,(function(){return u[n]}))}(s);i("8278");var e,o=i("f0c5"),h=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"a3ca3e9e",null,!1,t["a"],e);a["default"]=h.exports},"668a":function(n,a,i){"use strict";i.d(a,"b",(function(){return u})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return t}));var t={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,"452c"))},uTabs:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-tabs/u-tabs")]).then(i.bind(null,"c85c"))},uPopup:function(){return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null,"d62c"))},uInput:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-input/u-input")]).then(i.bind(null,"fd95"))},uHeigth:function(){return i.e("uview-ui/components/u-heigth/u-heigth").then(i.bind(null,"9270"))}},u=function(){var n=this,a=n.$createElement;n._self._c;n._isMounted||(n.e0=function(a){n.baozhuangshow=!1},n.e1=function(a){n.qurren=!1})},s=[]},8278:function(n,a,i){"use strict";var t=i("9750"),u=i.n(t);u.a},9750:function(n,a,i){},f731:function(n,a,i){"use strict";(function(n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{anzhuang:!1,bzxq:{},qurrsaen:"",qurren:!1,buyanzheng:!0,mnbv:"",zhuangtai:0,yianzhaungkaiguan:!0,yianzhaungxieyi:[],shifouanzhaungkaiguan:!0,shifouanzhaungxieyi:[],baozhuangshow:!1,imgtitle:this.$imgPath,current:0,pingjiaok:0,title:"我的报装",list:[{name:"全部"},{name:"待安装"},{name:"安装中"},{name:"已完成"}],lists:[{status:"all",data_list:[]},{status:1,data_list:[]},{status:2,data_list:[]},{status:3,data_list:[]}]}},onLoad:function(a){var i=this,t=n.getStorageSync("xieyi");t?(this.yiwanchengxieyi=[],this.yianzhaungxieyi=[],this.shifouanzhaungxieyi=[],this.querenqianshouxieyi=[],t.forEach((function(n){3==n.state&&i.yianzhaungxieyi.push(n),5==n.state&&i.shifouanzhaungxieyi.push(n),2==n.state&&i.querenqianshouxieyi.push(n)})),this.yianzhaungxieyi.length>0?this.yianzhaungkaiguan=!0:this.yianzhaungkaiguan=!1,this.shifouanzhaungxieyi.length>0?this.shifouanzhaungkaiguan=!0:this.shifouanzhaungkaiguan=!1,this.querenqianshouxieyi.length>0?this.querenqianshoukaiguan=!0:this.querenqianshoukaiguan=!1):(this.yianzhaungkaiguan=!1,this.shifouanzhaungkaiguan=!1,this.querenqianshoukaiguan=!1),this.title=a.title},onShow:function(){this.allsss()},methods:{lookdetails:function(n){var a=this;this.$api.bzxq({id:n.bzid}).then((function(n){1==n.data.code&&(a.bzxq=n.data.data.status,a.anzhuang=!0)}))},allsss:function(){var a=this;this.$api.myorder({user_id:n.getStorageSync("user_info").id}).then((function(n){1==n.data.code&&(a.lists.forEach((function(n,a){n.data_list=[]})),n.data.data.status.forEach((function(n){switch(n.state){case"3":a.lists[0].data_list.push(n),a.lists[1].data_list.push(n);break;case"16":a.lists[0].data_list.push(n),a.lists[2].data_list.push(n);break;case"17":a.lists[0].data_list.push(n),a.lists[3].data_list.push(n);break;default:}})))}))},baozhuangpngji:function(n,a){this.pingjiaok=n,this.annui(6,a)},annui:function(a,i){switch(a){case 6:n.navigateTo({url:"../pagesC/pingjia?item="+JSON.stringify(i)+"&okj="+this.pingjiaok});break;default:}},anzhaungwancheng:function(){var a=this;this.$api.successloading({orderid:this.qurrsaen.orderid}).then((function(i){1==i.data.code?(n.showToast({title:"安装完成",icon:"success"}),a.qurren=!1,a.allsss()):n.showToast({title:i.data.msg,icon:"none"})}))},jiesubaozhaung:function(n){this.qurrsaen=n,this.qurren=!0},goods:function(a){n.navigateTo({url:"./goods_data?order_id="+a.orderid})},shifouanzhuangdsadas:function(){this.baozhuangshow=!1,n.setStorageSync("baozhaung",this.mnbv.shop),n.navigateTo({url:"../pagesB/baozhaung?orderid="+this.mnbv.orderid+"&tiao=1"})},dakaishouji:function(n){this.zhuangtai=n,1==n&&(this.xieyi=this.shifouanzhaungxieyi,this.buyanzheng=this.shifouanzhaungkaiguan,this.baozhuangshow=!1),2==n&&(this.xieyi=this.yianzhaungxieyi,this.buyanzheng=this.yianzhaungkaiguan,this.qurren=!1),this.shoujiyanzheng=!0},baozhaung:function(n){this.mnbv=n,this.baozhuangshow=!this.baozhuangshow},change:function(n){this.current=n},back:function(a){switch(a){case 0:n.navigateBack(-1);break;case 1:n.reLaunch({url:"/pages/Home/Home"});break;default:}}}};a.default=i}).call(this,i("543d")["default"])}},[["176c","common/runtime","common/vendor"]]]);