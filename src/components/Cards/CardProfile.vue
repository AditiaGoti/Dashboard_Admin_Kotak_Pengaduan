<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">My account</h6>
        <router-link to="/admin/changepassword">
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Change Password
        </button>
        </router-link>
      </div>
      <div class="flex justify-center">
        <div>
      <img :src="profileList.avatar" class="rounded-full w-36 h-36"/>
        </div>
        </div>
                        <input type="file" class="text-left ml-4 py-2" @change="handleFileUpload" accept="image/*">

    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form class="mb-5">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                v-model="profileList.name"
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
                Email address
              </label>
              <input
              v-model="profileList.email"
                type="email"
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
                NIP
              </label>
              <input
              v-model="profileList.nip"
                type="text"
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
                Role
              </label>
              <input
                type="text"
                v-model="profileList.lecturer_type"
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
                No. Telp
              </label>
              <div v-if="profileList.phoneNumber == null">
              <input
                type="text"
                v-model="profileList.phoneNumber"
                placeholder="Masukan Nomor Telfon"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
            <div v-else >
             <input
                type="text"
                v-model="profileList.phoneNumber"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />
      </form>
      <div class="toast-container"></div>

      <div class="flex justify-end">
        <button
          class="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          :onClick="changeProfile"
        >
          Edit Profile
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
import { ProfileController } from "../../controller/ProfileController";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
{
  return{
    errorMessage: "",
  Profile: new ProfileController(false, false, ""),
  }
},
created() {
  this.profile();
  this.profileList.avatar = this.profileList.avatar || ''; // Assign value to profileList.avatar
  this.profileList.name = this.profileList.name || ''; // Assign value to profileList.name
  this.profileList.nip = this.profileList.nip || ''; // Assign value to profileList.nip
  this.profileList.phoneNumber = this.profileList.phoneNumber || ''; // Assign value to profileList.phoneNumber
  this.profileList.email = this.profileList.email || ''; // Assign value to profileList.email
  },
  computed: {
    isError() {
      return this.Profile.error;
    },
    profileList() {
      return this.Profile.list;
    },
    errorCause() {
      return this.Profile.errorCause;
    },

    isLoading() {
      return this.Profile.loading;
    },
  },
  methods: {
    async handleFileUpload(event) {
  let formData = new FormData();
  this.file = event.target.files[0];
  formData.append('image', this.file);
  formData.append('imageFolder', 'lecturer');
  const responseUploadImage = await this.Profile.uploadImage({data : formData});
  this.setAvatar(responseUploadImage.data.data)
  console.log(responseUploadImage.data.data)
  return responseUploadImage
// const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
  
//   if (file && allowedFormats.includes(file.type)) {
//     const imageUrl = URL.createObjectURL(file); // Convert File object to a data URL
//     this.avatar = imageUrl;

//     const response = await this.lecturer.uploadImage(
//       this.avatar,
//       this.imageFolder
//     );

    // console.log(response, "response");
    // return response;
  // } else {
  //   alert("Accepted file formats are: jpg, jpeg, png");
  // }
},
setAvatar(data){
  this.profileList.avatar = data
},
    async changeProfile() {
      await this.updateProfile(
        this.profileList.avatar,
        this.profileList.name,
        this.profileList.nip,
        this.profileList.phoneNumber,
        this.profileList.email,
      )
      .then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Mengubah Profile";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/admin/profile");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Mengubah Profile";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });},
    async updateProfile(avatar,name,nim,phoneNumber,email) {
      return this.Profile.updateProfileLecturer(
        avatar,
        name,
        nim,
        phoneNumber,
        email
       
      );
    },
    async getProfileLecturer() {
      return this.Profile.getProfileLecturer();
    },
    async profile() {
      await this.getProfileLecturer();
    },
  },
}
</script>
