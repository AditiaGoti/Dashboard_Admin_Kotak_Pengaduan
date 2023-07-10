<template>
  <div>
    <div v-if="[1, 2, 3, 4,6,7,8,9,10].includes(profileList.lecturer_type)" class="items-center">
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-page-visits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-bar-chart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-social-traffic />
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import { ProfileController } from "../../controller/ProfileController";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";

export default {
  name: "dashboard-page",
  data(){
    return {
        Profile: new ProfileController(false, false, ""),
    }
  },
  computed:{
 profileList() {
      return this.Profile.list; }
  },
  mounted(){
      this.profile();
  },
  methods:{
 async getProfile() {
      return this.Profile.getProfile(); },
      async profile() {
      await this.getProfile();
    },
  },
  components: {
    CardBarChart,
    CardPageVisits,
    CardSocialTraffic,
  },
};
</script>
