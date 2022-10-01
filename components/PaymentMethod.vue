<template>
  <div class="bg-gray-50 px-10 py-6 rounded-md">
    <h2 class="text-2xl font-semibold select-none">Payment method</h2>
    <div class="flex justify-between py-4 relative pl-6 items-center border-b last-of-type:border-none cursor-pointer border-b last:border-none" v-for="item in payments" :key="item.id" @click="selectedPayment = item">
      <div class="absolute w-4 h-4 left-0 border border-indigo-600 rounded-full flex items-center justify-center text-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" v-if="item.id === selectedPayment.id">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="font-semibold">{{item.name}}</span>
<!--        <span class="text-indigo-600">{{item.description}}</span>-->
      </div>
      <span class="font-semibold text-xl">logo</span>
    </div>
    <div v-if="selectedPayment.hasOwnProperty('description')" class="pt-2">
      {{selectedPayment.description}}
    </div>
    <button class="py-3 mt-3 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md disabled:hover:bg-indigo-500 disabled:hover:bg-indigo-500" @click="$emit('process')">Continue</button>
  </div>
</template>

<script>
export default {
  name: "PaymentMethod",
  data() {
    return {
      payments: [
        {
          id: 1,
          name: "Bank Transfer",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, veritatis."
        },
        {
          id: 2,
          name: "Test",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, veritatis."
        }
      ],
      selectedPayment: {

      }
    }
  },
}
</script>

<style scoped>

</style>
