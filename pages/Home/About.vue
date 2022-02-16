<template>
	<view>
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
					<view class="swiper-item">
						<view class="top">
							<view class="text">
								资讯中心
							</view>
							<view class="xian"></view>
							<view style="height: 20rpx;"></view>
							<view class="" v-if="current == 4">
								<view class="hahah" @click="shouURl(item)" v-for="(item,index) in xinxi" :key="index">
									<view class="">
										<view class="hnjh">
											{{item.title}}
										</view>
										<view class="timess">
											{{item.create_time}}
										</view>
									</view>
									<view class="">
										<image class="imghjk" :src="item.cover_img_1_1" mode="aspectFit">
										</image>
									</view>
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
				heigth: 0,
				list: [{
						id: 0,
						name: '品牌故事',
						content: ""
					}, {
						id: 1,
						name: '业务地图',
						content: ""
					}, {
						id: 2,
						name: '创始人',
						content: ""
					}, {
						id: 3,
						name: '方黄集团',
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
				}, {
					id: 1,
					name: '业务地图',
					content: ""
				}, {
					id: 2,
					name: '创始人',
					content: ""
				}, {
					id: 3,
					name: '方黄集团',
					content: ""
				}],
				current: 0,
				xinxi: [],
				imgsss: '<img src=\"' + this.$imgPath
			};
		},
		onShow() {
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
			uni.request({
				url: 'https://mp.weixin.qq.com/mp/appmsgalbum',
				data: {
					action: 'getalbum',
					__biz: "Mzg5NDMzMjI3Mw%3D%3D",
					album_id: "2000816369738498049",
					count: "10",
					begin_msgid: "2247486223",
					begin_itemidx: "1",
					f: "json"
				},
				method: "GET",
				header: {
					'custom-header': 'hello', //自定义请求头信息

				},
				success: (res) => {
					this.xinxi = res.data.getalbum_resp.article_list
					this.xinxi.forEach((item, index) => {
						this.xinxi[index].create_time = this.xinxi[index].create_time * 1000
					})
					this.xinxi.forEach((item, index) => {
						this.xinxi[index].create_time = dayjs(item.create_time).format('YYYY/MM/DD')
					})

				}
			});
			const res = uni.getSystemInfoSync();
			this.heigth = res.windowHeight;

		},
		methods: {
			shouURl(items) {
				var url = encodeURIComponent(items.url)
				uni.navigateTo({
					url: "/pages/Home/shows/shows?url=" + url
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
