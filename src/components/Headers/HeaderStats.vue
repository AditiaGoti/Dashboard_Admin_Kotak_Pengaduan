<template>
  <!-- Header -->
  <div class="relative bg-blue-800 md:pt-32 pb-32 pt-12 text-sm">
    <div class="px-4 md:px-5 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
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
        <!-- <div v-else > -->
          <!-- <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:text-sm">
            <card-stats
            v-if="FeedbackSuperList.totalData"
              statSubtitle="TOTAL TANGGAPAN"
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
          </div> -->
        <!-- </div> -->
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4" v-if="[1, 2, 3, 4,5,6,7,8,9,10].includes(profileList.lecturer_type)">
           <card-stats
              statSubtitle="MAHASISWA"
              :statTitle="studentList.totalData"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>
            <div v-if="[1, 2, 3, 4,5,6,7,8,9,10].includes(profileList.lecturer_type)" class="w-full lg:w-6/12 xl:w-3/12 px-4" >
          <card-stats
              statSubtitle="DOSEN"
              :statTitle="lecturerList.totalData"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <!-- <div v-if="(lecturer === 1 || lecturer === 2 || lecturer === 3 || lecturer === 5 || lecturer === 6 || lecturer === 7 || lecturer === 8 || lecturer === 9)" class="hidden">
          </div>
          <div v-else class="w-full lg:w-6/12 xl:w-3/12 px-4" >
          <card-stats
          v-if="lecturerList.totalData"
              statSubtitle="ADMIN"
              :statTitle="lecturerList.totalData"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
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
import {FeedbackController} from "../../controller/FeedbackController"
import {StudentControllers} from "../../controller/StudentController"
import {LecturerControllers} from "../../controller/LecturerController"
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
      feedback : new FeedbackController(false, false, ""),
      lecturer: new LecturerControllers(false, false, ""),
      student: new StudentControllers(false, false, ""),
      Profile: new ProfileController(false, false, ""),

    }},
     computed:{
      studentList() {
        return this.student.data;
      },
      // FeedbackSuperList() {
      //   return this.feedback.data;
      // },
      feedbackList(){
        return this.feedback.data;
      },
      ComplaintList() {
        return this.complaint.data;
      },
      // ComplaintSuperList() {
      //   return this.complaint.data;
      // },
      lecturerList() {
        return this.lecturer.data;
      },
         profileList() {
      return this.Profile.list;
    },
  },
  mounted() {
      this.getStudent();
      // this.getFeedbackSuper();
      this.getFeedback();
      this.getComplaint();
      // this.getComplaintSuper();
      this.getLecturer();
      this.profile();
      console.log(this.student,"student"); // Add this line to log the complaint data

    },
    methods: {
  async getStudentList(page, size) {
        return this.student.getStudentList(page, size);
      },
      async getStudent() {
        await this.getStudentList(this.meta.page, this.meta.size);
      },
  // async getFeedbackSuperList(page, size) {
  //       return this.feedback.getFeedbackSuperList(page, size);
  //     },
  //     async getFeedbackSuper() {
  //       await this.getFeedbackSuperList(this.meta.page, this.meta.size);
  //     },
      async getFeedbackList(page, size) {
        return this.feedback.getFeedbackList(page, size);
      },
      async getFeedback() {
        await this.getFeedbackList(this.meta.page, this.meta.size);
      },
       async getComplaintListLecturer(page, size) {
        return this.complaint.getComplaintListLecturer(page, size);
      },
      async getComplaint() {
        await this.getComplaintListLecturer(this.meta.page, this.meta.size);
      },
      // async getComplaintListSuper(page, size) {
      //   return this.complaint.getComplaintListSuper(page, size);
      // },
      // async getComplaintSuper() {
      //   await this.getComplaintListSuper(this.meta.page, this.meta.size);
      // },
        async getLecturerList(page, size) {
  return this.lecturer.getLecturerList(page, size);
},

async getLecturer() {
  await this.getLecturerList(this.page, this.meta.size);
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
