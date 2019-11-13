<template>
  <div class="box">
    <div class="top">
      <router-link :to="{name:'More'}">
        <van-icon class="setting" name="setting-o" />
      </router-link>
      <div class="box-zhuti">
        <div class="touxiang">
          <img src="../assets/x5.jpg" />
        </div>
        <div class="tou-r">
          <p class="mingzi">你是我半截的诗</p>
          <div class="vip">
            <van-icon class="xing" name="star-o" />
            <p class="huiyuan" @click="$router.push({name:'denglu'})">注册会员</p>
          </div>
        </div>
      </div>
    </div>
    <div class="zt">
      <div class="orderForm">
        <div class="order">
          <p>我的订单</p>
          <router-link :to="{name:'Allorder'}">
            <p>全部订单</p>
          </router-link>
        </div>
        <van-grid :column-num="3">
          <van-grid-item icon="smile-o" text="待付款" :to="{name:'Pay'}" />
          <van-grid-item icon="smile-o" text="今日配送" :to="{name:'Delivery'}" />
          <van-grid-item icon="smile-o" text="待评价" :to="{name:'Evaluate'}" />
        </van-grid>
      </div>
      <div class="coupon">
        <van-grid :column-num="4">
          <van-grid-item icon="smile-o" text="优惠券" />
          <van-grid-item icon="smile-o" text="权益卡" />
          <van-grid-item icon="smile-o" text="积分" />
          <van-grid-item icon="smile-o" text="生日/纪念日" :to="{name:'Birthday'}" />
        </van-grid>
        <van-grid :column-num="4">
          <van-grid-item icon="smile-o" text="我的收藏" :to="{name:'Collection'}" />
          <van-grid-item icon="smile-o" text="联系客服" :to="{name:'Service'}" />
          <van-grid-item icon="smile-o" text="帮助" />
          <van-grid-item icon="smile-o" text="关于绿雅" />
        </van-grid>
      </div>
      <div class="account">
        <router-link :to="{name:'Account'}">
          <p>账户管理</p>
        </router-link>
        <p class="p2">管理收货地址</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "box"
};
</script>
 <style scoped>
.box {
  position: relative;
}
.top {
  width: 100%;
  height: 1.73rem;
  background-image: url("../assets/x6.jpg");
  opacity:0.7;
  font-size: 0.12rem;
  position: relative;
}
.box-zhuti {
  width: 1.76rem;
  height: 0.64rem;
  position: absolute;
  left: 0.69rem;
  top: 0.55rem;
}
.touxiang {
  width: 0.64rem;
  height: 0.64rem;
  background-color: #702525;
  border-radius: 50%;
  float: left;
}
.touxiang img {
  width: 0.64rem;
  height: 0.64rem;
   border-radius: 50%;
    
}
.tou-r {
  width: 0.99rem;
  height: 0.51rem;
  float: left;
  margin: 0.05rem 0 0 0.13rem;
  color: #fff;
}
.tou-r .mingzi {
  height: 0.1rem;
}
.xing {
  float: left;
  margin-right: 0.1rem;
}
.setting {
  position: absolute;
  width: 0.24rem;
  height: 0.24rem;
  right: 0.3rem;
  top: 0.3rem;
  font-size: 0.24rem;
  color: #fff;
}
.zt {
  width: 95%;
  position: absolute;
  left: 0.1rem;
  top: 1.6rem;
}
.zt .orderForm {
  width: 3.4rem;
  height: 1.08rem;
  background-color: #e9e9e9;
  border-radius: 0.12rem;
}
.order {
  height: 0.3rem;
  width: 100%;
  font-size: 0.14rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: black;
}
.order p {
  width: 0.7rem;
}
.account {
  width: 100%;
  height: 0.48rem;
  font-size: 0.14rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  background-color: #e6e6e6;
  border-radius: 0.15rem;
  margin-top: 0.01rem;
}
.account p {
  width: 1rem;
  height: 0.18rem;
}
.account .p2 {
  color: #929292;
}
</style>
