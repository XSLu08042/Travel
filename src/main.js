// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
/* 1、//ES6的写法键和值相同可以省略一个，这里相当于router:router
2、components: { App }, //这是ES6的写法，
  //components: { 外层Vue实例给这个组件起的名字： 局部组件名 },
  3、路由就是根据网址的不同，返回不同的内容给用户
 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})