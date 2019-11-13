<template>
  <div class="box">
    <div class="right">
      <div class="youxia">
        <router-link :to="{name:'Flower'}">
          <div class="leixing">
            <img src="http://img3.imgtn.bdimg.com/it/u=1579398738,2658105675&fm=26&gp=0.jpg" />
            <p>鲜花</p>
          </div>
        </router-link>
        <div class="leixing">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2083173536,1784392231&fm=26&gp=0.jpg"
          />
          <p>商务鲜花</p>
        </div>
        <div class="leixing">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1412484665,2084935353&fm=26&gp=0.jpg"
          />
          <p>永生花</p>
        </div>
        <router-link :to="{name:'Cake'}">
          <div class="leixing">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1278761082,1577675370&fm=26&gp=0.jpg"
            />
            <p>蛋糕</p>
          </div>
        </router-link>
        <div class="leixing">
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=378033421,1471967520&fm=26&gp=0.jpg"
          />
          <p>特色礼品</p>
        </div>
        <router-link :to="{name:'Choc'}">
          <div class="leixing">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3408161082,820992522&fm=26&gp=0.jpg"
            />
            <p>巧克力</p>
          </div>
        </router-link>
        <div class="leixing">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3054546698,3168565272&fm=15&gp=0.jpg"
          />
          <p>品牌公仔</p>
        </div>
        <div class="leixing">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=300405598,148589596&fm=26&gp=0.jpg"
          />
          <p>礼篮</p>
        </div>
        <div class="leixing">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2123732648,690894820&fm=26&gp=0.jpg"
          />
          <p>绿植花卉</p>
        </div>
        <div class="leixing">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=979543800,3331715175&fm=15&gp=0.jpg"
          />
          <p>设计师鲜花</p>
        </div>
        <div class="leixing">
          <img src="http://img3.imgtn.bdimg.com/it/u=1579398738,2658105675&fm=26&gp=0.jpg" />
          <p>企业团购</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.box {
  font-size: 0.12rem;
}
.right {
  width: 2.44rem;
  height: 5.09rem;
  margin-right: 0.18rem;
  float: right;
}
.youshang {
  width: 2.44rem;
  height: 1.18rem;
}
.youshang img {
  width: 2.44rem;
  height: 0.8rem;
  background-color: #d9d9d9;
  margin-top: 0.09rem;
}
.youshang h4 {
  margin: 0;
  line-height: 0.26rem;
  font-weight: normal;
}
.youxia {
  width: 2.44rem;
  height: 3.9rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.youxia .leixing {
  width: 0.5rem;
  height: 0.72rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.leixing > p {
  margin: 0.04rem 0 0 0;
}
.leixing > img {
  width: 0.5rem;
  height: 0.5rem;
}
.leixing:nth-child(2),
.leixing:nth-child(5),
.leixing:nth-child(8),
.leixing:nth-child(11) {
  margin: 0 0.47rem;
}
</style>