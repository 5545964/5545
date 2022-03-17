import Vue from 'vue'
import App from './App'
import store from './store'


Vue.config.productionTip = false


App.mpType = 'app'


import uView from 'uview-ui'
Vue.use(uView);


import login from "utils/islogin.js"
Vue.prototype.$login = login


import api from 'utils/api'
Vue.prototype.$api = api


Vue.prototype.$imgPath = "https://bao.scwushen.com"


Vue.prototype.$shangchuan = "http://bao.scwushen.com/index.php"


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


Vue.prototype.$shangchuan = "https://bao.scwushen.com/index.php"


const app = new Vue({
	...App,
	store
})

app.$mount()
