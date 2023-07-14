<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-800 border-3 border-blue-900	"
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-white text-center mb-5 mt-8 ">
              <p class="font-bold mb-1 ">KOTAK PENGADUAN JTIK</p>
              <p>Login Admin </p>
            </div>
            <hr class="mb-2"/>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  NIP
                </label>
                <input
                v-model="nip"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-red-600 bg-white rounded text-sm shadow focus:outline-emerald-900 focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="NIP"
                  />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                v-model="password"
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div class="flex flex-row justify-between">
                <div class="relative bottom-1">
            <a href="javascript:void(0)" class=" font-semibold text-white">
              <small>Forgot password?</small>
            </a>
        </div>
              </div>
  <div class="toast-container"></div>

              <div class="text-center mt-6">
                <button
                  class="bg-white text-blue-600 active:bg-blueGray-600 text-md font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  :onClick="loginAction"

                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { AuthControllers } from "../../controller/AuthController.js";
// import { setModal, removeOnboarding } from "@/Utils/cookies";

export default {
    data() {
      return {
        auth: new AuthControllers(false, false, ""),
        showPassword: false,
        nip: "",
        password: "",
        validate: {
          emptyNip: false,
          emptyPassword: false,
          nip: false,
          password: false,
        },
        errorMsg: {
          nip: "",
          password: "",
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
      buttonLabel() {
        return this.showPassword ? "Hide" : "Show";
      },
    },
    watch: {
      nip(value) {
        // binding this to the data value in the email input
        this.nim = value;
        this.validatenip(value);
      },
      password(value) {
        this.password = value;
        this.validatePassword(value);
      },
    },
    methods: {
      async doLogin(nip, password) {
        return this.auth.signInLecturer(nip, password);
        },
      async LoginLecturer() {
        await this.doLogin(this.nip, this.password).
        then(response => {
          localStorage.setItem('kpjtik_access_token', response.data.data.accessToken)
          localStorage.setItem('kpjtik_acc_name', response.data.data.name)
          localStorage.setItem('kpjtik_email', response.data.data.email)
          localStorage.setItem('kpjtik_nip', response.data.data.nip)
        }).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Login";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          this.$router.push("/admin/dashboard");
          }, 2000);
         }) .catch(() => {
             if(this.nip == "" && this.password==""){
          this.errorMessage = "NIP dan Password Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       }
          else if(this.nip == ""){
          this.errorMessage = "Nip Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       }
          else if(this.password == "")
          {       
          this.errorMessage = "Password Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       }
          else {
              this.errorMessage = "NIP atau password salah";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);  
          }});
      },
      loginAction() {
        this.LoginLecturer();
      },
      validatenip(nip) {
        // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        //   this.errorMsg.email = "";
        // } else {
        //   this.errorMsg.email = "Email tidak Valid";
        // }
        if (nip == "") {
          this.errorMsg.nip = "Email tidak boleh Kosong";
        }
      },
      validatePassword(password) {
        // if (/^(?=.*?[0-9])[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g.test(password)) {
        //   this.errorMsg.password = "";
        // } else {
        //   this.errorMsg.password =
        //     "Password minimal 8 karakter kombinasi huruf dan angka";
        // }
        if (password == "") {
          this.errorMsg.password = "Password tidak boleh Kosong";
        }
      },
      focus() {
        this.validate.empty = false;
      },
  
      toggleShow() {
        if (this.showPassword === false) {
          this.showPassword = true;
        } else {
          this.showPassword = false;
        }
      },
    },
  };
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
    font-size: 14px;
    color: white;
    opacity: 0.9;
  }
  .toast-error {
  background-color: red;
}

  .toast-success {
    background-color: #2ecc71;
  }
</style>