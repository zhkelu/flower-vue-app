<template>
  <div class="box">
    <div class="shang">
      <van-nav-bar title="更多" left-arrow  @click-left="$router.go(-1)"/>
      <div class="top">
        <h3>我的收藏</h3>
      </div>
      <div class="list">
        <div class="tp">
          <img src="../../assets/fl1.png" />
        </div>
        <div class="right">
          <h4>温柔如你--戴安娜粉玫瑰12枝，石竹梅7枝</h4>
          <div class="right-xia">
            <p>￥198</p>
            <div class="shuliang">
              <div class="shoucang">取消收藏</div>
              <div class="gouwuche">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="tp">
          <img src="../../assets/fl1.png" />
        </div>
        <div class="right">
          <h4>月光女神--白玫瑰11枝，绿色桔梗7枝，小菊3枝</h4>
          <div class="right-xia">
            <p>￥227</p>
            <div class="shuliang">
              <div class="shoucang">取消收藏</div>
              <div class="gouwuche">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
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
  height: 0.31rem;
  border-bottom: 0.01rem solid #dcdcdc;
  background-color: #fff;
}
.top h3 {
  margin: 0;
  line-height: 0.31rem;
  text-align: center;
  font-size: 0.15rem;
  font-weight: normal;
}
.list {
  width: 100%;
  height: 0.87rem;
  border-bottom: 0.01rem solid #dcdcdc;
  display: flex;
}
.list .tp {
  width: 0.6rem;
  height: 0.6rem;
  background-color: #d9d9d9;
  margin: 0.11rem 0.24rem 0 0.14rem;
}
.list .right {
  width: 2.38rem;
  height: 0.88rem;
}
.list .right h4 {
  margin-top: 0.12rem;
  font-weight: normal;
  width: 2.38rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list .right .right-xia {
  display: flex;
}
.list .right .right-xia .shuliang {
  display: flex;
}
.list .right .right-xia .shuliang .shoucang {
  width: 0.8rem;
  height: 0.2rem;
  border: 0.01rem solid #000;
  margin: 0.05rem 0 0 0.2rem;
  text-align: center;
  line-height: 0.2rem;
}
.list .right .right-xia .shuliang .gouwuche {
  width: 0.8rem;
  height: 0.2rem;
  border: 0.01rem solid #ff551a;
  color: #ff551a;
  margin: 0.05rem 0 0 0.1rem;
  text-align: center;
  line-height: 0.2rem;
}
</style>
