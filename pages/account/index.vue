<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg" v-if="orders.length > 0">
    <table class="w-full md:w-full text-sm text-left text-gray-500" >
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3">
          Order number
        </th>
        <th scope="col" class="px-6 py-3">
          Date
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
        <th scope="col" class="px-6 py-3">
          Tracking code
        </th>
        <th scope="col" class="px-6 py-3">
          Total price
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b" >
        <td class="px-6 py-4">
          10001
        </td>
        <th class="px-6 py-4">
          7.27.2022
        </th>
        <td class="px-6 py-4">
          In progress
        </td>
        <td class="px-6 py-4">
          JJFI324342742346782
        </td>
        <td class="px-6 py-4">
          300.00$ (1 item)
        </td>
        <td class="px-6 py-4 text-right">
          <router-link to="/account4" class="font-medium text-indigo-500 hover:underline">Open</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="flex flex-col space-y-5 mt-5 lg:mt-0" v-else>
    <StaticNotification class="bg-indigo-500" :allowClose="false">No orders to display</StaticNotification>
    <router-link class="text-indigo-600 font-semibold justify-center flex" to="/">
      Explore market
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    }
  }
}
</script>
