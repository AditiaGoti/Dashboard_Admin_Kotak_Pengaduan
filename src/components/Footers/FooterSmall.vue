<template>
  <footer
    class="pb-6"
    :class="[
      absolute ? 'absolute w-full bottom-0 bg-emerald-600' : 'relative',
    ]"
  >
    <div class="container mx-auto px-4">
      <hr class="mb-6 border-b-1 border-emerald-600" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div
            class="text-sm text-white font-semibold py-1 text-center md:text-left"
          >
            Copyright © {{ date }}
            <a
              href="https://www.creative-tim.com?ref=vn-footer-small"
              class="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
            >
              KOTAK PENGADUAN JTIK            </a>
          </div>
        </div>
        
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
