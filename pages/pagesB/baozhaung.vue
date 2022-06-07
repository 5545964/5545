<template>
	<view>
		<!-- 导航 -->
		<view class="navbar">
			<u-navbar :is-back="false" :title="title">
				<view class="sssss">
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
		<view class="huadong">
			<view v-if="carList.length != 0" v-for="(item,shopIndex) in carList" :key="shopIndex" class="car-list">
				<view class="list">
					<view class="btn centerboth" v-if="item.selected==true" @click="selThis(shopIndex)">
						<text class="iconfont car-sel"></text>
					</view>
					<view class="btn centerboth" v-else @click="selThis(shopIndex)">
						<text class="iconfont car-unsel"></text>
					</view>
					<image class="car-img" :src="img+item.simage" mode="aspectFill"></image>
					<view class="car-mes centerboth">
						<view class="mes-box">
							<view class="g-name line2">{{item.name||""}}</view>
							<view class="price-change-num clearfix">
								<view class="price">￥<text class="yj-price">{{item.price||""}}</text></view>
							</view>
						</view>
					</view>
				</view>
				<view class="hdjsah">
					<view class="remove" @click="delData(item,shopIndex)">删除</view>
				</view>
			</view>
			<view style="height: 100rpx;">

			</view>
		</view>
		<view class="car_foot">
			<view class="all-sel-btn centerboth">
				<text v-if="allSel==true" class="iconfont car-sel" @click="allSelBtn"></text>
				<text v-else class="iconfont car-unsel" @click="allSelBtn"></text>
				<text @click="allSelBtn">全选</text>
			</view>
			<view class="foot_right">
				<view class="submit_btn" @click="jsCars">
					提交报装
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "报装",
				allSel: false,
				carList: [],
				img: this.$imgPath,
				orderid: "",
				tiao: 0
			}
		},
		onLoad(ev) {
			this.orderid = ev.orderid
			let aa = uni.getStorageSync("baozhaung")
			aa.forEach(item => {
				item["selected"] = false
			})
			this.carList = aa
			if (ev.tiao) {
				this.tiao = ev.tiao
			}
		},
		methods: {
			jsCars() {
				let shopid = [];
				this.carList.forEach(item => {
					if (item.selected) {
						shopid.push(item.id)
					}
				})
				this.$api.sqlading({
					shopid: shopid,
					orderid: this.orderid,
					userid: uni.getStorageSync("user_info").id
				}).then(data => {
					if (data.data.code == 1) {
						this.$refs.uToast.show({
							title: '提交成功，请耐心等待！',
							duration:1000
						})
						uni.removeStorageSync("baozhaung")
						let that = this;
						setTimeout(function() {
							uni.navigateBack({
								delta: Number(that.tiao)
							})
						}, 1000);
					} else {
						uni.showToast({
							title: "提交失败",
							icon: "success",
						})
					}
				})
			},
			//选择商品
			selThis(shopIndex) {
				let that = this
				let carList = that.carList;
				let aa = 0;
				carList[shopIndex].selected = !carList[shopIndex].selected
				that.carList = carList
				that.carList.forEach((item, index) => {
					if (item.selected) {
						aa += 1
					}
				})
				if (aa == that.carList.length) {
					that.allSel = true
				} else {
					that.allSel = false
				}
			},
			allSelBtn() { //全选
				let that = this;
				that.allSel = !that.allSel;
				let carList = that.carList;
				for (let i = 0; i < carList.length; i++) {
					if (that.allSel) {
						carList[i].selected = true;
					} else {
						carList[i].selected = false;
					}
				}
				// that.$emit('allSelBtn', carList);
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
	@font-face {
		font-family: 'iconfont';
		/* project id 1143282 */
		src: url('https://at.alicdn.com/t/font_1143282_zy7677qexck.eot');
		src: url('https://at.alicdn.com/t/font_1143282_zy7677qexck.eot?#iefix') format('embedded-opentype'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.woff2') format('woff2'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.woff') format('woff'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.ttf') format('truetype'),
			url('https://at.alicdn.com/t/font_1143282_zy7677qexck.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.car-add:before {
		content: "\e8a6";
	}

	.car-sub:before {
		content: "\e8a7";
	}

	.car-no:before {
		content: "\e64d";
	}

	.car-unsel:before {
		content: "\e63a";
	}

	.car-sel:before {
		content: "\e639";
	}

	.car-del:before {
		content: "\e622";
	}

	.car-count {
		width: 100%;
		padding-bottom: 120rpx;
	}

	.manage-btn {
		width: 100%;
		height: 75rpx;
		background: #FFFFFF;
		text-align: right;
	}

	.manage-btn text {
		font-size: 30rpx;
		color: #76a28c;
		line-height: 75rpx;
		padding: 0 24rpx;
	}



	.all-sel-btn {
		height: 100%;
		float: left;
	}

	.all-sel-btn .iconfont {
		margin-right: 10rpx;
		color: #76a28c;
	}

	.car-list {
		width: 100%;
		display: flex;
		position: relative;
		align-items: right;
		flex-direction: row;
		padding: 12rpx 0;
	}

	.aaaaaaaaaa {
		border-radius: 20rpx;
	}

	.car-list .list {
		width: 100%;
		padding: 20rpx 20rpx 20rpx 0;
		display: flex;
		background: #FFFFFF;
		border-bottom: 1px solid #F5F5F5;
	}

	// .car-list .list:nth-child(1) {
	// 	border-top-left-radius: 0;
	// 	border-top-right-radius: 0;
	// }

	// .car-list .list:nth-last-child(1) {
	// 	margin: 0;
	// }

	.car-list .list .btn {
		width: 70rpx;
		height: 190rpx;
	}

	.car-list .list .btn .iconfont {
		color: #76a28c;
		font-size: 38rpx;
	}

	.car-list .list .car-img {
		width: 190rpx;
		height: 190rpx;
		border-radius: 10rpx;
	}

	.car-list .list .car-mes {
		flex: 1;
		margin-left: 20rpx;
	}

	.car-list .g-name {
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #2a2a2a;
		/* height: 38rpx; */
	}

	.car-list .mes-box {
		width: 100%;
		height: 100%;
	}

	.car-list .gz-box {
		font-size: 26rpx;
		color: #999999;
		margin: 10rpx 0;
	}

	.car-list .mes-box .price {
		color: #ff5621;
		font-weight: bold;
		font-size: 24rpx;
	}

	.car-list .mes-box .yj-price {
		font-size: 36rpx;
	}

	.car-list .price .num {
		color: #2a2a2a;
		font-size: 28rpx;
		font-weight: normal;
		float: right;
	}

	.car-list .num-box {
		float: right;
	}

	.car-list .num-box .iconfont {
		font-size: 50rpx;
		color: #999999;
	}

	.car-list .num-box view {
		width: 60rpx;
		text-align: center;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 30rpx;
		color: #2A2A2A;
		margin: 0 10rpx;
	}

	.price-change-num .price {
		float: left;
	}

	.car-bottom-btn {
		position: fixed;
		width: 100%;
		height: 100rpx;
		background: #FFFFFF;
		left: 0;
		bottom: 0;
		z-index: 6;
		box-shadow: 0px -5px 10px -5px #d0d0d0;
		padding: 0 300rpx 0 40rpx;
		display: flex;
		justify-content: space-between;
	}

	.car-bottom-btn .all-cost {
		margin-right: 10rpx;
	}

	.car-bottom-btn .all-cost .icon {
		font-size: 28rpx;
		margin-top: 5rpx;
	}

	.car-bottom-btn text {
		color: #ff5621;
		font-size: 38rpx;
		line-height: 80rpx;
	}

	.car-btn-box {
		position: absolute;
		right: 0;
		height: 100%;
		z-index: 9;
		top: 0;
	}

	.car-btn-box view {
		width: 150rpx;
		height: 100%;
		cursor: pointer;
	}

	.del-btn {
		background: red;
		color: #FFFFFF;
	}

	.js-btn {
		background: #76a28c;
		color: #FFFFFF;
	}

	.shop-mes {
		padding: 20rpx;
		background: #FFFFFF;
		border-bottom: 1px solid #F5F5F5;
	}

	.shop-mes .iconfont {
		font-size: 38rpx;
		margin-right: 20rpx;
		color: #76a28c;
	}

	.shop-mes .name-mes {
		float: left;
	}

	// 底部合计
	.car_foot {
		width: 100%;
		height: 100rpx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		justify-content: space-between;

		.foot_right {
			display: flex;
			align-items: center;
		}

		.all_price {
			font-size: 26rpx;
			color: #000000;
			text-align: right;
		}

		.acitvity {
			font-size: 18rpx;
			color: #999;
		}

		.submit_btn {
			width: 160rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 30rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
			margin-left: 20rpx;
		}

	}

	.dksjahk {
		font-size: 24rpx;
		font-weight: 400;
		color: #000000;
		line-height: 30rpx;
	}

	.fsdfsfs {
		color: #000000;
	}

	.fdsds {
		font-size: 22rpx;
		font-weight: 400;
		color: #666666;
	}

	page {
		background: #f5f5f5;
	}

	view,
	textarea,
	input,
	text,
	button {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: "微软雅黑";
	}

	.uni-checkbox-input {
		border-radius: 50% !important;
	}

	.submit_btn {
		width: 160rpx;
		height: 70rpx;
		background: #007399;
		border-radius: 35rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 70rpx;
		margin-left: 20rpx;
	}

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		background: #f5f5f5;
		overflow: hidden;
	}

	.line1 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: box;
		display: -webkit-box;
		line-clamp: 1;
		box-orient: vertical;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
		/* 英文换行问题 */
	}

	.line2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: box;
		display: -webkit-box;
		line-clamp: 2;
		box-orient: vertical;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		/* 英文换行问题 */
	}

	.centerboth {
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		justify-content: center;
		-webkit-justify-content: center;
	}

	.clearfix:after {
		content: "";
		display: block;
		visibility: hidden;
		height: 0;
		clear: both;
	}

	.clearfix {
		margin-top: 50rpx;
		zoom: 1;
	}

	image {
		padding: 0;
		margin: 0;
	}

	textarea {
		width: 300rpx;
		height: 75rpx;
		display: block;
		position: relative;
		font-size: 28rpx;
	}

	button::after {
		border: none;
	}

	input:-ms-input-placeholder {
		color: #808080;
	}

	car-list {
		width: 100%;
	}





	// 导航
	.navbar {
		.sssss {
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

	//滑动
	.huadong {
		margin: 20rpx;
		overflow: hidden;

		.order-item {}

		.content {
			width: 100%;
			height: 180rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			padding: 0 30rpx;

			.dasdas {
				margin-left: 30rpx;
			}

			.texts {
				margin-top: 40rpx;
				font-size: 22rpx;
				font-weight: 400;
				color: #999999;
			}

			.text {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
			}

			.img {
				width: 140rpx;
				height: 140rpx;
				border-radius: 20rpx;
			}
		}

		.hdjsah {
			position: absolute;
			top: 0;
			right: -130rpx;
			width: 130rpx;
			margin: 12rpx 0;
			padding: 20rpx 0;
			background-color: #FB716E;
			border-radius: 0rpx 10rpx 10rpx 0rpx;
		}

		.remove {
			width: 100%;
			height: 190rpx;
			line-height: 190rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

	}
</style>
