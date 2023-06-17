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
                type="text"
                v-model="passwordOld"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                :class="{
                  'mb-4 text-left': !errorMsg.passwordOld,
                  'inp-noerror text-left': !errorMsg.passwordOld,
                  'inp-error text-left': errorMsg.passwordOld,
                }"
                />
            </div>
            <p v-if="errorMsg.passwordOld" class="text-red-star mb-4">
              {{ errorMsg.passwordOld }}
            </p>
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
                type="text"
                v-model="passwordNew"
                :class="{
                  'mb-4': !errorMsg.passwordNew,
                  'inp-noerror': !errorMsg.passwordNew,
                  'inp-error': errorMsg.passwordNew,
                }"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
            <p v-if="errorMsg.passwordNew" class="text-red-star mb-4">
              {{ errorMsg.passwordNew }}
            </p>
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
      errorMsg: {
        passwordOld: "",
        passwordNew: "",
      },
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
watch: {
    passwordOld(value) {
      this.passwordOld = value;
      this.validatePasswordOld(value);
    },
    passwordNew(value) {
      this.passwordNew = value;
      this.validatePasswordNew(value);
    },
  },
  methods: {
  validatePasswordOld(pwOld) {
      if (/^(?=.*?[0-9])[a-zA-Z0-9!@#$%^&*)(+=._-]{8,}$/g.test(pwOld)) {
        this.errorMsg.passwordOld = "";
      } else {
        this.errorMsg.passwordOld =
          "Password minimal 8 karakter kombinasi huruf besar dan angka";
      }
      if (pwOld == "") {
        this.errorMsg.passwordOld = "Password tidak boleh Kosong";
      }
    },
    validatePasswordNew(pwNew) {
      if (/^(?=.*?[0-9])[a-zA-Z0-9!@#$%^&*)(+=._-]{8,}$/g.test(pwNew)) {
        this.errorMsg.passwordNew = "";
      } else {
        this.errorMsg.passwordNew =
          "Password minimal 8 karakter kombinasi huruf besar dan angka";
      }
      if (pwNew == "") {
        this.errorMsg.passwordNew = "Password tidak boleh Kosong";
      }
    },
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
      }).catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Mengubah Password";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
   if (this.errorCause == "Sandi harus memiliki kriteria berikut: minimal 8 karakter, 1 huruf besar, dan 1 huruf kecil") {
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
      else if (this.errorCause == "password is incorrect") {
        this.errorMsg.passwordOld = "Password Salah";
      } else if (this.errorCause == "Not a valid currentPassword") {
        this.errorMsg.passwordOld = "Password tidak boleh Kosong";
        // validate(this.passwordNew, this.errorMsg.passwordNew);
        // validate(this.passwordConfirm, this.errorMsg.passwordConfirm);
        if (this.passwordNew == "") {
          this.errorMsg.passwordNew = "Password tidak boleh Kosong";
        }
      } else if (this.errorCause == "Not a valid newPassword") {
        this.errorMsg.passwordNew = "Password tidak boleh Kosong";
        if (this.passwordOld == "") {
          this.errorMsg.passwordOld = "Password tidak boleh Kosong";
        }
      }
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