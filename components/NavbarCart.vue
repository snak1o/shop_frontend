<template>
  <div class="cart">
    <router-link class="flex text-gray-600 hover:text-gray-900 space-x-1" to="/cart" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="font-semibold">{{getSum.toFixed(2)}}€</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    }
  },
  mounted() {
    if (process.browser) {
      this.cart = JSON.parse(localStorage.getItem('cart'))
      this.$store.commit('updateCart', this.cart)
      return this.cart
    }
  },
  computed: {
    getSum() {
      let priceSum = 0
      let shippingPrice = 0
      if (this.$store.getters['shipping']) {
        let shipping = this.$store.getters['shipping']
        shippingPrice = shipping.price
      }
      for (let k in this.cart) {
        priceSum += ((this.cart[k].quantity * (this.cart[k].price + this.cart[k].selectedColor.price)) + shippingPrice)
      }
      this.$store.commit('setCartPrice', priceSum)
      return priceSum
    },
  },
}
</script>

<style scoped>

</style>
