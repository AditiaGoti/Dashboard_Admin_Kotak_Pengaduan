<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div v-if="[1,2,5, 11, 12, 13, 14,17,18].includes(profileList.lecturer_type)" class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
            v-if="ComplaintModeratedList.totalData"
              statSubtitle="JUMLAH MODERASI KELUHAN"
              :statTitle="ComplaintModeratedList.totalData"
              statPercentColor="text-emerald-500"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
            <card-stats
            v-else
              statSubtitle="JUMLAH MODERASI KELUHAN"
              :statTitle="0"
              statPercentColor="text-emerald-500"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
            v-if="ComplaintList.totalData"
              statSubtitle="TOTAL KELUHAN"
              :statTitle="ComplaintList.totalData"
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
           <!-- <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
            v-if="ComplaintSuperList.totalData"
              statSubtitle="TOTAL KELUHAN"
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import {ComplaintControllers} from "../../controller/ComplaintController"
import { ProfileController } from "../../controller/ProfileController";

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
      Profile: new ProfileController(false, false, ""),

    }
  },
  computed:{
    isError() {
        return this.complaint.error;
      },
      ComplaintModeratedList() {
        return this.complaint.data;
      },
      ComplaintList() {
        return this.complaint.data;
      },
      //  ComplaintSuperList() {
      //   return this.complaint.data;
      // },
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
      this.getComplaintList();
      // this.getComplaintSuper();
      console.log(this.complaint,"complaint"); // Add this line to log the complaint data
      this.profile();
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
      async getComplaintListLecturer(page, size) {
        return this.complaint.getComplaintListLecturer(page, size);
      },
      async getComplaintList() {
        await this.getComplaintListLecturer(this.meta.page, this.meta.size);
      },
      //  async getComplaintListSuper(page, size) {
      //   return this.complaint.getComplaintListSuper(page, size);
      // },
      // async getComplaintSuper() {
      //   await this.getComplaintListSuper(this.meta.page, this.meta.size);
      // },
      async getComplaintbyStatus(page, size) {
        return this.complaint.getComplaintbyStatus(page, size);
      },
      async getComplaint() {
        await this.getComplaintbyStatus(this.meta.page, this.meta.size);
      },
      async getProfile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getProfile();
    },
    },
};
</script>
