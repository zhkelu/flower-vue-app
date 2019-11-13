<template>
  <div class="search">
    <!-- top  search框 -->
    <div class="top">
      <router-link :to="{name:'Home'}">
        <van-icon class="left" name="arrow-left" />
      </router-link>
      <van-search placeholder="输入内容" />
    </div>
    <h5>热门搜索</h5>
    <!-- 六个标签 -->
    <div class="sixbtn">
      <router-link :to="{name:'Flower'}">
        <input type="button" value="爱情鲜花" />
      </router-link>
      <input type="button" value="永生花" />
      <router-link :to="{name:'Cake'}">
        <input type="button" value="生日蛋糕" />
      </router-link>
      <input type="button" value="金箔花" />
      <input type="button" value="友情鲜花" />
      <input type="button" value="公仔花束" />
    </div>
    <!-- sixbtn  end -->
    <h5>浏览记录</h5>
    <!-- history -->
    <div class="history">
      <ul>
        <router-link :to="{name:'Detail'}">
          <li>
            <img src="../../assets/logo.1.jpg" />
            <p>温柔如你</p>
          </li>
        </router-link>
        <li>
          <img src="../../assets/logo.2.jpg" />
          <p>月光女神</p>
        </li>
        <li>
          <img src="../../assets/logo.3.jpg" />
          <p>恋恋情深</p>
        </li>
        <li>
          <img src="../../assets/logo.4.jpg" />
          <p>一心一意</p>
        </li>
      </ul>
    </div>
    <!-- history  end -->
    <h5>搜索历史</h5>
    <div class="clearbtn">
      <button>清除历史记录</button>
    </div>
  </div>
</template>
<style scoped>
.top {
  height: 0.3rem;
  position: relative;
  padding: 0.05rem 0.08rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #efefef;
}
.left {
  width: 0.26rem;
  height: 0.3rem;
  position: absolute;
  left: 0;
  top: 0.07rem;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.14rem;
  color: #999;
}
.van-search {
  width: 3.04rem;
  margin-left: 0.4rem;
  color: #808080;
  border-radius: 2px;
  font-size: 0.13rem;
  padding: 0;
}
.van-search__content {
  height: 0.3rem;
  align-items: center;
}
.van-search .van-cell {
  padding: 0;
}
h5 {
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.13rem;
  font-weight: normal;
  margin: 0;
  padding-left: 0.08rem;
  color: #505050;
}
/* top  end */
.sixbtn {
  height: 0.72rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.06rem 0.14rem;
  justify-content: space-around;
  align-items: center;
}
.sixbtn input {
  display: block;
  margin: 0.05rem 0;
  width: 0.92rem;
  height: 0.25rem;
  border-radius: 0.03rem;
  font-size: 0.12rem;
  color: #808080;
  background: #fff;
  border: 1px solid #999;
}
/* sixbtn  end */
.history {
  height: 0.97rem;
  padding: 0 0.14rem;
}
.history ul {
  width: 100%;
  height: 0.97rem;
  display: flex;
  margin: 0;
  justify-content: space-around;
  align-items: center;
}
.history li {
  height: 100%;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.history p {
  margin: 0;
  padding: 0;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.12rem;
  color: #505050;
}
.history img {
  widows: 0.67rem;
  height: 0.67rem;
}
/* history end */
.clearbtn {
  height: 0.22rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clearbtn button {
  background: #eaeaea;
  border: none;
  font-size: 0.12rem;
  color: #000;
  width: 1.2rem;
  height: 0.22rem;
}
</style>

