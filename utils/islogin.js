import api from '@/api'


function log(ev) {
	return new Promise((resolve, reject) => {
		let level = 0;
		let pid = 0;
		if (uni.getStorageSync("yaoqinglevel")) {
			level = uni.getStorageSync("yaoqinglevel")
		}
		if (uni.getStorageSync("yaoqinguid")) {
			pid = uni.getStorageSync("yaoqinguid")
		}
		if (uni.getStorageSync("token") == "") {
			uni.getUserProfile({
				desc: 'Wexin',
				success: data => {
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							api.wxlogin({
								code: loginRes.code,
								iv: data.iv,
								encryptedData: data.encryptedData,
								level,
								pid
							}).then(data => {
								if (data.data.code == 1) {
									uni.setStorageSync("token", data.data.data
										.token);
									api.addressshow({
										id: data.data.data.status.id
									}).then(data => {
										if (data.data.code == 1) {
											data.data.data.status.forEach(item => {
												if (item.auto == 1) {
													uni.setStorageSync(
														"address",
														item
													)
												}
											})
										}
									})
									api.myuser({
										user_id: data.data.data.status.id
									}).then(data => {
									    if (data.data.code == 1) {
									    	uni.setStorageSync("user_info", data.data.data.myuser)
									    }
									})
									if (ev != "") {
										uni.navigateTo({
											url: ev
										})
									}
									resolve(true);
								} else {
									resolve(false);
									uni.showToast({
										title: data.data.msg,
										duration: 1000,
										icon: "none"
									})
								}
							})
						}
					});
				}
			})
		} else {
			resolve(true);
		}
	})

}
export default log
