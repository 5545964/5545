
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Home/Home","pages/Home/Shopping","pages/Home/About","pages/Home/Investment","pages/Home/User","pages/Home/search/search","pages/Home/booking/AppointmentDesign","pages/Home/jiazhuo","pages/Home/URL/URL","pages/Home/shows/shows","pages/pagesA/gongju0","pages/pagesA/gongju1","pages/pagesA/gongju2","pages/pagesA/gongju3","pages/pagesA/gongju4","pages/pagesA/gongju5","pages/pagesA/gongju6","pages/pagesA/gongju7","pages/pagesA/gongju8","pages/pagesA/gongju9","pages/pagesA/gongju10","pages/pagesA/gongju11","pages/pagesA/gongju12","pages/pagesA/tixian","pages/pagesA/xiangqing","pages/pagesA/tuikuan","pages/pagesA/goods_data","pages/pagesA/shengfen","pages/pagesB/address","pages/pagesB/dindan","pages/pagesB/shengfen","pages/pagesB/erweima","pages/pagesB/card","pages/pagesB/my","pages/pagesB/images","pages/pagesC/Shopping","pages/pagesC/promotion","pages/pagesC/ProductCate","pages/pagesC/shopcart","pages/pagesC/HouseDesign","pages/pagesC/FlagshipSet","pages/pagesC/DesignDetail","pages/pagesC/ClubStar","pages/pagesC/FlagshipDetail","pages/pagesC/pingjia","pages/pagesC/searchResult","pages/pagesC/quzhifu","pages/pagesC/wuliu","pages/pagesC/shouhou","pages/pagesC/zhibo","pages/pagesD/User","pages/pagesD/designClub","pages/pagesD/regDesigner/regDesigner","pages/pagesD/regSuccess","pages/pagesD/start","pages/pagesD/designPage/designPage","pages/pagesD/uploadCase","pages/pagesD/designhome","pages/pagesD/messg","pages/pagesD/shejishidindan","pages/pagesD/erweima","pages/pagesD/shejishixiangqing","pages/pagesD/designyongjin","pages/pagesD/hetong","pages/pagesD/xiangmu"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uView","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"white","backgroundColor":"#f4f5f7","custom":true,"list":[{"pagePath":"pages/Home/Home","text":"首页"},{"pagePath":"pages/Home/Shopping","text":"商城"},{"pagePath":"pages/Home/About","text":"关于宝芸邸"},{"pagePath":"pages/Home/Investment","text":"招商加盟"},{"pagePath":"pages/Home/User","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"宝芸邸","compilerVersion":"3.3.5","subPackages":[{"root":"pages/pagesA"},{"root":"pages/pagesB"},{"root":"pages/pagesC"},{"root":"pages/pagesD"}],"entryPagePath":"pages/Home/Home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/Home/Shopping","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城","enablePullDownRefresh":false}},{"path":"/pages/Home/About","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"关于宝芸邸","enablePullDownRefresh":false}},{"path":"/pages/Home/Investment","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"招商加盟","enablePullDownRefresh":false}},{"path":"/pages/Home/User","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false}},{"path":"/pages/Home/search/search","meta":{},"window":{"navigationBarTitleText":"搜索","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/Home/booking/AppointmentDesign","meta":{},"window":{"navigationBarTitleText":"预约设计","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/Home/jiazhuo","meta":{},"window":{"navigationBarTitleText":"佳作分享","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/Home/URL/URL","meta":{},"window":{"navigationBarTitleText":"网页","enablePullDownRefresh":false}},{"path":"/pages/Home/shows/shows","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/pagesA/gongju0","meta":{},"window":{"navigationBarTitleText":"收货地址","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju1","meta":{},"window":{"navigationBarTitleText":"收藏夹","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju2","meta":{},"window":{"navigationBarTitleText":"我的关注","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju3","meta":{},"window":{"navigationBarTitleText":"我的足迹","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju4","meta":{},"window":{"navigationBarTitleText":"我的优惠券","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju5","meta":{},"window":{"navigationBarTitleText":"我的佣金","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju6","meta":{},"window":{"navigationBarTitleText":"安装评价","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju7","meta":{},"window":{"navigationBarTitleText":"产品评价","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju8","meta":{},"window":{"navigationBarTitleText":"站内信息","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju9","meta":{},"window":{"navigationBarTitleText":"我的售后","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju10","meta":{},"window":{"navigationBarTitleText":"我的报装","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju11","meta":{},"window":{"navigationBarTitleText":"我的团队","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/gongju12","meta":{},"window":{"navigationBarTitleText":"预约记录","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/tixian","meta":{},"window":{"navigationBarTitleText":"提佣申请","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/xiangqing","meta":{},"window":{"navigationBarTitleText":"详情","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/tuikuan","meta":{},"window":{"navigationBarTitleText":"申请退款","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/goods_data","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesA/shengfen","meta":{},"window":{"navigationBarTitleText":"上传身份信息","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesB/address","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesB/dindan","meta":{},"window":{"navigationBarTitleText":"我的订单","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesB/shengfen","meta":{},"window":{"navigationBarTitleText":"身份专区","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesB/erweima","meta":{},"window":{"navigationBarTitleText":"二维码","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesB/card","meta":{},"window":{"navigationBarTitleText":"电子名片","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/pagesB/my","meta":{},"window":{"navigationBarTitleText":"个人资料编辑","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/pagesB/images","meta":{},"window":{"navigationBarTitleText":"图片处理","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/pagesC/Shopping","meta":{},"window":{"navigationBarTitleText":"商城","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesC/promotion","meta":{},"window":{"navigationBarTitleText":"限时抢购","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/ProductCate","meta":{},"window":{"navigationBarTitleText":"产品分类","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/shopcart","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/HouseDesign","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/FlagshipSet","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/DesignDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/ClubStar","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/FlagshipDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/pingjia","meta":{},"window":{"navigationBarTitleText":"发表评价","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesC/searchResult","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/quzhifu","meta":{},"window":{"navigationBarTitleText":"结算","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesC/wuliu","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesC/shouhou","meta":{},"window":{"navigationBarTitleText":"售后","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesC/zhibo","meta":{},"window":{"navigationBarTitleText":"我的直播","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesD/User","meta":{},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/pagesD/designClub","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesD/regDesigner/regDesigner","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesD/regSuccess","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesD/start","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesD/designPage/designPage","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesD/uploadCase","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesD/designhome","meta":{},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/pagesD/messg","meta":{},"window":{"navigationBarTitleText":"系统消息","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesD/shejishidindan","meta":{},"window":{"navigationBarTitleText":"设计师订单","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesD/erweima","meta":{},"window":{"navigationBarTitleText":"上传二维码","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesD/shejishixiangqing","meta":{},"window":{"navigationBarTitleText":"订单详情","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesD/designyongjin","meta":{},"window":{"navigationBarTitleText":"我的佣金","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesD/hetong","meta":{},"window":{"navigationBarTitleText":"相关合同","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/pagesD/xiangmu","meta":{},"window":{"navigationBarTitleText":"项目管理","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"black"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});