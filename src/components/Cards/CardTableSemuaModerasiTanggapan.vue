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
              Tabel Semua Moderasi Tanggapan
            </h3>
          </div>
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
                Status
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
                  :src="feedback.avatar"
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
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal break-all p-4"
              >
              <i></i>{{feedback.message}}
                          </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <i></i>{{feedback.complaint.title}}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              {{feedback.status}}
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
                  <span class="mr-2 moderasi">Moderasi</span>
               
                </div>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
    <tr>
      <td colspan="5" class="text-center py-4">Tidak ada data</td>
    </tr>
  </tbody>
        </table>
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
        v-for="page in FeedbackData.totalPage"
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
        :disabled="page === FeedbackData.totalPage"
        :class="{ 'pointer-events-none': page === FeedbackData.totalPage }"
      >
        Next
      </a>
    </li>
  </ul>
</nav>
        <div class="toast-container"></div>
      </div>
      <div>
                  <div class="modal-backdrop" v-if="showModal"></div>
                  <div class="modal" v-if="showModal">
                    <div class="flex flex-row justify-between">
                    <p class="text-xl font-bold	text-red-500 mb-6">Moderasi Tanggapan</p>
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
                          <textarea v-model="selectedFeedback.message" class="hidden text-md text-left border-none break-words whitespace-normal h-24" disabled ></textarea>
                          <p class="text-md text-left border-none whitespace-normal">{{selectedFeedback.message}}</p>

                        </div>
                      </div>
                      <div class="flex flex-col">
                          <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Pengaduan Yang Ditanggapi </p>
                          <p class="text-md mt-1 mb-5">{{selectedFeedback.complaint.title}}</p>
                          <p class="align-middle text-xs uppercase  font-semibold text-left"> Pembuat Tanggapan </p>
                          <p class="text-md mt-1 mb-5">{{selectedFeedback.lecturer.name}}</p>
                                          <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Jabatan </p>
                          <p class="text-md mt-1 mb-5">{{selectedFeedback.lecturer.type}}</p>
                          <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Waktu Pembuatan </p>
                          <p class="text-md mt-1">{{ moment(selectedFeedback.createdAt).locale("id").format("DD-MM-YYYY") }}   
  </p>
                      </div>
                  </div>
                  <hr class="mb-5 "/>
                  <footer className="bg-white flex flex-row-reverse">
              <button class="w-fit
          py-3
          pl-4
          pr-4	
          text-l
          font-semibold
          mx-4
          rounded-md
          bg-blue-600	
          text-white
          hover:bg-blue-300"
          :onClick="publishFeedback"> 
                Publikasikan Tanggapan
              </button>
              <button class="w-fit
          py-3
          pl-4
          pr-4	
          text-l
          font-semibold
          rounded-md
          bg-red-500
          text-white
          hover:bg-red-300"
          :onClick="rejectedFeedback">
                Tolak Tanggapan
              </button>
              <!-- Button trigger modal -->
            </footer>
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
        feedback_id:"",
        message:"",
        selectedFeedback:"",
        close,
        showModal: false,
        feedback: new FeedbackController(false, false, ""),
        Profile: new ProfileController(false, false,"")
      };
    },
    computed:{
      isError() {
          return this.feedback.error;
        },
        FeedbackList() {
          return this.feedback.lists;
        },
        FeedbackData() {
          return this.feedback.data;
        },
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
    created() {
      this.FeedbackList._id = this.FeedbackList._id || ''; // Assign value to profileList.avatar
      this.FeedbackList.message = this.FeedbackList.message || '';   },
    mounted() {
        this.getFeedback();
        console.log(this.feedback,"complaint"); // Add this line to log the complaint data
        this.profile();
        this.getPageFeedback();

      },
     methods: {
      toFeedbackDetail(index) {
    this.selectedFeedback = this.FeedbackList[index];
  console.log(this.selectedFeedback, "complain selected");
  this.showModal = true;
},
    closeModal() {
      this.showModal = false;
      console.log('Modal telah ditutup'); // tambahkan console log di sini
    },
    async getFeedbackModerated(page, limit) {
          return this.feedback.getFeedbackModerated(page, limit);
        },
        async getFeedback() {
          await this.getFeedbackModerated(this.meta.page, this.meta.limit);
        },
async goToPreviousPage() {
        if (this.meta.page > 1) {
          this.meta.page--;
          await this.getFeedbackSuperPageByStatus(this.meta.page, this.meta.limit);
        }
      },

      async goToNextPage() {
          this.meta.page++;
          await this.getFeedbackSuperPageByStatus(this.meta.page, this.meta.limit);
          console.log(this.meta.page, this.meta.limit,"page")  
      },
      async getFeedbackSuperPageByStatus(page, limit) {
        return this.feedback.getFeedbackSuperPageByStatus(page, limit);
      },
      async goToPage(page) {
        this.meta.page = page;
        await this.getFeedbackSuperPageByStatus(this.meta.page, this.meta.limit);
      },
      async getPageFeedback() {
        this.meta.page = 1;
        await this.getFeedbackSuperPageByStatus(this.meta.page, this.meta.limit);
      },
          async publishFeedback() {
    await this.feedbackPublish(
      this.FeedbackList[0]._id,
      this.FeedbackList[0].message,
    ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Tanggapan Berhasil di Publikasi";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          this.showModal =  false,

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/admin/tanggapan");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Moderasi Tanggapan ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
  },
  async feedbackPublish(feedback_id, message) {
    return this.feedback.feedbackPublish(feedback_id, message);
  },
  async rejectedFeedback() {
    await this.feedbackRejected(
      this.FeedbackList[0]._id,
    ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Menolak Tanggapan ";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          this.showModal =  false,

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/admin/tanggapan");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Menolak Tanggapan ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
  },
  async feedbackRejected(feedback_id) {
    return this.feedback.feedbackRejected(feedback_id);
  },
  async getAllFeedbackModerated(page, limit) {
          return this.feedback.getAllFeedbackModerated(page, limit);
        },
        async getFeedbackSuper() {
          await this.getAllFeedbackModerated(this.meta.limit, this.meta.limit);
        },
        async getProfile() {
        return this.Profile.getProfile();
      },
      async profile() {
        await this.getProfile();
      },
  
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
    height: fit-content;
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
  .toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
  }
  
  .toast {
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    opacity: 0.9;
  }
  
  .toast-success {
    background-color: #2ecc71;
  }
  .toast-error {
    background-color: red;
  }
  </style>