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
			<u-design @pageA="pageA" @pageB="pageB" :pages="pages"></u-design>
		</view>
		<view style="height: 100%;" v-if="current==1">
			<u-FlagshipSuite @pageA="pageA" @pageB="pageB" :pages="pages"></u-FlagshipSuite>
		</view>
		<view style="height: 100%;" v-if="current==2">
			<u-HouseType :pages="pages" @pageA="pageA" @pageB="pageB"></u-HouseType>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				list: [{
					name: '楼盘设计'
				}, {
					name: '旗舰套系'
				}, {
					name: '户型攻略',
				}],
				current: 0,
				pages: 1,
				shuo: true,
			};
		},
		onLoad(ev) {
			if(ev.title){
				this.title = ev.title
			}
		},
		onReachBottom(ev) {
			if (this.shuo) {
				this.pages = this.pages + 1
			}
		},
		methods: {
			pageA(ev) {

				this.shuo = false;
			},
			pageB(ev) {
				this.pages = 1
				this.shuo = true;
			},
			async pinglunaa(ev, index) {
				if (await this.$login()) {
					this.dianzhansssss = true
					this.indexdas = index
					this.pinglun_list = []
					this.pinglun_list = ev.pl
					this.pinglun_list.forEach(item => {
						item["checked"] = false
					})
					this.showComment = true;
					this.itemsss = ev;
				}
			},
			change(index) {
				this.pages = 1
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
