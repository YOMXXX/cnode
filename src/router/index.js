import Vue from 'vue'
import Router from 'vue-router'

import app from '../App'
import good from '../components/good.vue'
import share from '../components/share.vue'
import topic from '../components/topic.vue'
import home from '../components/home.vue'
import ask from '../components/ask.vue'
import job from '../components/job.vue'
import details from '../components/details.vue'

Vue.use(Router)

// const hello = r => require.ensure([], () => r(require('../components/Hello.vue')), 'hello')
// const receive = r => require.ensure([], () => r(require('../components/receive.vue')), 'receive')
// const second = r => require.ensure([], () => r(require('../components/second.vue')), 'second')
// const third = r => require.ensure([], () => r(require('../components/third.vue')), 'third')
// const fir = r => require.ensure([], () => r(require('../components/fir.vue')), 'fir')

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        const position = {}
        // to.path += '#' + from.hash
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 110
            position.y = 110
        }
        // console.log(to.meta.scrollToTop)
        // console.log(position)
        // console.log(to,from)
        return position
    }
}

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: app,
        children: [{
            path: '',
            redirect: '/home',
        }, {
            path: '/home',
            component: home,
            children: [{
                path: '',
                redirect: '/topic',
            }, {
                path: '/good',
                component: good
            }, {
                path: '/topic',
                component: topic,
                meta: {
                    scrollToTop: true
                }
            }, {
                path: '/share',
                component: share
            }, {
                path: '/ask',
                component: ask
            }, {
                path: '/job',
                component: job
            }]
        }, {
            name: 'detail',
            path: '/details/:name',
            component: details
        }]
    }],
    scrollBehavior
})
