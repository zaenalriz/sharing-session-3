import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsViews from "../views/ProductsViews.vue";
import LoginView from "../views/LoginView.vue";
import MyClassView from "../views/MyClassView.vue";
import ProfileView from "../views/ProfileView.vue";
import RegisterView from "../views/RegisterView.vue";
import NotFound from "../views/NotFound.vue";

import axios from "axios";
import Cookies from "js-cookie";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },

    {
      path: "/detail-products/:id",
      name: "detail_products",
      component: "",
    },
    {
      path: "/products",
      name: "products",
      component: ProductsViews,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/myclass",
      name: "myclass",
      component: MyClassView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Periksa status otentikasi di sini, misalnya dari cookie atau token
    const isAuthenticated = Cookies.get("X-TOKEN-APP");
    if (!isAuthenticated)
      next({
        path: "/login",
      });
    // Redirect ke halaman login jika tidak terotentikasi
    else next(); // Lanjutkan navigasi jika terotentikasi
  } else {
    next(); // Lanjutkan navigasi untuk rute yang tidak memerlukan otentikasi
  }
});

export default router;
