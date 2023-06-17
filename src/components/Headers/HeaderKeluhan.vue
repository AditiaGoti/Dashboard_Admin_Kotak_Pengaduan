<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="JUMLAH MODERASI KELUHAN"
              :statTitle="ComplaintModeratedList.length"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="JUMLAH KELUHAN"
              statTitle="10"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import {ComplaintControllers} from "../../controller/ComplaintController"

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
      complaint: new ComplaintControllers(false, false, ""),
    }
  },
  computed:{
    isError() {
        return this.complaint.error;
      },
      ComplaintModeratedList() {
        return this.complaint.lists;
      },
      // ComplaintList() {
      //   return this.complaint.list;
      // },
      errorCause() {
        return this.complaint.errorCause;
      },
  
      isLoading() {
        return this.complaint.loading;
      },
  },
  mounted() {
      // this.getComplaintList();
      // console.log(this.complaint,"complaint"); // Add this line to log the complaint data

      this.getComplaint();

    },
  methods: {
    toComplaintDetail(Index) {
      this.$router.push({
        path: '/detail/:id',
        name: 'detail',
        params: { id: Index },
        item:"",
      });
    },
      // async getComplaintListLecturer(page, size) {
      //   return this.complaint.getComplaintListLecturer(page, size);
      // },
      // async getComplaintList() {
      //   await this.getComplaintListLecturer(this.meta.page, this.meta.size);
      // },
      async getComplaintbyStatus(page, size) {
        return this.complaint.getComplaintbyStatus(page, size);
      },
      async getComplaint() {
        await this.getComplaintbyStatus(this.meta.page, this.meta.size);
      },
    },
};
</script>
