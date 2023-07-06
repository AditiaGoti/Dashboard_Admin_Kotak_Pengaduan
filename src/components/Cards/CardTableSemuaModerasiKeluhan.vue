<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg"
              :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
            >
              Tabel Moderasi Keluhan
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
                Judul Keluhan
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Pembuat Keluhan
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Tujuan
              </th>
              <th
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                Kategori
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
          <tbody  v-if="ComplaintList.length > 0">
            <tr  v-for="(complaint, index) in ComplaintList" :key="complaint._id">
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
              >
                <span
                  class="font-bold"
                  :class="[
                    color === 'light' ? 'text-blueGray-600' : 'text-white',
                  ]"
                >
                {{complaint.title}}             
               </span>
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              {{complaint.createdBy}}             
  
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <i></i>{{complaint.division}}             
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <i></i>{{complaint.category}}    
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
              {{ moment(complaint.createdAt).locale("id").format("DD-MM-YYYY") }}   
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
              >
                <div class="flex items-center mouse-pointer" @click="toComplaintDetail(index)">
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
          <nav class="text-center">
  <ul class="list-style-none flex px-3 justify-between mb-3">
    <li>
      <a
        class="relative block cursor-pointer rounded bg-blue-600 px-3 py-1.5 text-sm text-white font-bold transition-all duration-300 hover:bg-blue-400"
        @click="goToPreviousPage"
        :disabled="meta.page === 1"
        :class="{ 'pointer-events-none': meta.page === 1 }"
      >
        Previous
      </a>
    </li>
    <li class="px-3 mt-1 max-w overflow-x-scroll">
      <a
        class="rounded overflow-x-scroll px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200  hover:text-black"
        v-for="page in complaintData.totalPage"
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
        :disabled="page === complaintData.totalPage"
        :class="{ 'pointer-events-none': page === complaintData.totalPage }"
      >
        Next
      </a>
    </li>
  </ul>
</nav>
        <div class="toast-container"></div>
      </div>
    <div class="modal-backdrop" v-if="showModal"></div>
    <div v-if="showModal">
                <div class="modal-backdrop"></div>
                <div class="modal">
                  <div class="flex flex-row justify-between">
                  <p class="text-xl font-bold	text-red-500 mb-6">Moderasi Keluhan</p>
                  <div>
                          <img
                            :src="close"
                            class="h-8 w-8 cursor-pointer"
                            alt="..."
                            @click="showModal = false"
                          />
                  </div>
                  </div>  
                <div class="grid grid-cols-2 mb-4" >
                    <div class="flex flex-col">
                         <div class="mr-4">
                        <input v-model="selectedComplaint._id" type="textarea" class="hidden text-md text-left border-none break-words whitespace-normal mb-5" disabled />
                      <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Judul Keluhan </p>
                        <input v-model="selectedComplaint.title" type="textarea" class="hidden text-md text-left border-none break-words whitespace-normal mb-5" disabled />
                        <p type="textarea" class="text-md text-left border-none break-words whitespace-normal mb-5">{{selectedComplaint.title}} </p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Isi Keluhan </p>
                        <div class="h-64 overflow-auto">
                        <input v-model="selectedComplaint.body" type="textarea" class="text-md hidden text-left border-none break-words whitespace-normal mb-5" disabled />
                        <p type="textarea" class="text-md text-left border-none break-words whitespace-normal mb-5">{{selectedComplaint.body}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Kategori Keluhan </p>
                        <p class="text-md mt-1 mb-5 break-words whitespace-normal">{{selectedComplaint.category}}</p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Tujuan </p>
                        <p class="text-md mt-1 mb-5">{{selectedComplaint.lecturer_type}}</p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Waktu Pembuatan </p>
                        <p class="text-md mt-1"> {{ moment(selectedComplaint.createdAt).locale("id").format("DD-MM-YYYY") }} </p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Foto </p>
                        <img :src="selectedComplaint.attachmentImage"
                        class="h-8 w-8 "
>
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
        @click="publishComplaint(selectedComplaint._id, selectedComplaint.title, selectedComplaint.body, selectedComplaint.attachmentImage)">
              Publikasikan Keluhan
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
        @click="rejectComplaint(selectedComplaint._id)">
              Tolak Keluhan
            </button>
          </footer>
                </div>
                </div>
     </div>
  </template>
  <script>
  
  import bootstrap from "@/assets/img/bootstrap.jpg";
  import close from "@/assets/img/x.svg";
  import {ComplaintControllers} from "../../controller/ComplaintController"
  import moment from 'moment';
  import { reactive } from "vue";
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
        complaint_id:"",
        selectedComplaint: null,
        title:"",
        body:"",
        attachmentImage:"",
        close,
        showModal: false,
        Profile: new ProfileController(false, false, ""),
        complaint: reactive(new ComplaintControllers(false, false, "")),
      }
    },
    computed:{
      isError() {
          return this.complaint.error;
        },
        ComplaintList() {
          return this.complaint.lists;
        },
        errorCause() {
          return this.complaint.errorCause;
        },
      complaintData(){
        return this.complaint.data;
      },
        isLoading() {
          return this.complaint.loading;
        },
        profileList() {
        return this.Profile.list;
      },
    },
    mounted() {
        this.getComplaint();
        this.profile();
        this.getPageModerateComplaint();
        console.log(this.complaint,"complaint"); // Add this line to log the complaint data
  
      },
      created() {
    this.complaint._id = ''; // Remove this line
    this.complaint.title = ''; // Remove this line
    this.complaint.body = ''; // Remove this line
    this.complaint.attachmentImage = ''; // Remove this line
  },
    methods: {
        async getComplaintModerated(page, limit) {
          return this.complaint.getComplaintModerated(page, limit);
        },
        toComplaintDetail(index) {
    this.selectedComplaint = this.ComplaintList[index];
  console.log(this.selectedComplaint, "complain selected");
  this.showModal = true;
},
        async getComplaint() {
          await this.getComplaintModerated(this.meta.page, this.meta.limit);
        },
        async getComplaintModeratedSuperPage(page, limit) {
  return this.complaint.getComplaintModeratedSuperPage(page, limit);
},
async goToPreviousPage() {
  if (this.meta.page > 1) {
    this.meta.page--;
    await this.getComplaintPage(this.meta.page, this.meta.limit);
  }
},

async goToNextPage() {
    this.meta.page++;
    await this.getComplaintModeratedSuperPage(this.meta.page, this.meta.limit);
    console.log(this.meta.page, this.meta.limit,"page")
  
},
async goToPage(page) {
  this.meta.page = page;
  await this.getComplaintModeratedSuperPage(this.meta.page, this.meta.limit);
  console.log(this.getComplaintPage, "page")
},
async getPageModerateComplaint() {
  this.meta.page = 1;
  await this.getComplaintModeratedSuperPage(this.meta.page, this.meta.limit);
},
        async publishComplaint(complaint_id, title, body, attachmentImage) {
          await this.complaintPublish(
            complaint_id,
            title,
            body, 
            attachmentImage
            ).then(() => {
            const toast = document.createElement("div");
            toast.className = "toast toast-success";
            toast.innerHTML = "Moderasi Keluhan Berhasil ";
  
            const toastContainer = document.querySelector(".toast-container");
            toastContainer.appendChild(toast);
            this.showModal =  false,
  
            setTimeout(() => {
              toastContainer.removeChild(toast);
              this.$router.push("/admin/keluhan");
            }, 2000);
          })
          .catch((error) => {
            console.error(error);
            this.errorMessage = "Terjadi kesalahan saat Moderasi Keluhan ";
            const toast = document.createElement("div");
            toast.className = "toast toast-error";
            toast.innerHTML = this.errorMessage;
            const toastContainer = document.querySelector(".toast-container");
            toastContainer.appendChild(toast);
  
            setTimeout(() => {
              toastContainer.removeChild(toast);
            }, 2000);        });
  },
      async complaintPublish(complaint_id,title,body,attachmentImage) {
        return this.complaint.complaintPublish(
          complaint_id,title,body,attachmentImage
         
        );
      },
      async rejectComplaint(complaint_id) {
          await this.complaintRejected(
            complaint_id
            ).then(() => {
            const toast = document.createElement("div");
            toast.className = "toast toast-success";
            toast.innerHTML = "Keluhan Ditolak ";
  
            const toastContainer = document.querySelector(".toast-container");
            toastContainer.appendChild(toast);
            this.showModal =  false,
  
            setTimeout(() => {
              toastContainer.removeChild(toast);
              this.$router.push("/admin/keluhan");
            }, 2000);
          })
          .catch((error) => {
            console.error(error);
            this.errorMessage = "Terjadi kesalahan saat Moderasi Keluhan ";
            const toast = document.createElement("div");
            toast.className = "toast toast-error";
            toast.innerHTML = this.errorMessage;
            const toastContainer = document.querySelector(".toast-container");
            toastContainer.appendChild(toast);
  
            setTimeout(() => {
              toastContainer.removeChild(toast);
            }, 2000);        });
  },
      async complaintRejected(complaint_id) {
        return this.complaint.complaintRejected(
          complaint_id
         
        );
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