import ajax from "./u-ajax/js_sdk/"
// 创建实例
const instance = ajax.create({
	baseURL: "https://bao.scwushen.com/index.php",
	timeout: 10000,
	header: {
		post: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		}
	}
})
const token = uni.getStorageSync("token");
const user = uni.getStorageSync("user_info");
// 添加请求拦截器
instance.interceptors.request.use(
	config => {
		if (config.data.show != '') {
			uni.showLoading({
				title: config.data.show,
				mask: true
			})
			delete config.data.show;
		}
		if (token != "") {
			config.header["token"] = token
			// config.data["user_id"] = user.id
		}
		//config请求前数据，发送前做些什么
		return config
	},
	error => {

		// 对请求错误做些什么
		uni.showToast({
			title: "网络错误",
			duration: 1000,
			icon: "none"
		})
		return Promise.reject(error)
	}
)
// 添加响应拦截器
instance.interceptors.response.use(
	response => {
		uni.hideLoading();
		//response请求接受数据
		return response
	},
	error => {
		uni.hideLoading();
		// 对响应错误做些什么
		return Promise.reject(error)
	}
)
export default instance;
