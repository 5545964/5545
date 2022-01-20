<template>
	<view class="home">
		<u-popup v-model="showComment" @close="guanbi" mode="bottom" length="80%" :closeable="true" border-radius="8">
			<view class="comment">
				<view class="new">评论列表</view>
				<view style="height: 50rpx;"></view>
				<view class="contentView" v-if="list.length !=0" v-for="(item,index) in list" :key="index">
					<image class="avator" v-if="item.head != ''" :src="item.head" mode="aspectFit"></image>
					<image class="img" v-else src="@/static/icon_me_avatar.png" mode="aspectFit"></image>
					<view class="commentRight">
						<view class="commentView">
							<text class="username">{{item.name}}</text>
						</view>
						<view class="commentTime">
							{{item.create_at}}
						</view>
						<view class="commentContent" @click="fupingjia(item)">
							{{item.content}}
						</view>
						<block class="" @click="fupingjia(item)" v-for="(items,indexs) in item.image" :key="indexs"
							v-if="item.image !=='0'">
							<image v-if="items != '#'" style="width: 100rpx;height: 100rpx;margin: 20rpx;"
								:src="img+items" mode="aspectFit"></image>
						</block>
						<view class="replys" v-if="!huifu && item.list.length != 0">
							<view v-if="!item.checked && item.list.length !=0 && item.list != null">
								<view class="replay_item">
									<text class="users1">{{item.list.names}}</text><text
										class="huifu">回复</text>：{{item.list.content}}
								</view>
							</view>
						</view>
						<view class="replys" v-if="huifu && item.list.length != 0">
							<view v-if="!item.checked && item.list.length != 0 && item.list != null && indexss <= 2"
								v-for="(itemss,indexss) in item.list" :key="indexss">
								<view class="replay_item">
									<text class="users1">{{itemss.user.username}}</text><text
										class="huifu">回复</text><text
										class="users2">{{itemss.bhhfuser.username}}</text>：{{itemss.content}}
								</view>
							</view>
							<view v-if="item.checked" v-for="(itemss,indexss) in item.list" :key="indexss">
								<view class="replay_item" @click="zipingjia(itemss)">
									<text class="users1">{{itemss.user.username}}</text><text
										class="huifu">回复</text><text
										class="users2">{{itemss.bhhfuser.username}}</text>：<text>{{itemss.content}}</text>
								</view>
							</view>
							<view class="all" v-if="!item.checked && item.list.length > 2" @click="checkall(item)">
								查看全部回复
							</view>
						</view>
					</view>
				</view>
				<v-empty v-else></v-empty>
				<block v-if="huifu">
					<view style="height: 100rpx;" v-if="bottom !=0">

					</view>
					<view class="foot1" :style="'bottom: '+bottom+'px;'">
						<!-- <image style="width: 100rpx;height: 100rpx;" src="../../../static/jia.png" mode="aspectFit"></image> -->
						<input class="footInp" style="width: 76%;" type="text" v-model="pinglun_text"
							:placeholder="place" />
						<view @click="confirm_hf" class="foot_btn">
							发送
						</view>
					</view>
				</block>

			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "u-评论",
		props: {
			bottom: {
				type: Number,
				default: 0
			},
			huifu: {
				type: Boolean,
				default: true
			},
			show: {
				type: Boolean,
				default: false
			},
			pinglun_list: {
				type: Array,
				default () {
					return [];
				}
			},
		},
		data() {
			return {
				pinglun_text: "",
				showComment: false,
				list: [],
				img: this.$imgPath,
				place: "发表评论请文明用语"
			}
		},
		watch: {
			show(val) {
				this.showComment = this.show
			},
			pinglun_list(val) {
				this.list = this.pinglun_list
			}
		},
		mounted() {
			this.showComment = this.show;
			this.list = this.pinglun_list;
		},
		methods: {
			zipingjia(item) {
				this.place = "回复：" + item.user.username
				let aa = {
					pl_id: item.pl_id,
					pl_user_id: item.pl_user_id
				}
				this.$emit("zipingjia", aa)
			},
			fupingjia(item) {
				this.place = "回复：" + item.name
				let aa = {
					pl_id: item.id,
					pl_user_id: item.user_id
				}
				this.$emit("fupingjia", aa)
			},
			checkall(item) {
				item.checked = true
			},
			guanbi() {
				this.$emit("guanbi")
			},
			confirm_hf() {
				this.$emit("chang", this.pinglun_text, this.place)
				this.place = "发表评论请文明用语"
				this.pinglun_text = ""
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 评论 */
	.comment {
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		margin-bottom: 200rpx;
	}

	.avator {}

	.new {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #ffffff;
		padding: 30rpx;
	}

	.avator {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.commentRight {
		width: 80%;
		border-bottom: 2rpx solid #F4F4F4;
		padding-top: 10rpx;
		padding-bottom: 30rpx;
	}

	.commentView {
		display: flex;
		align-items: center;
	}

	.contentView {
		/* height: 300rpx; */
		display: flex;
		padding-top: 20rpx;
		background-color: #FFFFFF;
		margin-top: 40rpx;
	}

	.username {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.lv {
		width: 90rpx;
		height: 24rpx;
		background: linear-gradient(90deg, #FF4B3C, #FF841D);
		border-radius: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10rpx;
	}

	.lvText {
		font-size: 18rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}

	.commentTime {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		margin-top: 12rpx;
		margin-bottom: 30rpx;
	}

	.commentContent {
		width: 574rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
	}

	.replys {
		width: 590rpx;
		/* height: 348rpx; */
		background: #FAF8F5;
		border-radius: 10rpx;
		margin-top: 20rpx;
		padding: 20rpx;
	}

	.replay_item {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
		margin-bottom: 10rpx;
	}

	.users1 {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #007399;
	}

	.users2 {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
	}

	.huifu {
		display: inline-block;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.all {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #007399;
	}

	/* 底部 */
	.foot {
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0px -2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.foot1 {
		padding: 20rpx 0;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px -2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		position: fixed;
		display: flex;
		justify-content: space-around;
		align-items: center;
		left: 0;
		right: 0;
	}

	.footInp {
		width: 65%;
		height: 80rpx;
		background: #F4F4F4;
		border-radius: 40rpx;
		padding-left: 40rpx;
		box-sizing: border-box;
	}

	.footInp1 {
		width: 470rpx;
		height: 80rpx;
		background: #F4F4F4;
		border-radius: 40rpx;
		padding-left: 40rpx;
		line-height: 80rpx;
		box-sizing: border-box;
		margin-right: 20rpx;
		margin-left: 30rpx;
		color: #999999;
		font-size: 30rpx;
	}

	.footImg {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}

	.pl_text {
		width: 300rpx;
		height: 80rpx;
		font-size: 28rpx;
		background-color: #FF4B3C;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		border-radius: 36rpx;
	}

	.foot_btn {
		background: #007399;
		border-radius: 10rpx;
		text-align: center;
		color: #FFFFFF;
		padding: 10rpx 20rpx;
	}
</style>
