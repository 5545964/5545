<template>
	<view>
		<view :style="'height: '+heightzx+'rpx;width: 100%;'" />
	</view>
</template>

<script>
	export default {
		name: "u-heigth",
		data() {
			return {
				heightzx: uni.getStorageSync("bottomheigth")
			}
		}
	}
</script>

<style scoped lang="scss">
</style>
