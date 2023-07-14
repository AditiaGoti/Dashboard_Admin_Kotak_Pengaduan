<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        to="/"
      >
        KOTAK PENGADUAN JTIK
      </router-link>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                KOTAK PENGADUAN JTIK
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link
              to="/admin/dashboard"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-tv mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Dashboard
              </a>
            </router-link>
          </li>
          <div v-if="[1,2,5].includes(profileList.lecturer_type)" class="items-center">
  <div>
    <div @click="toggleDropdown" 
    class="cursor-pointer text-xs uppercase py-3 font-bold block"
    :class="[isActive  ? 'text-blue-500 hover:text-blue-600' : 'text-blueGray-700 hover:text-blueGray-500']"
>
      <i
        class="fas fa-tools mr-2 text-sm"
        :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"

      ></i>
      Moderasi Pengaduan
 <i
        v-if="isDropdownOpen"
        class="fas fa-chevron-up ml-2"
      ></i>
      <i
        v-else
        class="fas fa-chevron-down ml-2"
      ></i>    </div>
    <ul v-if="isDropdownOpen" class="ml-5">
      <li v-if="isDropdownOpen">
        <router-link
          to="/admin/moderasikeluhan"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :href="href"
            @click="navigate"
            class="text-xs uppercase py-3 font-bold block"
            :class="[
              isActive
                ? 'text-blue-500 hover:text-blue-600'
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
          <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
            Moderasi Pengaduan
          </a>
        </router-link>
      </li>
      <li v-if="isDropdownOpen">
        <router-link
          to="/admin/semuamoderasikeluhan"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :href="href"
            @click="navigate"
            class="text-xs uppercase py-3 font-bold block"
            :class="[
              isActive
                ? 'text-blue-500 hover:text-blue-600'
                : 'text-blueGray-700 hover:text-blueGray-500',
            ]"
          >
          <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
            Moderasi Semua Pengaduan
          </a>
        </router-link>
      </li>
    </ul>
  </div>
          </div>
          <div v-if="[1, 2, 3, 4,5,6,7,8,9,10].includes(profileList.lecturer_type)" class="items-center">
            <div>
    <div @click="toggleDropdownkeluhan" 
    class="cursor-pointer text-xs uppercase py-3 font-bold block"
    :class="[isActive  ? 'text-blue-500 hover:text-blue-600' : 'text-blueGray-700 hover:text-blueGray-500']"
>
      <i
        class="fas fa-tools mr-2 text-sm"
        :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"

      ></i>
      Pengaduan
 <i
        v-if="isDropdownKeluhanOpen"
        class="fas fa-chevron-up ml-2"
      ></i>
      <i
        v-else
        class="fas fa-chevron-down ml-2"
      ></i>    </div>
    <ul v-if="isDropdownKeluhanOpen" class="ml-5">
      <li  class="items-center">
            <router-link
              to="/admin/keluhan"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Pengaduan
              </a>
            </router-link>
          </li>
          
          <li class="items-center">
            <router-link
              to="/admin/semuakeluhan"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
               Semua Pengaduan
              </a>
            </router-link>
          </li>
    </ul>
  </div>
          </div>
          <div v-else>
            <li class="items-center">
            <router-link
              to="/admin/keluhan"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Pengaduan
              </a>
            </router-link>
          </li>
          </div>
                          <div v-if="[1, 2, 3, 4,5,6,7,8,9,10].includes(profileList.lecturer_type)" class="items-center">
                          <div>
    <div @click="toggleDropdownTanggapan" 
    class="cursor-pointer text-xs uppercase py-3 font-bold block"
    :class="[isActive  ? 'text-blue-500 hover:text-blue-600' : 'text-blueGray-700 hover:text-blueGray-500']"
>
      <i
        class="fas fa-tools mr-2 text-sm"
        :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"

      ></i>
      Tanggapan
 <i
        v-if="isDropdownTanggapanOpen"
        class="fas fa-chevron-up ml-2"
      ></i>
      <i
        v-else
        class="fas fa-chevron-down ml-2"
      ></i>    </div>
    <ul v-if="isDropdownTanggapanOpen" class="ml-5">
                <li  v-if="isDropdownTanggapanOpen" class="items-center">
            <router-link
              to="/admin/tanggapan"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Tanggapan
              </a>
            </router-link>
          </li>
          <li  v-if="isDropdownTanggapanOpen" class="items-center">
            <router-link
              to="/admin/semuatanggapan"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Semua Tanggapan
              </a>
            </router-link>
          </li>
    </ul>
  </div>
          </div>
          <div v-else>
            <li class="items-center">
            <router-link
              to="/admin/tanggapan"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Tanggapan
              </a>
            </router-link>
          </li>
          </div>
                          <div v-if="[1, 2, 3, 4,5,6,7,8,9,10].includes(profileList.lecturer_type)" class="items-center">
                <div>
    <div @click="toggleDropdownKomentar" 
    class="cursor-pointer text-xs uppercase py-3 font-bold block"
    :class="[isActive  ? 'text-blue-500 hover:text-blue-600' : 'text-blueGray-700 hover:text-blueGray-500']"
>
      <i
        class="fas fa-tools mr-2 text-sm"
        :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"

      ></i>
      Komentar
 <i
        v-if="isDrodownKomentarOpen"
        class="fas fa-chevron-up ml-2"
      ></i>
      <i
        v-else
        class="fas fa-chevron-down ml-2"
      ></i>    </div>
    <ul v-if="isDrodownKomentarOpen" class="ml-5">
 <li         v-if="isDrodownKomentarOpen"
 class="items-center" >
            <router-link
              to="/admin/komentar"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                     ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Komentar
              </a>
            </router-link>
          </li>
          <li         v-if="isDrodownKomentarOpen"
 class="items-center" >
            <router-link
              to="/admin/semuakomentar"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                     ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Semua Komentar
              </a>
            </router-link>
          </li>
    </ul>
  </div>
          </div>
          <div v-else>
            <li class="items-center" >
            <router-link
              to="/admin/komentar"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-table mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Komentar
              </a>
            </router-link>
          </li>
          </div>
          <div v-if="[1, 2, 3, 4,5,6,7,8,9,10].includes(profileList.lecturer_type)" class="items-center">
          <li class="items-center">
            <router-link to="/admin/admin" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-users mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Dosen
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link to="/admin/mahasiswa" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-users mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Mahasiswa
              </a>
            </router-link>
          </li>
          </div>
          <div v-else>

          </div>
        </ul>

        
        
      </div>
    </div>
  </nav>
</template>
); }

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import { ProfileController } from "../../controller/ProfileController";

export default {
  components:{
      NotificationDropdown,
    UserDropdown,
  },
  data() {
    return {
      collapseShow: "hidden",
      Profile: new ProfileController(false, false, ""),
      lecturerTypes: [1, 2, 3, 5, 6, 7, 8, 9],
      moderateTypes: [1, 4, 10, 11, 12, 13],
      isDropdownOpen: false,
      isDropdownModerasiTanggapanOpen:false,
      isDropdownKeluhanOpen:false,
      isDrodownKomentarOpen:false,
      isDropdownTanggapanOpen:false,
    };
  },
  mounted() {
      this.profile();
      console.log(this.Profile,"profile"); // Add this line to log the complaint data

    },
  computed: {
    isError() {
      return this.Profile.error;
    },
    profileList() {
      return this.Profile.list;
    },
    errorCause() {
      return this.Profile.errorCause;
    },

    isLoading() {
      return this.Profile.loading;
    },
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
    toggleDropdown(){
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleDropdownModerasiTanggapan(){
      this.isDropdownModerasiTanggapanOpen = !this.isDropdownModerasiTanggapanOpen;
    },
    toggleDropdownkeluhan(){
      this.isDropdownKeluhanOpen = !this.isDropdownKeluhanOpen;
    },
    toggleDropdownTanggapan(){
      this.isDropdownTanggapanOpen = !this.isDropdownTanggapanOpen;
    },
    toggleDropdownKomentar(){
      this.isDrodownKomentarOpen = !this.isDrodownKomentarOpen;
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
