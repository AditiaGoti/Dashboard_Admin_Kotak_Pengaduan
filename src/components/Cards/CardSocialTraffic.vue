<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            Lecturer Respond Data
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead class="thead-light">
          <tr>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Nama
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Divisi
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Total Respon
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >Rata Rata Respon</th>
          </tr>
        </thead>
      <tbody v-for="(lecturer, index) in lecturerList.sort((a, b) => b.avgComplaint - a.avgComplaint)" :key="lecturer._id">
          <tr v-if="index < 10">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              {{lecturer.name}}
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            {{lecturer.lecturer_type}}
            </td>
            <td
              class="border-t-0 px-6 p-4 flex item-center justify-center align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"
            >
            {{lecturer.totalFeedback ? lecturer.totalFeedback : "0"}}
            </td>
            <td
              class="border-t-0 p-4 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"
            >
            <p>{{ lecturer.avgComplaint !== 'null Minute' ? lecturer.avgComplaint : "0" }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { LecturerControllers } from "../../controller/LecturerController";

export default {
  data() {
    return {
      meta: {
        page: 1,
        size: "",
      },
      lecturer: new LecturerControllers(false, false, ""),
    };
  },
  computed: {
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
  },
  methods: {
    async getLecturerList(page, size) {
      return this.lecturer.getLecturerList(page, size);
    },
    async getLecturer() {
      await this.getLecturerList(this.page, this.meta.size);
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





