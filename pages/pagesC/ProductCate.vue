<template>
	<view class="u-wrap">
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
		<!-- 搜索 -->
		<view class="u-search-box">
			<view class="u-search-inner">
				<view class="seath">
					<u-search bg-color="#F2F2F2" @click='seach_go' :disabled="true" placeholder="输入关键字搜索"
						v-model="keyword"></u-search>
				</view>
			</view>
		</view>
		<view class="u-menu-wrap">
			<!-- 左边 -->
			<scroll-view style="width: 24%;height: 100%;" scroll-y scroll-with-animation
				class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in cateList" :key="index" class="u-tab-item"
					:class="[current==index ? 'u-tab-item-active' : '']" :data-current="index"
					@tap.stop="swichMenu(index)">
					<text class="u-line-1">{{item.title}}</text>
				</view>
			</scroll-view>
			<scroll-view v-if="mmok == 0" style="width: 76%;height: 100%;" scroll-y class="right-box">
				<view class="page-view">
					<!-- 筛选 -->
					<view class="cate_choose">
						<view class="cate_items" @click="zhonghe">
							价格
							<u-icon width="20" height="20" :name="zhong" v-if="zhongnum!=0" color="#007399"></u-icon>
							<view style="width: 20rpx;height: 20rpx;" v-if="zhongnum==0" />
						</view>
						<view class="cate_items" @click="xiaoliang">
							库存
							<u-icon width="20" height="20" :name="xiao" v-if="xiaonum!=0" color="#007399"></u-icon>
							<view style="width: 20rpx;height: 20rpx;" v-if="xiaonum==0" />
						</view>
						<!-- <view class="cate_items" @click="show=true">
							筛选
							<image src="../../static/icon_about_shaixuan.png"
								style="width: 30rpx;height: 30rpx;margin-left: 10rpx;" mode="aspectFit"></image>
						</view> -->
					</view>
					<u-collapse ref="collapse">
						<u-collapse-item @change="zhankai" ref="collapseItem" :name="item1.id" :title="item1.title"
							:isDot="true" v-for="(item1, index1) in kklkl" :key="index1" :index="index1"
							:open="item1.check">
							<view class="item-container" v-for="item3 in item1.neirong" :key='item3.id'
								@click="goshop(item3)">
								<view class="right_view">
									<view class="">
										<image :src="imgtilte+'/index/index/show?url='+item3.simage+'&width=180&height=180'"
											style="width: 180rpx;height: 180rpx;margin-right: 20rpx;" mode="aspectFit">
										</image>
									</view>
									<view class="img_right">
										<view class="top_text">
											{{item3.name}}
										</view>
										<view class="right_bottom">
											<view class="" style="font-size: 30rpx;color: #FF4B3C;font-weight: 800;">
												￥{{item3.xc_price||0}}
											</view>
										</view>
									</view>
								</view>
							</view>
						</u-collapse-item>
					</u-collapse>
				</view>
			</scroll-view>
			<scroll-view v-if="mmok == 1" style="width: 76%;height: 100%;" scroll-y class="right-box">
				<u-bdata :list="destaoxi" @click="go_shop"></u-bdata>
			</scroll-view>
			<scroll-view v-if="mmok == 2" style="width: 76%;height: 100%;" scroll-y class="right-box">
				<view class="item-container" v-for="item3 in destaoxi" :key='item3.id' @click="go_youhuijuan(item3)">
					<view class="right_view">
						<view class="">
							<image :src="imgtilte+'/index/index/show?url='+item3.simage+'&width=180&height=180'"
								style="width: 180rpx;height: 180rpx;margin-right: 20rpx;" mode="aspectFit">
							</image>
						</view>
						<view class="img_right">
							<view class="top_text">
								{{item3.name}}
							</view>
							<view class="right_bottom">
								<view class="" style="font-size: 30rpx;color: #FF4B3C;font-weight: 800;">
									￥{{item3.price||0}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<u-heigth />
		<u-popup v-model="show" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="klks">全部筛选</view>
			<view class="mids">
				<view class="kongjian">
					空间
				</view>
				<view class="type_list">
					<view class="type_item" v-for="item in 3" :key="item">
						个性创新
					</view>
				</view>
			</view>
			<view class="clos">
				<view class="reset">
					重置
				</view>
				<view class="on">
					确定选择
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zhongnum: 1,
				zhong: "arrow-up-fill",
				xiaonum: 0,
				xiao: "arrow-down-fill",
				destaoxi: [],
				cc: [],
				kklkl: [],
				mmok: 1,
				title: "产品分类",
				keyword: "",
				imgtilte: this.$imgPath,
				show: false,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				cateList: [],
				shopList: [],
			}
		},
		onLoad() {
			uni.removeStorageSync('canpingindex');
			uni.removeStorageSync('zhankai');
			this.getCate()
		},
		onShow() {
			this.current = uni.getStorageSync("canpingindex") || 0;
		},
		computed: {
			shopListALL() {
				let all = this.shopList
				return all
			}
		},
		methods: {
			zhankai(ev) {
				uni.setStorageSync("zhankai", ev.index)
			},
			zhonghe() {
				this.zhongnum = 1
				this.xiaonum = 0
				if (this.zhong == "arrow-up-fill") {
					let aa = this.kklkl
					for (let i in aa) {
						aa[i].neirong = aa[i].neirong.sort(function(a, b) {
							return b.xc_price - a.xc_price
						})
					}
					this.kklkl = [...aa]
					this.zhong = "arrow-down-fill"
				} else {
					let aa = this.kklkl
					for (let i in aa) {
						aa[i].neirong = aa[i].neirong.sort(function(a, b) {
							return a.xc_price - b.xc_price
						})
					}
					this.kklkl = [...aa]
					this.zhong = "arrow-up-fill"
				}

			},
			xiaoliang() {
				this.xiaonum = 1
				this.zhongnum = 0
				if (this.xiao == "arrow-up-fill") {
					let aa = this.kklkl
					for (let i in aa) {
						aa[i].neirong = aa[i].neirong.sort(function(a, b) {
							return b.kucun - a.kucun
						})
					}
					this.kklkl = [...aa]
					this.xiao = "arrow-down-fill"
				} else {
					let aa = this.kklkl
					for (let i in aa) {
						aa[i].neirong = aa[i].neirong.sort(function(a, b) {
							return a.kucun - b.kucun
						})
					}
					this.kklkl = [...aa]
					this.xiao = "arrow-up-fill"
				}
			},
			sortBy(field1, field2) {
				return function(a, b) {
					if (a.field1 == b.field1) return a.field2 - b.field2;
					return a.field1 - b.field1;
				}
			},
			go_youhuijuan(ev) {
				uni.navigateTo({
					url: "./youhuijuan?id="+ev.id
				})
			},
			go_shop(ev) {
				uni.navigateTo({
					url: "./FlagshipDetail?id=" + ev.id
				})
			},
			goshop(ev) {
				uni.navigateTo({
					url: "./Shopping?shopid=" + ev.id
				})
			},
			// 搜索
			seach_go() {
				uni.navigateTo({
					url: "./searchResult"
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
			},
			// 获取分类
			getCate() {
				this.$api.seemore().then(data => {
					if (data.data.code == 1) {
						this.cateList = data.data.data.status
						this.swichMenu(this.current)
					}
				})
			},
			// 获取分类下商品
			changeshop(index) {
				let that = this
				that.shopList = []
				setTimeout(async () => {
					let data = await that.$api.categoryshop({
						id: index
					})
					that.shopList = data.data.data.status.data
					that.$nextTick(() => {
						that.$refs.collapseall[0].init()
					})
				}, 100)
			},
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				this.current = index;
				uni.setStorageSync("canpingindex", index)
				if (this.cateList[index].id == 31 || this.cateList[index].id == 32 || this.cateList[index].id == 33) {
					this.mmok = 1
					this.kklkl = []
					this.$api.categoryshop({
						id: this.cateList[index].id
					}).then(data => {
						this.destaoxi = data.data.data.status
					})
				} else if (this.cateList[index].id != 82) {
					this.mmok = 0
					this.kklkl = this.cateList[index].child
					let aa = this.cateList[index].child
					for (let i = 0; i < aa.length; i++) {
						let data = await this.$api.categoryshop({
							id: aa[i].id
						})
						if (data.data.code == 1) {
							aa[i]["neirong"] = data.data.data.status.data
						}
					}
					this.cateList[index].child.forEach((item, index) => {
						item["check"] = false
					})
					this.kklkl = []
					this.kklkl = this.cateList[index].child
					for (let i in this.kklkl) {
						this.kklkl[i].neirong = this.kklkl[i].neirong.sort(function(a, b) {
							return b.xc_price - a.xc_price
						})
					}
					this.$nextTick(() => {
						this.$refs.collapse.init()
					})
					let asa = uni.getStorageSync("zhankai") || 0;
					this.kklkl[asa].check = true
				} else {
					this.mmok = 2
					this.destaoxi = []
					this.$api.cupons({
						id:0
					}).then(data => {
						this.destaoxi = []
						if (data.data.code == 1) {
							this.destaoxi = data.data.data.status
						}
					})
				}

			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	// 筛选
	.cate_choose {
		width: 580rpx;
		height: 106rpx;
		border-bottom: 2rpx solid #E9E9E9;
		padding: 16rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}


	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.seath {
		width: 100%;
	}

	.u-search-inner {

		// background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		// padding: 10rpx 16rpx;
		height: 70rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 180rpx;
		height: 100%;
		background-color: #FFFFFF;
		padding: 10rpx 0;
		box-sizing: border-box;
	}

	.u-tab-item {
		height: 70rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #333;
		font-weight: 400;
		// line-height: 1;

	}

	.u-tab-item-active {
		position: relative;
		color: #007399;
		font-size: 26rpx;
		font-weight: 400;
		background: #F6F6F6;
	}

	// .u-tab-item-active::before {
	// 	content: "";
	// 	position: absolute;
	// 	border-left: 4px solid $u-type-primary;
	// 	height: 32rpx;
	// 	left: 0;
	// 	top: 39rpx;
	// }

	.u-tab-view {
		height: 100%;
	}

	.right-box {
		background-color: #FFFFFF;
	}

	.page-view {
		padding: 16rpx;
	}

	.cate_items {
		display: flex;
		align-items: center;

	}

	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}

	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}

	.item-container {
		display: flex;
		flex-wrap: wrap;
		padding: 40rpx 0;
		border-bottom: 1rpx solid #f6f6f6;
		box-sizing: border-box;
	}

	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}

	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}

	.right_view {
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		justify-content: flex-start;
	}

	.img_right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.right_bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30rpx;
	}

	.num_view {
		width: 60rpx;
		height: 50rpx;
		background: #FFFFFF;
		border: 1rpx solid #999999;
		box-sizing: border-box;
		text-align: center;
		line-height: 50rpx;
		font-size: 24rpx;
	}

	.add_btn {
		width: 50rpx;
		height: 50rpx;
		text-align: center;
		line-height: 50rpx;
		font-size: 24rpx;
		background: #F1F1F1;
		border: 1rpx solid #DEDEDE;
		box-sizing: border-box;
	}

	.klks {
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: #000000;
	}

	.clos {
		position: fixed;
		bottom: 40rpx;
		left: 0;
		right: 0;
		margin: 0 30rpx;
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.reset {
			width: 335rpx;
			height: 70rpx;
			background: #E6F1F5;
			border-radius: 35rpx;
			border: 1rpx solid #007399;
			font-size: 26rpx;
			color: #007399;
			text-align: center;
			line-height: 70rpx;
			box-sizing: border-box;
		}

		.on {
			width: 335rpx;
			height: 70rpx;
			background: #007399;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 70rpx;
		}
	}

	.mids {
		padding: 0 30rpx;
		border-top: 2rpx solid #e9e9e9;

		.kongjian {
			margin-top: 40rpx;
			margin-bottom: 30rpx;
		}

		.type_list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		.type_item {
			width: 210rpx;
			height: 70rpx;
			background: #F6F6F6;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #333;
			text-align: center;
			line-height: 70rpx;
		}
	}
</style>
