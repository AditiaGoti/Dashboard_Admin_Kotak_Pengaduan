<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
        >
          <img
            class="w-full rounded-full align-middle border-none shadow-lg"
            :src="profileList.avatar"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
    <a
        class="text-sm py-2 px-4 font-bold block w-full whitespace-normal hover:bg-gray-200  bg-transparent text-blueGray-700"
      >
{{profileList.name}}      </a>
    <router-link to="/admin/profile">
      <a
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-200 text-blueGray-700"
      >
        Profile
      </a>
    </router-link>
      <router-link to="/admin/changepassword">
      <a
        class="text-sm py-2 px-4 font-normal block w-full whitespace-normal hover:bg-gray-200 bg-transparent text-blueGray-700"
      >
        Change Password
      </a>
      </router-link>
      
      <!-- <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Something else here
      </a> -->
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <a
        :onClick="logout"
        class="text-sm py-2 px-4 cursor-pointer font-normal block w-full whitespace-nowrap hover:bg-gray-200 bg-transparent text-blueGray-700"
      >
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import image from "@/assets/img/team-1-800x800.jpg";
import { ProfileController } from "../../controller/ProfileController";
import { removeAuth } from "../..//Utils/localstorage";

export default {
  data() {
    return {
      meta: {
          page: 1,
          size: "",
        },
      dropdownPopoverShow: false,
      image: image,
      Profile: new ProfileController(false,false,""),
    };
  },
  computed:{
         profileList() {
      return this.Profile.list;
    },
  },
  mounted() {
      this.profile();
    },
    methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    logout() {
      this.loadingStatus = true;
      setTimeout(() => {
      removeAuth()
      this.$router.push("/auth/login");
          }, 3500);
      localStorage.clear();
      

    },
      async getProfile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getProfile();
    },
  },
};
</script>
