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
            Tabel Admin
          </h3>
        </div>
        <router-link
          to="/admin/ImportLecturer"
          class="text-blue-500 bg-white mr-2 border-2 font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-200"
        >
          Import Data
        </router-link> 
        <router-link
          to="/admin/TambahAdmin"
          class="text-white bg-blue-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tambah Pengguna
        </router-link>
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
              Nama
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              NIP
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Divisi
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
          </tr>
        </thead>
        <tbody v-for="(lecturer , index) in lecturerList.list" :key="lecturer._id">
          <tr>
            <th
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <img
                :src="lecturer.avatar"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
              {{ lecturer.name }}
            </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{lecturer.nip}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            {{lecturer.lecturer_type}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            <div class="flex items-center mouse-pointer" @click="toAdminDetail(index)">
                <span class="mr-2 moderasi">Lihat Detail</span>
                </div>
            </td> 
          </tr>
        </tbody>
<div class="flex justify-center item-center ml-64">
  <a href="#" @click="goToPreviousPage" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>

<a href="#" @click="goToNextPage" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>

</div>
        <div class="modal-backdrop" v-if="showModal"></div>
        <div v-if="showModal">
<div class="modal-backdrop"></div>
<div class="modal">
  <div class="flex flex-row justify-between">
  <p class="text-xl font-bold	text-red-500 mb-6">Detail Admin</p>
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
        <input v-model="selectedAdmin._id" type="textarea" class="hidden text-md text-left border-none break-words whitespace-normal mb-5" disabled />
      <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Nama </p>
        <p class="text-md mt-1 break-words whitespace-normal mb-5 "> {{ selectedAdmin.name }} </p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Nip </p>
        <p class="text-md mt-1 break-words whitespace-normal mb-5">{{ selectedAdmin.nip }} </p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Jabatan </p>
        <p class="text-md mt-1 mb-5 break-words whitespace-normal">{{ selectedAdmin.lecturer_type }}</p>
      </div>
    </div>
    <div class="flex flex-col">
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Email </p>
        <p class="text-md mt-1 mb-5">{{ selectedAdmin.email ? selectedAdmin.email : 'Tidak ada email'  }}</p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> No. Telp </p>
        <p class="text-md mt-1 mb-5 ">{{ selectedAdmin.phoneNumber }}</p>
        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Foto </p>
                        <img :src="selectedAdmin.avatar"
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
bg-red-500	
text-white
hover:bg-red-300"
@click="deletedLecturer(selectedAdmin._id)"> 
Hapus Akun
</button>
</footer>
  <!-- <div @click="showModal = false">Tutup Modal</div> -->
</div>
</div>

      </table>
      
      <div class="toast-container"></div>

    </div>
    
  </div>
</template>
<script>

import {LecturerControllers} from "../../controller/LecturerController"
import moment from "moment";
import close from "@/assets/img/x.svg";

export default {
  data() {
    return {
      moment: moment,
      meta: {
          page: 1,
          size: "",
        },
        close,
        currentPage: 1,
      selectedAdmin:null,
      showModal: false,
      lecturer: new LecturerControllers(false, false, ""),
    };
  },
  computed:{
    isError() {
        return this.lecturer.error;
      },
      lecturerList() {
        return this.lecturer.lists;
      },
      errorCause() {
        return this.lecturer.errorCause;
      },
  
      isLoading() {
        return this.student.loading;
      },
  },
  mounted() {
      this.getLecturer();
      console.log(this.lecturer,"lecturer"); // Add this line to log the complaint data

    },
    methods: {
      toAdminDetail(index) {
    this.selectedAdmin = this.lecturerList.list[index];
  console.log(this.selectedAdmin, "complain selected");
  this.showModal = true;
},
async goToPreviousPage() {
    if (this.meta.page > 1) {
      this.meta.page --;
      await this.getLecturer();
    }
  },
  async goToNextPage() {
    this.meta.page++;
    await this.getLecturer();
  },
      closeModal() {
    this.showModal = false;
    console.log('Modal telah ditutup');
  },
  async getLecturerList(page, size) {
  return this.lecturer.getLecturerList(page, size);
},

async getLecturer() {
  await this.getLecturerList(this.page, this.meta.size);
},

      async deletedLecturer(lecturer_id) {
        await this.lecturerDeleted(
          lecturer_id
          ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Menghapus Admin Berhasil ";

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
          this.errorMessage = "Terjadi kesalahan saat Menghapus Admin ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
},
    async lecturerDeleted(lecturer_id) {
      return this.lecturer.lecturerDeleted(
        lecturer_id
       
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