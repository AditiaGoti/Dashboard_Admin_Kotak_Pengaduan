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
            Tabel Komentar
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
              Pembuat Komentar
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Komentar
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
        <tbody v-if="(lecturer === 1 || lecturer === 2 || lecturer === 3 || lecturer === 5 || lecturer === 6 || lecturer === 7 || lecturer === 8 || lecturer === 9) ? commentSuperList.length > 0 : commentList.length > 0">
    <tr v-for="(comment,index) in (lecturer === 1 || lecturer === 2 || lecturer === 3 || lecturer === 5 || lecturer === 6 || lecturer === 7 || lecturer === 8 || lecturer === 9) ? commentSuperList : commentList" :key="comment._id">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
            <img
                :src="comment.avatar"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-2 font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                {{comment.createdBy}}            
                  </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{comment.message}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            {{ moment(comment.createdAt).locale("id").format("DD-MM-YYYY") }}   
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center mouse-pointer" @click="toCommentDetail(index)">
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
  <div class="modal-backdrop" v-if="showModal"></div>
  <div v-if="showModal">
                <div class="modal-backdrop"></div>
                <div class="modal">
                  <div class="flex flex-row justify-between">
                  <p class="text-xl font-bold	text-red-500 mb-6">Detail Komentar</p>
                  <div>
                          <img
                            :src="close"
                            class="h-8 w-8 cursor-pointer"
                            alt="..."
                            @click="closeModal"
                          />
                  </div>
                  </div>                                                                                                                                                                                                                                            
                <div class="grid grid-cols-2 mb-4" >
                    <div class="flex flex-col">
                      <div class="mr-4">
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Isi Komentar </p>
                        <p class="text-md mt-2 break-words whitespace-normal">{{ selectedComment.message }}</p>
                      </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="align-middle text-xs uppercase  font-semibold text-left"> Pembuat Komentar </p>
                        <p class="text-md mt-1 mb-5">{{ selectedComment.createdBy }}</p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Jabatan </p>
                        <p class="text-md mt-1 mb-5">JTIK</p>
                        <p class="align-middle text-xs uppercase whitespace-nowrap font-semibold text-left"> Waktu Pembuatan </p>
                        <p class="text-md mt-1"> {{ moment(selectedComment.createdAt).locale("id").format("DD-MM-YYYY") }}</p>
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
        rounded-md
        bg-red-500
        text-white
        hover:bg-red-800"
        @click="deletedComment(selectedComment.complaint_id)">
              Hapus Komentar
            </button>
          </footer>
                </div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        >
              </div>
      </table>
      <div class="toast-container"></div>

    </div>
  </div>
</template>
<script>

import bootstrap from "@/assets/img/bootstrap.jpg";
import close from "@/assets/img/x.svg";
import {CommentControllers} from "../../controller/CommentController"
import moment from "moment";
import { ProfileController } from "../../controller/ProfileController";

export default {
  data() {
    return {
      moment: moment,
      meta: {
          page: 1,
          size: "",
        },
      bootstrap,
      close,
      selectedComment : null,
      showModal: false,
      comment: new CommentControllers(false, false, ""),
      Profile: new ProfileController(false, false, ""),

    };
  },
  computed:{
    isError() {
        return this.comment.error;
      },
      commentList() {
        return this.comment.lists;
      },
      commentSuperList() {
        return this.comment.lists;
      },
      errorCause() {
        return this.comment.errorCause;
      },
  
      isLoading() {
        return this.comment.loading;
      },
      profileList() {
      return this.Profile.list; }
  },
  mounted() {
      this.getComment();
      console.log(this.comment,"complaint"); // Add this line to log the complaint data
      this.getCommentSuper();
      this.profile();
    },
   methods: {
    toCommentDetail(index) {
  if (this.lecturer === 1 || this.lecturer === 2 || this.lecturer === 3 || this.lecturer === 5 || this.lecturer === 6 || this.lecturer === 7 || this.lecturer === 8 || this.lecturer === 9) {
    this.selectedComment = this.commentSuperList[index];
  } else {
    this.selectedComment = this.commentList[index];
  }
  console.log(this.selectedComment, "complain selected");
  this.showModal = true;
},

  closeModal() {
    this.showModal = false;
    console.log('Modal telah ditutup'); // tambahkan console log di sini
  },
  async getCommentList(page, size) {
        return this.comment.getCommentList(page, size);
      },
      async getComment() {
        await this.getCommentList(this.meta.page, this.meta.size);
      },
      async getSuperCommentList(page, size) {
        return this.comment.getSuperCommentList(page, size);
      },
      async getCommentSuper() {
        await this.getSuperCommentList(this.meta.page, this.meta.size);
      },
      async getProfile() {
      return this.Profile.getProfile(); },
      async profile() {
      await this.getProfile();
    },
    async deletedComment(comment_id) {
        await this.commentDeleted(
          comment_id
          ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Menghapus Komentar Berhasil ";

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
          this.errorMessage = "Terjadi kesalahan saat Menghapus Komentar ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
},
async commentDeleted(complaint_id) {
      return this.comment.commentDeleted(
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
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
td:hover .moderasi {
  color: blue;
  cursor: pointer;
}
</style>