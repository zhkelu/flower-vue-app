<template>
  <div class="index">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div>
      <h2 style="color:rgba(80, 80, 80, 1);  text-align: center;font-size:0.2rem;">账号密码登录</h2>
    </div>
    <van-cell-group style="margin-top:0.2rem;">
      <van-field v-model="userName" placeholder="请输入账号/手机号" />

      <van-field
        type="password"
        v-model="password"
        placeholder="请输入密码"
        @click-right-icon="$toast('question')"
      />

      <van-button
        class="btn"
        color="rgba(245, 87, 55, 1)"
        size="large"
        @click="login(userName,password)"
      >手机号登录/注册</van-button>
      <van-row
        type="flex"
        justify="space-between"
        style="color:rgba(80, 80, 80, 1); text-align: center;font-size:0.13rem;margin-top:0.1rem"
      >
        <van-col span="6" @click="$router.push({name:'denglu'})">手机登录/注册</van-col>
        <van-col span="6" @click="$router.push({name:'Signin'})">邮箱注册</van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>
<script>
import axios from "axios";
import Cookies from 'js-cookie';
import { Dialog } from "vant";
import VueRouter from 'vue-router';


export default {
  data() {
    return {
      userName: "975023226",
      password: "zxl521521+++"
    };
  },
  methods: {
    login: function(userName, password) {
    let self = this;
      axios
        .post("http://api.cat-shop.penkuoer.com/api/v1/auth/login", {
          userName: userName,
          password: password
        })
        .then(function(res) {
          console.log(res);

          if (res.data.token) {
            Dialog.alert({
              message: "登录成功"
            }).then(() => {
              Cookies.set('token', res.data.token);
              self.$router.push({ name: "Home" });
            });
          } else {
            Dialog.alert({
              message: "账号或密码错误"
            }).then(() => {
              // on close
            });
          }
          axios.defaults.headers.common["Authorization"] = res.data.token;
        });
    }
  },
  computed: {}
};
</script>
<style scoped>
.btn {
  border-radius: 50px;
  border: 0;
}
</style>
