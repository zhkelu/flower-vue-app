<template>
  <div class="box">
    <div class="right">
      <div class="youxia">
        <div class="leixing">
          <img src="../../assets/x1.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x2.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x3.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x4.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x5.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x6.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x7.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x8.jpg" />
          <p>鲜花</p>
        </div>
        <div class="leixing">
          <img src="../../assets/x9.jpg" />
          <p>鲜花</p>
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