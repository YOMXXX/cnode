<template>
  <div id="app">
  <header>
    <span class="logo">
      <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnode">
    </span>
    <span class="form">
      <input type="text">
    </span>
    <ul flex="dir:left">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/xiaobai">新手入门</router-link>
      </li>
      <li>
        <router-link to="/api">API</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
      <li>
        <router-link to="/zhuce">注册</router-link>
      </li>
      <li>
        <router-link to="/dnglu">登陆</router-link>
      </li>
    </ul>
  </header>
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      a:11231232
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
body {
  width:10rem !important;
  margin:0 auto !important;
}
header {
  width:10rem;
  height:5rem;
  background: #444;
}
.logo {
  display:block;
  width:300/64rem;
  height:70/64rem;
  margin:0 auto;
  padding:10/64rem 0 0 0 ;
}
.form {
  display: block;
  width: 60%;
  height: .7rem;
  margin:0 auto;
  border-radius:100px;
  margin-top:40/64rem;
}
input {
  outline:none;
  width:90%;
  height:100%;
  background: url(http://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png) no-repeat #888;
  padding: 3px 5px 3px .6rem !important;
  border-radius:100px;
  font-size:18/64rem !important;
  background-size:0.7125rem 0.7125rem;
}
header ul {
  width:74%;
  margin:0.9125rem auto 0;
}
header ul li {
  line-height: 100%;
  white-space: nowrap;
  color: #ccc;
  padding: 10/64rem 15/64rem;
  float: left;
  font-size:25/64rem;
}
.category {
  width:100%;
  margin: 0 auto;
  overflow:hidden;
  padding: 0.45625rem;
  background-color: #f6f6f6;
  border-radius: 3/64rem 3/64rem 0 0;
}

.category li {
  margin: 0 10/64rem;
  float:left;
  color:#80bd01;
  font-size:25/64rem;
  border-radius: 3px;
}
.router-link-active {
  padding: 0.086875rem 0.0825rem;
  background-color: #80bd01;
  color: #fff !important;
  border-radius:5px;
}
</style>

