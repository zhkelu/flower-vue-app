<template>
  <div class="box">
    <van-search class="ipt" placeholder="输入内容" v-model="value" />
    <div class="tupian">
      <img src="../assets/biaoti.png" />
    </div>
    <router-view></router-view>

    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="常用分类" :to="{name:'changyong'}" />
      <van-sidebar-item title="鲜花" :to="{name:'xianhua'}" />
      <van-sidebar-item title="商务鲜花" />
      <van-sidebar-item title="永生花" />
      <van-sidebar-item title="蛋糕" :to="{name:'dangao'}" />
      <van-sidebar-item title="巧克力" :to="{name:'qiaokeli'}" />
      <van-sidebar-item title="特色礼品" />
      <van-sidebar-item title="品牌公仔" />
      <van-sidebar-item title="礼篮" />
      <van-sidebar-item title="绿植花卉" />
    </van-sidebar>
  </div>
</template>
<style scoped>
.tupian {
  width: 2.45rem;
  height: 0.8rem;
  float: right;
}
.tupian img {
  width: 2.45rem;
  height: 0.8rem;
  float: right;
  margin-right: 0.2rem;
}
.van-sidebar-item {
  text-align: center;
  padding: 10px 12px 10px 8px;
}
</style>
<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0
    };
  }
};
</script>

