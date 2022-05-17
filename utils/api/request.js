import ajax from "./u-ajax/js_sdk/"
import api from '@/utils/api'
const instance = ajax.create({
	baseURL: "https://bao.scwushen.com/index.php",
	timeout: 60000,
	header: {
		post: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		}
	}
})
const token = uni.getStorageSync("token") || 0;
instance.interceptors.request.use(
	config => {
		//模拟用户
		if (false) {
			config.data.user_id = 5
		}
		config.header["token"] = token.token
		return config
	},
	error => {
		uni.showToast({
			title: "网络错误",
			duration: 1000,
			icon: "none"
		})
		return Promise.reject(error)
	}
)
instance.interceptors.response.use(
	response => {
		return response
	},
	error => {
		let bb = error.config.url.split("/")
		if (bb[bb.length - 1] != "cuxx") {
			let aa = {
				data: error.config.data,
				url: error.config.url
			}
			api.cuxx({
				user_id: uni.getStorageSync("user_info").id || 0,
				content: JSON.stringify(aa)
			})
		}
		uni.showToast({
			title: "服务器繁忙,请稍后重试",
			duration: 1200,
			icon: "none"
		})
		return Promise.reject(error)
	}
)
export default instance;
