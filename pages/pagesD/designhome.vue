<template>
	<view>
		<u-navbar :is-back="false" title="个人中心">
		</u-navbar>
		<view class="heard">
			<view class="czxcxz">
				<image class="img" v-if="user_info != ''" :src="user_info.avatar" mode=""></image>
				<image class="img" v-else src="../../static/icon_me_bianji.png" mode=""></image>
				<view class="center">
					<view class="text">
						<text v-if="user_info != ''">{{user_info.username}}</text><text v-else>未登录</text>
					</view>
					<block v-if="desinfo != ''">
						<view class="text_bottom" v-if="desinfo.bbs != null">
							<text>{{desinfo.bbs.type}}</text>
						</view>
					</block>
				</view>
			</view>
			<view class="bottms" @click="gomy">
				<image class="imgs" src="../../static/icon_me_bianji.png" mode="aspectFit"></image>
				<view class="kjjkk">
					个人资料
				</view>
			</view>
		</view>
		<view class="kan">
			<view class="">
				<view class="number">
					{{desinfo.look||0}}
				</view>
				<view class="text">
					客户浏览量
				</view>
			</view>
			<view class="">
				<view class="number">
					{{desinfo.plcount||0}}
				</view>
				<view class="text">
					客户评价留言
				</view>
			</view>
			<view class="">
				<view class="number">
					{{desinfo.zan||0}}
				</view>
				<view class="text">
					客户点赞
				</view>
			</view>
			<view class="">
				<view class="number">
					{{desinfo.follow||0}}
				</view>
				<view class="text">
					客户加关注
				</view>
			</view>
		</view>
		<view class="hahaha">
			<!-- <view class="cet" @click="gos(0)">
				<image class="imgs" src="../../static/icon_me_mingpian.png" mode="aspectFit"></image>
				<view class="text">
					电子名片
				</view>
			</view>
			<view class="xian"></view> -->
			<view class="cet" @click="gos(1)">
				<image class="imgd" src="../../static/icon_me_erweima.png" mode="aspectFit"></image>
				<view class="text">
					专属二维码
				</view>
			</view>
		</view>
		<view class="top">
			<view class="top_a" @click="shengfenzhuanqu">
				<image class="imgs" src="../../static/me_vip_bg.png" mode="aspectFit"></image>
				<view class="left">
					<view class="le_text">
						身份专区
					</view>
					<view class="lr_text">
						升级身份享受更多权益
					</view>
				</view>
				<view class="cet aaa">
					<view class="lr_text">
						查看更多
					</view>
					<image class="img" src="../../static/icon_me_more.png" mode="aspectFit"></image>
				</view>
			</view>
			<!-- <view class="top_b">
				<view class="quanju">
					<view class="zczx" v-for="(item,index) in list" :key="index" @click="go(item)">
						<view class="cart-num" v-if="index <=1 && num_list[index] != 0">
							{{num_list[index]}}
						</view>
						<view class="">
							<view style="width: max-content;margin: 0 auto;">
								<image class="img" :src="'../../static/des'+index+'.png'" mode="aspectFit"></image>
							</view>
							<view class="text">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="top_c">
				<view class="text">
					常用工具
				</view>
				<view class="gongjus">
					<view class="template" v-for="(item,index) in gongju_list" :key="index"
						@click="gongju_go(item.url,item.name)">
						<view class="cet">
							<image class="img" :src="'../../static/desgongju'+index+'.png'" mode="aspectFit"></image>
							<view class="texts">
								{{item.name}}
							</view>
						</view>
						<image class="fanhui" src="../../static/icon_home_heiseyoufan.png" mode="aspectFit"></image>
						<view class="dsalhdkjahjad" v-if="index == 1 && fkjsfjdisfjsl"></view>
					</view>
				</view>
			</view>
			<view class="top_d" @click="changeDesign">
				切换馨级美居会员
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				fkjsfjdisfjsl: false,
				num_list: [0, 0],
				myuser: {},
				img: this.$imgPath,
				user_info: {},
				desinfo: {},
				gongju_list: [
					// {
					// 	name: "我的团队",
					// 	url: "../../pagesA/gongju11?shejishi=1"
					// },
					{
						name: "我的佣金	",
						url: "../designyongjin?isshejishi=jjjj"
					},
					{
						name: "系统消息",
						url: "../messg"
					},
					{
						name: "相关协议",
						url: "../hetong"
					},
					// {
					// 	name: "我的方案",
					// 	url: "../xiangmu"
					// }
				],
				list: [{
						id: 1,
						name: "进行中"
					},
					{
						id: 2,
						name: "已完成"
					},
					{
						id: 0,
						name: "全部订单"
					}
				],
			};
		},
		created() {
			this.dkahdjash()
		},
		methods: {
			dkahdjash() {
				this.user_info = uni.getStorageSync("user_info");
				this.desinfo = uni.getStorageSync("des_info")
				this.$api.addnews({
					id: uni.getStorageSync("des_info").id
				}).then(data => {
					if (data.data.code == 1) {
						let aa = uni.getStorageSync("addnews")
						if (data.data.data.status.length > aa) {
							this.fkjsfjdisfjsl = true
						} else {
							this.fkjsfjdisfjsl = false
						}
					} else {
						this.fkjsfjdisfjsl = false
					}
				})
				this.$api.desorders({
					id: uni.getStorageSync("des_info").id
				}).then(data => {
					if (data.data.code == 1) {
						let aa = this.num_list
						data.data.data.status.forEach(item => {
							if (item.state == "1") {
								aa[0] = aa[0] + 1
							} else if (item.state == "2") {
								aa[1] = aa[1] + 1
							}
						})
						this.num_list = []
						this.num_list = [...aa]

					}
				})
			},
			gomy() {
				uni.navigateTo({
					url: "../../pagesB/my?isdesign=1"
				})
			},
			gos(ev) {
				if (ev == 0) {
					uni.navigateTo({
						url: "../../pagesB/card?state=1"
					})
				} else if (ev == 1) {
					uni.navigateTo({
						url: "../../pagesB/erweima?level=dskj"
					})
				}
			},
			shengfenzhuanqu() {
				uni.navigateTo({
					url: "../../pagesB/shengfen?isdes=1"

				})
			},
			changeDesign() {
				uni.reLaunch({
					url: "/pages/Home/Home"
				})
			},
			go(ev) {

				uni.navigateTo({
					url: "../shejishidindan?title=" + ev.name + "&current=" + ev.id
				})
			},
			gongju_go(ev, title) {
				if (ev == "../messg") {
					uni.requestSubscribeMessage({
						provider: 'weixin',
						tmplIds: ['P9sDe92NgZMcD2lKBvrLniyriLRhaxIyOGF8tH5El8o'],
						complete: function(res) {
							uni.navigateTo({
								url: ev + "?title=" + title
							})
						}
					});
					return
				} else {
					uni.navigateTo({
						url: ev + "?title=" + title
					})
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.cart-num {
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		background-color: #e25c5c;
		color: #ffffff;
		position: absolute;
		top: -10px;
		right: 0px;
		line-height: 30rpx;
		text-align: center;
		font-weight: 400;
		font-size: 26rpx;
	}

	.kan {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 40rpx;
		background-color: #ffffff;

		.text {
			font-size: 22rpx;
			font-weight: 400;
			color: #333333;
		}

		.number {
			text-align: center;
			font-size: 30rpx;
			font-weight: 800;
			color: #037496;
			margin-bottom: 20rpx;
		}
	}

	.top {
		padding: 20rpx 30rpx;

		.top_d {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #007399;
			border-radius: 20rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.top_c {
			background-color: #ffffff;
			margin-top: 20rpx;
			border-radius: 20rpx;

			.fanhui {
				width: 8rpx;
				height: 16rpx;
			}

			.template {
				padding: 40rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;
			}

			.gongjus {
				padding: 20rpx;
			}

			.texts {
				margin-left: 20rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 30rpx;
				height: 30rpx;
			}

			.text {
				padding: 30rpx 20rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #000000;
			}
		}

		.top_b {
			padding: 40rpx;
			background-color: #FFFFFF;
			margin-top: 20rpx;
			border-radius: 20rpx;

			.quanju {
				display: flex;
				align-items: center;
				justify-content: space-around;
			}

			.zczx {
				position: relative;
				display: flex;
				align-items: center;
				width: max-content;
			}

			.text {
				width: max-content;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.top_a {
			padding: 30rpx 0;
			display: flex;
			align-items: center;
			position: relative;

			.aaa {
				margin-left: 100rpx;
			}

			.le_text {
				margin-bottom: 10rpx;
				font-size: 36rpx;
				font-weight: bold;
				color: #885A25;
			}

			.lr_text {
				font-size: 24rpx;
				font-weight: 400;
				color: #885A25;
			}

			.left {
				margin-left: 40rpx;
			}

			.imgs {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				z-index: -1000;
			}

			.img {
				margin-left: 10rpx;
				width: 24rpx;
				height: 24rpx;

			}
		}

	}

	.hahaha {
		// height: 60px;
		background: #CDE3EA;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 70rpx;

		.xian {
			margin: 10rpx;
			width: 2rpx;
			height: 40rpx;
			background: #037496;
			border-radius: 1rpx;
		}

		.text {
			font-size: 24rpx;
			font-weight: 400;
			color: #037496;
		}

		.imgd {
			padding: 10rpx;
			width: 24rpx;
			height: 24rpx;
		}

		.imgs {
			padding: 10rpx;
			width: 32rpx;
			height: 24rpx;
		}
	}

	.heard {
		padding: 30rpx 0;
		// margin-top: 30rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.kjjkk {
			margin-left: 10rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.czxcxz {
			display: flex;
			align-items: center;
		}

		.bottms {
			padding: 25rpx 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background: #037496;
			border-radius: 100rpx 0rpx 0rpx 100rpx;
		}

		.center {
			margin-left: 25rpx;
		}

		.text {
			font-size: 32rpx;
			font-weight: 400;
			color: #000000;
		}

		.text_bottom {
			margin-top: 20rpx;
			width: max-content;
			font-size: 18rpx;
			font-weight: 400;
			color: #FFFFFF;
			padding: 5rpx 15rpx;
			background: #FF716D;
			border-radius: 15rpx;
		}

		.imgs {
			width: 26rpx;
			height: 26rpx;
		}

		.img {
			margin-left: 30rpx;
			width: 120rpx;
			height: 120rpx;
			border-radius: 20rpx;
		}
	}

	.fdkgkfmkjskjfjkgdbj {
		width: 10rpx;
		height: 86rpx;
		margin-right: 20rpx;
	}

	.dsalhdkjahjad {
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		left: 150rpx;
		top: 30rpx;
	}
</style>
