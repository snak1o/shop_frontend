<template>
  <div class="cart">
    <router-link class="flex text-gray-600 hover:text-gray-900 space-x-1 relative" to="/cart" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="font-semibold">{{getSum}}€</span>
      <div v-if="getProducts.length > 0" class="absolute top-0 left-2 bg-red-500 text-white rounded-full w-3 h-3 flex justify-center items-center text-[10px]">
        <span>{{getProducts.length}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartPrice: 0,
      products: [],
      cart: [],
    }
  },
  async mounted() {
    if (process.browser && localStorage.hasOwnProperty('cart') && localStorage.getItem('cart').length !== 0) {
      try {
        this.$store.commit('updateCart', JSON.parse(localStorage.getItem('cart')))
      } catch (e) {
        localStorage.setItem('cart', JSON.stringify([]))
        this.$store.commit('updateCart', [])
      }
    }
    await this.$store.dispatch('setProducts')
  },
  computed: {
    getSum() {
      let priceSum = 0
      let shippingPrice = 0
      for (let k in this.getProducts) {
        priceSum += ((this.getProducts[k].quantity * (this.getProducts[k].price + this.getProducts[k].color.price)))
      }
      if (this.$store.getters.shipping && this.$store.getters.shipping.price) {
        shippingPrice = this.$store.getters.shipping.price
        priceSum += shippingPrice
      }
      this.$store.commit('setCartPrice', priceSum)
      return priceSum
    },
    getProducts() {
      return this.$store.getters['cartProducts']
    },
  },
}
</script>

<style scoped>

</style>
