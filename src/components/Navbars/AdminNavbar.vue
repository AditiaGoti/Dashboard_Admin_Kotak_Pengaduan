<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        Welcome {{profileList.name}}
      </a>
      <!-- Form -->
      <!-- User -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
               <!-- <notification-dropdown /> -->
 <user-dropdown />
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

// import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import { ProfileController } from "../../controller/ProfileController";

export default {
  components: {
    UserDropdown,
    // NotificationDropdown,
    
  },
     data() {
    return {
      meta: {
          page: 1,
          size: "",
        },
      Profile: new ProfileController(false, false, ""),

    }},
     computed:{
         profileList() {
      return this.Profile.list;
    },
  },
  mounted() {
      this.profile();
      console.log(this.student,"student"); // Add this line to log the complaint data

    },
    methods: {
       async getProfile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getProfile();
    },
},
};
</script>
