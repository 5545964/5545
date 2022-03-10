<template>
	<view>
		<view>
			<!-- url为要跳转外链的地址-->
		    <web-view :src="url">
		    </web-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:""
			}
		},
		onLoad(val) {
			if(val.url == 0){
				this.url = uni.getStorageSync("bbghb")
			}else{
				this.url = val.url
			}
			
			if(this.isNotEmpty(val.title)){
				this.setTitle(val.title);
			}
		},
		methods: {
			isNotEmpty(obj) {
				if (typeof obj == undefined || obj == null || obj == "" || obj == "undefined" || obj.length == 0) {
					return false;
				} else {
					return true;
				}
			},
			
			setTitle(title) {
				uni.setNavigationBarTitle({
					title: title
				})
			},
		}
	}
</script>
