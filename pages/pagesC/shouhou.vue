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
			<view class="huanbhuo">
				<view class="cet" @click="xuan(0)">
					<view :class="[shsh==0 ? 'yuan' : 'yuans']">
					</view>
					<view class="zxcv">
						退货
					</view>
				</view>
				<view class="cet" @click="xuan(1)">
					<view :class="[shsh==1 ? 'yuan' : 'yuans']">
					</view>
					<view class="zxcv">
						换货
					</view>
				</view>
			</view>
			<view style="margin-top: 100rpx;">
				<view class="centre" v-for="(itemc, indexc) in shop_data" :key="indexc" @click="xuansss(indexc)">
					<view :class="[itemc.checked ? 'yuan' : 'yuans']">

					</view>
					<view style="margin-left: 20rpx;">
						<image class="img" :src="imgtitle + itemc.simage" mode="aspectFit"></image>
					</view>
					<view style="margin-left: 10rpx;">
						<view class="name">
							{{ itemc.name }}
						</view>
						<text class="fdsds">共{{itemc.num}}件 合计：</text><text
							class="fsdfsfs fdsds">￥{{itemc.sonprice}}</text>
					</view>
				</view>
			</view>
			<view class="inputs cet">
				<view style="width: 100%;">
					<view class="text">
						您的理由
					</view>
					<view style="background:#f6f6f6;border-radius:10rpx;margin-top:20rpx;">
						<textarea class="textarea" placeholder-style="color: #999999;" v-model="text"
							placeholder="请填写您的理由~" />
					</view>

					<view class="text">
						添加图片：
					</view>
					<view class="asdsss">
						<u-upload width="160" height="160" @on-remove="remove" :action="action" @on-uploaded="uploaded" max-count="12"
							:header="header" :form-data="formData" :name="name" size-type="compressed"></u-upload>
					</view>
				</view>
			</view>
		</view>
		<view class="" style="height: 110rpx;">

		</view>
		<view class="annui cet" @click="fa">
			<view class="aaa">
				提交申请
			</view>
		</view>
		<u-kehu url="../Home/booking/AppointmentDesign"></u-kehu>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgtitle: this.$imgPath,
				imglist: [],
				name: "image", //上传
				formData: {}, //上传
				header: {
					"token": uni.getStorageSync("token")
				}, //上传
				action: this.$shangchuan + "/api/byd_user/addpostspic", //图片上传接口
				text: "",
				title: "申请售后",
				shopid: "",
				orderid: "",
				alls_item: {},
				shangchuan: false,
				shsh: 0,
				shop_data: [],
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			this.alls_item = JSON.parse(ev.item)
			this.alls_item.shop.forEach(item => {
				item["checked"] = false
			})
			this.shop_data = [...this.alls_item.shop]
		},
		methods: {
			xuansss(ev) {
				let aa = this.shop_data

				aa[ev].checked = !aa[ev].checked
				this.shop_data = [];
				this.shop_data = [...aa]

			},
			xuan(ev) {
				this.shsh = ev
			},
			remove(ev){
				this.imglist.splice(ev,1)
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
				if (!this.shangchuan) {
					return uni.showToast({
						title: "请检查图片",
						icon: "none"
					})
				}
				let aa = []
				let bb = []
				this.shop_data.forEach(item => {
					if (item.checked) {
						aa.push(item.id)
						bb.push(item.num)
					}
				})
				// uni.$emit("number")
				this.$api.sqorder({
					user_id: uni.getStorageSync("user_info").id,
					type: this.shsh,
					orderid: this.alls_item.orderid,
					shopid: aa,
					num: bb,
					tuik_ly: this.text,
					image: this.imglist,
				}).then(data => {
					if (data.data.code == 1) {
						uni.showToast({
							title: "申请售后成功",
							duration: 1000,
							icon: "success"
						})
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
	.yuan {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		background-color: #007399;
	}

	.yuans {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		border: 1px solid #007399;

	}

	.centre {
		display: flex;
		align-items: center;
		justify-content: end;
		margin-bottom: 20rpx;

		.fsdfsfs {
			color: #000000;
		}

		.fdsds {
			font-size: 22rpx;
			font-weight: 400;
			color: #666666;
		}

		.name {
			margin-bottom: 40rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
		}

		.img {
			border-radius: 20rpx;
			width: 160rpx;
			height: 160rpx;
		}
	}

	.huanbhuo {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #FFFFFF;

		.zxcv {
			margin-left: 25rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #333333;
		}




	}

	.annui {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 110rpx;
		background: #FFFFFF;
		z-index: 1000;

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
				padding-top: 30rpx;
				width: 100%;
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
