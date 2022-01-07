<template>
	<view style="height: 100%;">
		<view class="cate" @click="show=true">
			筛选分类<image src="../../../static/icon_home_sanjiao.png"
				style="width: 16rpx;height: 10rpx;margin-left: 12rpx;" mode=""></image>
		</view>
		<!-- 设计列表 -->
		<view class="design_list" v-if="cad.length != 0">
			<view class="" v-for="item in cad" :key="item">
				<u-design-card :list="item" />
			</view>
		</view>
		<u-empty v-else></u-empty>
		<!-- 弹窗 -->
		<u-popup v-model="show" @close="guan" mode="bottom" length="60%" :closeable="true" border-radius="8">
			<view class="klks">全部筛选</view>
			<view class="mids">
				<view class="type_list">
					<view :class="[item.check ? 'active' : 'type_item']" @click="xunhuan(index)"
						v-for="(item,index) in list" :key="index">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="clos">
				<view class="reset" @click="re">
					重置
				</view>
				<view class="on" @click="change">
					确定选择
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "HouseType",
		props: {
			fenlei: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				hahah: [],
				show: false,
				sel_list: [],
				list: [],
				cad: []
			};
		},
		watch: {
			fenlei(val) {
				this.list = [...this.fenlei];
			}
		},
		mounted() {
			this.list = [...this.fenlei];
			this.list.forEach(item => {
				this.sel_list.push("")
			})
			this.chang(0)
		},
		methods: {
			guan() {
				this.show = false;
			},
			change() {
				let aa = []
				this.sel_list.forEach(item => {
					if (item !== "") {
						aa.push(item)
					}
				})
				// this.$emit("chang", aa);
				this.chang(aa)
				this.show = false;
			},
			chang(ev) {
				this.$api.huxin({
					id: ev
				}).then(data => {
					if (data.data.code == 1) {
						console.log(data);
						data.data.data.status.forEach(item => {
							this.cad.push({
								simage: item.image,
								name: item.title,
								id:item.id
							})
						})
						console.log(this.cad);

					}
				})
			},
			re() {
				this.list.forEach(item => {
					item.check = false
				})
			},
			xunhuan(ev) {
				this.list[ev].check = !this.list[ev].check;
				if (this.list[ev].check) {
					this.sel_list[ev] = this.list[ev].id
				} else {
					this.sel_list[ev] = ""
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.active {
		background: #007399;
		padding: 0 40rpx;
		// width: 210rpx;
		// height: 70rpx;
		border-radius: 35rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 70rpx;
		margin-top: 30rpx;
	}

	.cate {
		width: 750rpx;
		height: 82rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #007399;
	}

	.design_list {
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
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
			padding: 0 40rpx;
			// width: 210rpx;
			// height: 70rpx;
			background: #F6F6F6;
			border-radius: 35rpx;
			font-size: 26rpx;
			color: #333;
			text-align: center;
			line-height: 70rpx;
			margin-top: 30rpx;
		}
	}
</style>
