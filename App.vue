<script>
	export default {
		onLaunch(ev) {
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
			if (ev.query.ewm) {
				uni.setStorageSync("yaoqingewm", ev.query.ewm)
			}
			
			
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function (res) {
			  // 请求完新版本信息的回调
			  console.log(res.hasUpdate);
			});
			updateManager.onUpdateReady(function (res) {
			  uni.showModal({
			    title: '更新提示',
			    content: '新版本已经准备好，是否重启应用？',
			    success(res) {
			      if (res.confirm) {
			        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			        updateManager.applyUpdate();
			      }
			    }
			  });
			});
			updateManager.onUpdateFailed(function (res) {
			  // 新的版本下载失败
			  uni.showModal({
			  	title: '已经有新版本了',
			  	content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开'
			  });
			});
			
			
			this.$api.indexbar().then(data => {
				if (data.data.code == 1) {
					if (process.env.NODE_ENV === 'development') {
						uni.showToast({
							title: "这是测试版！",
							icon: "error"
						})
						console.log(ev);
						console.log("\n %c uView".concat(" %c https://v1.uviewui.com/ \n\n"),
							'color: #ffffff; background: #3c9cff; padding:5px 0;',
							'color: #3c9cff;background: #ffffff; padding:5px 0;');
					}
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
			let timeaa = 10000
			let timebb = 100000
			if (process.env.NODE_ENV === 'development') {
				timeaa = 500000
				timebb = 500000
			}
			clearInterval(uni.getStorageSync("setIntervalaa", aa))
			let aa = setInterval(() => {
				this.$api.qzqy({
					user_id: uni.getStorageSync("user_info").id || 0
				}).then(data => {
					if (data.data.code == 1) {
						if (uni.getStorageSync("yanzheng")) {
							uni.setStorageSync("tanchuang", data.data.data.status)
							uni.reLaunch({
								url: "/pages/pagesB/tanchuang?agid=" + data
									.data.data.status.agid +
									"&tongyi=qzqy&lpid=" + data
									.data.data.status.lpid
							})
							this.$api.agreements().then(datas => {
								if (datas.data.code == 1) {
									datas.data.data.status.forEach(item => {
										item["check"] = false
									})
									uni.setStorageSync("xieyi", datas.data.data.status)
								} else {
									uni.setStorageSync("xieyi", [])
								}
							})
						}
					}
				})
			}, timeaa)
			uni.setStorageSync("setIntervalaa", aa)
			clearInterval(uni.getStorageSync("setIntervalbb", bb))
			let bb = setInterval(() => {
				this.$api.timeout({
					user_id: uni.getStorageSync("user_info").id || 0
				}).then(data => {
					if (data.data.code == 1) {
						if (uni.getStorageSync("yanzheng")) {
							uni.setStorageSync("tanchuang", data.data.data.status)
							uni.reLaunch({
								url: "/pages/pagesB/tanchuang?agid=" + data.data.data.status
									.agid + "&tongyi=timeout&lpid=" + data.data.data.status
									.lpid
							})
						}
					}
				})
			}, timebb)
			uni.setStorageSync("setIntervalbb", bb)
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
