<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            Performance
          </h6>
          <h2 class="text-blueGray-700 text-xl font-semibold">
            Total Complaint
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas id="bar-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import { ComplaintControllers } from "../../controller/ComplaintController";

export default {
  data() {
    return {
      meta: {
        page: 1,
        size: "",
      },
      complaint: new ComplaintControllers(false, false, ""),
    };
  },
  computed: {
    isError() {
      return this.complaint.error;
    },
    ComplaintList() {
      return this.complaint.lists;
    },
    errorCause() {
      return this.complaint.errorCause;
    },
    isLoading() {
      return this.complaint.loading;
    },
  },
  mounted() {
    this.getComplaint();
  },
  methods: {
    async getComplaint(page, size) {
      await this.getComplaintAnalysis(page, size);
      this.renderChart();
    },
    async getComplaintAnalysis() {
      await this.complaint.getComplaintAnalysis(this.meta.page, this.meta.size);
    },
    renderChart() {
      const labels = this.ComplaintList.map((item) => item.date);
      const data = this.ComplaintList.map((item) => item.total_complaint);

      let config = {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: "#ed64a6",
              borderColor: "#ed64a6",
              data,
              fill: false,
              barThickness: 8,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            labels: {
              fontColor: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Bulan",
                },
                gridLines: {
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 50, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Total Pengaduan",
                },
                gridLines: {
                  borderDash: [2],
                  drawBorder: false,
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.2)",
                  zeroLineColor: "rgba(33, 37, 41, 0.15)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
                ticks: {
              beginAtZero: true, // Start y-axis from 0
              precision: 0, // Display only regular numbers without decimal places
            },
              },
            ],
          },
        },
      };

      let ctx = document.getElementById("bar-chart").getContext("2d");
      window.myBar = new Chart(ctx, config);
    },
  },
};
</script>
