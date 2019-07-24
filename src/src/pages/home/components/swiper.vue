<template>
<diV class="swiper">
  <swiper :options="swiperOption" v-if="showswiper">
    <swiper-slide v-for="item in list" v-bind:key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper> 
</diV>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list:Array
    },
    data(){
        return{
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true,
                autoplay:4000
            }           
        }
    },
    //计算属性（逻辑性的代码最好不要出现在上面的v-if中）
    computed: {
        showswiper () {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet-active
        background: #ffffff
    .swiper
        overflow: hideen
        width: 100%
        height: 0
        padding-bottom: 26.67%
        background: #eee
        .swiper-img
            width: 100%
</style>

