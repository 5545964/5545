<script>
	export default {
		onLaunch(ev) {
			console.log(ev);
			if (ev.query.uid) {
				uni.setStorageSync("yaoqinguid", ev.query.uid)
			}
			if (ev.query.level) {
				if(ev.query.level === "undefined"){
				    console.log('is undefined');
					ev.query.level = 0
				}else{
				    console.log('no undefined');
				}
				uni.setStorageSync("yaoqinglevel", ev.query.level)
			}
			if (ev.path == "pages/Home/Home") {
				uni.navigateTo({
					url: "pages/pagesD/start"
				})
			} else {
				uni.navigateTo({
					url: ev.path + "?shopid=" + ev.query.shopid
				})
			}


		},
		onLoad(ev) {}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";


	/*每个页面公共css */
	page {
		width: 100%;
		height: 100%;
		background-color: #f6f6f6;
		// background-color: #ff0000;
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
