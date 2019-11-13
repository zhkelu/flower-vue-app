<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
    <van-tabbar  v-show="$route.meta.navShow" route>
      <van-tabbar-item icon="wap-home-o" :to="{name:'Home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" :to="{name:'fenlei'}">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{name:'cart'}">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" :to="{name:'my'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'app',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return {
       isRouterAlive:true,
    }
  },
  methods: {
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    }
  },
}
</script>

<style>

</style>
