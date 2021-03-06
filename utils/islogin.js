import api from '@/utils/api'

function log() {
	return new Promise((resolve, reject) => {
		let level = 0;
		let pid = 0;
		let ewm = 0;
		if (uni.getStorageSync("yaoqinglevel")) {
			level = uni.getStorageSync("yaoqinglevel")
		}
		if (uni.getStorageSync("yaoqinguid")) {
			pid = uni.getStorageSync("yaoqinguid")
		}
		if (uni.getStorageSync("yaoqingewm")) {
			ewm = uni.getStorageSync("yaoqingewm")
		}
		if (!uni.getStorageSync("user_info")) {
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
								pid,
								// ewm
							}).then(data => {
								if (data.data.code == 1) {
									uni.setStorageSync("token", data.data.data);
									uni.setStorageSync("key", data.data.data
										.status.key);
									uni.setStorageSync("showssss", false)
									uni.removeStorageSync('yaoqinglevel')
									api.myuser({
										user_id: data.data.data.status.id
									}).then(data => {
										if (data.data.code == 1) {
											uni.setStorageSync(
												"user_info", data
												.data.data.myuser)
											if (pid != 0) {
												api.ewmjoin({
													user_id: uni
														.getStorageSync(
															"user_info"
														)
														.id,
													pid
												}).then(data => {
													if (data
														.data
														.code ==
														1) {
														uni.removeStorageSync(
															'yaoqinguid'
														)
													}
												})
											}
											api.addressshow({
												id: data.data
													.data.myuser
													.id
											}).then(data => {
												if (data.data
													.code == 1
												) {
													data.data
														.data
														.status
														.forEach(
															item => {
																if (item
																	.auto ==
																	1
																) {
																	uni.setStorageSync(
																		"address",
																		item
																	)
																}
															})
												}
											})
											resolve(true);
										}
									})
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
