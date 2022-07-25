<template>
  <section class="container mx-auto p-5">
    <h1 class="text-4xl pb-5 font-bold">Shopping Cart</h1>
    <div class="flex w-full h-full flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10" v-if="getCart && getCart.length !== 0">
      <!--      Cart products list        -->
      <div class="w-full flex-col flex h-[40rem] lg:w-4/6 border-t overflow-y-auto">
        <div class="py-3 border-b flex flex-col items-center md:flex-row md:items-normal" v-for="product in cart" :key="product.id + Math.random(0)">
          <img class="h-48 w-48 object-contain rounded-md mr-5" :src="product.photos[0]" :alt="product.name">
          <div class="flex justify-between w-full flex-col items-center md:flex-row md:items-normal space-y-5 md:space-y-0">
            <div class="flex flex-col justify-between">
              <div class="flex flex-col space-y-1">
                <span class="font-semibold text-xl">{{product.name}}</span>
                <span class="text-gray-500">{{product.colors[0].name}}</span>
                <span class="font-semibold">{{product.pricealv.toFixed(2)}}€</span>
              </div>
              <span class="text-gray-500 flex items-center text-sm mt-3 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span class="pl-1">Est. delivery in 5-7 days</span>
               </span>
            </div>
            <div class="flex items-center h-10 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
                <span class="py-1 px-3">1</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="removeItem(product)">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!--      Summary        -->
      <div class="w-full lg:w-2/6">
        <div class="bg-gray-50 p-10 rounded-md">
          <h2 class="text-2xl font-semibold">Order summary</h2>
          <ul>
            <li class="flex justify-between border-b py-4"><span class="text-gray-500">Subtotal</span><span class="font-semibold">{{getSum}}€</span></li>
            <li class="flex justify-between border-b py-4"><span class="text-gray-500">Shipping cost</span><span class="font-semibold">9.90€</span></li>
            <li class="flex justify-between border-b py-4"><span class="text-gray-500">Tax fee</span><span class="font-semibold">{{(getSum * 0.24).toFixed(2)}}€</span></li>
            <li class="flex justify-between py-4 text-xl"><span>Order total</span><span>{{(getSum * 1.24 + 9.90).toFixed(2)}}€</span></li>
          </ul>
          <button class="py-3 mt-3 w-full bg-indigo-600 text-white font-semibold rounded-md">Checkout</button>
        </div>
        <div class="flex pt-3 space-x-1 items-center justify-center font-medium">
          <span>
            or
          </span>
          <router-link class="text-indigo-600 flex" to="/">
            Continue Shopping
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-5" v-else>
      <StaticNotification class="info">Your cart is empty</StaticNotification>
      <router-link class="text-indigo-600 font-semibold justify-center flex" to="/">
        Continue Shopping
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </router-link>
    </div>
  </section>

</template>

<script>
import Policy from "@/pages/policy";
export default {
  components: {Policy},
  data() {
    return {
      cart: []
    }
  },
  mounted() {
   return this.getCart
  },
  computed: {
    getCart() {
      if (process.browser) {
        this.cart = JSON.parse(localStorage.getItem('cart'))
        return this.cart
      }
    },
    getSum() {
      let priceSum = 0
      let cart = this.getCart
      for (let k in cart) {
        priceSum += cart[k].price
      }
      this.$store.commit('setCartPrice')
      return priceSum.toFixed(2)
    },
  },
  methods: {
    removeOne(item) {
      console.log(item.quantity)
      if (item.quantity <= 1) {
        this.removeItem(item)
      }
      else {
        this.$store.commit("removeQuantity", item)
        this.cart = this.$store.getters.cart
      }
    },
    addOne(item) {
      this.$store.commit('addQuantity', item)
      this.cart = this.$store.getters.cart
    },
    removeItem(item) {
      this.$store.commit('removeItemFromCart', item)
      this.cart = this.$store.getters.cart
    },
  },
}
</script>

<style scoped>
</style>
