<template>
	<view>
		<view>
			<view class="heard">
				<view class="czxcxz" @click="kkkk()">
					<image @click="kan(user_info.avatar)" class="img" v-if="user_info != ''" :src="user_info.avatar"
						mode=""></image>
					<image class="img" v-else src="../../static/icon_me_avatar.png" mode=""></image>
					<view class="center">
						<view class="text">
							<text v-if="user_info != ''">{{user_info.username||""}}</text><text v-else>未登录</text>
						</view>
						<view v-if="user_info != ''">
							<view class="text_bottom" v-if="user_info.bbs != null && user_info.bbs.type != '' ">
								<text>{{user_info.bbs.type||""}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="bottms" @click="gomy" v-if="user_info.edit">
					<image class="imgs" src="../../static/icon_me_bianji.png" mode="aspectFit"></image>
					<view class="kjjkk">
						个人资料
					</view>
				</view>
			</view>
			<view class="hahaha">
				<view class="cet" @click="gos(0)" v-if="user_info.bbs.id">
					<image class="imgs" src="../../static/icon_me_mingpian.png" mode="aspectFit"></image>
					<view class="text">
						电子名片
					</view>
				</view>
				<view class="xian" v-if="user_info.bbs.id"></view>
				<view class="cet" @click="gos(1)" v-if="user_info.bbs != 0 && user_info !='' && user_info.bbs !=null">
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
				<view class="top_b">
					<view class="quanju">
						<view class="zczx" v-for="(item,index) in list" :key="index" @click="go(item)">
							<view class="cart-num" @touchend.stop="quxiao(index)" v-if="num_list[index] != 0">
								{{num_list[index]||""}}
							</view>
							<!-- <image v-if="index == list.length-1" class="fdkgkfmkjskjfjkgdbj"
								src="../../static/icon_me_fenge.png" mode="aspectFit"></image> -->
							<view class="">
								<view style="width: max-content;margin: 0 auto;">
									<image class="img" :src="'../../static/status'+index+'.png'" mode="aspectFit">
									</image>
								</view>
								<view class="text">
									{{item.name||""}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="top_c">
					<view class="text">
						常用工具
					</view>
					<view class="gongjus">
						<!-- <view class="template" v-for="(item,index) in gongju_list" :key="index"
							@click="gongju_go(item.url,item.name)">
							<image class="img" :src="'../../static/gongju'+index+'.png'" mode="aspectFit"></image>
							<view class="texts">
								{{item.name||""}}
							</view>
						</view> -->
						<view class="template" @click="gongju_go('../pagesA/gongju0','收货地址')">
							<image class="img" :src="'../../static/gongju0.png'" mode="aspectFit"></image>
							<view class="texts">
								收货地址
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju1','我的收藏')">
							<image class="img" :src="'../../static/gongju1.png'" mode="aspectFit"></image>
							<view class="texts">
								我的收藏
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju2','我的关注')">
							<image class="img" :src="'../../static/gongju2.png'" mode="aspectFit"></image>
							<view class="texts">
								我的关注
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju3','我的足迹')">
							<image class="img" :src="'../../static/gongju3.png'" mode="aspectFit"></image>
							<view class="texts">
								我的足迹
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju4','我的优惠券')">
							<image class="img" :src="'../../static/gongju4.png'" mode="aspectFit"></image>
							<view class="texts">
								我的优惠券
							</view>
						</view>
						<!-- ../pagesD/designyongjin -->
						<view class="template" @click="gongju_go('../pagesD/designyongjin','我的佣金')"
							v-if="user_info.bbs.id">
							<image class="img" :src="'../../static/gongju5.png'" mode="aspectFit"></image>
							<view class="texts">
								我的佣金
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesD/peixun','培训费用')"
							v-if="user_info.bbs.id && user_info.bbs.id>1">
							<image class="img" :src="'../../static/gongju14.png'" mode="aspectFit"></image>
							<view class="texts">
								培训费用
							</view>
						</view>

						<view class="template" @click="gongju_go('../pagesA/gongju6','安装评价')">
							<image class="img" :src="'../../static/gongju6.png'" mode="aspectFit"></image>
							<view class="texts">
								安装评价
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju7','产品评价')">
							<image class="img" :src="'../../static/gongju7.png'" mode="aspectFit"></image>
							<view class="texts">
								产品评价
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju8','站内信息')">
							<image class="img" :src="'../../static/gongju8.png'" mode="aspectFit"></image>
							<view class="texts">
								站内信息
							</view>
							<view class="dsalhdkjahjad" v-if="zhanleixin"></view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju9','我的售后')">
							<image class="img" :src="'../../static/gongju9.png'" mode="aspectFit"></image>
							<view class="texts">
								我的售后
							</view>
						</view>
						<view class="template" @click="gongju_go('../pagesA/gongju10','我的报装')">
							<image class="img" :src="'../../static/gongju10.png'" mode="aspectFit"></image>
							<view class="texts">
								我的报装
							</view>
						</view>


						<!-- <view class="template" @click="gongju_go('../pagesA/gongju11','我的团队')"
							v-if="user_info.bbs.id">
							<image class="img" :src="'../../static/gongju11.png'" mode="aspectFit"></image>
							<view class="texts">
								我的团队
							</view>
						</view> -->



						<view class="template" @click="gongju_go('../pagesA/gongju12','预约设计')">
							<image class="img" :src="'../../static/gongju12.png'" mode="aspectFit"></image>
							<view class="texts">
								预约设计
							</view>
							<view class="dsalhdkjahjad" v-if="fkjsfjdisfjsl"></view>
						</view>
						<view class="template" @click="gongju_go('../pagesD/hetong','我的协议')">
							<image class="img" :src="'../../static/gongju13.png'" mode="aspectFit"></image>
							<view class="texts">
								我的协议
							</view>
							<view class="dsalhdkjahjad" v-if="false"></view>
						</view>
					</view>
				</view>
				<view class="top_d" @click="changeDesign">
					{{qeihuan}}
				</view>
			</view>
			<u-kehu :navis="false"></u-kehu>
			<u-logins :showssss="showssss" @budenglu="budenglu()" @denglu="denglu()"></u-logins>
		</view>
		<u-dianji></u-dianji>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qeihuan: "切换设计师",
				zhanleixin: false,
				showssss: false,
				fkjsfjdisfjsl: false,
				user_info_id: "",
				img: this.$imgPath,
				user_info: "",
				num_list: ["", "", "", "", ""],
				gongju_list: [{
						name: "收货地址",
						url: "../pagesA/gongju0"
					},
					{
						name: "我的收藏",
						url: "../pagesA/gongju1"
					},
					{
						name: "我的关注",
						url: "../pagesA/gongju2"
					},
					{
						name: "我的足迹",
						url: "../pagesA/gongju3"
					},
					{
						name: "我的优惠券",
						url: "../pagesA/gongju4"
					},
					{
						name: "我的佣金",
						// url: "../pagesA/gongju5",
						url: "../pagesD/designyongjin"
					},
					{
						name: "安装评价",
						url: "../pagesA/gongju6"
					},
					{
						name: "产品评价",
						url: "../pagesA/gongju7"
					},
					{
						name: "站内信息",
						url: "../pagesA/gongju8"
					},
					{
						name: "我的售后",
						url: "../pagesA/gongju9"
					},
					{
						name: "我的报装",
						url: "../pagesA/gongju10"
					},
					{
						name: "我的团队",
						url: "../pagesA/gongju11"
					},
					{
						name: "预约记录",
						url: "../pagesA/gongju12"
					}
				],
				list: [{
						id: 1,
						name: "待发货"
					},
					{
						id: 2,
						name: "发货中"
					},
					{
						id: 3,
						name: "已收货"
					},
					{
						id: 4,
						name: "报装中"
					},
					{
						id: 5,
						name: "已安装"
					},
				],
				des_user: "",
				mobanid: [
					'qFe_Sxyot4g5R2qJhpo5ECIp6TvRjYFY3g-WIVAgjXU',
				],
			};
		},
		onLoad() {
			// let error = {
			// 	name: "fsdfsdfd",
			// 	sex: "nan"
			// }
			// this.$api.cuxx({
			// 	user_id: uni.getStorageSync("user_info").id || 0,
			// 	// content: 
			// })
		},
		onShow() {
			this.alls()
			this.showssss = uni.getStorageSync("showssss")
		},
		onPullDownRefresh() {
			this.alls()
		},
		methods: {
			kan(ev) {
				uni.previewImage({
					urls: [ev],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {},
						fail: function(err) {}
					}
				});
			},
			kkkk() {
				if (!uni.getStorageSync("user_info")) {
					this.showssss = true
				} else {
					this.showssss = false
				}
			},
			alls() {
				this.user_info = uni.getStorageSync("user_info")
				this.shuliang(this.user_info.id)
				this.$api.desmyuser({
					user_id: this.user_info.id
				}).then(data => {
					if (data.data.code == 1) {
						uni.setStorageSync("des_info", data.data.data.myuser)
						this.qeihuan = "切换设计师"
						this.des_user = data.data.data.myuser
						uni.stopPullDownRefresh();
					} else {
						this.qeihuan = "成为设计师"
						uni.setStorageSync("des_info", {})
					}
				})
			},
			async login() {
				if (await this.$login()) {
					this.user_info = uni.getStorageSync("user_info")
					this.shuliang(this.user_info.id)
				}
			},
			denglu() {
				this.alls()
				this.showssss = false
			},
			budenglu() {
				this.showssss = false
			},
			quxiao(ev) {
				let aa = this.num_list;
				aa[ev] = 0
				this.num_list = [...aa]
			},
			yidong() {
				this.system = uni.getSystemInfoSync(); //系统参数
				this.zhongjian = parseInt(this.system.screenWidth / 2)
				let windows = parseInt(this.system.screenHeight / (uni.upx2px(100) / 100)); //屏幕高转rpx
				let nn = parseInt((uni.getStorageSync("bottomheigth") + uni.getStorageSync("setheigth")) / (uni.upx2px(
					100) / 100)); //获取底部tabber和系统留白的高rpx
				this.px = parseInt(uni.upx2px(90));
				this.px = parseInt(this.px / (uni.upx2px(100) / 100)); //移动物体高rpx
				this.widthwidth = parseInt(this.system.windowWidth / (uni.upx2px(100) / 100)) - this.px; //最宽边距
				this.tabberheigth = windows - nn - this.px - parseInt(uni.getStorageSync("navbarheigth") / (uni.upx2px(
					100) / 100)); //最大下边距
				this.navbarheigth = 0
			},
			shuliang(ev) {
				this.$api.letter({
					user_id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						if (data.data.data.status.length > uni.getStorageSync("letter")) {
							this.zhanleixin = true
						} else {
							this.zhanleixin = false
						}

					}
				})
				this.$api.activtz().then(data => {
					if (data.data.code == 1) {
						if (data.data.data.status.length > uni.getStorageSync("activtz")) {
							this.zhanleixin = true
						}
					}
				})
				this.$api.mymake({
					user_id: uni.getStorageSync("user_info").id,
					limit: 1000
				}).then(data => {
					if (data.data.code == 1) {
						let aa = uni.getStorageSync("yuyuejilunum")
						let cc = uni.getStorageSync("yuyuele")
						let bb = 0
						data.data.data.status.data.forEach(item => {
							if (item.state == "1") {
								bb = bb + 1
							}
						})

						if (data.data.data.status.data.length > aa || bb > cc) {
							this.fkjsfjdisfjsl = true
						} else {
							this.fkjsfjdisfjsl = false
						}
						uni.stopPullDownRefresh();
					}
				})
				// 默认地址
				this.$api.addressshow({
					id: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						data.data.data.status.forEach(item => {
							if (item.auto == 1) {
								uni.setStorageSync("address", item)
								uni.stopPullDownRefresh();
							}
						})
					}
				})
				// 用户信息
				this.$api.myuser({
					user_id: uni.getStorageSync("user_info").id || 0
				}).then(data => {
					if (data.data.code == 1) {
						this.user_info = data.data.data.myuser
						uni.setStorageSync("user_info", data.data.data.myuser)
						uni.stopPullDownRefresh();
					}
				})
				// 订单数
				this.$api.myorder({
					user_id: uni.getStorageSync("user_info").id
				}).then((data) => {
					if (data.data.code == 1) {
						let aa = [0, 0, 0, 0, 0]
						data.data.data.status.forEach((item) => {
							switch (item.state) {
								case "1":
									aa[0] += 1
									break;
								case "2":
									aa[1] += 1
									break;
								case "3":
									aa[2] += 1
									break;
								case "16":
									aa[3] += 1
									break;
								case "17":
									aa[4] += 1
									break;
								default:
							}
						});
						this.num_list = [...aa]
					} else {
						this.num_list = [0, 0, 0, 0, 0]
					}
					uni.stopPullDownRefresh();
				});
			},

			gomy() {

				uni.navigateTo({
					url: "../pagesB/my"
				})

			},
			gos(ev) {
				if (ev == 0) {
					uni.navigateTo({
						url: "../pagesB/card"
					})
				} else if (ev == 1) {
					uni.navigateTo({
						url: "../pagesB/erweima"
					})
				}
			},
			async shengfenzhuanqu() {
				// if (await this.$login()) {
				// 	// async 		
				// }
				if (await this.$login()) {
					let that = this
					uni.requestSubscribeMessage({
						provider: 'weixin',
						tmplIds: that.mobanid,
						complete: function(e) {
							uni.navigateTo({
								url: "../pagesB/shengfen"
							})
						}
					});

				}

			},
			async changeDesign() {
				if (await this.$login()) {
					uni.navigateTo({
						url: "../pagesD/designPage/designPage",
					})
				}
			},
			async go(ev) {
				if (await this.$login()) {
					uni.navigateTo({
						url: "../pagesB/dindan?title=" + ev.name + "&current=" + ev.id
					})
				}

			},
			async gongju_go(ev, title) {
				if (await this.$login()) {

					if (ev == "../pagesD/designyongjin" || ev == "../pagesD/peixun") {
						let that = this
						uni.requestSubscribeMessage({
							provider: 'weixin',
							tmplIds: that.mobanid,
							complete: function(e) {
								uni.navigateTo({
									url: ev + "?title=" + title
								})
							}
						});
					} else {
						uni.navigateTo({
							url: ev + "?title=" + title
						})
					}

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		padding: 20rpx 30rpx;

		.top_d {
			margin-top: 40rpx;
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

			.template {
				position: relative;
				flex: 0 0 25%;
				margin-bottom: 50px;
			}

			.gongjus {
				text-align: center;
				align-content: flex-start;
				flex-flow: row wrap;
				display: flex;
			}

			.texts {
				margin-top: 15rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 50rpx;
				height: 50rpx;
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

	.dsalhdkjahjad {
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		left: 110rpx;
		top: -20rpx;
	}
</style>
