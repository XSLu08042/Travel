import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '北京'
    },
    //暂时用不到，因为涉及到的操作不复杂，不是批量操作
    // actions: {
    //     changeCity (ctx, city) {
    //         //console.log(city)
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations: {
        changeCity (state, city) {
            state.city = city
        }
    }
})