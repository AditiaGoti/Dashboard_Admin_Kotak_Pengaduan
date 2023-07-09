<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
           <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
            v-if="ComplaintSuperList.totalData"
              statSubtitle="TOTAL SEMUA KELUHAN"
              :statTitle="ComplaintSuperList.totalData"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
            <card-stats
            v-else
              statSubtitle="TOTAL KELUHAN"
              :statTitle="0"
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
       ComplaintSuperList() {
        return this.complaint.data;
      },
      errorCause() {
        return this.complaint.errorCause;
      },
  
      isLoading() {
        return this.complaint.loading;
      },
      profileList() {
      return this.Profile.list;
    },
  },
  mounted() {
      this.getComplaintSuper();

    },
  methods: {
       async getComplaintListSuper(page, size) {
        return this.complaint.getComplaintListSuper(page, size);
      },
      async getComplaintSuper() {
        await this.getComplaintListSuper(this.meta.page, this.meta.size);
      },
    },
};
</script>
