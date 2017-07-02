import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = []

export default new Vuex.Store({
    strict: true,
    modules: {
        a: {
            state,
            mutations,
            actions,
            getters
        }

    }
})
