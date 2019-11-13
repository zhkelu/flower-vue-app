<template>
  <div class="top-n">
    <van-row class="top-title">
      <van-col span="4">
        <router-link :to="{name:'my'}">
          <van-icon name="arrow-left"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="4" style="text-align:center">我的订单</van-col>
    </van-row>
    <van-tabs v-model="active" color="#ff6631">
      <van-tab title="全部" :to="{name:'Allorder'}">
        <div class="order">
          <div class="order_1">
          <div class="titles">
            <p class="order_num">
              订单号：<span>258876324</span>
            </p>
            <p class="order_pay">
              待付款&nbsp;&nbsp;&nbsp;&nbsp;<van-icon name="delete" />
            </p>
          </div>
          <div class="imgs">
            <div class="img-f">
              <img src="http://m.360buyimg.com/n12/jfs/t2428/306/47071983/426255/2fc3a03a/55e96b07N15069a2d.jpg%21q70.jpg" alt="">
              <img src="http://m.360buyimg.com/n12/jfs/t2428/306/47071983/426255/2fc3a03a/55e96b07N15069a2d.jpg%21q70.jpg" alt="">
            </div>
            <p>合计：￥<span>659</span></p>
          </div>
          <div class="btns">
            <van-button color="#ff6631" class="btn-pay">去支付</van-button>
          </div>
          </div>
        </div>
        <div class="order">
          <div class="order_1">
          <div class="titles">
            <p class="order_num">
              订单号：<span>258876324</span>
            </p>
            <p class="order_pay">
              待付款&nbsp;&nbsp;&nbsp;&nbsp;<van-icon name="delete" />
            </p>
          </div>
          <div class="imgs">
            <div class="img-f">
              <img src="http://m.360buyimg.com/n12/jfs/t2428/306/47071983/426255/2fc3a03a/55e96b07N15069a2d.jpg%21q70.jpg" alt="">
              <img src="http://m.360buyimg.com/n12/jfs/t2428/306/47071983/426255/2fc3a03a/55e96b07N15069a2d.jpg%21q70.jpg" alt="">
            </div>
            <p>合计：￥<span>659</span></p>
          </div>
          <div class="btns">
            <van-button color="#ff6631" class="btn-pay">查看订单</van-button>
          </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款" :to="{name:'Pay'}">
        <div class="order">
          <div class="order_1">
          <div class="titles">
            <p class="order_num">
              订单号：<span>258876324</span>
            </p>
            <p class="order_pay">
              待付款&nbsp;&nbsp;&nbsp;&nbsp;<van-icon name="delete" />
            </p>
          </div>
          <div class="imgs">
            <div class="img-f">
              <img src="http://m.360buyimg.com/n12/jfs/t2428/306/47071983/426255/2fc3a03a/55e96b07N15069a2d.jpg%21q70.jpg" alt="">
              <img src="http://m.360buyimg.com/n12/jfs/t2428/306/47071983/426255/2fc3a03a/55e96b07N15069a2d.jpg%21q70.jpg" alt="">
            </div>
            <p>合计：￥<span>659</span></p>
          </div>
          <div class="btns">
            <van-button color="#ff6631" class="btn-pay">去支付</van-button>
          </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="今日配送" :to="{name:'Delivery'}">
        <div class="center-a">
          <div class="center">
            <van-icon name="photo-o" />
          </div>
          <p class="no-order">你还没有相关的订单</p>
        </div>
      </van-tab>
      <van-tab title="待评价" :to="{name:'Evaluate'}">
        <div class="center-a">
          <div class="center">
            <van-icon name="photo-o" />
          </div>
          <p class="no-order">你还没有相关的订单</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>


<style scoped>
/* 360px=100vw 1px=0.2778vw*/
.top-n{
  width: 100%;
}
.top-title {
  width: 100%;
  height: 0.4rem;
  background: white;
  color: rgba(0, 0, 0, 1);
  font-size: 0.14rem;
  line-height: 0.3rem;
  border-bottom: 0.02rem solid #d0d0d0;
  display: flex;
  align-items: center;
}
.van-tab__pane{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.van-tabs--line .van-tabs__wrap{
  height: 0.3rem;
}
.order{
  width: 100%;
	height: 1.65rem;
  background-color: rgba(241, 241, 241, 1);
  color: rgba(62, 62, 62, 1);
	border-radius: 0.04rem;
	font-size: 0.14rem;
  margin-bottom: 0.05rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.order .order_1{
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.order .titles{
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-between
}
.order .titles .order_num{
  width: 1.5rem;
  text-align: left;
}
.order .titles .order_pay{
  width: 1rem;
}
.order .imgs{
  width: 100%;
	height: 1.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order .imgs .img-f{
  width: 1.5rem;
  height: 1.05rem;
  display: flex;
  align-items: center;
  justify-content:space-between;
}
.order .imgs p{
  width: 2rem;
  line-height: 0.2rem;
  text-align: right;
}
.order img{
  width: 0.69rem;
	height: 0.69rem;
}
.order .btns{
  width: 100%;
  font-size: 0.1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.order .btn-pay{
  width: 0.9rem;
	height: 0.24rem;
  border-radius: 0.04rem;
	line-height: 0.24rem;
	text-align: center;
}
.center-a p{
  font-size: 0.14rem;
  text-align: center;
}
.center{
  width: 1.71rem;
	height: 1.71rem;
  background-color: rgba(162, 162, 162, 1);
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.2rem;
}
</style>

<script>

import Vue from 'vue' ;

export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
     back(){
        this.$router.go(-1);//返回上一层
    },
  },
};
</script>
