<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:"",
			}
		},
		methods: {
			
		},
		onLoad(ev) {
			this.url =decodeURIComponent(ev.url)

		}
	}
</script>

<style>

</style>
