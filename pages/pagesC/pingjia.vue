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
			<view class="" v-if="state == 0">
				<view class="" v-if="alls_item.yyid">
				<!-- <view class=""> -->
					<view class="dsjax">
						<image style="width: 76rpx;height: 76rpx;border-radius: 50%;margin-right: 25rpx;" :src="imgh">
						</image>
						<view class="">
							<view class="name">
								{{nameh}}
							</view>
							<view class="dsakd">
								设计师
							</view>
						</view>
					</view>
					<view class="mdsjfoi">
						<view class="" @click="dianzhanwo(0)">
							<view class="cet">
								<image v-if="chuangyi" style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhans.png"></image>
								<image v-else style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhan.png"></image>
							</view>
							<view class="">
								创意度
							</view>
						</view>
						<view class="" @click="dianzhanwo(1)">
							<view class="cet">
								<image v-if="zhuanye" style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhans.png"></image>
								<image v-else style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhan.png"></image>
							</view>
							<view class="">
								专业度
							</view>
						</view>
						<view class="" @click="dianzhanwo(2)">
							<view class="cet">
								<image v-if="chengdan" style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhans.png"></image>
								<image v-else style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhan.png"></image>
							</view>
							<view class="">
								成单率
							</view>
						</view>
						<view class="" @click="dianzhanwo(3)">
							<view class="cet">
								<image v-if="manyi" style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhans.png"></image>
								<image v-else style="width: 48rpx;height: 53rpx;margin-bottom: 20rpx;"
									src="../../static/dianzhan.png"></image>
							</view>
							<view class="">
								满意度
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="inputs cet">
				<view style="width: 100%;">
					<textarea class="textarea" placeholder-style="color: #999999;" v-model="text"
						placeholder="请填写您的评价~" />
					<view class="text">
						添加晒单图片：
					</view>
					<view class="asdsss">
						<u-upload width="160" height="160" :action="action" @on-uploaded="uploaded" max-count="12"
							:header="header" :form-data="formData" :name="name" size-type="compressed"></u-upload>
					</view>
				</view>
			</view>
		</view>
		<view class="annui cet" @click="fa">
			<view class="aaa">
				发表评价
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chuangyi: false,
				zhuanye: false,
				chengdan: false,
				manyi: false,
				imglist: [],
				name: "image", //上传
				formData: {}, //上传
				header: {
					"token": uni.getStorageSync("token")
				}, //上传
				action: this.$shangchuan + "/api/byd_user/addpostspic", //图片上传接口
				text: "",
				title: "发表评价",
				shopid: "",
				orderid: "",
				alls_item: {},
				shangchuan: false,
				state: 0,
				imgh: "",
				nameh: "",
				desid: ""
			};
		},
		onLoad(ev) {
			if (ev.okj != 0) {
				this.state = 1
				this.title = "报装评价"
			}
			if (ev.title) {
				this.title = ev.title
			}
			if (ev.state) {
				this.state = 1
			}
			this.alls_item = JSON.parse(ev.item)
			if (this.alls_item.yyid) {
				this.$api.desljpf({
					yyid: this.alls_item.yyid
				}).then(data => {
					if (data.data.code == 1) {
						this.nameh = data.data.data.status.username
						this.imgh = this.$imgPath + data.data.data.status.avatar
						this.desid = data.data.data.status.id
					}
				})
			}

		},
		methods: {
			dianzhanwo(ev) {
				if (ev == 0) {
					this.chuangyi = !this.chuangyi
				}
				if (ev == 1) {
					this.zhuanye = !this.zhuanye
				}
				if (ev == 2) {
					this.chengdan = !this.chengdan
				}
				if (ev == 3) {
					this.manyi = !this.manyi
				}
			},
			uploaded(ev) {
				let aa = ev;
				let bb = []
				aa.forEach(item => {
					{
						bb.push(item.response.data.status)
					}
				})
				this.imglist = bb
				this.shangchuan = true
				uni.showToast({
					title: "图片上传完成",
					icon: "none"
				})
			},
			fa() {
				if (this.alls_item.yyid) {
					let one = 0
					let two = 0
					let three = 0
					let four = 0
					if (this.chuangyi) {
						one = 25
					}
					if (this.zhuanye) {
						two = 25
					}
					if (this.chengdan) {
						three = 25
					}
					if (this.manyi) {
						four = 25
					}
					let all = one + two + three + four
					this.$api.pf({
						user_id: uni.getStorageSync("user_info").id,
						des_id: this.desid,
						one,
						two,
						three,
						four,
						all
					}).then(data => {
						if (data.data.code == 1) {
							uni.showToast({
								title: "设计师评价完成",
								icon: "none"
							})
						}
					})
				}
				let aa = []
				this.alls_item.shop.forEach(item => {
					aa.push(item.id)
				})
				this.$api.pl({
					state: this.state,
					content: this.text,
					image: this.imglist,
					orderid: this.alls_item.orderid,
					shopid: aa,
					userid: uni.getStorageSync("user_info").id,
				}).then(data => {
					if (data.data.code == 1) {
						uni.showToast({
							title: "评价成功",
							duration: 1000,
							icon: "success"
						})
						uni.$emit("yuwancheng")
						setTimeout(() => {
							uni.navigateBack(-1)
						}, 1000)
					} else {
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "success"
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
	.annui {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 110rpx;
		background: #FFFFFF;

		.aaa {
			width: 600rpx;
			height: 70rpx;
			line-height: 70rpx;
			text-align: center;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
	}

	.home {
		background-color: #FFFFFF;
		width: 100%;
		padding: 30rpx;

		.mdsjfoi {
			margin-top: 60rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}


		.dsjax {
			display: flex;
			align-items: center;

			.mdsjfoi {
				display: flex;
				align-items: center;
				justify-content: space-around;
			}

			.dsakd {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.name {
				font-size: 30rpx;
				font-weight: 400;
				color: #333333;
			}
		}

		.inputs {
			padding: 40rpx 0;

			.asdsss {
				margin-top: 60rpx;
			}

			.text {
				padding-top: 60rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #333333;
			}

			.textarea {
				padding: 30rpx;
				width: 90%;
				height: 400rpx;
				background: #F6F6F6;
				border-radius: 10rpx;

			}
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
