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
		<u-tabs :list="list" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="home">
			<view class="comment">
				<view class="contentView" v-for="(item,index) in pl" :key="index">
					<image class="avator" :src="imagepath" mode="" />
					<view class="commentRight">
						<view class="commentView" style="margin-top:20rpx;">
							<text class="username">{{name}}</text>
						</view>
						<view class="commentTime">
							{{item.create_at}}
						</view>
						<view class="commentContent">
							{{item.content}}
						</view>
						<block class="" v-for="(items,indexs) in item.image" :key="indexs" v-if="item.image !=='0'">
							<image v-if="items != '#'" style="width: 100rpx;height: 100rpx;margin: 20rpx;" :src="items"
								mode="aspectFit" @click="kan(items)"></image>
						</block>
					</view>
				</view>
				<u-empty v-if="pl.length==0" />
			</view>
		</view>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				title: "产品评价",
				list: [{
						name: "产品评价"
					},
					{
						name: "服务评价"
					}
				],
				pages: 1,
				pl: [],
				imagepath: "",
				name: ""
			};
		},
		onLoad(ev) {
			console.log(ev);
			if (ev.title == 0) {
				this.current = 0
				this.title = "产品评价"
			}
			if (ev.title == 1) {
				this.current = 1
				this.title = "服务评价"
			}
			this.all()
			let aa = uni.getStorageSync("user_info").avatar
			this.name = uni.getStorageSync("user_info").nickname
			this.imagepath = this.$imgs(aa)
		},
		onReachBottom() {
			this.pages++
			this.all()
		},
		methods: {
			kan(ev) {
				console.log(ev);
				uni.previewImage({
					urls: [ev],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			all() {
				this.$api.mypl({
					user_id: uni.getStorageSync("user_info").id,
					page: this.pages,
					type: this.current
				}).then(data => {
					if (data.data.code == 1) {
						let aa = data.data.data.status.data
						for (let i in aa) {
							aa[i].image = aa[i].image.split(",");
							for (let j in aa[i].image) {
								aa[i].image[j] = this.$imgs(aa[i].image[j])
							}
						}
						this.pl = [...this.pl, ...data.data.data.status.data]
					}
				})
			},
			change(ev) {
				this.current = ev
				this.pages = 1
				this.pl = []
				this.all()

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
	.comment {
		box-sizing: border-box;
	}




	.avator {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin: 30rpx 0 0 30rpx;
	}

	.commentRight {
		width: 80%;
		border-bottom: 2rpx solid #F4F4F4;
		padding-top: 10rpx;
		padding-bottom: 30rpx;
	}

	.commentView {
		display: flex;
		align-items: center;
		margin: 0 30rpx;
	}

	.contentView {
		display: flex;
		background-color: #FFFFFF;
		margin: 30rpx;
		border-radius: 20rpx;
	}

	.username {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.lv {
		width: 90rpx;
		height: 24rpx;
		background: linear-gradient(90deg, #FF4B3C, #FF841D);
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10rpx;
	}

	.lvText {
		font-size: 18rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}

	.commentTime {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		margin-top: 12rpx;
		margin-bottom: 30rpx;
		margin-left: 30rpx;
	}

	.commentContent {
		width: 574rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.replys {
		width: 590rpx;
		/* height: 348rpx; */
		background: #FAF8F5;
		border-radius: 10rpx;
		margin-top: 20rpx;
		padding: 20rpx;
	}

	.replay_item {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
		margin-bottom: 10rpx;
	}

	.users1 {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #007399;
	}

	.users2 {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.huifu {
		display: inline-block;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.all {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #007399;
	}

	/* 底部 */
	.foot {
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0px -2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.foot1 {
		padding: 20rpx 0;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px -2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		position: fixed;
		display: flex;
		justify-content: space-around;
		align-items: center;
		left: 0;
		right: 0;
	}

	.footInp {
		width: 65%;
		height: 80rpx;
		background: #F4F4F4;
		border-radius: 40rpx;
		padding-left: 40rpx;
		box-sizing: border-box;
	}

	.footInp1 {
		width: 470rpx;
		height: 80rpx;
		background: #F4F4F4;
		border-radius: 40rpx;
		padding-left: 40rpx;
		line-height: 80rpx;
		box-sizing: border-box;
		margin-right: 20rpx;
		margin-left: 30rpx;
		color: #999999;
		font-size: 30rpx;
	}

	.footImg {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}

	.pl_text {
		width: 300rpx;
		height: 80rpx;
		font-size: 28rpx;
		background-color: #FF4B3C;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		border-radius: 36rpx;
	}

	.foot_btn {
		background: #007399;
		border-radius: 10rpx;
		text-align: center;
		color: #FFFFFF;
		padding: 10rpx 20rpx;
	}

	.home {
		height: 100%;

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
