<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg "
          >
            Tabel Tanggapan
          </h3>
        </div>
        <!-- <div v-if="(lecturer === 1 || lecturer === 2 || lecturer === 3 || lecturer === 5 || lecturer === 6 || lecturer === 7 || lecturer === 8 || lecturer === 9)"> -->
<form class="flex items-center" @submit.prevent="feedbackSearch" >   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" v-model="message" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" >
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
<!-- </div>
<div v-else>  -->
  <!-- <form class="flex items-center" @submit.prevent="feedbackSuperSearch" >   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" v-model="message" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" >
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
</div> -->

      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Pembuat Tanggapan
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Isi Tanggapan
            </th>
            <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
               Judul Pengaduan
              </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Waktu
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Aksi
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody v-if="FeedbackList.length > 0">
          <tr v-for="(feedback,index) in FeedbackList" :key="feedback._id">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
            <img
                :src="feedback.lecturer.avatar"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-2 font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
              {{feedback.lecturer.name}} 
                  </span>
            </th>
             <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4"
            >
            <i></i>{{feedback.message}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4"
            >
                <i></i> {{feedback.complaint.title}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            {{ moment(feedback.createdAt).locale("id").format("DD-MM-YYYY") }}   
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center mouse-pointer" @click="toFeedbackDetail(index)">
                <span class="mr-2 moderasi">Lihat Detail</span>
              </div>
              </td>
          </tr>
        </tbody>
        <tbody v-else>
    <tr>
      <td colspan="5" class="text-center py-4">Tidak ada data</td>
    </tr>
  </tbody>
  <div>
              </div>
      </table>
      <div class="toast-container"></div>
<!-- <div v-if="(lecturer === 1 || lecturer === 2 || lecturer === 3 || lecturer === 5 || lecturer === 6 || lecturer === 7 || lecturer === 8 || lecturer === 9)"> -->
      <!-- <nav class="text-center py-3">
  <ul class="list-style-none flex px-3 justify-between mb-3">
    <li>
      <a
        class="relative block cursor-pointer rounded bg-blue-600 px-3 py-1.5 text-sm text-white font-bold transition-all duration-300 hover:bg-blue-400"
        @click="goToPreviousPage"
        :disabled="meta.page === 1"
        :class="{ 'cursor-pointer-none': meta.page === 1 }"
      >
        Previous
      </a>
    </li>
    <li class="px-3 mt-1 max-w overflow-x-scroll">
      <a
        class="rounded overflow-x-scroll px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200  hover:text-black"
        v-for="page in feedbackSuperData.totalPage"
        :key="page"
        :class="{ 'bg-blue-600 font-bold text-white': page === meta.page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </a>
    </li>
    <li>
      <a
        class="relative block cursor-pointer rounded bg-blue-600 px-3 py-1.5 text-sm text-white font-bold transition-all duration-300 hover:bg-blue-400"
        @click="goToNextPageSuper"
        :disabled="page === feedbackSuperData.totalPage"
        :class="{ 'pointer-events-none': page === feedbackSuperData.totalPage }"
      >
        Next
      </a>
    </li>
  </ul>
</nav> -->
      <!-- </div> -->
      <!-- <div v-else> -->
        <nav class="text-center py-3">
  <ul class="list-style-none flex px-3 justify-between mb-3">
    <li>
      <a
        class="relative block cursor-pointer rounded bg-blue-600 px-3 py-1.5 text-sm text-white font-bold transition-all duration-300 hover:bg-blue-400"
        @click="goToPreviousPage"
        :disabled="meta.page === 1"
        :class="{ 'cursor-pointer-none': meta.page === 1 }"
      >
        Previous
      </a>
    </li>
    <li class="px-3 mt-1 max-w overflow-x-scroll">
      <a
        class="rounded overflow-x-scroll px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200  hover:text-black"
        v-for="page in feedbackData.totalPage"
        :key="page"
        :class="{ 'bg-blue-600 font-bold text-white': page === meta.page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </a>
    </li>
    <li>
      <a
        class="relative block cursor-pointer rounded bg-blue-600 px-3 py-1.5 text-sm text-white font-bold transition-all duration-300 hover:bg-blue-400"
        @click="goToNextPage"
        :disabled="page === feedbackData.totalPage"
        :class="{ 'pointer-events-none': page === feedbackData.totalPage }"
      >
        Next
      </a>
    </li>
  </ul>
</nav>
      <!-- </div> -->
                      <div class="modal-backdrop" v-if="showModal"></div>
                <div class="modal" v-if="showModal">
                  <div class="flex flex-row justify-between">
                  <p class="text-xl font-bold	text-red-500 mb-6">Detail Tanggapan</p>
                  <div>
                          <img
                            :src="close"
                            class="h-8 w-8 cursor-pointer"
                            alt="..."
                            @click="closeModal()"
                          />
                  </div>
                  </div>  
                  <div class="grid grid-cols-2 mb-4" >
                    <div class="flex flex-col">
                         <div class="mr-4 h-64 overflow-auto">
                        <input v-model="selectedFeedback._id" type="textarea" class="hidden text-md text-left border-none break-words whitespace-normal mb-5" disabled />
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Isi Tanggapan </p>
                        <!-- <input v-model="FeedbackList[0].message" type="textarea" class="hidden text-md text-left border-none break-words whitespace-normal mb-5" disabled /> -->
                        <p class="text-md mt-1 break-words whitespace-normal">{{selectedFeedback.message }} </p>
                      </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Pengaduan Yang Ditanggapi </p>
                        <p class="text-md mt-1 mb-5 break-words whitespace-normal">{{selectedFeedback.complaint.title }}</p>
                        <p class="align-middle text-xs uppercase  font-semibold text-left"> Pembuat Tanggapan </p>
                        <p class="text-md mt-1 mb-5">{{selectedFeedback.lecturer.name}}</p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Jabatan </p>
                        <p class="text-md mt-1 mb-5">{{selectedFeedback.lecturer.name}}</p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Waktu Pembuatan </p>
                        <p class="text-md mt-1">{{ moment(selectedFeedback.createdAt).locale("id").format("DD-MM-YYYY") }}   
</p>
                    </div>
                </div>
                <hr class="mb-5 "/>
          <div v-if="[1, 2, 5].includes(profileList.lecturer_type)" class="items-center">
                <footer className="bg-white flex flex-row-reverse">
            <button class="w-fit
        py-3
        pl-4
        pr-4	
        text-l
        font-semibold
        mx-4
        rounded-md
        bg-red-500	
        text-white
        hover:bg-red-300"
        @click="deletedFeedback(selectedFeedback._id)"> 
              Hapus Tanggapan
            </button>
            <!-- Button trigger modal -->
          </footer>
                      </div>
                </div>
    </div>
  </div>
</template>
<script>

import bootstrap from "@/assets/img/bootstrap.jpg";
import close from "@/assets/img/x.svg";
import {FeedbackController} from "../../controller/FeedbackController"
import moment from 'moment';
import { ProfileController } from "../../controller/ProfileController";

export default {
  data() {
    return {
      moment: moment,
      meta: {
          page: 1,
          limit: 25,
        },
      bootstrap,
      close,
      selectedFeedback: null,
      showModal: false,
      Profile: new ProfileController(false, false, ""),
      feedback: new FeedbackController(false, false, ""),
    };
  },
  computed:{
    isError() {
        return this.feedback.error;
      },
      FeedbackList() {
        return this.feedback.lists;
      },
      feedbackData() {
        return this.feedback.data;
      },
      // FeedbackSuperList() {
      //   return this.feedback.lists;
      // },
      // feedbackSuperData(){
      //   return this.feedback.data;
      // },
      errorCause() {
        return this.feedback.errorCause;
      },
  
      isLoading() {
        return this.feedback.loading;
      },
      profileList() {
      return this.Profile.list;
    },
  },
  mounted() {
      this.getFeedback();
      // this.getFeedbackSuper();
      this.profile();
      this.getPageFeedback();

      console.log(this.feedback,"complaint"); // Add this line to log the complaint data

    },
   methods: {
  closeModal() {
    this.showModal = false;
    console.log('Modal telah ditutup'); // tambahkan console log di sini
  },
  toFeedbackDetail(index) {
    this.selectedFeedback = this.FeedbackList[index];
  console.log(this.selectedFeedback, "feedback selected");
  this.showModal = true;
},

  async getFeedbackList(page, limit) {
        return this.feedback.getFeedbackList(page, limit);
      },
      async getFeedback() {
        await this.getFeedbackList(this.meta.page, this.meta.limit);
      },
      async goToPreviousPage() {
        if (this.meta.page > 1) {
          this.meta.page--;
          await this.getFeedbackSuperPage(this.meta.page, this.meta.limit);
        }
      },

      async goToNextPage() {
          this.meta.page++;
          await this.getFeedbackPage(this.meta.page, this.meta.limit);
          console.log(this.meta.page, this.meta.limit,"page")  
      },
      async getFeedbackPage(page, limit) {
        return this.feedback.getFeedbackPage(page, limit);
      },
      async goToPage(page) {
        this.meta.page = page;
        await this.getFeedbackPage(this.meta.page, this.meta.limit);
      },
      async getPageFeedback() {
        this.meta.page = 1;
        await this.getFeedbackPage(this.meta.page, this.meta.limit);
      },
      async getProfile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getProfile();
    },
    async deletedFeedback(feedback_id) {
        await this.feedbackDeleted(
          feedback_id
          ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Menghapus Tanggapan";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          this.showModal =  false,

          setTimeout(() => {
            toastContainer.removeChild(toast);
            window.location.reload()
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Menghapus Tanggapan ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
},
    async feedbackDeleted(feedback_id) {
      return this.feedback.feedbackDeleted(
        feedback_id,
       
      );
    },
    async getFeedbackbyMessage (message) {
  if (!message) {
    return this.getFeedbackList();
  } else {
  return this.feedback.getFeedbackbyMessage(message);
  }
},
async feedbackSearch() {
  if (!this.message) {
    return this.getFeedbackList();
  } else {
   try {
  await this.getFeedbackMessage(this.message);
    }
    catch(error){
      if(this.errorCause === "Data tidak ditemukan!"){
        console.error(error);
          this.errorMessage = "Data Tidak Ditemukan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);   
      }

    }
  }},


},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
td:hover .moderasi {
  color: blue;
  cursor: pointer;
}
</style>