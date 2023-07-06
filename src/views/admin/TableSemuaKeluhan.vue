<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table-semua-keluhan />
    </div>
  </div>
</template>
<script>
import CardTableSemuaKeluhan from "@/components/Cards/CardTableSemuaKeluhan.vue";

export default {
  components: {
    CardTableSemuaKeluhan
  },
};
</script>
