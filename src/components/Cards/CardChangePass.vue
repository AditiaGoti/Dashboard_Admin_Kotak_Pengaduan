<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Change Password</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10">
      <form class="mb-5">
        <div class="flex flex-col">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password Lama
              </label>
              <input
                type="password"
                v-if="showPassword"
                v-model="passwordOld"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <input
                type="password"
                v-else
                v-model="passwordOld"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password Baru
              </label>
              <input
                type="password"
                v-if="showPassword"
                v-model="passwordNew"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

          />
            <input
                type="password"
                v-else
                v-model="passwordNew"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

          />
            </div>
          
          </div>
        </div>
             </form>
             <div class="toast-container"></div>

      <div class="flex justify-end">
        <button
          class="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          :onClick="changePass" 
        >
          Change Password
        </button>
        <router-link to="/admin/dashboard">
        <button
          class="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Kembali
        </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import image from "@/assets/img/team-1-800x800.jpg";
import { AuthControllers } from "../../controller/AuthController";

export default ({
data() {
    return {
      dropdownPopoverShow: false,
      image: image,
      auth: new AuthControllers(false, false, ""),
      passwordOld: "",
      passwordNew: "",
      errorMessage: "",
    };
  },
computed: {
    isError() {
      return this.auth.error;
    },
    errorCause() {
      return this.auth.errorCause;
    },
    isLoading() {
      return this.auth.loading;
    },
  },
  methods: {
    async changePass() {
      await this.ChangePass(
        this.passwordOld,
        this.passwordNew,
      ).then(() => {
        const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Mengubah Password";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/admin/profile");
          }, 2000);
      }).catch(() => {
         if (this.errorCause === "Sandi harus memiliki kriteria berikut: minimal 8 karakter, 1 huruf besar, dan 1 huruf kecil") {
        this.errorMessage = "Sandi harus memiliki kriteria berikut: minimal 8 karakter, 1 huruf besar, dan 1 huruf kecil";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        
      }
      else if(this.passwordOld === ""){
          this.errorMessage = "Mohon untuk Masukan Password Lama";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
      }
      else if(this.errorCause === "Password lama tidak sesuai!"){
          this.errorMessage = "Password Lama Tidak Sesuai";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
      }
      else if(this.passwordNew === ""){
          this.errorMessage = "Mohon untuk Masukan Password Baru";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
      }
      else{
          this.errorMessage = "Terjadi kesalahan saat Mengubah Password";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);     }   });
    },
    async ChangePass(oldPassword, newPassword) {
      return this.auth.changePassLecturer(
        oldPassword,
        newPassword,
      );
    },
    toggleShow() {
      if (this.showPassword === false) {
        this.showPassword = true;
      } else {
        this.showPassword = false;
      }
    }
}
})
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