<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                    <div class="button-wrapper">
                    <div class="button">{{this.currentCity}}</div>
                    </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
                    <div class="button">{{item.name}}</div>
                </div>  
            </div>
        </div>
        <div class="area" v-for="(item, key) in cities" :key="key" :ref="key" >
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                    <div class="item border-bottom" 
                        v-for="innerItem in item" 
                        :key="innerItem.id"  
                        @click="handleCityClick(innerItem.name)"
                    >
                      {{innerItem.name}}
                    </div>
            </div>
        </div>       
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList', 
  props: {
    hot: Array,
    cities: Object,
    letter: String 
  },
  computed: {
    //mapState里面既可以是数组也可以是对象
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      //前面使用actions: 时这么写
      //this.$store.dispatch('changeCity', city)
      //使用mapMutations 之前这么写this.$store.commit('changeCity', city)
      this.changeCity(city)
      //alert(city)
      //跳转到首页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: { //监听器
      letter () {
        if (this.letter){
          const element = this.$refs[this.letter][0]
          //console.log(element)
          this.scroll.scrollToElement(element)
        }
        //console.log(this.letter)
      }
  },
  mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .list
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        overflow hidden
    .border-topbottom
      &:before
        border-color: #ccc
      &:after
        border-color: #ccc
    .border-bottom
      &:before
        border-color: #ccc 
    .title
      line-height: .54rem
      background: #eeeeee
      padding-left: .2rem
      color: #666
      height: .54rem
      font-size: .26rem
    .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
            float: left
            width: 33.33%  
            .button
                margin .1rem
                padding: .1rem 0
                text-align: center
                border: .02rem solid #ccc
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            padding-left: .2rem            

</style>
