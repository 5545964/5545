<template>
	<view>
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhui.png" mode="aspectFit"></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_house.png" mode="aspectFit"></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="home">
			<!-- 设计列表 -->
			<view class="design_list">
				<view style="position: relative;" v-for="(item,index) in desinger"
					:key="index">
					<u-design-card :list="item"  @click="todetails(item)"/>
					<image @click="sanchu(item)" class="imgss" src="../../static/icon_close_ico.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "项目管理",
				desinger: {}
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
			this.alls()
		},
		methods: {
			sanchu(item) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '是否删除此作品',
					success: function(res) {
						if (res.confirm) {
							that.$api.delefa({
								id: item.id,
								user_id: uni.getStorageSync("des_info")
							}).then(data => {
								if (data.data.code == 1) {
									that.alls()
									uni.showToast({
										title: data.data.msg,
										icon: "success"
									})
								}
							})
						}
					}
				});
			},
			todetails(item) {
				uni.navigateTo({
					url: "../../pagesC/DesignDetail?id=" + JSON.stringify(item)
				})
			},
			alls() {
				this.$api.des({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.zp.forEach(item => {
							item.image = item.image.split(",")[0]
						})
						this.desinger = data.data.data.status.zp
					}
				})
			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.switchTab({
							url: "/pages/Home/Home"
						})
						break;
					default:
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.imgss {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		right: -15rpx;
		top: 25rpx;
	}

	.home {
		width: 100%;
		height: 100%;
		padding: 30rpx;

		.design_list {
			padding-top: 20rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 100rpx;
		}
	}

	.navbar {
		.navbar_top {
			border: 1px solid #e5e5e5;
			overflow: hidden;
			width: 166rpx;
			height: 60rpx;
			border-radius: 30rpx;
			margin-left: 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.dsds {
				padding: 20rpx;
			}

			.hang {
				width: 2rpx;
				height: 26rpx;
				background-color: #e5e5e5;
			}

			.fanhui {
				width: 12rpx;
				height: 22rpx;
			}

			.souye {
				width: 26rpx;
				height: 24rpx;
			}
		}
	}
</style>
