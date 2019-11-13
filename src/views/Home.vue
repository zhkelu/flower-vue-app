<template>
  <div class="home">
    <router-link :to="{name:'Search'}">
      <van-search value placeholder="请输入搜索关键词" />
    </router-link>
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="#fff">
        <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-row type="flex" justify="space-around">
      <van-col class="nav" span="4">
        <router-link :to="{name:'Flower'}">
          <img src="./../assets/logo.1.jpg" />
        </router-link>
      </van-col>
      <van-col class="nav" span="4">
        <img src="./../assets/logo.2.jpg" />
      </van-col>
      <van-col class="nav" span="4">
        <router-link :to="{name:'Cake'}">
          <img src="./../assets/logo.3.jpg" />
        </router-link>
      </van-col>
      <van-col class="nav" span="4">
        <img src="./../assets/logo.4.jpg" />
      </van-col>
      <van-col class="nav" span="4">
        <router-link :to="{name:'Choc'}">
          <img src="./../assets/logo.5.jpg" />
        </router-link>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col class="nav-a" span="4">鲜花</van-col>
      <van-col class="nav-a" span="4">永生花</van-col>
      <van-col class="nav-a" span="4">蛋糕</van-col>
      <van-col class="nav-a" span="4">礼品</van-col>
      <van-col class="nav-a" span="4">巧克力</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col id="Heading" span="6">生日祝福</van-col>
      <van-col id="Heading-a" span="6">表白/求婚</van-col>
      <van-col id="Heading" span="6">开业/商务</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col id="Heading-a" span="6">周年纪念</van-col>
      <van-col id="Heading" span="6">特价专区</van-col>
      <van-col id="Heading-a" span="6">人气新品</van-col>
    </van-row>
    <van-tabs
      id="luo"
      type="card"
      title-inactive-color="#fff"
      color="rgba(245, 87, 55, 1)"
      background="#5b5b5b"
    >
      <van-tab title="爱情鲜花">
        <p>爱情鲜花热卖单品</p>
        <img src="./../assets/logo.1.jpg" />
      </van-tab>
      <van-tab title="送长辈鲜花">
        <p>送长辈鲜花热卖单品</p>
        <img src="./../assets/logo.3.jpg" />
      </van-tab>
      <van-tab title="永生花">
        <p>永生花热卖单品</p>
        <img src="./../assets/logo.2.jpg" />
      </van-tab>
      <van-tab title="礼品">
        <p>礼品热卖单品</p>
        <img src="./../assets/logo.5.jpg" />
      </van-tab>
      <van-tab title="蛋糕">
        <p>蛋糕热卖单品</p>
        <img src="./../assets/logo.4.jpg" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { products } from "../services/products.js";

export default {
  name: "home",
  name: "swiper",
  components: {},
  data() {
    return {
      list: [],
      SwiperImg: [
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ]
    };
  },
  async created() {
    const result = await products();
    this.list = result.data.products;
  }
};

</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 1.73rem;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.swiper img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.nav {
  width: 0.43rem;
  height: 0.43rem;
  border: 1px solid #000;
  margin-top: 0.2rem;
}
.nav img {
  width: 0.43rem;
  height: 0.43rem;
  float: left;
}
.nav-a {
  margin-top: 0.09rem;
  text-align: center;
  font-size: 14px;

  color: rgba(80, 80, 80, 1);
}
#Heading {
  margin-top: 0.14rem;
  width: 0.88rem;
  height: 0.27rem;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 169, 169, 1);
  border-radius: 0.04rem;
  font-size: 0.14rem;
  line-height: 0.27rem;
  text-align: center;
}
#Heading-a {
  margin-top: 0.14rem;
  width: 0.88rem;
  height: 0.27rem;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(149, 200, 253, 1);
  border-radius: 0.04rem;
  font-size: 0.14rem;
  line-height: 0.27rem;
  text-align: center;
}
.van-tabs {
  margin-top: 0.3rem;
}
.home .van-tabs__nav--card .van-tab {
  border-right: none;
}
#luo p {
  color: rgba(0, 0, 0, 1);
  font-size: 0.12rem;
  line-height: 0.12rem;
  text-align: center;
  margin: 3px;
}
#luo img {
  width: 100%;
  height: 3.76rem;
}
</style>
