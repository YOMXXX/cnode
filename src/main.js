// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './components/store/store.js'
import $ from 'jquery'
import '../common/flex.css'
import '../common/index.css'
// import Lazyload from "vue-lazyload-img"
import Paginate from 'vuejs-paginate'

// router.beforeEach((to, from, next) => {
//   console.log(to,from)
//   next()
// })

window.$ = $
Vue.use(Vuex)
Vue.component('paginate', Paginate)
Vue.config.productionTip = false
    // Vue.use(Lazyload,{
    //     fade: true,
    //     speed: 20,
    //     time: 300
    // })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store
}).$mount('#app')