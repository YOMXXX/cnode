import * as type from './mutations_type.js'

export default {
    [type.SET_APP](state, test) {
        state.push(test)
    }
}
