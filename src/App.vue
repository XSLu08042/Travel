<template>
  <div id="app">
    <keep-alive exclude="Datail">
      <router-view/>
      <!-- router-view 显示的是当前路由地址所对应的内容  -->
    </keep-alive>
    <!-- keep-alive网页优化：路由的内容首次被加载的时候，就把路由中的内容放在内存中，
    下一次再进入这个路由的时候，不需要重新去渲染这个组件或者钩子函数，直接就从内存中把以前的内容拿出来显示到页面就可以了 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
