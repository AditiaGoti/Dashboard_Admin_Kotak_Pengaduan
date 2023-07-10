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
            Tabel Pengaduan
          </h3>
        </div>
<form class="flex items-center" @submit.prevent="complaintSearch" >   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" v-model="title" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" >
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
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
              Pembuat Pengaduan
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
        <tbody  v-if="ComplaintList.length > 0" >
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
              <i></i>{{complaint.status}}    
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
      <!-- </div> -->
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
        v-for="page in ComplaintData.totalPage"
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
        :disabled="page === ComplaintData.totalPage"
        :class="{ 'pointer-events-none': page === ComplaintData.totalPage }"
      >
        Next
      </a>
    </li>
  </ul>
</nav>
      <div class="modal-backdrop" v-if="showModal"></div>

<div v-if="showModal">
<div class="modal-backdrop"></div>
<div class="modal">
  <div class="flex flex-row justify-between">
  <p class="text-xl font-bold	text-red-500 mb-6">Detail Pengaduan</p>
  <div>
    <button @click="closeModal">
<img
:src="close"
class="h-8 w-8 cursor-pointer"
alt="..."
/>
</button>
  </div>
  </div>  
<div class="grid grid-cols-2 mb-4" >
    <div class="flex flex-col">
      <div class="mr-4">
        <input v-model="selectedComplaint._id" type="textarea" class="hidden text-md text-left border-none break-words whitespace-normal mb-5" disabled />
      <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Judul Pengaduan </p>
        <p class="text-md mt-1 break-words whitespace-normal mb-5 "> {{ selectedComplaint.title }} </p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Isi Pengaduan </p>
        <div class="h-64 overflow-auto">
                        <p type="textarea" class="text-md text-left border-none break-words whitespace-normal mb-5">{{selectedComplaint.body}}</p>
                        </div>      
      </div>
    </div>
    <div class="flex flex-col">
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Kategori Pengaduan </p>
        <p class="text-md mt-1 mb-5 break-words whitespace-normal">{{ selectedComplaint.category }}</p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Tujuan </p>
        <p class="text-md mt-1 mb-5">{{ selectedComplaint.lecturer_type }}</p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Waktu Pembuatan </p>
        <p class="text-md mt-1">  {{ moment(selectedComplaint.createdAt).locale("id").format("DD-MM-YYYY") }}</p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Foto </p>
                        <img :src="selectedComplaint.attachmentImage"
                        class="h-8 w-8 "
>
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
@click="deletedComplaint(selectedComplaint._id)"> 
Hapus Pengaduan
</button>
</footer>
          </div>
  <!-- <div @click="showModal = false">Tutup Modal</div> -->
</div>
</div>
      <div class="toast-container"></div>
      
    </div>
  </div>
</template>
<script>

import bootstrap from "@/assets/img/bootstrap.jpg";
import close from "@/assets/img/x.svg";
import {ComplaintControllers} from "../../controller/ComplaintController"
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
      selectedComplaint: null,
      close,
      complaint_id:"",
      showModal: false,
      complaint: new ComplaintControllers(false, false, ""),
      Profile: new ProfileController(false, false, ""),

    }
  },
  computed:{
    isError() {
        return this.complaint.error;
      },
      ComplaintList() {
        return this.complaint.lists;
      },
      ComplaintData() {
        return this.complaint.data;
      },
      errorCause() {
        return this.complaint.errorCause;
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
      this.getPageComplaint();
      console.log(this.complaint,"complaint"); // Add this line to log the complaint data

    },
  methods: {
    toComplaintDetail(index) {
    this.selectedComplaint = this.ComplaintList[index];
  console.log(this.selectedComplaint, "complain selected");
  this.showModal = true;
},

    closeModal() {
    this.showModal = false;
    console.log('Modal telah ditutup');
  },
      async getComplaintListLecturer(page, limit) {
        return this.complaint.getComplaintListLecturer(page, limit);
      },
      async getComplaint() {
        await this.getComplaintListLecturer(this.meta.page, this.meta.limit);
      },
async getComplaintTitle (title) {
  return this.complaint.getComplaintTitle(title);
},

async goToPreviousPage() {
  if (this.meta.page > 1) {
    this.meta.page--;
    await this.getComplaintPage(this.meta.page, this.meta.limit);
  }
},

async goToNextPage() {
    this.meta.page++;
    await this.getComplaintPage(this.meta.page, this.meta.limit);
    console.log(this.meta.page, this.meta.limit,"page")
  
},

async getComplaintPage(page, limit) {
  return this.complaint.getComplaintPage(page, limit);
},
async goToPage(page) {
  this.meta.page = page;
  await this.getComplaintPage(this.meta.page, this.meta.limit);
  console.log(this.getLecturerPage, "page")
},
async getPageComplaint() {
  this.meta.page = 1;
  await this.getComplaintPage(this.meta.page, this.meta.limit);
},

async complaintSearch() {
  if(!this.title){
    await this.getComplaintListLecturer()
  }
  try {
  await this.getComplaintTitle(this.title);
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
},
      async getProfile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getProfile();
    },
    async deletedComplaint(complaint_id) {
        await this.complaintDeleted(
          complaint_id
          ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Menghapus Keluhan";

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
          this.errorMessage = "Terjadi kesalahan saat Menghapus Keluhan ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
},
    async complaintDeleted(complaint_id) {
      return this.complaint.complaintDeleted(
        complaint_id
       
      );
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
  width: 700px;
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