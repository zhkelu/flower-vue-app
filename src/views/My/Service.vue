<template>
  <div class="kefu">
    <div class="kf-top">
      <router-link :to="{name:'my'}">
        <van-icon class="left" name="arrow-left" />
      </router-link>
      <p>客服</p>
    </div>
    <!-- top end -->
    <div class="kf-time">
      <p>客服服务时间为：08:30~21:00</p>
    </div>
    <div class="online">
      <h5>在线客服</h5>
      <p>立即联系</p>
      <van-icon class="right" name="arrow" />
    </div>
    <div class="online400">
      <h5>400电话</h5>
      <p>立即拨打</p>
      <van-icon class="right" name="arrow" />
    </div>
    <!-- kf-online end -->
    <div class="liuyan">
      <p>在线留言（工作时间承诺一个小时内回复）</p>
    </div>
    <!-- liuyan  end -->
    <div class="shouhou2">
      <p>咨询售后</p>
      <span>投诉反馈</span>
    </div>
    <!--shouhou2  end-->
    <div class="sub-mes">
      <div class="s-top">
        <input class="phone" type="text" placeholder="手机号" />
        <p>或</p>
        <input class="email" type="text" placeholder="邮箱" />
      </div>

      <textarea class="desc">
        请在此描述问题
      </textarea>
    </div>
    <div class="sub-btn">
      <button>确认提交</button>
    </div>
    <!-- sub-btn  end -->
  </div>
</template>
<style scoped>
.kf-top {
  height: 0.36rem;
  padding: 0 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #d3d3d3;
}
.kf-top p {
  font-size: 0.14rem;
  margin-left: -0.1rem;
}

.kf-top .left {
  font-size: 0.12rem;
  color: #999;
  position: absolute;
  left: 0.2rem;
  top: 0.15rem;
}
/* top  end */
.kf-time {
  height: 0.3rem;
  border-bottom: 0.04rem solid #e7e7e7;
}
.kf-time p {
  color: #dbc272;
  font-size: 0.12rem;
  padding: 0;
  margin: 0;
  height: 100%;
  line-height: 0.3rem;
  text-align: center;
}
/* kf-time  end */
.online {
  height: 0.36rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.28rem;
  padding-right: 0.22rem;
  border-bottom: 1px solid #d3d3d3;
}
.online h5 {
  margin: 0;
  padding: 0;
  font-size: 0.12rem;
  font-weight: normal;
  color: #505050;
}
.online p {
  margin: 0;
  padding: 0;
  font-size: 0.12rem;
  color: #505050;
  margin-right: -1.9rem;
}
.online .right {
  margin: 0;
  padding: 0;
  font-size: 0.14rem;
  color: #505050;
}
.online400 {
  height: 0.36rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.28rem;
  padding-right: 0.22rem;
  border-bottom: 0.04rem solid #e7e7e7;
}
.online400 h5 {
  margin: 0;
  padding: 0;
  font-size: 0.12rem;
  font-weight: normal;
  color: #505050;
}
.online400 p {
  margin: 0;
  padding: 0;
  font-size: 0.12rem;
  color: #505050;
  margin-right: -1.9rem;
}
.online400 .right {
  margin: 0;
  padding: 0;
  font-size: 0.14rem;
  color: #505050;
}
/* kf-online  end */
.liuyan {
  height: 0.4rem;
  padding: 0 0.14rem;
}
.liuyan p {
  font-size: 0.12rem;
  color: #505050;
  height: 0.4rem;
  margin: 0;
  padding: 0;
  line-height: 0.4rem;
}
/* liuyan end */
.shouhou2 {
  height: 0.3rem;
  padding-left: 0.24rem;
  display: flex;
}
.shouhou2 p {
  height: 0.3rem;
  width: 0.7rem;
  background: #fd9977;
  border-radius: 0.04rem;
  margin: 0;
  padding: 0;
  font-size: 0.12rem;
  line-height: 0.3rem;
  text-align: center;
}
.shouhou2 span {
  display: block;
  height: 0.3rem;
  background: #c8c8c8;
  border-radius: 0.04rem;
  width: 0.7rem;
  margin: 0;
  padding: 0;
  font-size: 0.12rem;
  line-height: 0.3rem;
  text-align: center;
}
/* sub-btn  end */
.sub-mes {
  width: 3.09rem;
  min-height: 1.5rem;
  margin-left: 0.14rem;
  background: #e7e7e7;
  display: flex;
  flex-direction: column;
  padding:0 0.12rem 0.2rem;
}
.sub-mes .s-top {
  height: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.sub-mes .phone {
  display: block;
  width: 0.9rem;
  height: 0.18rem;
  font-size: 0.12rem;
  background: #e7e7e7;
  color: #505050;
  padding-left: 0.04rem;
  border:1px solid #505050;
}
.sub-mes p {
  font-size: 0.12rem;
  color: #505050;
  padding: 0 0.12rem;
}
.sub-mes .email {
  width: 1.43rem;
  height: 0.18rem;
  font-size: 0.12rem;
  background: #e7e7e7;
  color: #505050;
  border: none;
  padding-left: 0.04rem;
  border:1px solid #505050;
}
.sub-mes .desc {
  font-size: 0.12rem;
  color: #505050;
  width: 2.92rem;
  height: 0.77rem;
  display: block;
  background: #e7e7e7;
  padding-top:0.1rem;
}
/* btn satrt */
.sub-btn{
  display: flex;
  height:0.7rem;
  align-items: center;
  justify-content: center;
}
.sub-btn button {
  width: 0.95rem;
  height: 0.3rem;
  font-size: 0.13rem;
  border-radius: 0.04rem;
  color: #505050;
  background: #fff;
  border-color: #505050;
}
</style>
