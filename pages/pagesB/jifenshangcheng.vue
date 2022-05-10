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
		<u-adata :list="list" @click="go_shop" :height="30"></u-adata>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "积分商城",
				list: [],
				pages: 1
			};
		},
		onReachBottom() {
			this.pages++
			this.all()
		},
		onLoad() {
			this.all()
		},
		onShow() {},
		methods: {
			go_shop(ev) {
				console.log(ev);
				uni.navigateTo({
					url: "../pagesC/Shopping?shopid=" + ev.id + "&jifen=1"
				})
			},
			all() {
				this.$api.scoregoods({
					page: this.pages,
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.data.forEach(item => {
							this.list.push({
								id: item.id,
								title: item.name,
								image: item.simage,
								video: "",
								jifen: true,
								xc_price: item.xc_price,
								cb_price: item.cb_price,
								alls: item
							})
						})
					}
				})
			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.reLaunch({
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
