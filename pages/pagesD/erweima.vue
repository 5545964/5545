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
						placeholder="请填写您创建的项目沟通群的名字~" />
					<view class="text">
						添加沟通群二维码：：
					</view>
					<view class="asdsss">
						<u-upload ref="uUpload" width="160" height="160" :action="action" max-count="1" name="image"
							size-type="compressed"></u-upload>
					</view>
				</view>
			</view>
		</view>
		<view class="annui cet" >
			<view class="aaa" @click="submit">
				上传
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "",
				title: "上传二维码",
				order_id: "",
				imgs: "",
				action: 'http://bao.scwushen.com/index.php/api/byd_user/addpostspic',
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			this.order_id = ev.id

		},
		methods: {
			submit() {
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				this.imgs=files[0].response.data.status
				this.$api.upewm({
					id:this.order_id,
					ewm:this.imgs,
					qname:this.text,
				}).then(data=>{

					if(data.data.code==1){
						uni.showModal({
							title:data.data.msg,
							success() {
								this.back(0)
							},
							fail() {
								this.back(0)
							}
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
