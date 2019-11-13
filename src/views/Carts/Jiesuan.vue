<template>
  <div class="box">
    <div class="tijiao">
      <van-icon class="zuojiantou" name="arrow-left" @click="back"/>
      <span>提交订单</span>
    </div>
    <div class="dizhi">
      <div class="dizhi-1">
        <p>
          <span>查洋</span>
          <span>18895399726</span>
        </p>
        <p>安徽合肥市蜀山区社钢路374号</p>
      </div>
      <van-icon class="youjiantou" name="arrow" />
    </div>
    <div class="riqi">
      <p class="riqi-1">送达日期</p>
      <div>
        <p>请选择</p>
        <van-icon class="youjiantou" name="arrow" />
      </div>
    </div>
    <div class="riqi">
      <p class="riqi-1">您的姓名/手机</p>
      <div>
        <p>请选择</p>
        <van-icon class="youjiantou" name="arrow" />
      </div>
    </div>
    <div class="riqi">
      <p class="riqi-1">贺卡留言</p>
      <p class="heka">填写即赠精美贺卡</p>
      <van-icon class="youjiantou" name="arrow" />
    </div>
    <div class="riqi">
      <p class="riqi-1">备注/优惠券/权益卡/发票</p>
      <van-icon class="youjiantou" name="arrow" />
    </div>
    <div class="shangpin">
      <img src="../../assets/fl1.png" />
      <div class="center">
        <p>【心之和蛋糕】宇治抹茶红豆coc...</p>
        <span>数量X1</span>
      </div>
      <span>￥428</span>
    </div>
    <div class="shangpin">
      <img src="../../assets/fl1.png" />
      <div class="center">
        <p>【鲜花】恋恋情深</p>
        <span>数量X1</span>
      </div>
      <span>￥231</span>
    </div>
    <div class="jine">
      <p>商品总金额</p>
      <span>￥659</span>
    </div>
    <div class="xia">
      <b>
        合计：
        <span>￥ 659</span>
      </b>
      <button>去结算</button>
    </div>
  </div>
</template>

<style scoped>
.box {
  font-size: 0.12rem;
}
.tijiao {
  width: 100%;
  height: 0.4rem;
  border-bottom: 0.01rem solid #dedede;
  font-size: 0.18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zuojiantou {
  margin-left: 0.18rem;
}
.tijiao span {
  margin-right: 40%;
}
.dizhi {
  width: 100%;
  height: 0.58rem;
  border-bottom: 0.06rem solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dizhi-1 {
  margin-left: 0.2rem;
}
.youjiantou {
  margin-right: 0.18rem;
}
.riqi {
  width: 100%;
  height: 0.37rem;
  border-bottom: 0.01rem solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.riqi .youjiantou {
  color: #9d9d9d;
}
.riqi .riqi-1 {
  margin-left: 0.2rem;
}
.riqi > div {
  display: flex;
  align-items: center;
  color: #9d9d9d;
}
.heka {
  color: #9d9d9d;
}
.riqi:last-child {
  border-top: 0.06rem solid #dedede;
  border-bottom: 0.06rem solid #dedede;
}
.shangpin {
  width: 100%;
  height: 0.98rem;
  border-bottom: 0.01rem solid #dedede;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.center {
  width: 1.8rem;
  height: 0.56rem;
}
.shangpin img {
  width: 0.6rem;
  height: 0.6rem;
}
.jine {
  width: 100%;
  height: 0.58rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jine > p {
  margin-left: 0.2rem;
}
.jine > span {
  margin-right: 0.15rem;
}
.xia {
  width: 100%;
  height: 0.46rem;
  background-color: #e0e0e0;
  position: fixed;
  bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
}
.xia b {
  width: 2.5rem;
  font-weight: normal;
  line-height: 0.46rem;
  margin-left: 0.26rem;
}
.xia b span {
  color: #ff551a;
}
.xia button {
  width: 0.98rem;
  height: 0.48rem;
  background-color: #ff551a;
  color: #fff;
  border: none;
}
</style>
<script>

import Vue from 'vue' ;

export default {
  methods: {
     back(){
        this.$router.go(-1);//返回上一层
    },
  },
};
</script>
