<template>
  <div class="subNav">
<ul class="category">
    <li><router-link to="/topic">全部</router-link></li>
    <li><router-link to="/good">精华</router-link></li>
    <li><router-link to="/share">分享</router-link></li>
    <li><router-link to="/ask">问答</router-link></li>
    <li><router-link to="/job">招聘</router-link></li>
  </ul>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>