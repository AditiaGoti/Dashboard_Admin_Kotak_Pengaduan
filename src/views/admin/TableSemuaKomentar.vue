<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table-semua-komentar />
    </div>
  </div>
</template>
<script>
import CardTableSemuaKomentar from "@/components/Cards/CardTableSemuaKomentar.vue";

export default {
  components: {
    CardTableSemuaKomentar
  },
};
</script>
