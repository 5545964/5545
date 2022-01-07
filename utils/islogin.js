import api from '@/api'
async function log(ev) {
	let islogin = false;
	if (uni.getStorageSync("token") === "") {
		await uni.getUserProfile({
			desc: 'Wexin',
			success: data => {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						api.wxlogin({
							code: loginRes.code,
							iv: data.iv,
							encryptedData: data.encryptedData,
							pid: ev.pid
						}).then(data => {
							if (data.data.code == 1) {
								uni.setStorageSync("token", data.data.data.token);
								uni.setStorageSync("user_info", data.data.data
									.status);
								islogin = true
								if (ev != "") {
									uni.navigateTo({
										url: ev.url
									})
								}
							} else {
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
		islogin = false;
	}
	return islogin;
}
export default log
