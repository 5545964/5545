<template>
	<view class="" style="height: 100%;">
		<view class="">
			<u-tabs :list="list" :weizhi="false" :show-bar="false" :is-scroll="true" :current="current"
				@change="change"></u-tabs>
		</view>
		<view class="card_list" v-if="data_list != 0">
			<view class="card" v-for="(item,index) in data_list" :key="index" @click="topage(item)">
				<image :src="img+item.simage" style="width: 690rpx;height: 350rpx;" mode=""></image>
				<view class="" style="margin-top: 24rpx;">
					{{item.name}}
				</view>
			</view>
		</view>
		<u-empty v-else></u-empty>
	</view>
</template>

<script>
	export default {
		name: "FlagshipSuite",
		props: {
			pages: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				list: [{
					id: 0,
					name: ""
				}],
				current: 0,
				data_list: [],
				img: this.$imgPath,
				pagess: 1
			};
		},
		watch: {
			pages(val) {
				this.pagess = this.pages
				this.quehuan(this.current)
			},
		},
		mounted() {
			this.pagess = this.pages
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
						this.current = this.list[0].id
						this.quehuan(this.list[0].id)
					}
				})
			},
			change(ev) {
				this.$emit("pageB",this.pagess)
				this.current = ev
				this.quehuan(ev)
				this.data_list = [];
			},
			checks(){
				this.$emit("pageA",this.pagess)
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
</style>
