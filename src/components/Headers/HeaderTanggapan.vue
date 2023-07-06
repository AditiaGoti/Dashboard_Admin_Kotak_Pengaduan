<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
         
          <div v-if="[5, 11, 12, 13, 14,17,18].includes(profileList.lecturer_type)" class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
            v-if="feedbackModeratedList.totalData"
              statSubtitle="TOTAL MODERASI TANGGAPAN"
              :statTitle="feedbackModeratedList.totalData"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
             <card-stats
           v-else
              statSubtitle="TOTAL MODERASI TANGGAPAN"
              :statTitle="0"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
         <div v-if="(lecturer === 1 || lecturer === 2 || lecturer === 3 || lecturer === 5 || lecturer === 6 || lecturer === 7 || lecturer === 8 || lecturer === 9)">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:text-sm">
            <card-stats
              v-if="feedbackList.totalData"
              statSubtitle="TOTAL TANGGAPAN"
              :statTitle="feedbackList.totalData"
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
        </div>
        <!-- <div v-else > -->
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:text-sm">
            <card-stats
              statSubtitle="TOTAL TANGGAPAN"
              :statTitle="FeedbackSuperList.totalData"
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
        return this.feedback.data;
      },
      FeedbackSuperList() {
        return this.feedback.data;
      },
      feedbackList(){
        return this.feedback.data;
      },
     
         profileList() {
      return this.Profile.list;
    },
  },
  mounted() {
      this.getFeedbackSuper();
      this.feedbackModerated();
      this.getFeedback();
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
      async getFeedbackList(page, size) {
        return this.feedback.getFeedbackList(page, size);
      },
      async getFeedback() {
        await this.getFeedbackList(this.meta.page, this.meta.size);
      },
      async getFeedbackModerated(page, size) {
        return this.feedback.getFeedbackModerated(page, size);
      },
      async feedbackModerated() {
        await this.getFeedbackModerated(this.meta.page, this.meta.size);
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
