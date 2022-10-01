<template>
<div class="bg-gray-50 p-10 rounded-md" v-if="getPrice && selectedShipping">
  <h2 class="text-2xl font-semibold select-none">Order summary</h2>
  <ul>
    <li class="flex justify-between border-b py-4"><span class="text-gray-500">Subtotal</span><span class="font-semibold">{{(getPrice - (getPrice * 0.1935)).toFixed(2)}}€</span></li>
    <li class="flex justify-between border-b py-4"><span class="text-gray-500">Shipping cost</span><span class="font-semibold">{{selectedShipping.price === 0 ? 'free': (selectedShipping.price - (selectedShipping.price * 0.1935)).toFixed(2) + '€'}}</span></li>
    <li class="flex justify-between border-b py-4"><span class="text-gray-500">Tax fee</span><span class="font-semibold">{{((getPrice * 0.1935) + (selectedShipping.price * 0.1935)).toFixed(2)}}€</span></li>
    <li class="flex justify-between py-4 text-xl"><span>Order total</span><span>{{(getSum + selectedShipping.price).toFixed(2)}}€</span></li>
  </ul>
  <button class="py-3 mt-3 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md">Checkout</button>
</div>
</template>

<script>
export default {
  name: "CheckoutSummary",
  data() {
    return {
      getPrice: this.$store.getters['cartPrice'],
      selectedShipping: this.$store.getters['shipping']
    }
  },
}
</script>

<style scoped>

</style>
