<template>
  <div class="cake">
    <div class="top">
      <router-link :to="{name:'Home'}">
        <van-icon class="left" name="arrow-left" />
      </router-link>
      <p>蛋糕</p>
    </div>
    <!-- top end -->
    <van-tabs
      v-model="active"
      sticky
      line-height="0"
      title-active-color="#ff5733"
      title-inactive-color="#505050"
    >
      <van-tab title="综合">
        <div class="select6">
          <p>合肥</p>
          <p>元祖</p>
          <p>心之和</p>
          <p>Mcake</p>
          <p>筛选</p>
        </div>
        <!-- select6  end -->
        <div class="cakes">
          <ul class="c-nei">
            <li v-for="(item) in cakelist" :key="item._id">
              <router-link :to="{name:'Detail',params:{id:item._id}}">
                <div class="l-nei">
                  <img :src="item.coverImg" />
                  <h5>元祖推荐</h5>
                  <h3>{{item.name}}</h3>
                  <p class="price">{{"￥"+item.price}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="销量">
        <div class="select6">
          <p>合肥</p>
          <p>元祖</p>
          <p>心之和</p>
          <p>Mcake</p>
          <p>筛选</p>
        </div>
        <h2>销量</h2>
      </van-tab>
      <van-tab title="价格">
        <div class="select6">
          <p>合肥</p>
          <p>元祖</p>
          <p>心之和</p>
          <p>Mcake</p>
          <p>筛选</p>
        </div>
        <h2>价格</h2>
      </van-tab>
      <van-tab title="新品">
        <div class="select6">
          <p>合肥</p>
          <p>元祖</p>
          <p>心之和</p>
          <p>Mcake</p>
          <p>筛选</p>
        </div>
        <h2>新品</h2>
      </van-tab>
    </van-tabs>
    <!-- select4  end -->
  </div>
</template>

<style scoped>
.top {
  height: 0.36rem;
  padding: 0 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #efefef;
}
.top p {
  font-size: 0.14rem;
  margin-left: -0.1rem;
}

.top .left {
  font-size: 0.12rem;
  color: #999;
  position: absolute;
  left: 0.2rem;
  top: 0.1rem;
}
/* top  end */
.select6 {
  height: 0.31rem;
  padding: 0 0.17rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #d7d7d7;
}
.select6 p {
  height: 0.17rem;
  width: 0.46rem;
  font-size: 0.12rem;
  line-height: 0.17rem;
  text-align: center;
  background: #eee;
  border-radius: 0.05rem;
}
/* select6  end */
.cakes {
  min-height: 2.35rem;
  padding: 0.07rem 0.1rem;
}
.cakes .c-nei {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.c-nei li {
  height: 2.51rem;
  margin-bottom: 0.1rem;
}
.c-nei .l-nei img {
  width: 1.45rem;
  height: 1.44rem;
  margin-bottom: 0.05rem;
}
.c-nei .l-nei {
  height: 2.3rem;
  display: flex;
  border-radius: 0.15rem;
  background: #e7e7e7;
  padding: 0.2rem 0.1rem 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.c-nei .l-nei h3 {
  margin: 0;
  padding: 0;
  color: #505050;
  font-size: 0.12rem;
  width: 1.45rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.c-nei .l-nei p {
  margin: 0;
  padding: 0.05rem 0;
  font-size: 0.12rem;
  color: #ff5733;
}
.c-nei .l-nei h5 {
  color: #ff5733;
  font-size: 0.08rem;
  margin: 0 0 0.05rem;
  padding: 0 0.05rem;
  width: auto;
  font-weight: normal;
  border: 1px solid #ff5733;
  border-radius: 0.1rem;
}
/* cakes  end */
</style>

<script>
import { products } from "@/api/product";

export default {
  data() {
    return {
      active: 0,
      cakelist: []
    };
  },
  async created() {
    const res = await products({ page: 10 });
    //console.log(res)
    this.cakelist = res.data.products;
    //console.log(this.cakelist);
  }
};
</script>
