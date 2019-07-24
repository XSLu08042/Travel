<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </diV>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市景点/游玩主题
        </diV>
        <router-link to='/city'>
            <div class="header-right">
                <!--使用vuex之前 {{this.city}} -->
                <!-- 使用下面city计算属性之前{{this.$store.state.city}} -->
                {{this.city}}
                 <!-- {{this.doubleCity}} -->
                <span class="iconfont arrow-icon">&#xe605;</span>
            </diV>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'HomeHeader',
//   props: {
//       city: String
//   } 使用vuex之前
    computed: {
        //展开运算符
        ...mapState(['city']),
        //mapState指把vuex里面的数据映射到这个组建的 computed 计算属性中，
        //这里就是吧city这个公用数据映射到一个名字叫city的计算属性中
        ...mapGetters(['doubleCity'])
        //与store里index.js中getters相对应
   }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .header
        display:flex 
        line-height: $headerHeight
        background: $bgColor
        color: #ffffff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem 
            margin-top: .12rem 
            margin-left: .2rem
            padding-left: .2rem
            background: #ffffff
            border-radius: .50rem
            color: #ccc
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right 
            text-align: center
            color: white
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem

</style>