
<template>
  <div class="box">
    <van-nav-bar title="更多" left-arrow  @click-left="$router.go(-1)"/>
      <van-cell-group >
        <van-switch-cell v-model="checked" title="WIFI下自动升级客户端" />
      </van-cell-group>
      <van-cell title="清除本地储存" is-link value="37.32KB" />
      <p class="box-a">当前版本号:V1.1</p>
      <van-button type="primary" size="large" @click="exitHandle()">退出登录</van-button>
  </div>
</template>
<script>
export default {
  name: "box",
   data() {
    return {
      checked: true
    }
  }
};
</script>
<style  scoped>
   .box-a{
       text-align: center;
       font-size: 14px;
       color:rgba(80, 80, 80, 1);
   }
   .van-button{
       border-radius:50px;
       background: red;
       border: 0;
   }
</style>

<script>

import Cookies from 'js-cookie';

export default {
  methods: {
    exitHandle(){
      Cookies.remove('token');
      this.$router.push({name:'Signin'})
    }
  },
}
</script>
