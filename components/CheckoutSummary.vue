<template>
<div class="bg-gray-50 px-10 py-6 rounded-md" v-if="getPrice && selectedShipping">
  <h2 class="text-2xl font-semibold select-none">Order information</h2>
  <ul>
    <li class="flex flex-col border-b py-4">
      <div class="flex justify-between" v-for="product in products">
        <span class="text-gray-500">{{product.name}} ({{product.color.name}}) <strong>x{{product.quantity}}</strong></span><span class="font-semibold">{{(product.price + product.color.price).toFixed(2)}}€</span>
      </div>
    </li>
    <li class="flex justify-between border-b py-4"><span class="text-gray-500">Shipping ({{selectedShipping.companyName}})</span><span class="font-semibold">{{selectedShipping.price.toFixed(2)}}€</span></li>
    <li class="flex justify-between py-4 text-xl items-center">
      <span>Order total</span>
      <div class="flex flex-col">
        <span class="flex justify-end">
          {{(getPrice).toFixed(2)}}€
        </span>
        <span class="text-sm text-gray-500">
          (include tax {{(getPrice * 0.1935).toFixed(2)}}€)
        </span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "CheckoutSummary",
  data() {
    return {
      getPrice: this.$store.getters['cartPrice'],
      selectedShipping: this.$store.getters['shipping'],
      products: this.$store.getters['cartProducts']
    }
  },
}
</script>

<style scoped>

</style>
