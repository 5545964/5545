<template>
	<view class="dasds">
		<u-tabbar id="tabbar" v-model="current" :list="list" @change="ChangBar"></u-tabbar>
	</view>
</template>
<script>
	export default {
		name: "tabbar",
		data() {
			return {
				list: [],
				current: 0,
				timer: "",
				num: 0,
			};
		},
		mounted() {
			this.tabbet()
		},
		methods: {
			tabbet() {
				this.list = [...uni.getStorageSync("tabber")]
				if (this.list.length == 0) {
					setTimeout(() => {
						this.tabbet()
					}, 500)
					return
				}
				setTimeout(() => {
					this.gaodu();
				}, 500)
			},
			gaodu(ev) {
				if (this.list.length != 0) {
					const query = uni.createSelectorQuery().in(this);
					query.select('#tabbar').boundingClientRect(data => {
						uni.setStorageSync("setheigth", data.height)
					}).exec();
				}
			},
			ChangBar(e) {
				uni.setStorageSync("dianji",e)
				uni.switchTab({
					url: '/' + this.list[e].pagePath
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.dasds {
		position: relative;
		z-index: 10100;
	}
</style>
