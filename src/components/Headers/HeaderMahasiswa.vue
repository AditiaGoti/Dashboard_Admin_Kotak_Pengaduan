<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="TOTAL MAHASISWA"
              :statTitle="studentCountList.length"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import {StudentControllers} from "../../controller/StudentController"
export default {
  components: {
    CardStats,
  },
  data() {
    return {
      meta: {
          page: 1,
          size: "",
        },
      showModal: false,
      student: new StudentControllers(false, false, ""),
    };
  },
  computed:{
    isError() {
        return this.student.error;
      },
      studentCountList() {
        return this.student.lists;
      },
      errorCause() {
        return this.student.errorCause;
      },
  
      isLoading() {
        return this.student.loading;
      },
  },
  mounted() {
      this.getStudent();
      console.log(this.student,"student"); // Add this line to log the complaint data

    },
    methods: {
  async getStudentList(page, size) {
        return this.student.getStudentList(page, size);
      },
      async getStudent() {
        await this.getStudentList(this.meta.page, this.meta.size);
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
