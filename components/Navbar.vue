<template>
  <div class="relative bg-white w-full border-b-2 border-gray-100">
    <div class="container mx-auto p-5 flex">
      <router-link to="/">
        <span class="sr-only">r-Batskydd</span>
        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
      </router-link>
      <div class="hidden items-center justify-between w-full md:flex">
        <nav class="ml-10">
          <ul class="flex space-x-10">
            <li class="text-base font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="text-base font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/boats">Boats</nuxt-link></li>
            <li class="text-base font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/contact">Contact us</nuxt-link></li>
            <li class="text-base font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/account">Account</nuxt-link></li>
            <li class="text-base font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/cart">Cart</nuxt-link></li>
          </ul>
        </nav>
        <NavbarCart />
      </div>
      <div class="flex md:hidden w-full items-center justify-end">
        <svg @click="open = true" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 bg-gray-100 p-2 rounded-md cursor-pointer text-gray-500 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <div v-if="open" class="absolute top-0 left-0 max-w-screen-md w-full z-10">
          <div class="rounded-md border bg-white m-5 p-5">
            <div class="flex justify-between items-center">
              <router-link to="/">
                <span class="sr-only">r-Batskydd</span>
                <img class="h-10 w-auto " src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
              </router-link>
              <svg xmlns="http://www.w3.org/2000/svg" @click="open = false" class="h-10 w-10 bg-gray-100 p-2 rounded-md cursor-pointer text-gray-500 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <ul class="flex flex-col space-y-5 text-center w-full pt-3">
              <li class="text-lg font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/">Home</nuxt-link></li>
              <li class="text-lg font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/boats">Boats</nuxt-link></li>
              <li class="text-lg font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/contact">Contact us</nuxt-link></li>
              <li class="text-lg font-medium text-gray-500 hover:text-gray-900"><nuxt-link to="/account">Account</nuxt-link></li>
              <li class="text-lg block flex justify-center font-medium text-gray-500 hover:text-gray-900"><NavbarCart class="justify-center" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    open: false
  }
}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
