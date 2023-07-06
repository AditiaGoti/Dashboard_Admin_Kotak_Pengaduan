import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import 'flowbite';

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import LayoutAdmin from "@/layouts/LayoutAdmin.vue";
import LayoutMahasiswa from "@/layouts/LayoutMahasiswa.vue";
import LayoutKeluhan from "@/layouts/LayoutKeluhan.vue";
import LayoutTanggapan from "@/layouts/LayoutTanggapan.vue";
import LayoutKomentar from "@/layouts/LayoutKomentar.vue";
import LayoutProfile from "@/layouts/LayoutProfile.vue";


// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import ModerasiKeluhan from "@/views/admin/ModerasiKeluhan.vue";
import ModerasiTanggapan from "@/views/admin/ModerasiTanggapan.vue";
import TableKeluhan from "@/views/admin/TableKeluhan.vue";
import TableSemuaKeluhan from "@/views/admin/TableSemuaKeluhan.vue";
import SemuaModerasiKeluhan from "@/views/admin/TableSemuaModerasiKeluhan.vue";
import TableTanggapan from "@/views/admin/TableTanggapan.vue";
import TableSemuaTanggapan from "@/views/admin/TableSemuaTanggapan.vue";
import SemuaModerasiTanggapan from "@/views/admin/TableSemuaModerasiTanggapan.vue";
import TableAdmin from "@/views/admin/TableAdmin.vue";
import TableMahasiswa from "@/views/admin/TableMahasiswa.vue";
import TambahMahasiswa from "@/views/admin/TambahMahasiswa.vue";
import ImportMahasiswa from "@/views/admin/ImportMahasiswa.vue";
import TambahAdmin from "@/views/admin/TambahAdmin.vue";
import ImportAdmin from "@/views/admin/ImportLecturer.vue";
import TableKomentar from "@/views/admin/TableKomentar.vue";
import TableSemuaKomentar from "@/views/admin/TableSemuaKomentar.vue";
import ProfileAdmin from "@/views/admin/ProfileAdmin.vue";
import ChangePass from "@/views/admin/ChangePassword.vue";
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
    path: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
    ],
  },
  {
    path: "/admin/TambahMahasiswa",
    component: DashboardLayout,
    children: [
     
      {
        path: "/admin/TambahMahasiswa",
        component: TambahMahasiswa,
      },
      {
        path: "/admin/ImportMahasiswa",
        component: ImportMahasiswa,
      },
      
      {
        path: "/admin/TambahAdmin",
        component: TambahAdmin,
      },
      {
        path: "/admin/ImportLecturer",
        component: ImportAdmin,
      },
    ],
  },
  {
    path: "/",
    component: LayoutKeluhan,
    children: [
     
      {
        path: "/admin/keluhan",
        component: TableKeluhan,
      },
      {
        path: "/admin/semuakeluhan",
        component: TableSemuaKeluhan,
      },
      {
        path: "/admin/moderasikeluhan",
        component: ModerasiKeluhan,
      },
      {
        path: "/admin/semuamoderasikeluhan",
        component: SemuaModerasiKeluhan,
      },
    ],
  },
  {
    path: "/",
    component: LayoutTanggapan,
    children: [
     
      {
        path: "/admin/tanggapan",
        component: TableTanggapan,
      },
      {
        path: "/admin/semuatanggapan",
        component: TableSemuaTanggapan,
      },
      {
        path: "/admin/moderasitanggapan",
        component: ModerasiTanggapan,
      },
      {
        path: "/admin/moderasisemuatanggapan",
        component: SemuaModerasiTanggapan,
      },
    ],
  },
  {
    component: LayoutProfile,
    children: [
     
      {
        path: "/admin/profile",
        component: ProfileAdmin,
      },
      {
        path: "/admin/changepassword",
        component: ChangePass,
      },
    ],
  },
 
  {
    path: "/",
    component: LayoutMahasiswa,
    children: [
      {
        path: "/admin/mahasiswa",
        component: TableMahasiswa,
      },
      
    ],
  },
  {
    path: "/",
    component: LayoutKomentar,
    children: [
      {
        path: "/admin/komentar",
        component: TableKomentar,
      },
      {
        path: "/admin/semuakomentar",
        component: TableSemuaKomentar,
      },
      
    ],
  },
  {
    path: "/",
    component: LayoutAdmin,
    children: [
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
