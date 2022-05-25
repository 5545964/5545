<script>
	export default {
		onLaunch(ev) {
			if (process.env.NODE_ENV === 'development') {
				setInterval(() => {
					let aa = uni.getStorageSync("user_info").id
					if (aa == 120 || aa == 8 || aa == 113 || aa == 74 || aa == 5 || aa == 54 || aa == 62 || aa ==
						75) {

					} else {
						uni.showModal({
							title: '提示',
							content: '这是测试版！',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				}, 1000)
				console.log(ev);
				console.log("\n %c uView".concat(" %c https://v1.uviewui.com/ \n\n"),
					'color: #ffffff; background: #3c9cff; padding:5px 0;',
					'color: #3c9cff;background: #ffffff; padding:5px 0;');
			}
			uni.setStorageSync("user_info_login", 1)
			uni.setStorageSync("yanzheng", true)
			uni.setStorageSync("evevevev", JSON.stringify(ev))
			if (ev.query.uid) {
				uni.setStorageSync("yaoqinguid", ev.query.uid)
				if (uni.getStorageSync("user_info")) {
					this.$api.ewmjoin({
						user_id: uni.getStorageSync("user_info").id,
						pid: ev.query.uid
					})
				}
			}
			if (ev.query.level) {
				if (ev.query.level === "undefined") {
					ev.query.level = 0
				}
				uni.setStorageSync("yaoqinglevel", ev.query.level)
			}

			this.$api.indexbar().then(data => {
				if (data.data.code == 1) {
					let aa = []
					data.data.data.status.forEach(item => {
						aa.push({
							pagePath: item.url.url,
							iconPath: this.$imgPath + item.fimage,
							selectedIconPath: this.$imgPath + item.image,
							text: item.title
						})
					})
					uni.setStorageSync("tabber", aa)
					uni.setStorageSync("edits", data.data.data.edits)
					uni.setStorageSync("sx", data.data.data.sx)
					uni.setStorageSync("kehu", data.data.data.kefu)
					if (uni.getStorageSync("user_info")) {
						uni.setStorageSync("showssss", false)
						return
					}
					uni.setStorageSync("showssss", data.data.data.edit)
				}
			})

		},
		onShow(ev) {
			console.log(ev);
			if (ev.query.uid) {
				uni.setStorageSync("yaoqinguid", ev.query.uid)
				if (uni.getStorageSync("user_info")) {
					this.$api.ewmjoin({
						user_id: uni.getStorageSync("user_info").id,
						pid: ev.query.uid
					}).then(data => {
						if (data.data.code == 1) {
							uni.removeStorageSync('yaoqinguid')
						}
					})
				}
			}
			if (ev.query.level) {
				if (ev.query.level === "undefined") {
					ev.query.level = 0
				}
				uni.setStorageSync("yaoqinglevel", ev.query.level)
			}
			this.$api.agreements().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach(item => {
						item["check"] = false
					})
					uni.setStorageSync("xieyi", data.data.data.status)
					// uni.setStorageSync("xieyi", [])
				} else {
					uni.setStorageSync("xieyi", [])
				}
			})
			if (true) {
				clearInterval(uni.getStorageSync("setInterval", aa))
				let aa = setInterval(() => {
					let aa = {
						user_id: uni.getStorageSync("user_info").id || 0
					}
					this.$api.qzqy(aa).then(data => {
						if (data.data.code == 1) {
							if (uni.getStorageSync("yanzheng")) {
								uni.reLaunch({
									url: "/pages/pagesB/tanchuang?agid=" + data.data.data.status
										.agid + "&lpid=11111"
								})
							}
						}
					})
					this.$api.timeout(aa).then(data => {
						if (data.data.code == 1) {
							if (uni.getStorageSync("yanzheng")) {
								uni.reLaunch({
									url: "/pages/pagesB/tanchuang?agid=" + data.data.data.status
										.agid + "&lpid=22222"
									// + "&lpid=" + data.data.data.status.lpid
								})
							}
						}
					})
				}, 10000)
				uni.setStorageSync("setInterval", aa)
			}
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	page {
		width: 100%;
		background-color: #f6f6f6;
		position: relative;
	}

	.liangdiandain {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	button::after {
		border: none
	}

	scroll-view ::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}

	video {
		width: 100%;
		height: 100%;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.color_text {
		color: #007399;
		text-align: center;
	}

	.wh {
		height: 100%;
		width: 100%;
	}

	.cet {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
