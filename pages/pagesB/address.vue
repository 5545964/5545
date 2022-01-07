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
			<view class="dasdasd">
				<view class="inputs">
					<view class="cxz">
						收货人
					</view>
					<view class="asd">
						<u-input style="width: 100%;height: 100%;" :inputAlign="'left'" v-model="name" type="text"
							placeholder="请输入收货人姓名" />
					</view>
				</view>
				<view class="inputs">
					<view class="cxz">
						手机号码
					</view>
					<view class="asd">
						<u-input style="width: 100%;height: 100%;" :inputAlign="'left'" v-model="phone" type="number"
							placeholder="请输入手机号码" />
					</view>
				</view>
				<view class="inputs" @click="xuanzhe">
					<view class="cxz">
						地区信息
					</view>
					<view class="asd dhdh">
						<u-input v-model="mnmn" style="width: 100%;height: 100%;" :inputAlign="'left'" :disabled="true"
							type="text" placeholder="请选择地址" />
						<image class="img" src="../../static/dinwei.png" mode=""></image>
					</view>
				</view>
				<view class="inputs">
					<view class="cxz">
						详细地址
					</view>
					<view class="asd">
						<textarea style="width: 100%;" placeholder-style="color: #999999;" v-model="address"
							placeholder="请填写详细地址" :auto-height="true" />
					</view>
				</view>
				<view class="inputs inputss">
					<view class="cxzs">
						设为默认地址
					</view>
					<view class="asd">
						<u-switch activeColor="#E45C5E" @change="change" :activeValue="1" :inactiveValue="0"
							v-model="moren"></u-switch>
					</view>
				</view>
			</view>
			<view class="daddasda" @click="submit">
				<block v-if="id==0">
					确认添加
				</block>
				<block v-else>
					确认修改
				</block>
			</view>
			<view v-if="id!=0" class="daddasdass" @click="selece">
				删除
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mnmn: "",
				title: "",
				data: {},
				name: "",
				phone: "",
				address: "",
				moren: 0,
				type: 1,
				id: 0,
			};
		},
		onLoad(ev) {
			this.title = ev.title;
			if (ev.data) {
				this.data = JSON.parse(ev.data);
				this.name = this.data.username;
				this.phone = this.data.phone;
				this.address = this.data.address;
				this.mnmn = this.data.title;
				this.moren = this.data.auto;
				this.type = 0
				this.id = this.data.id

			}

		},
		methods: {
			selece() {
				// 删除删除地址
				let that = this;
				uni.showModal({
					title: '提示',
					content: '是否删除地址？',
					success: function(res) {
						if (res.confirm) {

							that.$api.addressdel({
								userid: uni.getStorageSync("user_info").id,
								id: that.id
							}).then(data => {

								if (data.data.code == 1) {
									uni.navigateBack({
										delta: 1
									})
								} else {
									uni.showModal({
										title: data.data.msg
									})
								}
							})
						} else if (res.cancel) {

						}
					}
				});

			},
			// 添加或修改地址
			submit() {
				var phone = this.phone;
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
					uni.showToast({
						title: "手机号码有误，请重填",
						icon: "none"
					})
					this.phone = ""
					return false;
				}
				this.$api.address({
					userid: uni.getStorageSync("user_info").id,
					username: this.name,
					phone: this.phone,
					address: this.address,
					title: this.mnmn,
					auto: this.moren,
					type: this.type,
					id: this.id
				}).then(data => {

					if (data.data.code == 1) {
						uni.navigateBack({
							delta: 1
						})
					} else {
						uni.showModal({
							title: data.data.msg
						})
					}
				})
			},
			xuanzhe() {
				let that = this;
				uni.chooseLocation({
					success: function(res) {
						that.mnmn = res.address;
						that.address = res.name;




					}
				});
			},
			change(status) {

				this.moren = status
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
		padding: 30rpx;

		.daddasdass {
			margin-top: 80rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #e25c5c;
			border-radius: 10rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.daddasda {
			margin-top: 80rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #007399;
			border-radius: 10rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.dasdasd {
			background-color: #FFFFFF;
			border-radius: 10rpx;

			.img {
				margin-right: 40rpx;
				width: 30rpx;
				height: 40rpx;
			}

			.dhdh {
				width: 74%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.inputss {
			justify-content: space-between;
		}

		.asd {
			width: 74%;
			padding-right: 30rpx;
			display: flex;
			justify-content: flex-end;
		}

		.inputs {
			display: flex;
			align-items: center;
			padding: 40rpx 0;
			border-bottom: 1px solid #F6F6F6;

			.czczc {
				margin-left: 40rpx;
			}

			.textss {
				padding-left: 10rpx;
			}

			.yuanquan {
				width: 26rpx;
				height: 26rpx;
				background: #FFFFFF;
				border: 2px solid #999999;
				border-radius: 50%;

			}

			.hhjhjh {
				width: 26rpx;
				height: 26rpx;
				background: #007399;
				border-radius: 50%;
			}



			.cxz {
				padding-left: 30rpx;
				width: 26%;
				font-size: 30rpx;
				font-weight: 400;
				color: #333333;
			}

			.cxzs {
				width: 40%;
				padding: 0 30rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #333333;
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
