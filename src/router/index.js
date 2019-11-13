import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { navShow: true },
  },
  {
    path: "/fenlei",
    name: "fenlei",
    component: () => import("../views/fenlei.vue"),
    redirect: "changyong",
    meta: { navShow: true },

    children: [
      {
        path: "/changyong",
        component: () => import("../views/fenlei/changyong.vue"),
        name: "changyong",
        meta: { navShow: true }
      },
      {
        path: "xianhua",
        component: () => import("../views/fenlei/xianhua.vue"),
        name: "xianhua",
        meta: { navShow: true }
      },
      {
        path: "dangao",
        component: () => import("../views/fenlei/dangao.vue"),
        name: "dangao",
        meta: { navShow: true }
      },
      {
        path: 'qiaokeli',
        component: () => import('../views/fenlei/qiaokeli.vue'),
        name: 'qiaokeli',
        meta: { navShow: true },
      },

    ],



  }, {
    path: '/cart',
    component: () => import('../views/cart.vue'),
    name: 'cart',
    meta: { navShow: true },
  }, {
    path: '/my',
    component: () => import('../views/my.vue'),
    name: 'my',
    meta: { navShow: true },
  }, {
    path: '/More',
    component: () => import('../views/My/More.vue'),
    name: 'More',
    meta: { navShow: false },
  }, {
    path: '/Birthday',
    component: () => import('../views/My/Birthday.vue'),
    name: 'Birthday',
    meta: { navShow: false },
  }, {
    path: '/Pay',
    component: () => import('../views/My/Pay.vue'),
    name: 'Pay',
    meta: { navShow: false },
  }, {
    path: '/Allorder',
    component: () => import('../views/My/Allorder.vue'),
    name: 'Allorder',
    meta: { navShow: false },
  }, {
    path: '/Delivery',
    component: () => import('../views/My/Delivery.vue'),
    name: 'Delivery',
    meta: { navShow: false },
  }, {
    path: '/Evaluate',
    component: () => import('../views/My/Evaluate.vue'),
    name: 'Evaluate',
    meta: { navShow: false },
  }, {
    path: '/Collection',
    component: () => import('../views/My/Collection.vue'),
    name: 'Collection',
    meta: { navShow: false },
  }, {
    path: '/Service',
    component: () => import('../views/My/Service.vue'),
    name: 'Service',
    meta: { navShow: false },
  }, {
    path: '/Account',
    component: () => import('../views/My/Account.vue'),
    name: 'Account',
    meta: { navShow: false },
  },
  {
    path: '/register',
    component: () => import('../views/dengluzhuce/register.vue'),
    name: 'register',
    meta: { navShow: false },
  },
  {

    path: '/Signin',
    component: () => import('../views/dengluzhuce/Signin.vue'),
    name: 'Signin',
    meta: { navShow: false },

  }, {
    path: '/denglu',
    component: () => import('../views/dengluzhuce/denglu.vue'),
    name: 'denglu',
    meta: { navShow: false },
  }, {
    path: '/zhanghao',
    component: () => import('../views/dengluzhuce/zhanghao.vue'),
    name: 'zhanghao',
    meta: { navShow: false },
  }, {
    path: '/Account/Consignee',
    component: () => import('../views/My/Consignee.vue'),
    name: 'Consignee',
    meta: { navShow: false },
  }, {
    path: '/Jiesuan',
    component: () => import('../views/Carts/Jiesuan.vue'),
    name: 'Jiesuan',
    meta: { navShow: false },
  }, {
    path: "/Search",
    name: "Search",
    component: () => import("../views/Home/Search.vue"),
    meta: { navShow: false },
  },
  {
    path: `/Detail/:id`,
    name: "Detail",
    component: () => import("../views/Home/Detail.vue"),
    meta: { navShow: false },
  },
  {
    path: "/Cake",
    name: "Cake",
    component: () => import("../views/Home/Cake.vue"),
    meta: { navShow: false },
  },
  {
    path: "/Choc",
    name: "Choc",
    component: () => import("../views/Home/Choc.vue"),
    meta: { navShow: false },
  },
  {
    path: "/Flower",
    name: "Flower",
    component: () => import("../views/Home/Flower.vue"),
    meta: { navShow: false },
  }
];

const router = new VueRouter({
  routes
});

export default router;
