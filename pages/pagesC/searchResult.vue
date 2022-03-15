<template>
	<view>
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
		<view class="u-search-box">
			<view class="u-search-inner">
				<view class="seath">
					<u-search bg-color="#F2F2F2" @search="searchShop" :focus="true" placeholder="输入关键字搜索"
						v-model="keyword"></u-search>
				</view>
			</view>
		</view>
		<!-- 商品 -->
		<view class="">
			<view class="">
				<u-adata @click="toproduct()" :list="data_list"></u-adata>
			</view>
		</view>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			// this.keyword = e.key
			// this.data_list = uni.getStorageSync("result")
		},
		data() {
			return {
				title: "搜索",
				data_list: [],
				keyword: ""
			};
		},
		methods: {
			toproduct(ev){
				uni.navigateTo({
					// url: "../pagesC/Shopping
					url:"./Shopping?shopid=" + ev.id
				})
			},
			// 搜索商品
			searchShop() {
				this.$api.shoplike({
					name: this.keyword
				}).then(data => {

					if (data.data.code == 1) {
						this.data_list = [];
						data.data.data.status.forEach((item, index) => {
							this.data_list.push({
								id: item.id,
								isgo: false,
								price: item.xc_price,
								title: item.name,
								image: item.simage,
								alls: item
							})
						})
						// uni.setStorageSync("result", data.data.data.status)
						// uni.navigateTo({
						// 	url: `./searchResult?key=${this.keyword}`
						// })
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
			},
			// searchShop(){
			// 	this.$api.shoplike({
			// 		name:this.keyword
			// 	}).then(data=>{

			// 		// if(data.data.code==1){
			// 		// 	uni.setStorageSync("result",data.data.data.status)
			// 		// 	uni.navigateTo({
			// 		// 		url:`./searchResult?key=${this.keyword}`
			// 		// 	})
			// 		// }
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
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

	// 搜索
	.u-search-box {
		padding: 18rpx 30rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.seath {
		width: 100%;
	}

	.u-search-inner {

		// background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		// padding: 10rpx 16rpx;
		height: 70rpx;
	}
</style>
