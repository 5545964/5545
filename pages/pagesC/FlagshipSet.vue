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
		<view>
			<view >
				<u-tabs :list="list" :weizhi="false" :show-bar="false" :is-scroll="true" :current="current"
					@change="change"></u-tabs>
			</view>
			<view class="card_list" v-if="data_list != 0">
				<view class="card" v-for="(item,index) in data_list" :key="index" @click="topage(item)">
					<image :src="img+item.simage" style="width: 690rpx;height: 350rpx;" mode=""></image>
					<view  style="margin-top: 24rpx;">
						{{item.name||""}}
					</view>
				</view>
			</view>
			<u-empty v-else></u-empty>
		</view>
		<u-heigth />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				aas: 0,
				list: [{
					id: 0,
					name: ""
				}],
				current: 13,
				data_list: [],
				img: this.$imgPath,
				pagess: 1,
				currents:0
			};
		},
		onLoad(ev) {
			if (ev.id) {
				this.currents = ev.id
			}
			if(ev.title){
				this.title = ev.title
			}
			this.alls()
		},
		methods: {
			alls() {
				this.$api.setcategory().then(data => {
					if (data.data.code == 1) {
						this.list = data.data.data.status
						this.list.forEach(item => {
							item["name"] = item.title
						})
						if(this.currents != 0){
							this.current = this.currents
						}
						this.quehuan(this.current)
					}
				})
			},
			change(ev) {
				this.$emit("pageB", this.pagess)
				this.current = ev
				this.quehuan(ev)
				this.data_list = [];
			},
			checks() {
				this.$emit("pageA", this.pagess)
			},
			quehuan(ev) {
				this.$api.qjset({
					setid: ev,
					page: this.pagess,
					limit: 10
				}).then(data => {
					if (data.data.code == 1) {
						if (data.data.data.status.data.length != 0) {
							this.data_list = [...this.data_list, ...data.data.data.status.data];
						} else {
							this.checks()
						}
					}
				})
			},
			topage(ev) {
				uni.navigateTo({
					url: "./FlagshipDetail?id=" + ev.id
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
	.card {
		width: 690rpx;
		height: 420rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 20rpx;
		font-size: 24rpx;
		color: #000000;
		text-align: center;
	}
	
	.card_list {
		padding: 0 30rpx;
		box-sizing: border-box;
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
</style>
