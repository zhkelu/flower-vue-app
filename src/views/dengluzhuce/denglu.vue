<template>
  <div class="index">
     <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <div>
      <h2 style="color:rgba(80, 80, 80, 1);  text-align: center;font-size:0.2rem;">绿雅鲜花</h2>
    </div>
    <van-cell-group style="margin-top:0.2rem;">
      <van-field v-model="name" placeholder="请输入手机号" />

      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button
          style="background:rgba(245, 87, 55, 1);border:rgba(245, 87, 55, 1)"
          slot="button"
          size="small"
          type="primary"
        >发送验证码</van-button>
      </van-field>
      <van-button class="btn" color="rgba(245, 87, 55, 1)" size="large">手机号登录/注册</van-button>
      <van-row
        type="flex"
       justify="space-between"
        style="color:rgba(80, 80, 80, 1); text-align: center;font-size:0.13rem;margin-top:0.1rem"
      >
        <van-col span="6" @click="$router.push({name:'zhanghao'})">账号密码登录</van-col>
        <van-col span="6"   @click="$router.push({name:'Signin'})" >邮箱注册</van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      sms: ""
    };
  },
  methods: {

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
