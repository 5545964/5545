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
			<view class="inputs cet">
				<view style="width: 100%;">
					<textarea class="textarea" placeholder-style="color: #999999;" v-model="text"
						placeholder="退款申请说明~" />
					<view class="text">
						上传图片
					</view>
					<view class="asdsss">
						<u-upload @on-uploaded="uploaded($event,items)" :action="action" max-count="9" :header="header"
							:form-data="formData" :name="name" size-type="compressed">
						</u-upload>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 110rpx;">

		</view>
		<view class="annui cet" @click="tuikuan">
			<view class="aaa">
				提交
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shangchuan: false,
				name: "image", //上传
				formData: {}, //上传
				header: {
					"token": uni.getStorageSync("token")
				}, //上传
				action: this.$shangchuan + "/api/byd_user/addpostspic", //图片上传接口
				list: [{
						check: false,
						title: "不是自己想要的样式和颜色"
					},
					{
						check: false,
						title: "不是自己想要的样式和颜色"
					},
					{
						check: false,
						title: "不是自己想要的样式和颜色"
					},
					{
						check: false,
						title: "不是自己想要的样式和颜色"
					},
					{
						check: false,
						title: "不是自己想要的样式和颜色"
					},
					{
						check: false,
						title: "不是自己想要的样式和颜色"
					},
					{
						check: false,
						title: "不是自己想要的样式和颜色"
					}
				],
				text: "",
				title: "申请退款",
				orderid: "",
				imgf: [],
				type:"",
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			this.type = ev.type;
			this.orderid = ev.orderid;

		},
		methods: {
			uploaded(ev, oo) {
				let aa = ev;
				let bb = []
				aa.forEach(item => {
					{
						bb.push(item.response.data.status)
					}
				})
				this.imgf = bb
				this.shangchuan = true
				uni.showToast({
					title: "图片上传完成",
					icon: "none"
				})
			},
			tuikuan() {

				// if (!this.shangchuan) {
				// 	return uni.showToast({
				// 		title: "请等待图片上传完成",
				// 		icon: "none"
				// 	})
				// }
				this.$api.ordertui({
					type:this.type,
					orderid: this.orderid,
					user_id: uni.getStorageSync("user_info").id,
					content: this.text,
					image: this.imgf
				}).then(data => {
					if (data.data.code == 1) {
						uni.showToast({
							title: "申请成功",
							duration: 1000,
							icon: "success"
						})
						uni.$emit("number")
						setTimeout(()=>{
							uni.navigateBack({
								delta:2
							})
						},1000)
					}else{
						uni.showToast({
							title: data.data.msg,
							duration: 1000,
							icon: "success"
						})
					}
				})
			},
			xuanzhe(ev) {
				this.list[ev].check = !this.list[ev].check;
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
	.vdsfdss {
		padding: 30rpx 0;
		font-size: 30rpx;
		font-weight: 400;
		color: #333333;
	}

	.hanaksjh {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40rpx 0;

		.ssssss {
			font-size: 28rpx;
			font-weight: 400;
			color: #666666;
		}

		.danxuan {
			.active {
				background-image: url(../../static/icon_care_gou.png);
				background-color: #037496;
				background-size: 22rpx 16rpx;
				background-position: 5.6rpx 8rpx;
				background-repeat: no-repeat;
				margin-right: 30px;
				width: 34rpx;
				height: 34rpx;
				border: 2rpx solid #999999;
				border-radius: 50%;
			}

			.yuan {
				margin-right: 30px;
				width: 34rpx;
				height: 34rpx;
				background: #FFFFFF;
				border: 2rpx solid #999999;
				border-radius: 50%;
			}
		}
	}



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
