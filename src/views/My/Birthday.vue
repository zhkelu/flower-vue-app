<template>
  <div class="box">
    <van-nav-bar title="添加提醒" left-arrow @click-left="$router.go(-1)" />
    <van-tabs
      id="luo"
      type="card"
     
      color="rgba(245, 87, 55, 1)"
      background="#fff"
    
    
    >
      <van-tab title="生日">
        <van-cell-group>
          <van-field v-model="name" type="input"  label="姓名" placeholder="请输入姓名"  />
          <van-radio-group v-model="radio" shape="square">
            <div style="float: left;font-size:0.14rem;margin:0 0.6rem 0 0.16rem;">
              性别
            </div>
            <van-radio name="1" style="float: left; font-size:0.14rem; ">男</van-radio>     
            <van-radio name="2" style="float: left;margin-left:0.3rem ; font-size:0.14rem;">女</van-radio>
          </van-radio-group>
          <van-field v-model="birthday" type="input" label="生日" placeholder="点击设置生日"  />
          <van-field v-model="tixing" type="input" label="提醒" placeholder="当天+提前一天+提前三天 邮箱+短信"/>
           <van-field v-model="benzhu" type="input" label="备注" placeholder="指定餐厅 购买礼物"  />
        </van-cell-group>
        <van-button color="rgba(245, 87, 55, 1)" size='large'>保存</van-button>
      </van-tab>
      <van-tab title="纪念日">
          <van-cell-group>
          <van-field v-model="name" type="input"  label="姓名" placeholder="请输入姓名"  />
          <van-radio-group v-model="radio" shape="square">
            <div style="float: left;font-size:0.14rem;margin:0 0.6rem 0 0.16rem;">
              性别
            </div>
            <van-radio name="1" style="float: left; font-size:0.14rem;">男</van-radio>     
            <van-radio name="2" style="float: left;margin-left:0.3rem;font-size:0.14rem; ">女</van-radio>
          </van-radio-group>
          <van-field v-model="leibie" type="input" label="类别" placeholder="选择常见纪念日或自己输入"  />
          <van-field v-model="jinianr" type="input" label="纪念日" placeholder="点击设置纪念日"/>
           <van-field v-model="tixing" type="input" label="提醒" placeholder="当天+提前一天+提前三天 邮箱+短信"/>
           <van-field v-model="benzhu" type="input" label="备注" placeholder="指定餐厅 购买礼物"  />
        </van-cell-group>
        <van-button color="rgba(245, 87, 55, 1)" size='large'>保存</van-button>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  onClickLeft() {
    Toast("返回");
  },
  onClickRight() {
    Toast("按钮");
  },
  data() {
    return {
      name:'',
      radio: "1",
      birthday:'',
      tixing:'',
      benzhu:'',
      leibie:'',
      jinianr:'',
    };
  }
};
</script>
