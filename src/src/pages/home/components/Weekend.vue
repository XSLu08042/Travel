<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item" border-bottom v-for="item in list" :key="item.id">           
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" />            
            </div>
            <diV class="item-info">
              <p class="item-title">{{item.name}}</p>
              <p class="item-desc">{{item.desc}}</p>
            </diV>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
      list: Array
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
    .title
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
