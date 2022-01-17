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
				num: 0
			};
		},
		mounted() {
			let aa = setInterval(() => {
				this.$api.indexbar().then(data => {
					if (data.data.code == 1) {
						this.list = []
						data.data.data.status.forEach(item => {
							this.list.push({
								pagePath: item.url.url,
								iconPath: this.$imgPath + item.fimage,
								selectedIconPath: this.$imgPath + item.image,
								text: item.title
							})
						})
						setTimeout(() => {
							this.gaodu();
							clearInterval(aa)
						}, 500)

					}
				}).catch(data => {
					this.num += 1
					if (this.num == 19) {
						clearInterval(aa)
					}
				})
			}, 100)

		},
		methods: {
			gaodu(ev) {
				if (this.list.length != 0) {
					const query = uni.createSelectorQuery().in(this);
					query.select('#tabbar').boundingClientRect(data => {
						uni.setStorageSync("setheigth", data.height)
					}).exec();
				}
			},
			ChangBar(e) {
				uni.switchTab({
					url: '/' + this.list[e].pagePath
				})
				this.$emit("tabbers")
			}
		}

	}
</script>

<style lang="scss" scoped>
	.dasds {
		position: relative;
		z-index: 1000000000000;
	}
</style>
