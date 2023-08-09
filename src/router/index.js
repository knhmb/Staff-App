import { createRouter, createWebHistory } from "@ionic/vue-router";

import CreateAccount from "../pages/CreateAccount.vue";
import Tabs from "../components/Tabs.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../pages/ForgotPassword.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("../pages/ResetPassword.vue"),
  },
  {
    path: "/storage",
    name: "Storage",
    component: () => import("../pages/Storage.vue"),
  },
  {
    path: "/storage-list",
    name: "StorageList",
    component: () => import("../pages/StorageList.vue"),
  },
  {
    path: "/stock-management",
    name: "StockManagement",
    component: () => import("../pages/StockManagement.vue"),
  },
  {
    path: "/stock-management-add",
    name: "StockManagementAdd",
    component: () => import("../pages/StockManagementAdd.vue"),
  },
  {
    path: "/stock-management/:id",
    name: "StockManagementDetail",
    component: () => import("../pages/StockManagementDetails.vue"),
  },
  {
    path: "/sales-record",
    name: "SalesRecord",
    component: () => import("../pages/SalesRecord.vue"),
  },
  {
    path: "/profile",
    name: "Account",
    component: () => import("../pages/Account.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: () => import("../pages/EditProfile.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: () => import("../pages/ChangePassword.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },

  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../pages/PrivacyPolicy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "TermsConditions",
    component: () => import("../pages/TermsConditions.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("../pages/AboutUs.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../pages/ContactUs.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "tab1",
        component: () => import("../pages/CreateAccount.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
