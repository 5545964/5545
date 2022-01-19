<template>
	<view>
		<view class="" v-if="current==0">
			<DesignHome />
		</view>
		<view class="" v-if="current==1">
			<DesignMine />
		</view>
		<u-tabbar v-model="current" @change="change" :list="list"></u-tabbar>
	</view>
</template>

<script>
	import DesignMine from "../designhome.vue"
	import DesignHome from "./designHome.vue"
	export default {
		components: {
			DesignHome: DesignHome,
			DesignMine: DesignMine
		},
		onShow() {
			this.$api.desmyuser({
				user_id: uni.getStorageSync("user_info").id,
			}).then(data => {
				if (data.data.code == 1) {
					let aa = data.data.data.myuser
					uni.setStorageSync("des_info", data.data.data.myuser)
					if(aa.nickname == null || aa.wechat == null || aa.work == null || aa.yb == null){
						uni.navigateTo({
							url: "../../pagesB/my?isdesign=1"
						})
					}
				}
			})
			
		},
		data() {
			return {
				list: [{
						iconPath: "../../../static/tabber0.png",
						selectedIconPath: "../../../static/seletab0.png",
						text: '首页',
						customIcon: false,
					},
					{
						iconPath: "../../../static/tabber4.png",
						selectedIconPath: "../../../static/seletab4.png",
						text: '我的',
						customIcon: false,
					},
				],
				current: 0
			};
		},
		methods: {
			change(index) {
				this.current = index
			}
		}
	}
</script>

<style lang="scss">

</style>
