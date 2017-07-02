<template>
<div class="wrap">
<pagination :lists="lists" :totalNum="totalNum">
    <paginate
      flex="main:center"
      :page-count="totalNum"
      :click-handler="Pagination"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'">
    </paginate>
  </pagination>
  </div>
</template>
<script>
import pagination from './pagination.vue'
  export default {
    data() {
      return {
        lists: '',
        totalNum:0,
        perNum:10,
        past:0,
        now:10
      }
    },
    props: {
      'test': {
        type: Number
    }
  },
  components:{
    pagination
  },
  mounted() {
    let _this = this;
    function Pagination (page) {
      // let _this = this;
      $.ajax({
        url: 'https://cnodejs.org/api/v1/topics?tab=ask',
        type: 'GET',
        dataType: 'JSON'
      })
      .done(msg => {
        // _this.lists = ''
        // console.log(msg)
        let result = []
        _this.past = _this.now * page  - _this.now
        _this.now *= page
        _this.totalNum = Math.ceil(msg.data.length / _this.perNum)
        for (let i = _this.past; i < _this.now; i++) {
          result.push(msg.data[i])
        }
        _this.lists = result
        _this.now = 10;
      });
    }
    Pagination(1)
  },
  methods: {
    Pagination (page) {
      let _this = this;
      $.ajax({
        url: 'https://cnodejs.org/api/v1/topics?tab=ask',
        type: 'GET',
        dataType: 'JSON'
      })
      .done(msg => {
        _this.lists = ''
        // console.log(msg)
        let result = []
        _this.past = _this.now * page  - _this.now
        _this.now *=page
        for (let i = _this.past; i < _this.now; i++) {
          result.push(msg.data[i])
        }
        _this.lists = result
        _this.now = 10;
        $('body,html').animate({'scrollTop':0},300)
      });
    }
  },
  computed: {

  }
  }
</script>
<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.router-link-active {
  color: red;
}
.topicLists {
  background: white;
}
.topicLists .cell {
  width:10rem;
  padding:10/64rem 0 10/64rem 10/64rem;
}
.topicLists .cell .data {
  height:100%;
  line-height:100/64rem;
}
.topicLists .title {
  width:4.46875rem;
  line-height:50/64rem;
}
.topicLists .avatar {
  display: block;
  width:120/64rem;
  height:120/64rem;
}
.pagination {
  width:100%;
  overflow:hidden;
  background:white;
}
.pagination li {
  float: left;
    padding: 0.1625rem 0.4875rem;
    line-height: 20px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0;
}
.pagination li a{
  display:block;
}
.pagination .active {
  color:red;
}
</style>