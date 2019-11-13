<template>
  <div class="goods">
    <div class="top">
      <van-row type="flex" justify="space-between">
        <van-col span="6" @click="back()">
          <van-icon class="left" name="arrow-left" />
        </van-col>
        <van-col class="content" span="6">恋恋情深</van-col>
        <van-col span="6">
          <router-link :to="{name:'Search'}">
            <van-icon class="clock" name="clock-o" />
          </router-link>
          <router-link :to="{name:'Home'}">
            <van-icon class="dian111" name="ellipsis" />
          </router-link>
        </van-col>
      </van-row>
    </div>
    <!-- top  end-->
    <div class="mid">
      <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="#fff">
          <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- lunbo  end -->
      <div class="content">
        <div class="g-title">
          <p>{{flower.name}}</p>
          <van-rate class="like" v-model="value" icon="like" void-icon="like-o" :count="1"/>
        </div>
        <div class="xiaoliang">
          <p class="g-price">{{'￥'+flower.price}}</p>
          <span class="sale8">8折</span>
          <span class="salea">App专享</span>
          <p class="sale6">已售0.6万件</p>
        </div>
      </div>
      <!-- content end -->
      <div class="f-mes">
        <ul class="mes">
          <li>
            <h4>花语</h4>
            <p class="huayu">{{flower.descriptions}}</p>
          </li>
          <li>
            <h4>材料</h4>
            <p>11枝香槟玫瑰，多头白色百合两枝，栀子叶8枝</p>
          </li>
          <li>
            <h4>配送</h4>
            <p class="teshu">全国</p>
          </li>
        </ul>
      </div>
      <!-- huayu  end -->
      <div class="dizhi">
        <div class="dz-top">
          <h4>配送至</h4>
          <van-icon class="dz" name="location-o" />
          <p>安徽 合肥</p>
          <van-icon class="dian3" name="ellipsis" />
        </div>
        <div class="dz-xia">
          <p>现在下单，最快今日下午送达</p>
        </div>
      </div>
    </div>
    <!-- dz  end -->
    <div class="bottom">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button color="#324c36" @click="addCart(flower._id)" :to="{name:'cart'}" text="加入购物车" />
        <van-goods-action-button color="#ff5733" :to="{name:'Pay'}" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
/* style  start */
<style scoped>
.goods {
  display: flex;
  flex-direction: column;
}
.top {
  height: 0.15rem;
  padding: 0.1rem 0;
  font-size: 0.12rem;
}
.top .content {
  font-size: 0.12rem;
  color: #000;
  text-align: center;
}
.top .clock {
  font-size: 0.19rem;
  color: #999;
  width: 0.2rem;
  margin: 0 0.2rem;
}
.top .dian111 {
  font-size: 0.19rem;
  color: #999;
}
.top .left {
  font-size: 0.12rem;
  color: #999;
  margin-left: 0.08rem;
}
/* top  end */
.mid {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}
img {
  width: 3.6rem;
  height: 3.95rem;
}
.swiper {
  height: 4rem;
}
/* content start */
.content {
  height: 0.7rem;
  border-bottom: 0.06rem solid #e5e5e5;
}
.content .g-title {
  padding: 0 0.1rem;
  height: 0.5rem;
  font-size: 0.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.g-title p {
  width: 2.8rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.g-title span {
  color: #ff5733;
}
.g-title .like {
  font-size: 0.12rem;
  color: #666;
}
.content .xiaoliang {
  padding: 0 0.1rem;
  height: 0.22rem;
  font-size: 0.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xiaoliang .g-price {
  color: #ff5733;
  text-align: center;
  width: 0.4rem;
  height: 100%;
}
.sale8 {
  padding: 0 0.05rem;
  height: 0.15rem;
  line-height: 0.15rem;
  text-align: center;
  color: #fff;
  display: block;
  background: #324c36;
  border-radius: 0.07rem;
  margin-left: -0.7rem;
}
.salea {
  padding: 0 0.05rem;
  height: 0.15rem;
  line-height: 0.15rem;
  text-align: center;
  color: #fff;
  display: block;
  background: #324c36;
  border-radius: 0.07rem;
  margin-left: -0.87rem;
}
.sale6 {
  color: #505050;
}
/* content  end */
.f-mes {
  height: 0.76rem;
  border-bottom: 0.06rem solid #e5e5e5;
  padding: 0 0.1rem;
}
.mes {
  height: 0.76rem;
  display: flex;
  flex-direction: column;
}
.mes li {
  display: flex;
  height: 0.24rem;
  justify-content: space-between;
  align-items: center;
}
.mes li h4 {
  width: 0.37rem;
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 0.12rem;
  margin: 0;
  padding: 0;
  color: #505050;
}
.mes li p {
  width: 100%;
  min-height: 0.25rem;
  border-bottom: 1px solid #888;
  line-height: 0.25rem;
  font-size: 0.12rem;
  color: #505050;
}
.mes .huayu {
  width: 100%;
  border-bottom: 1px solid #888;
  font-size: 0.12rem;
  color: #505050;
  height: 0.2rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.mes li .teshu {
  border: none;
}
/* husyu  end */
.dizhi {
  /* height: 0.43rem; */
  height: 1rem;
  padding: 0 0.1rem;
  font-size: 0.12rem;
  border-bottom: 0.06rem solid #e5e5e5;
}
.dizhi .dz-top {
  height: 0.3rem;
  color: #505050;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dz-top .dz {
  margin-left: -1.8rem;
}
.dz-top p {
  margin-left: -1.7rem;
}
.dz-xia p {
  color: #ff5733;
  margin-left: 0.8rem;
}
/* dizhi  end */
</style>

<script>
import { getProductById ,addcartList} from "@/api/product";
import Cookies from 'js-cookie';
import { Dialog } from "vant";

export default {
  name: "swiper",
  components: {},
  data() {
    return {
      cartList:[],
      flower: {},
      value: 0,
      SwiperImg: [
        "http://img5.imgtn.bdimg.com/it/u=373586959,2185134442&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572104356379&di=5fc56353edcf4d925a2d6a1fbb6d52a9&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft1039%2F166%2F1243422794%2F289784%2F97711b0a%2F55881eb9N28b46997.jpg%2521q70.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572104778179&di=cb11904064488ab0db5389d613b2c586&imgtype=0&src=http%3A%2F%2Fp1.meituan.net%2Fdpdeal%2F4bbd78dfc9971ab4e5f04bdd8e0ad25a51160.jpg%2540640w_1024h_1e_1l%257Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    async addCart(id){
      //此处执行加入购物车
      const token = Cookies.get('token');
      console.log(id,token)
      const res = await addcartList({ product:id,quantity:1,},{ headers: { authorization:`Bearer ${token}` }});
      console.log(res)
      //alert(res.data.message)
       Dialog.alert({
              message: "加入购物车成功"
            })
      //  if(this.cartList.indexOf(item=>item._id==flower._id)===-1){
      //   this.flower.quantity=1;
      //   cartList.push(flower);
      // }else if(this.cartList.indexOf(item=>item._id==flower._id)>-1){
      //   this.flower.quantity+=1;
      // }
      // console.log(this.cartList)
    }


  },
  async created() {
    const id = this.$route.params.id;
    //根据商品id请求商品详情信息
    const res = await getProductById(id);
    console.log(res)
    this.flower = res.data;
    //console.log(this.flower)

  }
}
</script>
