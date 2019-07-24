import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
   // state: state,键和值相同，换为下面简写
    state,
    mutations,
    // getters: {
    //     doubleCity (state) {
    //         return state.city + ' ' + state.city
    //     }
    // }
    //上面意思是在首页显示城市时显示两个 ，具体实现方法为：写上面那段getters代码，然后在home里的Hearder.vue
    //里面，在计算属性中加上 ...mapGetters(['doubleCity'])  ,然后在里面引用import { mapState, mapGetters } from 'vuex',最后上面可以显示{{this.doubleCity}}
    //getters作用类似于于计算属性，避免数据冗余
    
})