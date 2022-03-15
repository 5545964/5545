<script>
	export default {
		onLaunch(ev) {
			if (ev.query.uid) {
				uni.setStorageSync("yaoqinguid", ev.query.uid)
			}
			if (ev.query.level) {
				if (ev.query.level === "undefined") {
					ev.query.level = 0
				}
				uni.setStorageSync("yaoqinglevel", ev.query.level)
			}
			if (ev.path == "pages/Home/Home") {
				uni.navigateTo({
					url: "./pages/Home/start"
				})
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
					uni.setStorageSync("kehu", data.data.data.kefu)
					if (uni.getStorageSync("user_info")) {
						uni.setStorageSync("showssss", false)
						return
					}
					uni.setStorageSync("showssss", data.data.data.edit)
				}
			})
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
