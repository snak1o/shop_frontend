<template>
    <aside class="overflow-y-auto py-2 px-3 bg-gray-50 rounded-lg" >
      <ul class="space-y-2">
        <li>
          <router-link to="/account" exact-active-class="sidebar-active" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Orders</span>
          </router-link>
        </li>
        <li>
          <router-link to="/account/information" active-class="sidebar-active" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">My information</span>
          </router-link>
        </li>
        <li>
          <router-link to="/account/settings" active-class="sidebar-active" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
          </router-link>
        </li>
        <li>
          <button class="inline-flex w-full items-center p-2 text-base font-normal text-red-500 rounded-lg hover:bg-gray-100" @click="$emit('logout')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span class="ml-3 whitespace-nowrap">Logout</span>
          </button>
        </li>
      </ul>
    </aside>
</template>

<script>
export default {
  name: "AccountSidebar"
}
</script>

<style scoped>

</style>
