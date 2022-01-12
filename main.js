import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'
import uView from 'uview-ui'
import dayjs from "dayjs";
Vue.use(uView);
//二级tabBar
import tabBar from "@/components/tabbar/tabbar.vue" 
Vue.component('tab-bar', tabBar)
// 全局登陆
import login from "utils/islogin.js"
Vue.prototype.$login = login
// 显示图片头部
Vue.prototype.$imgPath = "https://bao.scwushen.com"
Vue.prototype.$imgs = function(url) {
	if (url.indexOf("http") == -1) {
		if (url.indexOf("uploads") != -1) {
			url = "https://bao.scwushen.com" + url
		}
		return url
	} else {
		return url
	}

}
// 上传图片地址
Vue.prototype.$shangchuan = "https://bao.scwushen.com/index.php"
//时间处理方法
Vue.prototype.$dayjs = dayjs
//请求封装
import api from '@/api'
Vue.prototype.$api = api



const app = new Vue({
	...App,
	store
})
app.$mount()
