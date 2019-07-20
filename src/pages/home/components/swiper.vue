<template>
<diV class="swiper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in swiperList" v-bind:key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper> 
</diV>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data(){
        return{
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ae8987bff39ff10e82675a3643154e66.jpg_750x200_0f187b2e.jpg'
                },
                {
                    id: '0002',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/6e07f11d492a880c2b5fb9889b3cb008.jpg_750x200_e0e88021.jpg'
                }
            ]
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

