<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar/>
      <header-komentar/>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import HeaderKomentar from '../components/Headers/HeaderKomentar.vue';
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";

export default {
  name: "admin-layout",
  components: {
    Sidebar,
    FooterAdmin,
    HeaderKomentar,
    AdminNavbar,
    },
};
</script>
