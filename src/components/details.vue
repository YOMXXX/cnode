<template>
	<div class="details">
		<div class="nav">
			<span class="home">
				<router-link to="/home">首页</router-link>/
			</span>
		</div>
		<div class="basic">
			<span class="avatar">
				<img :src="`${content.avatar_url}`" :alt="content.loginname">
			</span>
			<span class="name">{{content.loginname}}</span>
		</div>
		<div class="impor">
			<div class="jifen">{{content.score}}积分</div>
			<div class="topic">{{content.recent_topics.length}}个话题收藏</div>
			<div class="website"><a href="" target="_blank" rel="noopener">http://atian25.github.io</a></div>
			<!-- <div class="place">阿里游戏 | 广州</div> -->
			<div class="github"><a :href="`https://github.com/${content.githubUsername}`" target="_blank" rel="noopener">@{{content.githubUsername}}</a></div>
			<!-- <div class="weibo"><a href="" target="_blank" rel="noopener">http://weibo.com/liuyong25</a></div> -->
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			userName: '',
			content: ''
		}
	},
	mounted () {

	},
	beforeRouteEnter (to, from, next) {
      next(vm => {
        // vm.$store.commit('showHead', true);
        vm.getList();
        // window.onscroll = ()=> {
        //   vm.opacity = window.pageYOffset / 250;
        //   vm.$store.commit('setHeadStyle', {background: `rgba(43,162,251,${vm.opacity})`});
        // }
        console.log(1)
      });
    },
	methods: {
		getList () {
			this.usersName = ''
			this.usersName = this.$route.params.name
			// console.log(this.usersName)

			$.ajax({
				url: 'https://cnodejs.org/api/v1/user/' + this.usersName,
				type: 'GET',
				dataType: 'JSON'
			})
			.done((msg) => {
				// console.log(msg);
				this.content = msg.data;
			});
		}
	}
}
</script>

<style lang="less" scoped>
	.nav span {
		display: block;
		line-height: 100%;
		color: #80bd01;
	}
	.details {
		background: #fff;
		padding-top: 0.378125rem;
	}
	.nav {
		font-size: 25/64rem;
		padding: .3rem;
		background: #f6f6f6;
	}
	.basic {

		overflow: hidden;
	}
	.impor {
	    line-height: 119/64rem;
	}
	.basic a {
		display:block;
	}
	.basic .avatar {
		float:left;
		width:120/64rem;
		height:120/64rem;
		display: block;
	}
	.basic .name {
		float: left;
	}
</style>