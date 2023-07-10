<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div v-if="[1,2,5].includes(profileList.lecturer_type)" class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
            v-if="feedbackModeratedList.totalData"
              statSubtitle="JUMLAH SEMUA MODERASI TANGGAPAN"
              :statTitle="feedbackModeratedList.totalData"
              statPercentColor="text-emerald-500"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
            <card-stats
            v-else
              statSubtitle="JUMLAH SEMUA MODERASI TANGGAPAN"
              :statTitle="0"
              statPercentColor="text-emerald-500"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
            v-if="FeedbackSuperList.totalData"
              statSubtitle="TOTAL SEMUA TANGGAPAN"
              :statTitle="FeedbackSuperList.totalData"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
             <card-stats
             v-else
              statSubtitle="TOTAL TANGGAPAN"
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
import {FeedbackController} from "../../controller/FeedbackController"
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
      feedback : new FeedbackController(false, false, ""),
      Profile: new ProfileController(false, false, ""),

    }},
     computed:{
      feedbackModeratedList(){
        return this.feedback.datas;
      },
      FeedbackSuperList() {
        return this.feedback.datatotal;
      },
      profileList() {
      return this.Profile.list;
    },
  },
  mounted() {
      this.getFeedbackSuper();
      this.feedbackModerated();
      this.profile();
      console.log(this.student,"student"); // Add this line to log the complaint data

    },
  methods:{
     async getFeedbackSuperList(page, size) {
        return this.feedback.getFeedbackSuperList(page, size);
      },
      async getFeedbackSuper() {
        await this.getFeedbackSuperList(this.meta.page, this.meta.size);
      },
      async getAllFeedbackModerated(page, size) {
        return this.feedback.getAllFeedbackModerated(page, size);
      },
      async feedbackModerated() {
        await this.getAllFeedbackModerated(this.meta.page, this.meta.size);
      },
      async getProfile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getProfile();
    },
  }
};
</script>
