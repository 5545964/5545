import request from "./request.js"
export default {
	qsj(params = {}) {
		return request.post("/api/byd_user/qsj", params);
	},
	puser(params = {}) {
		return request.post("/api/byd_user/puser", params);
	},
	yqpeople(params = {}) {
		return request.post("/api/byd_user/yqpeople", params);
	},
	likeuser(params = {}) {
		return request.post("/api/byd_user/likeuser", params);
	},
	allpeople(params = {}) {
		return request.post("/api/byd_user/allpeople", params);
	},
	lpagreement(params = {}) {
		return request.post("/api/bydshop/lpagreement", params);
	},
	likelp(params = {}) {
		return request.post("/api/bydshop/likelp", params);
	},
	mapstation(params = {}) {
		return request.post("/api/bydshop/mapstation", params);
	},
	fou(params = {}) {
		return request.post("/api/bydshop/fou", params);
	},
	tjsq(params = {}) {
		return request.post("/api/bydidentity/tjsq", params);
	},
	sqb(params = {}) {
		return request.post("/api/bydidentity/sqb", params);
	},
	lpmap(params = {}) {
		return request.post("/api/bydshop/lpmap", params);
	},
	paycupons(params = {}) {
		return request.post("/api/bydshop/paycupons", params);
	},
	cupons(params = {}) {
		return request.post("/api/bydshop/cupons", params);
	},
	mycupon(params = {}) {
		return request.post("/api/bydshop/mycupons", params);
	},
	desljpf(params = {}) {
		return request.post("/api/bydshop/desljpf", params);
	},
	pf(params = {}) {
		return request.post("/api/bydshop/pf", params);
	},
	map(params = {}) {
		return request.post("/api/bydshop/map", params);
	},
	mobile(params = {}) {
		return request.post("/api/byd_user/mobile", params);
	},
	pots(params = {}) {
		return request.post("/api/bydshop/pots", params);
	},
	xqsh(params = {}) {
		return request.post("/api/bydshop/xqsh", params);
	},
	sqty(params = {}) {
		return request.post("/api/bydshop/sqty", params);
	},
	taskstatus(params = {}) {
		return request.post("/api/bydshop/taskstatus", params);
	},
	gettask(params = {}) {
		return request.post("/api/bydshop/gettask", params);
	},
	emsphone(params = {}) {
		return request.post("/api/ems/sends", params);
	},
	emsyzphone(params = {}) {
		return request.post("/api/ems/sendsyz", params);
	},
	userupload(params = {}) {
		return request.post("/api/bydshop/userupload", params);
	},
	userinfo(params = {}) {
		return request.post("/api/bydshop/userinfo", params);
	},
	contract(params = {}) {
		return request.post("/api/bydshop/contract", params);
	},
	querysuccess(params = {}) {
		return request.post("/api/bydshop/querysuccess", params);
	},
	realname(params = {}) {
		return request.post("/api/bydshop/realname", params);
	},
	myreg(params = {}) {
		return request.post("/api/bydshop/myreg", params);
	},
	zhxmy(params = {}) {
		return request.post("/api/bydshop/zhxmy", params);
	},
	myag(params = {}) {
		return request.post("/api/bydshop/myag", params);
	},
	userag(params = {}) {
		return request.post("/api/bydshop/userag", params);
	},
	sqexpress(params = {}) {
		return request.post("/api/bydshop/sqexpress", params);
	},
	dingj(params = {}) {
		return request.post("/api/bydshop/dingj", params);
	},
	successloading(params = {}) {
		return request.post("/api/bydshop/successloading", params);
	},
	agreement(params = {}) {
		return request.post("/api/Bydidentity/agreement", params);
	},
	agreements(params = {}) {
		return request.post("/api/Bydidentity/agreements", params);
	},
	sqlading(params = {}) {
		return request.post("/api/bydshop/sqlading", params);
	},
	deslabel(params = {}) {
		return request.post("/api/bydidentity/deslabel", params);
	},
	deleorder(params = {}) {
		return request.post("/api/bydshop/deleorder", params);
	},
	mypl(params = {}) {
		return request.post("/api/bydshop/mypl", params);
	},
	activtz(params = {}) {
		return request.post("/api/byd_user/activtz", params);
	},
	letter(params = {}) {
		return request.post("/api/byd_user/letter", params);
	},
	timeshop(params = {}) {
		return request.post("/api/bydshop/timeshop", params);
	},
	color(params = {}) {
		return request.post("/api/bydindex/color", params);
	},
	shopicon(params = {}) {
		return request.post("/api/bydshop/shopicon", params);
	},
	star(params = {}) {
		return request.post("/api/bydidentity/star", params);
	},
	recruit(params = {}) {
		return request.post("/api/bydindex/recruit", params);
	},
	sqorder(params = {}) {
		return request.post("/api/bydshop/sqorder", params);
	},
	delefa(params = {}) {
		return request.post("/api/bydidentity/delefa", params);
	},
	desmyuser(params = {}) {
		return request.post("/api/bydidentity/myuser", params);
	},
	myuser(params = {}) {
		return request.post("/api/byd_user/myuser", params);
	},
	desproMoenys(params = {}) {
		return request.post("/api/bydidentity/desproMoenys", params);
	},
	addressdel(params = {}) {
		return request.post("/api/byd_user/addressdel", params);
	},
	qxorder(params = {}) {
		return request.post("/api/bydshop/qxorder", params);
	},
	shopplhf(params = {}) {
		return request.post("/api/bydshop/shopplhf", params);
	},
	indexPl(params = {}) {
		return request.post("/api/bydindex/pl", params);
	},
	indexplhf(params = {}) {
		return request.post("/api/bydindex/plhf", params);
	},
	orderset(params = {}) {
		return request.post("/api/bydshop/orderset", params);
	},
	wxlogin(params = {}) {
		return request.post("/api/byd_user/wxlogin", params);
	},
	desfollow(params = {}) {
		return request.post("/api/byd_user/desfollow", params);
	},
	edituser(params = {}) {
		return request.post("/api/byd_user/edituser", params);
	},
	indexcontent(params = {}) {
		return request.post("/api/bydindex/indexcontent", params);
	},
	banner(params = {}) {
		return request.post("/api/bydindex/banner", params);
	},
	yydes(params = {}) {
		return request.post("/api/Bydidentity/yydes", params);
	},
	addpostspic(params = {}) {
		return request.post("/api/byd_user/addpostspic", params);
	},
	style(params = {}) {
		return request.post("/api/bydindex/style", params);
	},
	huxin(params = {}) {
		return request.post("/api/bydindex/huxin", params);
	},
	huxincategory(params = {}) {
		return request.post("/api/bydindex/huxincategory", params);
	},
	setcategory(params = {}) {
		return request.post("/api/bydindex/setcategory", params);
	},
	setxq(params = {}) {
		return request.post("/api/bydindex/setxq", params);
	},
	qjset(params = {}) {
		return request.post("/api/bydindex/qjset", params);
	},
	indexbar(params = {}) {
		return request.post("/api/bydindex/indexbar", params);
	},
	bydadout(params = {}) {
		return request.post("/api/bydindex/bydadout", params);
	},
	indexlike(params = {}) {
		return request.post("/api/bydindex/indexlike", params);
	},
	loupanden(params = {}) {
		return request.post("/api/bydindex/loupanden", params);
	},
	loupanlike(params = {}) {
		return request.post("/api/bydindex/loupanlike", params);
	},
	loupanxq(params = {}) {
		return request.post("/api/bydindex/loupanxq", params);
	},
	setleft(params = {}) {
		return request.post("/api/bydindex/setleft", params);
	},
	pl(params = {}) {
		return request.post("/api/bydshop/pl", params);
	},
	indexpl(params = {}) {
		return request.post("/api/bydindex/pl", params);
	},
	shopxq(params = {}) {
		return request.post("/api/bydshop/shopxq", params);
	},
	shopindex(params = {}) {
		return request.post("/api/bydshop/shopindex", params);
	},
	orderdzf(params = {}) {
		return request.post("/api/bydshop/orderdzf", params);
	},
	ordertui(params = {}) {
		return request.post("/api/bydshop/ordertui", params);
	},
	ordertui(params = {}) {
		return request.post("/api/bydshop/ordertui", params);
	},
	myorder(params = {}) {
		return request.post("/api/bydshop/myorder", params);
	},
	myfollow(params = {}) {
		return request.post("/api/byd_user/myfollow", params);
	},
	sureorder(params = {}) {
		return request.post("/api/bydshop/sureorder", params);
	},
	cartdel(params = {}) {
		return request.post("/api/bydshop/cartdel", params);
	},
	shopcart(params = {}) {
		return request.post("/api/bydshop/shopcart", params);
	},
	addcart(params = {}) {
		return request.post("/api/bydshop/addcart", params);
	},
	seemore(params = {}) {
		return request.post("/api/bydshop/seemore", params);
	},
	categoryshop(params = {}) {
		return request.post("/api/bydshop/categoryshop", params);
	},
	cartpay(params = {}) {
		return request.post("/api/bydshop/cartpay", params);
	},
	shoplike(params = {}) {
		return request.post("/api/bydshop/shoplike", params);
	},
	enjoy(params = {}) {
		return request.post("/api/bydindex/enjoy", params);
	},
	zan(params = {}) {
		return request.post("/api/bydindex/zan", params);
	},
	addfollow(params = {}) {
		return request.post("/api/bydshop/addfollow", params);
	},
	dessel(params = {}) {
		return request.post("/api/bydidentity/dessel", params);
	},
	desxq(params = {}) {
		return request.post("/api/bydidentity/desxq", params);
	},
	buylevel(params = {}) {
		return request.post("/api/bydidentity/buylevel", params);
	},
	ispay(params = {}) {
		return request.post("/api/bydidentity/ispay", params);
	},
	adddes(params = {}) {
		return request.post("/api/bydidentity/adddes", params);
	},
	addressshow(params = {}) {
		return request.post("/api/byd_user/addressshow", params);
	},
	address(params = {}) {
		return request.post("/api/byd_user/address", params);
	},
	des(params = {}) {
		return request.post("/api/bydidentity/des", params);
	},
	shenfen(params = {}) {
		return request.post("/api/bydidentity/shenfen", params);
	},
	addnews(params = {}) {
		return request.post("/api/bydidentity/addnews", params);
	},
	desorder(params = {}) {
		return request.post("/api/bydidentity/desorder", params);
	},
	desmyteam(params = {}) {
		return request.post("/api/bydidentity/desmyteam", params);
	},
	myteam(params = {}) {
		return request.post("/api/bydidentity/myteam", params);
	},
	mysub(params = {}) {
		return request.post("/api/bydidentity/mysub", params);
	},
	desorders(params = {}) {
		return request.post("/api/bydidentity/desorders", params);
	},
	desindex(params = {}) {
		return request.post("/api/bydidentity/desindex", params);
	},
	desmode(params = {}) {
		return request.post("/api/bydidentity/desmode", params);
	},
	addprogramme(params = {}) {
		return request.post("/api/bydidentity/addprogramme", params);
	},
	loupancategory(params = {}) {
		return request.post("/api/bydindex/loupancategory", params);
	},
	mymake(params = {}) {
		return request.post("/api/byd_user/mymake", params);
	},
	upewm(params = {}) {
		return request.post("/api/bydidentity/upewm", params);
	},
	ewm(params = {}) {
		return request.post("/api/bydindex/ewm", params);
	},
	business(params = {}) {
		return request.post("/api/byd_user/business", params);
	},
	orderdzf(params = {}) {
		return request.post("/api/bydshop/orderdzf", params);
	},
	orderpay(params = {}) {
		return request.post("/api/bydshop/orderpay", params);
	},
	lookexpress(params = {}) {
		return request.post("/api/bydshop/lookexpress", params);
	},
	sureorder(params = {}) {
		return request.post("/api/bydshop/sureorder", params);
	},
	editdes(params = {}) {
		return request.post("/api/bydidentity/editdes", params);
	},
	contein(params = {}) {
		return request.post("/api/bydidentity/contein", params);
	},
	despro(params = {}) {
		return request.post("/api/bydidentity/despro", params);
	},
	paymoney(params = {}) {
		return request.post("/api/bydidentity/paymoney", params);
	},
	delfollow(params = {}) {
		return request.post("/api/byd_user/delfollow", params);
	},
	mydesigner(params = {}) {
		return request.post("/api/byd_user/mydesigner", params);
	},
	myfootxr(params = {}) {
		return request.post("/api/bydshop/myfootxr", params);
	},
	delfootxr(params = {}) {
		return request.post("/api/bydshop/delfootxr", params);
	},
	bzxq(params = {}) {
		return request.post("/api/bydshop/bzxq", params);
	},
	qzqy(params = {}) {
		return request.post("/api/byd_user/qzqy", params);
	},
	timeout(params = {}) {
		return request.post("/api/byd_user/timeout", params);
	},
	blp(params = {}) {
		return request.post("/api/byd_user/blp", params);
	},
	ewmjoin(params = {}) {
		return request.post("/api/byd_user/ewmjoin", params);
	},
	tgfw(params = {}) {
		return request.post("/api/byd_user/tgfw", params);
	},
	fwsure(params = {}) {
		return request.post("/api/byd_user/fwsure", params);
	},
	pxxr(params = {}) {
		return request.post("/api/bydshop/pxxr", params);
	},
	pxsq(params = {}) {
		return request.post("/api/bydshop/pxsq", params);
	},
	qxment(params = {}) {
		return request.post("/api/bydshop/qxment", params);
	},
	vrnews(params = {}) {
		return request.post("/api/bydshop/vrnews", params);
	},
	cuxx(params = {}) {
		return request.post("/api/bydshop/cuxx", params);
	},
	videopl(params = {}) {
		return request.post("/api/bydindex/videopl", params);
	},
	sendsvr(params = {}) {
		return request.post("/api/ems/sendsvr", params);
	},
	sorcemx(params = {}) {
		return request.post("/api/byd_user/sorcemx", params);
	},
	scoregoods(params = {}) {
		return request.post("/api/bydshop/scoregoods", params);
	},
	shoppay(params = {}) {
		return request.post("/api/bydshop/shoppay", params);
	},
	idlikelp(params = {}) {
		return request.post("/api/bydidentity/likelp", params);
	}




}
