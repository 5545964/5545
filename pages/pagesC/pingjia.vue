<template>
	<view>
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
		<view class="home">
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
				shangchuan: false
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			this.alls_item = JSON.parse(ev.item)

		},
		methods: {
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

				// if (!this.shangchuan) {
				// 	return uni.showToast({
				// 		title: "请等待图片上传完成",
				// 		icon: "none"
				// 	})
				// }
				let aa = []
				this.alls_item.shop.forEach(item => {
					aa.push(item.id)
				})
				this.$api.pl({
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
