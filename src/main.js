import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import ModerasiKeluhan from "@/views/admin/ModerasiKeluhan.vue";
import ModerasiTanggapan from "@/views/admin/ModerasiTanggapan.vue";
import TableKeluhan from "@/views/admin/TableKeluhan.vue";
import TableTanggapan from "@/views/admin/TableTanggapan.vue";
import TableAdmin from "@/views/admin/TableAdmin.vue";
import TableMahasiswa from "@/views/admin/TableMahasiswa.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
// import Index from "@/views/Index.vue";

// routes

const routes = [
  {
    path: "/",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/keluhan",
        component: TableKeluhan,
      },
      {
        path: "/admin/moderasikeluhan",
        component: ModerasiKeluhan,
      },
      {
        path: "/admin/tanggapan",
        component: TableTanggapan,
      },
      {
        path: "/admin/moderasitanggapan",
        component: ModerasiTanggapan,
      },
      {
        path: "/admin/mahasiswa",
        component: TableMahasiswa,
      },
      {
        path: "/admin/admin",
        component: TableAdmin,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
