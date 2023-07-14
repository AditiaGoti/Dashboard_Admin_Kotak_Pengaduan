<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Tambah Dosen Baru</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex justify-center">
      <div v-if="avatar === null || avatar === ''">
              <img :src="profile" class="rounded-full w-36 h-36"/>

      </div>
      <div v-else>
      <img :src="avatar" class="rounded-full w-36 h-36"/>
      </div>
        </div>
        <input type="file" class="text-left ml-4 py-2" @change="handleFileUpload" accept="image/*">
          <p class="text-xs ml-3 text-red-500">*boleh dikosongkan </p>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
              v-model="name"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan Nama Pengguna"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email address
              </label>
              <input
              v-model="email"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan Email Pengguna"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                NIP
              </label>
              <input
                type="number"
                v-model="nip"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan NIP"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
              v-model="password"
              v-if="showPassword"
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan Password"
              />
              <input
              v-model="password"
              v-else
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan Password"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
  <div class="relative w-full mb-3">
    <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      Divisi
    </label>
    <select
      v-model="lecturer_type"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      id="lecturer-select"
    >
      <option value="" disabled selected>Pilih Divisi</option>
      <option v-for="lecturer in lecturerList" :value="lecturer._id" :key="lecturer._id">{{ lecturer.name }}</option>
    </select>
  </div>
</div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                No Telp
              </label>
              <input
                type="number"
                v-model="phoneNumber"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan Nomor Telpon Pengguna"
              />
                            <p class="text-grey-100 py-2 ml-1 font-extralight text-xs">No.Telp: 62xxxxxxxxxxx </p>
            </div>
          </div>
        </div>
         <div class="flex justify-end">
        <div class="px-2">
        <button
          type="button"
          :onClick="createLecturers"
          class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tambah Pengguna
        </button>
        </div>
        <div>
            <router-link
          to="/admin/admin"
        >
        <button 
        class="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
          kembali
        </button>
        </router-link>
        </div>
         </div>
      </form>
      <div class="toast-container"></div>
    </div>
  </div>
</template>
<script>
import angular from "../../assets/img/angular.jpg"
import {LecturerControllers} from "../../controller/LecturerController"
import profile from "../../assets/img/profile.svg"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
{
  return{
    meta: {
        page: 1,
        size: "",
      },
  avatar:'https://storage.googleapis.com/kotak-pengaduanjtik.appspot.com/student/default_avatar.png',
  file:"",
  name: "",
  nip: "",
  email: "",
  password: "",
  phoneNumber: "",
  lecturer_type: "",
  errorMessage: "",
  angular,
  profile,
  validate: {
          emptyAvatar: false,
          emptyName: false,
          emptyNip: false,
          emptyEmail: false,
          emptyPassword: false,
          emptyPhoneNumber: false,
          emptyLecturer_tyoe: false,
          avatar : false,
          name : false,
          nip: false,
          email : false,
          password: false,
          phoneNumber: false,
          lecturer_type: false
        },
  errorMsg: {
    avatar:"",
    name: "",
    nip: "",
    email: "",
    password: "",
    phoneNumber: "",
    lecturer_type: "",
        },
  lecturer: new LecturerControllers(false, false, ""),
  }
},
mounted() {
      this.getLecturerList();
      console.log(this.lecturer,"lecturer"); // Add this line to log the complaint data

    },
created() {
  },
  computed: {
    isError() {
      return this.lecturer.error;
    },
    errorCause() {
      return this.lecturer.errorCause;
    },
    lecturerList(){
      return this.lecturer.lists;
    },
    isLoading() {
      return this.lecturer.loading;
    },
  },
  methods: {
  async handleFileUpload(event) {
  const maxFileSize = 2 * 1024 * 1024; // 2MB
  let formData = new FormData();
  this.file = event.target.files[0];
  
  if (!this.file) {
    this.setAvatar('https://storage.googleapis.com/kotak-pengaduanjtik.appspot.com/student/default_avatar.png');
    return;
  }
  if (this.file.size > maxFileSize) {
          this.errorMessage = "Gagal Menggunakan Gambar, Ukuran Gambar Maksimal 2Mb";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
              return;
  }
  formData.append('image', this.file);
  formData.append('imageFolder', 'lecturer');
  const responseUploadImage = await this.lecturer.uploadImage({data : formData});
  this.setAvatar(responseUploadImage.data.data)
  console.log(responseUploadImage.data.data)
  return responseUploadImage
},
setAvatar(data){
  this.avatar = data
},
    async createLecturers() {
      await this.createLecturer(
        this.avatar,
        this.name,
        this.nip,
        this.email,
        this.password,
        this.phoneNumber,
        this.lecturer_type,
      ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Menambahkan Admin";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/admin/admin");
          }, 2000);
        })
        .catch(() => {
          if(this.errorCause === "Validation error, \"name\" is not allowed to be empty"){
          this.errorMessage = "Nama Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else if(this.nip == ""){
          this.errorMessage = "Nip Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else if(this.errorCause == "NIP telah terdaftar!"){
             this.errorMessage = "NIP telah terdaftar!";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else if(this.email == ""){
          this.errorMessage = "Email Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else if(this.password == ""){
          this.errorMessage = "Password Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
           else if (!/^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()+=._-]{8,}$/.test(this.password)) {
        this.errorMessage = "Password Harus terdiri dari 1 huruf besar dan minimal 8 karakter";
        const toast = document.createElement("div");
        toast.className = "toast toast-error";
        toast.innerHTML = this.errorMessage;
        const toastContainer = document.querySelector(".toast-container");
        toastContainer.appendChild(toast);

        setTimeout(() => {
          toastContainer.removeChild(toast);
        }, 2000);
      }
        else if (this.phoneNumber === "") {
          this.errorMessage = "Nomor HP Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
        } 
        else if (this.errorCause === "Nomor telepon harus dimulai dengan angka 62 dan diikuti dengan 7-16 nomor") {
          this.errorMessage = "Nomor telepon harus dimulai dengan angka 62 dan diikuti dengan 7-16 nomor";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
        }
          else if(this.lecturer_type == ""){
          this.errorMessage = "Role Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else {
          this.errorMessage = "Terjadi Error, Gagal Menambahkan Admin";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          });},
          async getLecturerTypeList(page, size) {
        return this.lecturer.getLecturerTypeList(page, size);
      },
      async getLecturerList() {
        await this.getLecturerTypeList(this.meta.page, this.meta.size);
      },
    async createLecturer(avatar,name,nip,email,password,phoneNumber,lecturer_type) {
      return this.lecturer.AddLecturer(
        avatar,
        name,
        nip,
        email,
        password,
        phoneNumber,
      lecturer_type
      );
    },
    toggleShow() {
        if (this.showPassword === false) {
          this.showPassword = true;
        } else {
          this.showPassword = false;
        }
      },
      focus() {
      this.validate.empty = false;
    },
  },
}
</script>
<style>
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