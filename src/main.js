import Vant from "vant";
import "vant/lib/index.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.use(Vant);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
