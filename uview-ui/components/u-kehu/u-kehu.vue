<template>
	<view class="">
		<view class="">
			<view class="djsa cet" id="yuan" @touchend="end" @touchmove.stop="move"
				:style="'top: '+bianheigth+'rpx;left: '+bianright+'rpx;'">
				<view style="width: 100%;" @click="click">
					<view class="dad" style="margin-top:-14rpx;">
						客服
					</view>
					<view class="dad">
						预约设计
					</view>
					<!-- <view class="cet">
						<view class="dasds">
							<image :src="img" mode="aspectFit"></image>
						</view>
					</view> -->
					<!-- <view class="dad cet">
						{{title}}
					</view> -->
				</view>
			</view>
		</view>
		<view class="">
			<view class="djsa cet" id="yuan" @touchend="ends" @touchmove.stop="moves"
				:style="'top: '+bianheigths+'rpx;left: '+bianrights+'rpx;'">
				<view class="" @click="xianshiqianggous">
					<view class="cet">
						<image class="dasds" :src="xianshiqianggouimg" mode="aspectFit"></image>
					</view>
					<view class="dad cet" style="width:60rpx;text-align: center;margin-top: 0;">
						限时抢购
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" @close="show = false">
			<view class="popup" :style="'margin-bottom: '+po_hei+'rpx;'">
				<view class="ffgfgf cet" @click="go_kefu(0)">
					<button class="vv " open-type="contact"> 在线客服</button>
				</view>
				<view class="dadasas cet" @click="go_kefu(1)">
					<view class="cc dssfdd">
						预约设计
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	/**
	 * kehu 客户
	 */
	export default {
		name: 'u-kehu',
		props: {
			img: {
				type: String,
				default: require('@/static/icon_home_kefu_ico.png')
			},
			xianshiqianggouimg: {
				type: String,
				default: require('@/static/xianshiqiaonggoua.png')
			},
			heigth: {
				type: Number,
				default: 300
			},
			right: {
				type: Number,
				default: 0
			},
			po_hei: {
				type: Number,
				default: 180
			},
			url: {
				type: String,
				default: "./booking/AppointmentDesign"
			},
			title: {
				type: String,
				default: "预约设计-客服"
			},
			showsss: {
				type: Boolean,
				default: false
			},
			navis: {
				type: Boolean,
				default: true
			},
			xianshiqianggouurl: {
				type: String,
				default: "../pagesC/promotion"
			},
		},
		mounted() {
			this.show = this.showsss;
			this.system = uni.getSystemInfoSync(); //系统参数
			let windows = parseInt(this.system.screenHeight / (uni.upx2px(100) / 100)); //屏幕高转rpx
			let nn = parseInt((uni.getStorageSync("bottomheigth") + uni.getStorageSync("setheigth")) / (uni.upx2px(100) /
				100)); //获取底部tabber和系统留白的高rpx
			this.px = parseInt(uni.upx2px(90));
			this.px = parseInt(this.px / (uni.upx2px(100) / 100)); //移动物体高rpx
			this.widthwidth = parseInt(this.system.windowWidth / (uni.upx2px(100) / 100)) - this.px; //最宽边距
			if (this.navis) {
				this.tabberheigth = windows - nn - this.px - this.px; //最大下边距
				this.navbarheigth = parseInt(uni.getStorageSync("navbarheigth") / (uni.upx2px(100) / 100)); //最大上边距
			} else {
				this.tabberheigth = windows - nn - this.px - parseInt(uni.getStorageSync("navbarheigth") / (uni.upx2px(
					100) / 100)); //最大下边距
				this.navbarheigth = 0
			}
			this.bianheigth = this.tabberheigth - 300;
			this.bianright = this.widthwidth;
			this.bianheigths = this.tabberheigth - 500;
			this.bianrights = this.widthwidth;
		},
		data() {
			return {
				px: 0,
				widthwidth: 0,
				navbarheigth: 0,
				tabberheigth: 0,
				system: {},
				show: false,
				bianheigth: 0,
				bianright: 0,
				bianliang: 0,
				bianheigths: 0,
				bianrights: 0,
				bianliangs: 0
			}
		},
		methods: {
			ends() {
				if (this.bianliangs < this.system.screenWidth / 2) {
					var bbs = setInterval(() => {
						this.bianrights = this.bianrights - 10;
						if (this.bianrights <= 0) {
							this.bianrights = 0;
							clearInterval(bbs);
						}
					}, 10)
				} else {
					var bb = setInterval(() => {
						this.bianrights = this.bianrights + 10;
						if (this.bianrights >= this.widthwidth) {
							this.bianrights = this.widthwidth
							clearInterval(bb);
						}
					}, 10)
				}
			},
			moves(ev) {
				let touch = ev.touches[0];
				this.bianliangs = touch.clientX
				let aa = parseInt(touch.clientX / (uni.upx2px(100) / 100)) - (this.px / 2);
				let bb = parseInt(touch.clientY / (uni.upx2px(100) / 100)) - (this.px / 2);
				if (aa >= 0 && aa <= this.widthwidth) {
					this.bianrights = aa
				}
				if (bb >= this.navbarheigth && bb <= this.tabberheigth) {
					this.bianheigths = bb
				}
			},
			end() {
				if (this.bianliang < this.system.screenWidth / 2) {
					var bb = setInterval(() => {
						this.bianright = this.bianright - 10;
						if (this.bianright <= 0) {
							this.bianright = 0;
							clearInterval(bb);
						}
					}, 10)
				} else {
					var bb = setInterval(() => {
						this.bianright = this.bianright + 10;
						if (this.bianright >= this.widthwidth) {
							this.bianright = this.widthwidth
							clearInterval(bb);
						}
					}, 10)
				}
			},
			move(ev) {
				let touch = ev.touches[0];
				this.bianliang = touch.clientX
				let aa = parseInt(touch.clientX / (uni.upx2px(100) / 100)) - (this.px / 2);
				let bb = parseInt(touch.clientY / (uni.upx2px(100) / 100)) - (this.px / 2);
				if (aa >= 0 && aa <= this.widthwidth) {
					this.bianright = aa
				}
				if (bb >= this.navbarheigth && bb <= this.tabberheigth) {
					this.bianheigth = bb
				}
			},
			go_kefu(ev) {
				if (this.title != "客服") {
					return uni.navigateTo({
						url: this.url
					})
				}
				this.show = false;
				switch (ev) {
					case 0:
						break;
					case 1:
						uni.navigateTo({
							url: this.url
						})
						break;
					default:
				}
			},
			xianshiqianggou() {
				uni.navigateTo({
					url: this.xianshiqianggouurl
				})
			},
			click(ev) {
				this.show = true;
			}
		}

	}
</script>

<style scoped lang="scss">
	.popup {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;

		margin-top: 100rpx;

		.dssfdd {
			padding: 20rpx 120rpx;
		}

		.vv {
			background: #E6F1F5;
			border-radius: 35rpx;
			padding: 2rpx 120rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #007399;
		}

		.cc {
			font-size: 26rpx;
			font-weight: 400;
			color: #FFFFFF;
		}

		.dadasas {
			background: #007399;
			border-radius: 100rpx;
		}

		.ffgfgf {
			background: #E6F1F5;
			border: 1px solid #007399;
			border-radius: 100rpx;
		}
	}

	.dad {
		text-align: center;
		font-size: 20rpx;
		font-weight: 400;
		color: #FFFFFF;
	}

	.dasds {
		width: 30rpx;
		height: 30rpx;
	}

	.djsa {
		width: 90rpx;
		height: 90rpx;
		background: #666666;
		border-radius: 50%;
		position: fixed;

	}
</style>
