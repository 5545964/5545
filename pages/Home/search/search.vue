<template>
	<view style="height: 100%;">
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="sssss">
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
		<view class="seath">
			<u-search @search="seach_go" :focus="true" v-model="keyword" bg-color="#f2f2f2"></u-search>
		</view>
		<view class="" style="height: 100%;">
			<u-adata @click="go" :list="data_list" :height="30"></u-adata>
			<u-empty v-show="xianshi"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				xianshi: false,
				keyword: "",
				title: "搜索",
				data_list: []
			};
		},
		methods: {
			linkOthers(ev) {
				uni.navigateTo({
					url: "../URL/URL?url=" + ev
				});
			},
			go(ev) {
				console.log(ev);
				switch (Number(ev.link)) {
					case 0:
						// 网页跳转
						this.linkOthers(ev.head)
						break;
					case 1:
						// 产品pages/pagesC/Shopping
						uni.navigateTo({
							url: "../../pagesC/Shopping?shopid=" + ev.shopid
						})
						break;
					case 2:
					uni.navigateTo({
						url: "../../pagesC/FlagshipDetail?id=" + ev.tc
					})
						// 套餐
						break;
					case 3:
						// 关于宝芸邸
						uni.switchTab({
							url: "/pages/Home/About"
						})
						break;
					default:
				}
			},
			// 搜索
			seach_go(ev) {
				this.$api.indexlike({
					name: this.keyword
				}).then(data => {
					this.data_list = []
					if (data.data.code == 1) {
						this.xianshi = false;
						this.data_list = data.data.data.status
					} else {
						this.xianshi = true;
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
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
	.seath {
		background-color: #fff;
		padding: 30rpx;
	}

	.navbar {
		.sssss {
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
