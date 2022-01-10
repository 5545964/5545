import request from "./request.js"

export default {
	//bydidentity/star
	star(params = {}) {
		return request.post("/api/bydidentity/star", params);
	},
	///api/bydindex/recruit
	recruit(params = {}) {
		return request.post("/api/bydindex/recruit", params);
	},
	///api/bydshop/sqorder
	sqorder(params = {}) {
		return request.post("/api/bydshop/sqorder", params);
	},
	//delefa
	delefa(params = {}) {
		return request.post("/api/bydidentity/delefa", params);
	},
	// api/bydidentity/myuser
	desmyuser(params = {}) {
		return request.post("/api/bydidentity/myuser", params);
	},
	// 个人资料api/byd_user/myuser
	myuser(params = {}) {
		return request.post("/api/byd_user/myuser", params);
	},
	//显示设计师支付价格
	desproMoenys(params = {}) {
		return request.post("/api/bydidentity/desproMoenys", params);
	},
	// 咨询中心https://mp.weixin.qq.com/mp/appmsgalbum

	//删除地址/api/byd_user/addressdel
	addressdel(params = {}) {
		return request.post("/api/byd_user/addressdel", params);
	},
	// 取消退款bydshop/qxorder
	qxorder(params = {}) {
		return request.post("/api/bydshop/qxorder", params);
	},
	// 回复评论 /api/bydshop/plhf
	shopplhf(params = {}) {
		return request.post("/api/bydshop/shopplhf", params);
	},
	//评论
	indexPl(params = {}) {
		return request.post("/api/bydindex/pl", params);
	},
	// 回复评论 /api/bydindex/plhf
	indexplhf(params = {}) {
		return request.post("/api/bydindex/plhf", params);
	},
	// 时间/api/bydshop/orderset
	orderset(params = {}) {
		return request.post("/api/bydshop/orderset", params);
	},
	//微信登录 /api/byd_user/wxlogin
	wxlogin(params = {}) {
		return request.post("/api/byd_user/wxlogin", params);
	},
	//关注设计师desfollow
	desfollow(params = {}) {
		return request.post("/api/byd_user/desfollow", params);
	},
	// 编辑资料 /api/byd_user/edituser
	edituser(params = {}) {
		return request.post("/api/byd_user/edituser", params);
	},
	// /api/bydindex/
	// /api/bydindex/
	// /api/bydindex/
	// /api/bydindex/
	// bydindex/indexcontent
	indexcontent(params = {}) {
		return request.post("/api/bydindex/indexcontent", params);
	},
	// 轮播/api/bydindex/banner
	banner(params = {}) {
		return request.post("/api/bydindex/banner", params);
	},
	//预约/api/Bydidentity/yydes
	yydes(params = {}) {
		return request.post("/api/Bydidentity/yydes", params);
	},
	//上传图片/api/byd_user/addpostspic
	addpostspic(params = {}) {
		return request.post("/api/byd_user/addpostspic", params);
	},
	// 佳作分享风格分类 /api/bydindex/style
	style(params = {}) {
		return request.post("/api/bydindex/style", params);
	},
	// 户型攻略 /api/bydindex/huxin
	huxin(params = {}) {
		return request.post("/api/bydindex/huxin", params);
	},
	// 户型攻略分类 /api/bydindex/huxincategory
	huxincategory(params = {}) {
		return request.post("/api/bydindex/huxincategory", params);
	},
	// 首页-旗舰套系分类 /api/bydindex/setcategory
	setcategory(params = {}) {
		return request.post("/api/bydindex/setcategory", params);
	},
	// 旗舰套系详情 /api/bydindex/setxq
	setxq(params = {}) {
		return request.post("/api/bydindex/setxq", params);
	},
	// 首页-旗舰导航 /api/bydindex/qjset
	qjset(params = {}) {
		return request.post("/api/bydindex/qjset", params);
	},
	// tabber/api/bydindex/indexbar
	indexbar(params = {}) {
		return request.post("/api/bydindex/indexbar", params);
	},
	// 关于宝芸邸/api/bydindex/bydadout
	bydadout(params = {}) {
		return request.post("/api/bydindex/bydadout", params);
	},
	// 楼盘设计搜索 /api/bydindex/loupanlike
	loupanlike(params = {}) {
		return request.post("/api/bydindex/loupanlike", params);
	},
	// 首页搜索 /api/bydindex/indexlike
	indexlike(params = {}) {
		return request.post("/api/bydindex/indexlike", params);
	},
	// 楼盘设计列表 /api/bydindex/loupanden
	loupanden(params = {}) {
		return request.post("/api/bydindex/loupanden", params);
	},
	// 楼盘设计搜索 /api/bydindex/loupanlike
	loupanlike(params = {}) {
		return request.post("/api/bydindex/loupanlike", params);
	},
	// 楼盘设计详情 /api/bydindex/loupanxq
	loupanxq(params = {}) {
		return request.post("/api/bydindex/loupanxq", params);
	},
	// /api/bydshop/
	// /api/bydshop/
	// /api/bydshop/
	// /api/bydshop/
	// 套系详情左侧导航栏 /api/bydindex/setleft
	setleft(params = {}) {
		return request.post("/api/bydindex/setleft", params);
	},
	// 商品评价 /api/bydshop/pl
	pl(params = {}) {
		return request.post("/api/bydshop/pl", params);
	},
	// 商品评价 /api/bydshop/pl
	indexpl(params = {}) {
		return request.post("/api/bydindex/pl", params);
	},
	// 商品详情 /api/bydshop/shopxq
	shopxq(params = {}) {
		return request.post("/api/bydshop/shopxq", params);
	},
	// 商城产品中心 /api/bydshop/shopindex
	shopindex(params = {}) {
		return request.post("/api/bydshop/shopindex", params);
	},
	// 我的订单取消 /api/bydshop/orderdzf
	orderdzf(params = {}) {
		return request.post("/api/bydshop/orderdzf", params);
	},
	// 退款ordertui
	ordertui(params = {}) {
		return request.post("/api/bydshop/ordertui", params);
	},
	// 我的订单tuikuan /api/bydshop/ordertui
	ordertui(params = {}) {
		return request.post("/api/bydshop/ordertui", params);
	},
	// 我的订单 /api/bydshop/myorderI 
	myorder(params = {}) {
		return request.post("/api/bydshop/myorder", params);
	},
	// 我的收藏 /api/byd_user/myfollow
	myfollow(params = {}) {
		return request.post("/api/byd_user/myfollow", params);
	},
	//确认sureorder
	sureorder(params = {}) {
		return request.post("/api/bydshop/sureorder", params);
	},
	// 购物车删除 /api/bydshop/cartdel
	cartdel(params = {}) {
		return request.post("/api/bydshop/cartdel", params);
	},
	// 购物车展示 /api/bydshop/shopcart
	shopcart(params = {}) {
		return request.post("/api/bydshop/shopcart", params);
	},
	// 加入购物车 /api/bydshop/addcart
	addcart(params = {}) {
		return request.post("/api/bydshop/addcart", params);
	},
	// 陈杰
	// 产品中心查看更多分类 /api/bydshop/seemore
	seemore(params = {}) {
		return request.post("/api/bydshop/seemore", params);
	},
	// 产品分类下商品 /api/bydshop/categoryshop
	categoryshop(params = {}) {
		return request.post("/api/bydshop/categoryshop", params);
	},
	//下单/api/bydshop/cartpay
	cartpay(params = {}) {
		return request.post("/api/bydshop/cartpay", params);
	},
	// 商品模糊查询 /api/bydshop/shoplike
	shoplike(params = {}) {
		return request.post("/api/bydshop/shoplike", params);
	},
	// 佳作分享 /api/bydindex/enjoy
	enjoy(params = {}) {
		return request.post("/api/bydindex/enjoy", params);
	},
	// 点赞与取消点赞 /api/bydindex/zan
	zan(params = {}) {
		return request.post("/api/bydindex/zan", params);
	},
	// 添加收藏 /api/bydshop/addfollow
	addfollow(params = {}) {
		return request.post("/api/bydshop/addfollow", params);
	},
	// 设计师列表 /api/bydidentity/dessel
	dessel(params = {}) {
		return request.post("/api/bydidentity/dessel", params);
	},
	// 设计师详情 /api/bydidentity/desxq
	desxq(params = {}) {
		return request.post("/api/bydidentity/desxq", params);
	},
	// 微信支付 buylevel
	buylevel(params = {}) {
		return request.post("/api/bydidentity/buylevel", params);
	},
	//姊妹支付
	ispay(params = {}) {
		return request.post("/api/bydidentity/ispay", params);
	},
	// 申请成为设计师 /api/bydidentity/adddes
	adddes(params = {}) {
		return request.post("/api/bydidentity/adddes", params);
	},
	// 地址列表 /api/byd_user/addressshow
	addressshow(params = {}) {
		return request.post("/api/byd_user/addressshow", params);
	},
	// 添加或修改地址 /api/byd_user/address
	address(params = {}) {
		return request.post("/api/byd_user/address", params);
	},
	// 设计师首页  /api/bydidentity/des
	des(params = {}) {
		return request.post("/api/bydidentity/des", params);
	},
	// 身份专区   /api/bydidentity/shenfen
	shenfen(params = {}) {
		return request.post("/api/bydidentity/shenfen", params);
	},
	// 设计师系统消息 /api/bydidentity/addnews
	addnews(params = {}) {
		return request.post("/api/bydidentity/addnews", params);
	},
	// 设计师订单-接单/取消/确认完成 /api/bydidentity/desorder
	desorder(params = {}) {
		return request.post("/api/bydidentity/desorder", params);
	},
	// 设计师我的团队 /api/bydidentity/myteam
	desmyteam(params = {}) {
		return request.post("/api/bydidentity/desmyteam", params);
	},
	// 我的团队 /api/bydidentity/myteam
	myteam(params = {}) {
		return request.post("/api/bydidentity/myteam", params);
	},
	// 我的佣金 /api/bydidentity/mysub
	mysub(params = {}) {
		return request.post("/api/bydidentity/mysub", params);
	},
	// 设计师订单列表 /api/bydidentity/desorders
	desorders(params = {}) {
		return request.post("/api/bydidentity/desorders", params);
	},
	// 设计师个人资料 /api/bydidentity/desindex
	desindex(params = {}) {
		return request.post("/api/bydidentity/desindex", params);
	},
	// 设计师标签 /api/bydidentity/desmode
	desmode(params = {}) {
		return request.post("/api/bydidentity/desmode", params);
	},
	// 设计师上传方案 /api/bydidentity/addprogramme
	addprogramme(params = {}) {
		return request.post("/api/bydidentity/addprogramme", params);
	},
	// 楼盘设计筛选条件 /api/bydindex/loupancategory
	loupancategory(params = {}) {
		return request.post("/api/bydindex/loupancategory", params);
	},
	// 我的预约记录 /api/byd_user/mymake
	mymake(params = {}) {
		return request.post("/api/byd_user/mymake", params);
	},
	// 设计师订单 上传二维码 /api/bydidentity/upewm
	upewm(params = {}) {
		return request.post("/api/bydidentity/upewm", params);
	},
	// 专属二维码 /api/bydindex/ewm
	ewm(params = {}) {
		return request.post("/api/bydindex/ewm", params);
	},
	// 电子名片  /api/byd_user/business
	business(params = {}) {
		return request.post("/api/byd_user/business", params);
	},
	// 我的优惠卷  mycupon
	mycupon(params = {}) {
		return request.post("/api/bydshop/mycupon", params);
	},
	// 取消订单  orderdzf 
	orderdzf(params = {}) {
		return request.post("/api/bydshop/orderdzf", params);
	},
	// 待支付-确认支付 orderpay
	orderpay(params = {}) {
		return request.post("/api/bydshop/orderpay", params);
	},
	// 查看物流  lookexpress
	lookexpress(params = {}) {
		return request.post("/api/bydshop/lookexpress", params);
	},
	// 待收货-确认收货 sureorder
	sureorder(params = {}) {
		return request.post("/api/bydshop/sureorder", params);
	},
	// 设计师修改资料 editdes
	editdes(params = {}) {
		return request.post("/api/bydidentity/editdes", params);
	},
	// 查看合同模板 contein
	contein(params = {}) {
		return request.post("/api/bydidentity/contein", params);
	},
	// 成为设计师状态 despro
	despro(params = {}) {
		return request.post("/api/bydidentity/despro", params);
	},
	// 预约支付定金/尾金 paymoney
	paymoney(params = {}) {
		return request.post("/api/bydidentity/paymoney", params);
	},

	//todo 删除收藏商品
	delfollow(params = {}) {
		return request.post("/api/byd_user/delfollow", params);
	},
	//todo 我的关注 --设计师
	mydesigner(params = {}) {
		return request.post("/api/byd_user/mydesigner", params);
	},
	//todo  我的足迹
	myfootxr(params = {}) {
		return request.post("/api/bydshop/myfootxr", params);
	},
	//todo 删除足迹
	delfootxr(params = {}) {
		return request.post("/api/bydshop/delfootxr", params);
	},

}
