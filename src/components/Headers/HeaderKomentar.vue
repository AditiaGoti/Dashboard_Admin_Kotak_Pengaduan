<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
            <div  v-if="(lecturer === 1 || lecturer === 2 || lecturer === 3 || lecturer === 5 || lecturer === 6 || lecturer === 7 || lecturer === 8 || lecturer === 9)" class="w-full lg:w-6/12 xl:w-4/12 px-4">
              <card-stats
              v-if="commentList.totalData"
              statSubtitle="TOTAL KOMENTAR"
              :statTitle="commentList.totalData"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
            <card-stats
              v-else
              statSubtitle="TOTAL KOMENTAR"
              :statTitle="0"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
            </div>
            <div v-else class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
              v-if="commentSuperList.totalData"
              statSubtitle="TOTAL KOMENTAR"
              :statTitle="commentSuperList.totalData"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
            <card-stats
              v-else
              statSubtitle="TOTAL KOMENTAR"
              :statTitle="0"
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
import {CommentControllers} from "../../controller/CommentController"
import { ProfileController } from "../../controller/ProfileController";
export default {
  data (){
  return {
    meta: {
          page: 1,
          size: "",
        },
    comment : new CommentControllers(false,false,""),
    Profile : new ProfileController(false,false,"")
  }
  },
   computed:{
    isError() {
        return this.comment.error;
      },
      commentList() {
        return this.comment.data;
      },
      commentSuperList() {
        return this.comment.data;
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
    }},
  components: {
    CardStats,
  },
};
</script>
