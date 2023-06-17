<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Tambah Admin Baru</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex justify-center">
      <img :src="avatar" class="rounded-full w-36 h-36"/>
        </div>
        <input type="file" class="text-left ml-4 py-2" @change="handleFileUpload" accept="image/*">
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
                @focus="focus"
              :class="{
                'outline-blue-input': !errorMsg.password,
                'outline-red-star': errorMsg.password,
              }"
              />
              <input
              v-model="password"
              v-else
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan Password"
                @focus="focus"
              :class="{
                'outline-blue-input': !errorMsg.password,
                'outline-red-star': errorMsg.password,
              }"
              />
            </div>
          </div>
          <p v-if="errorMsg.password" class="text-red-star mx-[30px] mb-4">
          {{ errorMsg.password }} </p>
          <div class="w-full lg:w-6/12 px-4">
  <div class="relative w-full mb-3">
    <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      Role
    </label>
    <select
      v-model="selectedLecturerId"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      id="lecturer-select"
    >
      <option value="" disabled selected>Pilih Role Pengguna</option>
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
                type="text"
                v-model="phoneNumber"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukan Nomor Telpon Pengguna"
              />
            </div>
          </div>
        </div>
         <div class="flex justify-end">
        <div class="px-2">
        <button
          type="button"
          :onClick="createLecturers"
          class="text-white bg-blue-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
  avatar:"",
  name: "",
  nip: "",
  email: "",
  password: "",
  phoneNumber: "",
  lecturer_type: "",
  imageFolder:'student',
  errorMessage: "",
  angular,
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
    validateName(name) {
        if (name == "") {
          this.errorMsg.name = "Nama tidak boleh Kosong";
        }
      },
      validatePassword(password) {
        if (password == "") {
          this.errorMsg.password = "Password tidak boleh Kosong";
        }
      },
      validateNip(nip) {
        if (nip == "") {
          this.errorMsg.nip = "NIP tidak boleh Kosong";
        }
      },
      validateEmail(email) {
        if (email == "") {
          this.errorMsg.email = "Email tidak boleh Kosong";
        }
      },
      validateAvatar(avatar) {
        if (avatar == "") {
          this.errorMsg.avatar = "Avatar tidak boleh Kosong";
        }
      },
      validatePhonenumber(phoneNumber) {
        if (phoneNumber == "") {
          this.errorMsg.phoneNumber = "Nomor Telfon tidak boleh Kosong";
        }
      },
      validateLectuereType(lecturer_type) {
        if (lecturer_type == "") {
          this.errorMsg.lecturer_type = "Lecturer Type tidak boleh Kosong";
        }
      },
      async handleFileUpload(event) {
  const file = event.target.files[0];
  console.log("file", file.type);
  const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
  
  if (file && allowedFormats.includes(file.type)) {
    const imageUrl = URL.createObjectURL(file); // Convert File object to a data URL
    this.avatar = imageUrl;

    const response = await this.lecturer.uploadImage(
      this.avatar,
      this.imageFolder
    );

    console.log(response, "response");
    return response;
  } else {
    alert("Accepted file formats are: jpg, jpeg, png");
  }
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
            this.$router.push("/admin/mahasiswa");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat menambahkan Admin";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });},
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