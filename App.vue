<script>
	import logs from '@/utils/islogin.js'
	export default {
		onLaunch(ev) {
			uni.setStorageSync("yanzheng", true)
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
		},
		onShow() {
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
										.agid
								})
							}
						}
					})
					this.$api.timeout(aa).then(data => {
						if (data.data.code == 1) {
							if (uni.getStorageSync("yanzheng")) {
								uni.reLaunch({
									url: "/pages/pagesB/tanchuang?agid=" + data.data.data.status
										.agid + "&lpid=" + data.data.data.status.lpid
								})
							}
						}
					})
					this.$api.tgfw(aa).then(data => {
						if (data.data.code == 1) {
							if (uni.getStorageSync("yanzheng")) {
								uni.reLaunch({
									url: "/pages/pagesB/tanchuangfuwu?status=" + JSON.stringify(
										data.data.data.status)
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
