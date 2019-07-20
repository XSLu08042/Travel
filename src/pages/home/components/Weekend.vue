<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item" border-bottom v-for="item in recommendList" :key="item.id">           
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" />            
            </div>
            <diV class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
            </diV>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
        recommendList: [
        {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title: '故宫',
            desc: '还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。'
        },
        {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title: '故宫',
            desc: '还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。'
        },
        {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title: '故宫',
            desc: '还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。'
        },
    ]
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: 0.8rem
        background: #eeeeee
        text-indent: 0.2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 36.5%
        .item-img
            width: 100%
            padding: .1rem
    .item-info
        padding: .1rem 
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()   

</style>
