<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item" border-bottom v-for="item in recommendList" :key="item.id">           
                <img class="item-img" :src="item.imgUrl" />            
            <diV class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </diV>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
        recommendList: [
        {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title: '故宫',
            desc: '还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。'
        },
        {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title: '故宫',
            desc: '还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。'
        },
        {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
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
    .recommend-title
        margin-top: .2rem
        line-height: 0.8rem
        background: #eeeeee
        text-indent: 0.2rem
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background: #ff9300        
                padding: 0 .1rem
                border-radius: .06rem
                color: #ffffff

</style>
