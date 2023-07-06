<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">Performance</h6>
          <h2 class="text-blueGray-700 text-xl font-semibold">Total Category Complaint</h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <div id="chartContainer" style="height: 350px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasJS from '@/assets/canvasjs.min.js';
import { ComplaintControllers } from "../../controller/ComplaintController";
import axiosInstance, { setBearerToken } from '../../Utils/axios';

export default {
  data() {
    return {
      meta: {
        page: 1,
        size: "",
      },
      complaint: new ComplaintControllers(false, false, ""),
      currentIndex: 0,
      chartData: [], // Store the data for the chart
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
      await this.getComplaintCategoriesAnalysis(page, size);
      this.createChart();
    },
    async getComplaintCategoriesAnalysis() {
      const token = localStorage.getItem('kpjtik_access_token');
      setBearerToken(token);
      const response = await axiosInstance.get(`/super/v1/complaint/graph`);
      const labels = [
        'Akademik',
        'Fasilitas/Layanan',
        'Kemahasiswaan',
        'Keuangan',
        'Lain-lain'
      ];
      const apiData = response.data.data;
       this.chartData = apiData.map((item, index) => {
    const dataPoints = labels.map(label => ({
      y: item.categories[label] || 0,
      label: label,
    }));

       return {
      type: "bar",
      showInLegend: true,
      name: item.date,
      color: this.getColor(index),
      dataPoints: dataPoints,
    };
      });

      this.createChart();
      return response;
    },
    createChart() {
      const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisY: {
          title: "Complaint Count",
          includeZero: true,
        },
        legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries,
        },
        toolTip: {
          shared: true,
          content: toolTipFormatter,
        },
        data: this.chartData, // Use the chartData to populate the chart
      });
      chart.render();

      function toolTipFormatter(e) {
        var str = "";
        var total = 0;
        var str3;
        var str2;
        for (var i = 0; i < e.entries.length; i++) {
          var str1 =
            "<span style= \"color:" +
            e.entries[i].dataSeries.color +
            "\">" +
            e.entries[i].dataSeries.name +
            "</span>: <strong>" +
            e.entries[i].dataPoint.y +
            "</strong> <br/>" ;
          total = e.entries[i].dataPoint.y + total;
          str = str.concat(str1);
        }
        str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
        str3 =
          "<span style = \"color:Tomato\">Total: </span><strong>" +
          total +
          "</strong><br/>";
        return (str2.concat(str)).concat(str3);
      }

      function toggleDataSeries(e) {
        if (
          typeof e.dataSeries.visible === "undefined" ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart.render();
      }
    },
  getColor(index) {
  const colors = ['red', 'orange', 'blue', 'green', 'yellow'];
  const colorIndex = index % colors.length;
  return colors[colorIndex];
}
  },
};
</script>
