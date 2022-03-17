import ajax from "./u-ajax/js_sdk/"
const instance = ajax.create({
	baseURL: "https://bao.scwushen.com/index.php",
	timeout: 60000,
	header: {
		post: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		}
	}
})
const token = uni.getStorageSync("token").token;
instance.interceptors.request.use(
	config => {
		if (token != "") {
			config.header["token"] = token
		}
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
		uni.showToast({
			title: "服务器繁忙,请稍后重试",
			duration: 1200,
			icon: "none"
		})
		setTimeout(() => {
			uni.navigateBack(-1)
		}, 1000)
		return Promise.reject(error)
	}
)
export default instance;
