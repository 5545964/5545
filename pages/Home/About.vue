<template>
	<view style="background-color: #FFFFFF;">
		<view style="height: 40rpx;">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<swiper :style="'height: '+heigth+'px;'" :circular="true" :duration="300" @change="lun_change"
			:current="current">
			<swiper-item v-for="(item,index) in lists" :key="index">
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item">
						<view class="top">
							<view class="text">
								{{item.name}}
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view class="content">
								<u-parse :html="item.content"></u-parse>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item" style="height: 100%;padding: 0;">
						<view class="top" style="height: 100%;">
							<view class="text">
								业务地图
							</view>
							<view class="xian" style="margin: 0 30rpx;"></view>
							<view style="height: 20rpx;padding: 0 30rpx;"></view>
							<view style="padding: 0 30rpx;">
								<u-search bgColor="#f6f6f6" placeholder="输入关键字搜索" v-model="keyword"></u-search>
							</view>
							<view style="height: 30rpx;width: 100%;" />
							<view style="height: 100%;">
								<view class="papapa" style="height: 100%;">
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist" :key="index"
												@click="changeTokens(index,item)">
												<view :class="active==index?'mian_left_item':'mian_left_item1'" class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist0"
												:key="index" @click="changeTokens0(index,item)">
												<view :class="active0==index?'mian_left_item':'mian_left_item1'" class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist1"
												:key="index" @click="changeTokens1(index,item)">
												<view :class="active1==index?'mian_left_item':'mian_left_item1'" class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
									<view class="mian_left">
										<scroll-view scroll-y="true" style="height: 100%;">
											<view style="margin: 40rpx 0;" v-for="(item,index) in datalist2"
												:key="index" @click="changeTokens2(index,item)">
												<view :class="active2==index?'mian_left_item':'mian_left_item1'" class="cet">
													<view style="width:100rpx;text-align: left;line-height:35rpx;">
														{{item.title}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :style="'height: '+heigth+'px;'" scroll-y="true">
					<view class="swiper-item">
						<view class="top">
							<view class="text">
								资讯中心
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view class="hahah" @click="shouURl(item)" v-for="(item,index) in xinxi" :key="index">
								<view class="">
									<view class="hnjh">
										{{item.title}}
									</view>
									<view class="timess">
										{{item.refreshtime_text}}
									</view>
								</view>
								<view class="">
									<image class="imghjk" :src="imgPath+item.simage" mode="aspectFit">
									</image>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<u-kehu url="./booking/AppointmentDesign" heigth="1000"></u-kehu>
		<u-back-top :scroll-top="0"></u-back-top>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import dayjs from "@/dayjs"
	export default {
		data() {
			return {

				keyword: "",
				heigth: 0,
				list: [{
						id: 0,
						name: '品牌故事',
						content: ""
					},
					{
						id: 2,
						name: '创始人',
						content: ""
					},
					{
						id: 3,
						name: '方黄集团',
						content: ""
					},
					{
						id: 1,
						name: '业务地图',
						content: ""
					},
					{
						name: '资讯中心'
					}
				],
				lists: [{
						id: 0,
						name: '品牌故事',
						content: ""
					},
					{
						id: 2,
						name: '创始人',
						content: ""
					},
					{
						id: 3,
						name: '方黄集团',
						content: ""
					}
				],
				current: 0,
				xinxi: [],
				imgPath: this.$imgPath,
				imgsss: '<img src=\"' + this.$imgPath,
				active: 0,
				datalist: [],
				active0: 0,
				datalist0: [],
				active1: 0,
				datalist1: [],
				active2: 0,
				datalist2: []
			};
		},
		onReachBottom(ev) {},
		onShow() {
			this.active = 0
			this.datalist = []
			this.active0 = 0
			this.datalist0 = []
			this.active1 = 0
			this.datalist1 = []
			this.active2 = 0
			this.datalist2 = []
			this.lists.forEach(item => {
				this.$api.bydadout({
					state: item.id
				}).then(data => {
					if (data.data.code == 1) {
						item.content = data.data.data.status[0].content.replace(/\<img src=\"/gi, this
							.imgsss);
					}
				})
			})
			this.$api.map().then(data => {
				if (data.data.code == 1) {
					this.datalist = [...data.data.data.status]
					if (this.datalist.child) {
						this.datalist0 = [...this.datalist.child]
						if (this.datalist0.child) {
							this.datalist1 = [...this.datalist0.child]
							if (this.datalist1.child) {
								this.datalist2 = [...this.datalist1.child]
							}
						}
					}
				}
			})
			this.$api.pots({
				limit: 1000
			}).then(data => {
				if (data.data.code == 1) {
					data.data.data.status.data.forEach(item => {
						item.content = item.content.replace(/\<img src=\"/gi, this.imgsss);
					})
					this.xinxi = data.data.data.status.data
				}
			})
			const res = uni.getSystemInfoSync();
			this.heigth = res.windowHeight;

		},
		methods: {
			changeTokens2(index, item) {
				this.active2 = index
			},
			changeTokens1(index, item) {
				if (item.child) {
					this.datalist2 = [...item.child]
				} else {
					this.datalist2 = []
				}
				this.active1 = index
			},
			changeTokens0(index, item) {
				console.log(index, item);
				if (item.child) {
					this.datalist1 = [...item.child]
					if (this.datalist1[0].child) {
						this.datalist2 = [...this.datalist1.child]
					}
				} else {
					this.datalist1 = []
					this.datalist2 = []
				}
				this.active0 = index

			},
			changeTokens(index, item) {
				this.active0 = 0
				this.active1 = 0
				this.active2 = 0
				if (item.child) {
					this.datalist0 = [...item.child]
					if (this.datalist0[0].child) {
						this.datalist1 = [...this.datalist0[0].child]
						if (this.datalist1[0].child) {
							this.datalist2 = [...this.datalist1[0].child]
						}
					}
				} else {
					this.datalist0 = []
					this.datalist1 = []
					this.datalist2 = []
				}
				this.active = index
			},
			shouURl(ev) {
				uni.setStorageSync("fuwenbeng", ev.content)
				uni.navigateTo({
					url: "../pagesC/fuwenben?title=" + ev.title
				})
			},
			lun_change(index) {
				this.current = index.detail.current;
			},
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.papapa {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.mian_left {
		height: 100%;
		width: 25%;
		border-left: 2rpx solid #f0f0f0;
	}

	.mian_left_item {
		font-size: 24rpx;
		font-weight: 400;
		color: #007399;
		font-weight: bold;
		padding: 0 30rpx;
		border-left: 4rpx solid #007399;
	}

	.mian_left_item1 {
		font-size: 24rpx;
		font-weight: 400;
		color: #333333;
		padding: 0 30rpx;
		border-left: 4rpx solid #FFFFFF;
	}

	.imghjk {
		width: 100rpx;
		height: 100rpx;
	}

	.timess {
		font-size: 20rpx;
		color: #aaaaa9;
		padding-top: 10rpx;
	}

	.hnjh {
		color: #070302;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 25rpx;
	}

	.hahah {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #fafafa;
		margin-bottom: 30rpx;
		padding: 20rpx;
	}


	.swiper-item {
		padding: 0 30rpx;

		.top {
			background-color: #FFFFFF;

			.text {
				text-align: center;
				padding-top: 50rpx;
				padding-bottom: 40rpx;
				font-size: 30rpx;
				font-weight: 400;
				color: #000000;
			}

			.xian {
				width: 100%;
				height: 2rpx;
				background: #F0F0F0;
			}
		}
	}

	.content {
		padding: 0rpx;
		font-size: 0rpx;
	}
</style>
