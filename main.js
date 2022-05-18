import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false


App.mpType = 'app'


// uploads/20220518/b3e5fcf6950318229cc046a5532e368d.png

import uView from 'uview-ui'
Vue.use(uView);

import share from "utils/share.js"
Vue.mixin(share)


import login from "utils/islogin.js"
Vue.prototype.$login = login


import api from 'utils/api'
Vue.prototype.$api = api


Vue.prototype.$imgPath = "https://bao.scwushen.com"


Vue.prototype.$shangchuan = "http://bao.scwushen.com/index.php"


Vue.prototype.$imgs = function(url) {
	if (url == "" || url == null) {
		return url
	}
	if (url.includes("https")) {
		return url
	} else {
		if (url.includes("uploads")) {
			url = "https://bao.scwushen.com" + url
		}
		return url
	}
}

Vue.prototype.$shangchuan = "https://bao.scwushen.com/index.php"


const app = new Vue({
	...App
})

app.$mount()
