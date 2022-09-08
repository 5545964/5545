export default {
	onShareAppMessage(res) { //发送给朋友
		let aa = 0;
		if (uni.getStorageSync("user_info").bbs != null) {
			aa = uni.getStorageSync("user_info").bbs.id
		}
		return {
			title: '宝芸邸家居',
			path: '/pages/Home/start?uid=' + uni.getStorageSync("user_info").id + "&level=" + aa,
			imageUrl: 'https://baoyundi.jiangshanchuan.cn/uploads/20220518/b3e5fcf6950318229cc046a5532e368d.png',
		}
	},
	onShareTimeline(res) { //分享到朋友圈
		let aa = 0;
		if (uni.getStorageSync("user_info").bbs != null) {
			aa = uni.getStorageSync("user_info").bbs.id
		}
		return {
			title: '宝芸邸家居',
			imageUrl: 'https://baoyundi.jiangshanchuan.cn/uploads/20220518/b3e5fcf6950318229cc046a5532e368d.png',
			query: {
				uid: uni.getStorageSync("user_info").id,
				level: aa
			}
		}
	},
}
