<template>
	<view class="djsa cet" :style="'bottom: '+heigth+'rpx;'">
		<view class="" @click="click">
			<view class="cet">
				<view class="dasds">
					<image :src="img" mode="aspectFit"></image>
				</view>
			</view>
			<view class="dad cet">
				{{title}}
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
			heigth: {
				type: Number,
				default: 200
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
				default: "客服"
			},
			showsss: {
				type: Boolean,
				default: false
			},
		},
		mounted() {
			this.show = this.showsss
		},
		data() {
			return {
				show: false,
			}
		},
		methods: {
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
		margin-top: 8rpx;
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

		right: 20rpx;
	}
</style>
