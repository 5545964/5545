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
		<u-tabs :list="lists" :weizhi="false" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="home" v-show="current == 0">
			<u-cart :list="list" @click="del" @kan="go"></u-cart>
		</view>
		<view class="homes" v-show="current == 1">
			<u-video :vlist="video" @collection="collection" @pinglun="pinglun" @dianzhan="dianzhan" @del="del">
			</u-video>
		</view>
		<u-heigth />
		<u-pinglun :show="showComment" @chang="chang" :pinglun_list="pinglun_list" @guanbi="guanbi"></u-pinglun>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showComment: false,
				video: [],
				current: 0,
				lists: [{
						name: "收藏商品"
					},
					{
						name: "收藏视频"
					}
				],
				title: "收藏夹",
				list: []
			};
		},
		onLoad(ev) {
			if (ev.title) {
				this.title = ev.title
			}
			this.getProduct()
		},
		onShareAppMessage(ev) {
			return {
				title: '分享的标题',
				imageUrl: "https://v1.uviewui.com/common/logo.png",
				desc: "1111111111111",
				path: "/pages/Home/Home"
			}
		},
		methods: {
			go(ev){
				uni.navigateTo({
					url:"../pagesC/Shopping?shopid="+ev.shop_id
				})
			},
			getProduct() {
				this.$api.myfollow({
					user_id: uni.getStorageSync('user_info').id,
					type: this.current,
					page: 1,
					limit: 10000
				}).then(data => {

					//todo 判断是否为空


					if (this.current == 0) { //商品 
						this.list = []
						data.data.data.status.data.forEach((item, index) => {
							this.list.push({
								img: this.$imgPath + item.content.simage,
								title: item.content.name,
								num: item.content.xl,
								id: item.id,
								shop_id:item.shop_id
							})
						});
					} else { //视频 
						this.video = []
						data.data.data.status.data.forEach((item, index) => {
							this.video.push({

								id: item.id,
								type: 0,
								video: this.$imgPath + item.content.video,
								sc: false,
								pl: 200,
								dz: true,
								is_hf: 1,
								dz_num: 432
							})
						});

					}
				})

			},
			chang() {
				this.showComment = false;
			},
			guanbi() {
				this.showComment = false;
			},
			pinglun() {
				this.showComment = true;
			},
			dianzhan(ev) {
				ev.dz = !ev.dz;

			},
			collection(ev) {
				ev.sc = !ev.sc;

			},
			change(index) {
				this.current = index;
				this.getProduct()
			},
			del(ev) {
				let aa = this.list;
				this.$api.delfollow({
					id: ev.id
				}).then(data => {
					this.getProduct()
				})
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
	.homes {
		padding: 30rpx 0;
	}

	.home {
		padding: 30rpx;
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
