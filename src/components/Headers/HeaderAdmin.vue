<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
            v-if="lecturerList.totalData"
              statSubtitle="TOTAL ADMIN"
              :statTitle="lecturerList.totalData"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
             <card-stats
             v-else
              statSubtitle="TOTAL ADMIN"
              :statTitle="0"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import {LecturerControllers} from "../../controller/LecturerController"

export default {
  components: {
    CardStats,
  },
  data() {
    return {
      meta: {
          page: 1,
          size: "10",
        },
      showModal: false,
      lecturer: new LecturerControllers(false, false, ""),
    };
  },
  computed:{
    isError() {
        return this.lecturer.error;
      },
      lecturerList() {
        return this.lecturer.data;
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
  async getLecturerList(page, size) {
        return this.lecturer.getLecturerList(page, size);
      },
      async getLecturer() {
        await this.getLecturerList(this.meta.page, this.meta.size);
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
