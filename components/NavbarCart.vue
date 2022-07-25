<template>
  <div class="cart" @mouseover="showPrev = true" @mouseleave="showPrev = false">
    <router-link class="flex text-gray-600 hover:text-gray-900 space-x-1" to="/cart" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>

      <span class="font-semibold">{{getSum}}€</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPrev: false
    }
  },
  computed: {
    getSum() {
      let priceSum = 0
      let cart = this.getCart
      for (let k in cart) {
        priceSum += cart[k].price
      }
      this.$store.commit('setCartPrice')
      return (priceSum * 1.24).toFixed(2)
    },
    getCart() {
      return this.$store.getters.cart
    }
  },
}
</script>

<style scoped>

</style>
