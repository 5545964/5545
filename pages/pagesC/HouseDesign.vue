<template>
	<view style="height: 100%;">
		<!-- 导航 -->
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
		<!-- 标签 -->
		<view>
			<u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<view v-if="current==0">
			<u-design @click="seach" :list="lou_list"></u-design>
		</view>
		<view style="height: 100%;" v-if="current==1">
			<u-FlagshipSuite></u-FlagshipSuite>
		</view>
		<view style="height: 100%;" v-if="current==2">
			<u-HouseType :fenlei="fenlei"></u-HouseType>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fenlei: [],
				title: "楼盘设计",
				list: [{
					name: '楼盘设计'
				}, {
					name: '旗舰套系'
				}, {
					name: '户型攻略',
				}],
				lou_list: [],
				current: 0
			};
		},
		onShow() {
			this.alls()
			this.$api.huxincategory().then(data => {
				if (data.data.code == 1) {
					this.fenlei = data.data.data.status;
					this.fenlei.forEach(item => {
						item["check"] = false;
					})
				}
			})
		},
		methods: {
			alls() {
				this.$api.loupanden().then(data => {
					if (data.data.code == 1) {

						this.lou_list = [];
						this.lou_list = [...data.data.data.status]
					}
				})
			},
			// 搜索
			seach(ev) {
				this.$api.loupanlike({
					name: ev
				}).then(data => {
					if (data.data.code == 1) {
						this.lou_list = [];
						this.lou_list = [...data.data.data.status]
					} else {
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "none"
						})
					}
				})
			},
			// chang(ev) {

			// 	this.$api.huxin({
			// 		id:ev
			// 	}).then(data=>{
			// 		if(data.data.code==1){

			// 		}
			// 	})
			// },
			change(index) {
				this.current = index
			},
			back(ev) {
				switch (ev) {
					case 0:
						uni.navigateBack(-1)
						break;
					case 1:
						uni.switchTab({
							url: "/pages/Home/Home",
						})
						break;
					default:
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 导航
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
