<template>
  <div class="box">
    <van-nav-bar title="收货人信息" left-arrow @click-left="$router.go(-1)" />
    <van-cell class="on-top" title="收货人姓名"  value="" />
    <van-cell class="on-bottom" title="收货人手机"  value="" />
    <van-cell  title="省市区/县" value="" />
    <van-cell title="详细地址" value="" />
  <van-button class="btn" color="rgba(245, 87, 55, 1)" size="large">确认保存</van-button>
  </div>
</template>
<style  scoped>
.on-top{
  border-top: 5px solid  #EEEEEE;
}
.on-bottom{
  border-bottom: 5px solid  #EEEEEE;
}
</style>
