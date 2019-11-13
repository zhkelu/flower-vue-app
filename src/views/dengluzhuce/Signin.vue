<template>
  <div class="index">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div>
      <h2 style="color:rgba(80, 80, 80, 1);  text-align: center;font-size:0.2rem;">邮箱注册</h2>
    </div>
    <van-cell-group style="margin-top:0.2rem;">
      <van-field v-model="userName" placeholder="请输入邮箱号" />

      <van-field type="password" v-model="password" placeholder="请设置密码" />
      <van-button
        class="btn"
        color="rgba(245, 87, 55, 1)"
        size="large"
        @click="register(userName,password)"
      >注册</van-button>
      <div
        style="color:rgba(80, 80, 80, 1); text-align: center;font-size:0.13rem;margin-top:0.1rem"
        @click="$router.push({name:'register'})"
      >手机号注册</div>
    </van-cell-group>
  </div>
</template>
<script>
import axios from "axios";
import { Dialog } from "vant";
import VueRouter from "vue-router";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    register: function(userName, password) {
       let self = this;
      axios
        .post("http://api.cat-shop.penkuoer.com/api/v1/auth/reg", {
          userName: userName,
          password: password
        })
        .then(function(res) {
          console.log(res);
          if (res.data.token) {
            Dialog.alert({
              message: "注册成功"
            }).then(() => {
              self.$router.push({ name: "zhanghao" });
            });
          } else {
            Dialog.alert({
              message: "该用户已存在"
            }).then(() => {
              // on close
            });
          }
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
