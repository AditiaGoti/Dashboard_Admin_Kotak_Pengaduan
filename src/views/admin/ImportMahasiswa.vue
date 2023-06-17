<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <CardImportMahasiswa />
      </div>
    </div>
  </template>
  <script>
  import CardImportMahasiswa from "@/components/Cards/CardImportMahasiswa.vue";
  
  export default {
    components: {
        CardImportMahasiswa
    },
  };
  </script>