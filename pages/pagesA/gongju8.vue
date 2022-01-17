<template>
	<view style="height: 100%;">
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="navbar_top">
					<view class="dsds cet" @click="back(0)">
						<image class="fanhui" src="@/static/icon_navigation_fanhui.png" mode=""></image>
					</view>
					<view class="hang"></view>
					<view class="dsds cet" @click="back(1)">
						<image class="souye" src="@/static/icon_navigation_house.png" mode=""></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="home">
			<view v-if="current == 0">
				<view v-for="(item,index) in data_list" :key="index" @click="go(item)">
					<view class="xunhuan">
						{{item.time}}
					</view>
					<view class="haha" v-for="(items,indexs) in item.list" :key="indexs">
						<view class="texts">
							{{items.title}}
						</view>
						<view class="neirong">
							{{items.text}}
						</view>
						<view class="win">

						</view>
						<view class="hkjh">
							查看详情
						</view>
					</view>
				</view>
			</view>
			<view v-if="current == 1">
				<view v-for="(item,index) in data_lists" :key="index" >
					<view class="xunhuan">
						{{item.time}}
					</view>
					<view class="haha" v-for="(items,indexs) in item.list" :key="indexs" @click="gos(items.text)">
						<view class="texts">
							{{items.title}}
						</view>
						<view class="neirong">
							{{items.text}}
						</view>
						<view class="win">

						</view>
						<view class="hkjh">
							查看详情
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data_list: [],
				data_lists: [],
				current: 0,
				title: "站内信息",
				list: [{
						name: "系统消息"
					},
					{
						name: "活动通知"
					}
				]
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
		},
		onShow() {
			this.data_list = [];
			this.data_lists = [];
			this.$api.letter({
				user_id: uni.getStorageSync("user_info").id
			}).then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach((item, index) => {
						if (index > 0 && item.create_at.split(" ")[0] == data.data.data.status[index - 1]
							.create_at.split(" ")[0]) {
							this.data_list[index].list.push({
								title: item.zt,
								text: item.content
							})
						} else {
							this.data_list.push({
								time: item.create_at,
								list: [{
									title: item.zt,
									text: item.content
								}]
							})
						}
					})
				}
			})
			this.$api.activtz().then(data => {
				if (data.data.code == 1) {
					data.data.data.status.forEach((item, index) => {
						if (index > 0 && item.create_at.split(" ")[0] == data.data.data.status[index - 1]
							.create_at.split(" ")[0]) {
							this.data_lists[index].list.push({
								title: item.name,
								text: item.content
							})
						} else {
							this.data_lists.push({
								time: item.stime_text,
								list: [{
									title: item.name,
									text: item.content
								}]
							})
						}
					})
				}
			})
		},
		methods: {
			go(ev) {
				uni.navigateTo({
					url: "./xiangqing"
				})
			},
			gos(ev) {
				uni.navigateTo({
					url: "./xiangqing?id="+ev
				})
			},
			change(ev) {
				this.current = ev
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
	.home {
		height: 100%;
		padding: 30rpx;

		.haha {
			padding: 30rpx;
			margin-bottom: 20rpx;
			background: #FFFFFF;
			border-radius: 10rpx;

			.hkjh {
				text-align: center;
				font-size: 24rpx;
				font-weight: 400;
				color: #999999;
			}

			.win {
				margin: 30rpx 0;
				height: 1rpx;
				background: #DEDEDE;
			}

			.neirong {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				font-size: 26rpx;
				font-weight: 400;
				color: #666666;
				line-height: 36rpx;
			}

			.texts {
				margin-bottom: 20rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.xunhuan {
			text-align: center;
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
			padding-bottom: 20rpx;
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
