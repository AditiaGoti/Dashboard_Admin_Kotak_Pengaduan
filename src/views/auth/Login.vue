<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-600 border-3 border-emerald-900	"
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-white text-center mb-5 mt-8 ">
              <p class="font-bold mb-1 ">KOTAK PENGADUAN JTIK</p>
              <p>Login Admin </p>
            </div>
            <hr class="mb-2"/>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-red-600 bg-white rounded text-sm shadow focus:outline-emerald-900 focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div class="flex flex-row justify-between">
                <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-white">
                    Remember me
                  </span>
                </label>
                </div>
                <div class="relative bottom-1">
            <a href="javascript:void(0)" class=" font-semibold text-white">
              <small>Forgot password?</small>
            </a>
        </div>
              </div>

              <div class="text-center mt-6">
                <router-link to="/admin/dashboard">
                <button
                  class="bg-white text-white text-emerald-600 active:bg-blueGray-600 text-md font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  Sign In
                </button>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";

export default {
  data() {
    return {
      github,
      google,
    };
  },
};
</script>
