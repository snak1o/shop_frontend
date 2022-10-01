<template>
  <div>
    <div class="bg-gray-50 p-10 rounded-md relative" :class="$auth.loggedIn ? '' : 'select-none'">
      <div v-if="isSelected">
        <h2 class="text-2xl font-semibold select-none">Order summary</h2>
        <ul>
          <li class="flex justify-between border-b py-4"><span class="text-gray-500">Subtotal</span><span class="font-semibold">{{((getSum - selectedShipping.price) - ((getSum - selectedShipping.price) * 0.1935)).toFixed(2)}}€</span></li>
          <li class="flex justify-between border-b py-4"><span class="text-gray-500">Shipping cost</span><span class="font-semibold">{{selectedShipping.price === 0 ? 'free': (selectedShipping.price - (selectedShipping.price * 0.1935)).toFixed(2) + '€'}}</span></li>
          <li class="flex justify-between border-b py-4"><span class="text-gray-500">Tax fee</span><span class="font-semibold">{{(getSum * 0.1935).toFixed(2)}}€</span></li>
          <li class="flex justify-between py-4 text-xl"><span>Order total</span><span>{{getSum.toFixed(2)}}€</span></li>
        </ul>
        <button class="py-3 mt-3 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md" @click="$router.push('/checkout')">Checkout</button>
      </div>
      <div v-else :class="$auth.loggedIn ? '' : 'blur'">
        <h2 class="text-2xl font-semibold select-none">Shipping method</h2>
          <div class="flex justify-between py-4 relative pl-8 items-center border-b last-of-type:border-none" v-for="item in delivery" @click.prevent="$auth.loggedIn ? selectedShipping = item : ''">
            <div class="absolute w-4 h-4 left-2 border border-indigo-600 rounded-full flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" v-if="selectedShipping.id === item.id">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="font-semibold">{{item.name}}</span>
              <span class="text-indigo-600">{{item.companyName}}</span>
            </div>
            <span class="font-semibold text-xl">{{item.price}}€</span>
          </div>
        <button class="py-3 mt-3 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md disabled:hover:bg-indigo-500 disabled:hover:bg-indigo-500" :disabled="!$auth.loggedIn" @click.prevent="setSelected">Continue</button>
      </div>
      <button class="py-3 w-32 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md absolute center" v-if="!$auth.loggedIn" @click.prevent="$router.push('/auth')">Authorize</button>
    </div>

    <div class="flex pt-3 space-x-1 items-center justify-center font-medium">
          <span>
            or
          </span>
      <router-link class="text-indigo-500 flex" to="/">
        Continue Shopping
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartSummary",
  props: ['getSum'],
  data() {
    return {
      delivery: [],
      selectedShipping: {
        price: 0
      },
      isSelected: false,
    }
  },
  async mounted() {
    this.delivery = await this.$axios.$get('/delivery/all')
    await this.getShipping
  },
  computed: {
    getShipping() {
      let shipping = this.$store.getters['shipping']
      if (shipping) {
        this.selectedShipping = shipping
        this.isSelected = true
      }
      return this.selectedShipping
    }
  },
  methods: {
    setSelected() {
      if (this.selectedShipping.id) {
        this.isSelected = true
        this.$store.commit('setShipping', this.selectedShipping)
      }
    },
  }
}
</script>

<style scoped>

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}

</style>
