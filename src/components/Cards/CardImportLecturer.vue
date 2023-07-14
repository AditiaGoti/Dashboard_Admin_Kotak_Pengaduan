<template>
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">Import Data Dosen Baru</h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <div class="text-center flex justify-between">
          <label class="block mb-2 text-lg mt-5 ml-1 font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
          <a class="mt-5 mr-6 cursor-pointer text-black hover:text-blue-600 hover:underline">Contoh Template File</a>
        </div>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  @change="handleFileChange" aria-describedby="file_input_help"  ref="file" accept=".xlsx" type="file">
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">.xlsx</p>
          <div class="flex justify-end">
            <div class="px-2">
              <button
                type="button"
                @click="uploadFile"
                class="text-white bg-blue-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Tambah Pengguna
              </button>
            </div>
            <div>
              <router-link to="/admin/admin">
                <button class="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
import {LecturerControllers} from "../../controller/LecturerController"

export default {
  name: "FileUploadForm",
  data() {
    return {
      file: '',
      errorMessage: "",
      lecturer: new LecturerControllers(false, false, "")
    };
  },
  methods: {
    handleFileChange(event) {
        this.file = event.target.files[0];
    },
    async uploadFile() {
      let formData = new FormData();
      formData.append('data', this.file);
      if (this.file) {
        this.createLecturer({data : formData});
      }else if (!this.file){
        alert("Please select a file.");
      } else {
          this.errorMessage = "Terjadi kesalahan saat Import data mahasiswa";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       
      }
    },
    async createLecturer(data) {
      await this.lecturer.ImportLecturer(data)
      .then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Import data Dosen";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/admin/admin");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Import data Dosen";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
    }
  }
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