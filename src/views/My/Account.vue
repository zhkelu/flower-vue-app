<template>
  <div class="box">

    <van-nav-bar title="我的账户" left-arrow @click-left="$router.go(-1)" />
    <van-cell class="on-bottom on-top" title="余额" is-link value="" />
    <van-cell title="个人资料" is-link value="" />
    <van-cell class="on-bottom" title="收货人信息" is-link value="" @click="$router.push({name:'Consignee'})" />
    <van-cell title="修改密码" is-link value="" />
    <van-cell class="on-bottom" title="修改用户名" is-link value="" />
    <van-cell title="功能反馈" is-link value="" />
  </div>
</template>
<style scoped>
.on-top{
  border-top: 5px solid  #EEEEEE;
}.on-bottom{
  border-bottom: 5px solid  #EEEEEE;
}


</style>
