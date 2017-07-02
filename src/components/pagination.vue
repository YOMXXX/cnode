<template>
<div>
  <div class="topicLists" flex="dir:top">
    <div class="cell" v-for="list in lists" flex="dir:left cross:center" :id="list.author.loginname">
      <router-link class="avatar" :to="{ path:'/details/' + list.author.loginname + '#' + list.author.loginname}" :title="list.author.loginname" rel="noopener">
      <!-- <a class="avatar" :href='"https://cnodejs.org/user/"+list.author.loginname'> -->
          <span>
            <img :src="list.author.avatar_url" :alt="list.author.loginname">
          </span>
      </router-link>
        <a :href='"https://cnodejs.org/topic/"+list.id' flex="dir:left main:around" :title="list.author.loginname" rel="noopener">
          <div class="title" flex="dir:top main:justify">
                <span class="tit">{{list.title.slice(1,20) + '...'}}</span>
                <span class="num">111/21312</span>
          </div>
          <div class="data">{{list.create_at.slice(5, 10)}}</div>
        </a>
    </div>
  </div>
    <slot></slot>
    </div>
</template>
<script>

  export default {
    props:{
      lists: {
        default: ''
      },
      totalNum: {
        default:0
      },
      Pagination: {

      }
    },
    methods: {
      pos () {
        console.log(1)
      }
    }
  }
</script>