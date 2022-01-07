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
			<view class="dfhkjdsh">
				<view class="jiben">
					基本信息
				</view>
				<view class="dsadsa">
					<view class="">
						<view class="name">
							真实姓名
						</view>
						<view class="name">
							身份证号码
						</view>
					</view>
					<view class="">
						<view class="name">
							<input type="text" inputAlign="right" v-model="name" placeholder="请填写真实姓名" />
						</view>
						<view class="name">
							<input type="text" v-model="card_id" placeholder="请填写您的身份证号码" />
						</view>
					</view>
				</view>
			</view>
			<view class="shangchuan">
				<view class="jiben">
					上传身份证<text class="dasad">（确保证件清晰完整、属于本人）</text>
				</view>
				<view class="dsadsa">
					<view class="renxiang cet">
						<u-upload :action="action" BackColor="#FFFFFF" :imgUrl="renxiang_bg" width="600" height="480"
							max-count="1" :header="header" :form-data="formData" :name="upname" size-type="compressed">
						</u-upload>
					</view>
					<view class="guohui cet">
						<u-upload :action="action" BackColor="#FFFFFF" :imgUrl="guohui_bg" width="600" height="480"
							max-count="1" :header="header" :form-data="formData" :name="upname" size-type="compressed">
						</u-upload>
					</view>
				</view>
			</view>
			<view class="dfhkjdsh">
				<view class="jiben">
					银行卡信息
				</view>
				<view class="dsadsa">
					<view class="">
						<view class="name">
							银行卡号
						</view>
						<view class="name">
							银行卡开户行
						</view>
					</view>
					<view class="">
						<view class="name">
							<input type="text" inputAlign="right" v-model="yinghangka" placeholder="请填写银行卡号" />
						</view>
						<view class="name">
							<input type="text" v-model="kaihuhang" placeholder="请填写您的银行卡开户行" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 110rpx;">
			
		</view>
		<view class="bottomssss cet">
			<view class="dasdasdxzxcx" @click="tijiao">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				renxiang_bg: require('../../static/renxiang_bg.png'),
				guohui_bg: require('../../static/guohui_bg.png'),
				upname: "", //上传
				formData: {}, //上传
				header: {}, //上传
				action: "#", //图片上传接口
				name: "",
				card_id: "",
				yinghangka: "",
				kaihuhang: "",
				title: "上传身份信息",
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title;
			}
		},
		methods: {
			tijiao() {
				let list = {
					title: "提交成功",
					text: "你的提佣申请已提交成功",
					botton: "我知道了",
					navbar: "提交成功"
				}
				uni.navigateTo({
					url: "../pagesD/regSuccess?list=" + JSON.stringify(list)
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
	.bottomssss {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 110rpx;
		background: #FFFFFF;

		.dasdasdxzxcx {
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
		padding: 30rpx;
		width: 100%;
		height: 100%;

		.shangchuan {
			padding: 30rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin-bottom: 30rpx;

			.renxiang {
				margin-bottom: 30rpx;
			}

			.dasad {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
			}

			.jiben {
				padding: 40rpx 0;
				font-size: 30rpx;
				font-weight: 800;
				color: #000000;
			}
		}


		.dfhkjdsh {
			padding: 30rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin-bottom: 30rpx;

			.jiben {
				padding: 40rpx 0;
				font-size: 30rpx;
				font-weight: 800;
				color: #000000;
			}

			.dsadsa {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.name {
				padding: 40rpx 0;
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
