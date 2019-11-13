<template>
  <div class="box">
    <div class="shang">
      <div class="top">
        <van-icon name="arrow-left" @click="back()"/>
        <h3>购物车</h3>
      </div>
      <div class="list" v-for="item in cartlist" :key="item._id">
        <input type="checkbox" class="check" />
        <div class="tp">
          <img :src="item.product.coverImg" />
        </div>
        <div class="right">
          <h4>{{item.product.name}}</h4>
          <div class="right-xia">
            <p>￥{{item.product.price}}</p>
            <div class="shuliang">
              <van-stepper v-model="item.quantity" />
              <h5 @click="delflower(item._id)">删除</h5>
            </div>
          </div>
        </div>
      </div>

      <p class="buy">购买该商品的还购买了</p>
      <div class="qita">
        <div>
          <img src="../assets/fl1.png" />
          <h4>永生花带灯</h4>
          <b>￥ 398</b>
        </div>
        <div>
          <img src="../assets/fl1.png" />
          <h4>永生花带灯</h4>
          <b>￥ 398</b>
        </div>
        <div>
          <img src="../assets/fl1.png" />
          <h4>永生花带灯</h4>
          <b>￥ 398</b>
        </div>
        <div>
          <img src="../assets/fl1.png" />
          <h4>永生花带灯</h4>
          <b>￥ 398</b>
        </div>
      </div>
    </div>
    <div class="xia">
      <b>
        合计：
        <span>￥ 659</span>
      </b>
      <router-link :to="{name:'Jiesuan'}">
        <button>去结算</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.box .shang {
  flex: 1;
}
.top {
  width: 100%;
  border-bottom: 0.01rem solid #dcdcdc;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative
}
.top .van-icon {
  position: absolute;
  left: 0.2rem
}
.check {
  width: 0.18rem;
  height: 0.18rem;
  border: none;
}
.top h3 {
  margin: 0;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.17rem;
  font-weight: normal;
}
.list {
  width: 100%;
  height: 0.87rem;
  border-bottom: 0.01rem solid #dcdcdc;
  display: flex;
}
.list input {
  margin-top: 0.34rem;
}
.list .tp {
  width: 0.6rem;
  height: 0.6rem;
  background-color: #d9d9d9;
  margin: 0.11rem 0.24rem 0 0.14rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tp img{
  width: 0.6rem;
  height: 0.6rem;
}
.list .right {
  width: 2.38rem;
}
.list .right h4 {
  font-weight: normal;
  height: 0.37rem;
  line-height: 0.37rem;
  margin: 0;
  padding: 0;
}
.list .right .right-xia {
  display: flex;
  align-items: center;
  height: 0.5rem;
  padding-right: 0.22rem;
  justify-content: space-between;
}
.list .right .right-xia p {
  font-size: 0.14rem;
  margin: 0;
  padding: 0;
  color: #ff551a;
}
.list .right .right-xia .shuliang {
  display: flex;
  height: 0.5rem;
  align-items: center;
  justify-content: space-between;
}
.list .right .right-xia input {
  width: 0.2rem;
  text-align: center;
  font-size: 0.2rem;
  padding: 0;
  color: #4a90e2;
  height: 0.2rem;
  line-height: 0.2rem;
  border: 1px solid #999;
  background: #fff;
  margin: 0 0.05rem;
}
.list .right .right-xia input:nth-child(2) {
  border: none;
  color: #000;
}
.list .right .right-xia h5 {
  font-weight: normal;
  font-size: 0.12rem;
  padding: 0;
  margin-left: 0.2rem;
}
.buy {
  margin-left: 0.2rem;
  color: #ff551a;
}
.qita {
  font-size: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.qita div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.qita div img {
  width: 0.52rem;
  height: 0.52rem;
}
.qita h4 {
  margin: 0.07rem 0 0 0;
  font-weight: normal;
}
.qita b {
  margin: 0;
  font-weight: normal;
  color: #ff551a;
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

import Cookies from 'js-cookie';
import { getcartList, delOne } from "@/api/product";

export default {
  inject:['reload'],
  data(){
    return{
      cartlist:[],
    }
  },
  async created() {
    const token = Cookies.get('token');
    //console.log(token)
    const res = await getcartList({ headers: { authorization:`Bearer ${token}` }});
    //console.log(res)
    this.cartlist = res.data;
    console.log(this.cartlist)


  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    async delflower(id){
      const token = Cookies.get('token');
      console.log(id)
      console.log(token)
      const res1 = await delOne(id,{ headers: { authorization:`Bearer ${token}` }});
      console.log(res1);
      this.reload();
    }
  },
  computed: {

  },
}
</script>
