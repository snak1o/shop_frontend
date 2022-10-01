<template>
  <section class="container mx-auto p-5 space-x-10 w-full flex">
    <div class="w-3/5 flex flex-col space-y-3">
      <h2 class="text-2xl mb-3">Invoice information</h2>
      <div class="flex space-x-5">
        <div class="flex flex-col space-y-1 w-full">
          <label for="firstName" class="text-gray-600">First name</label>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" id="firstName" v-model="getUser.firstName" />
        </div>
        <div class="flex flex-col space-y-1 w-full">
          <label for="lastName" class="text-gray-600">Last name</label>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" id="lastName" v-model="getUser.lastName" />
        </div>
      </div>
      <div class="flex flex-col space-y-1 w-full">
        <label for="companyName" class="text-gray-600">Company name (optional)</label>
        <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" id="companyName" v-model="getUser.companyName" />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="invoiceAddress" class="text-gray-600">Invoice address</label>
        <div id="invoiceAddress" class="flex w-full space-y-5 flex-col">
          <div class="flex w-full space-x-5">
            <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.invoiceAddress.street" placeholder="Street"/>
            <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" pattern="[0-9]{4,6}" v-model="getUser.invoiceAddress.zip" placeholder="Zip code"/>
          </div>
          <div class="flex w-full space-x-5">
            <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.invoiceAddress.city" placeholder="City"/>
            <select class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" v-model="getUser.invoiceAddress.country">
              <option v-for="county in coutries" :value="county" :key="county">{{county}}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-1">
        <label for="shippingAddress" class="text-gray-600">Shipping address</label>
        <div id="shippingAddress" class="flex w-full space-y-5 flex-col">
          <div class="flex w-full space-x-5">
            <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.shippingAddress.street" placeholder="Street"/>
            <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" pattern="[0-9]{4,6}" v-model="getUser.shippingAddress.zip" placeholder="Zip code"/>
          </div>
          <div class="flex w-full space-x-5">
            <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.shippingAddress.city" placeholder="City"/>
            <select class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" v-model="getUser.shippingAddress.country">
              <option v-for="county in coutries" :value="county" :key="county">{{county}}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-1">
        <label for="phone" class="text-gray-600">Phone number</label>
        <div class="w-full flex space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 pl-2 outline-none w-3/12" pattern="[0-9]{1,3}" id="phone" v-model="getUser.phone.phoneCode" placeholder="Code" />
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-9/12" v-model="getUser.phone.phoneNumber" placeholder="Phone number" />
        </div>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="comment" class="text-gray-600">Comment</label>
        <textarea type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" rows="3" placeholder="Any special information.." v-model="comment" id="comment" />
      </div>
    </div>

    <div class="w-2/5 flex flex-col space-y-5">
      <CheckoutSummary/>
      <PaymentMethod @process="createOrder"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "Checkout",
  middleware: ['auth'],
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        companyName: "",
        login: "",
        phone: {
          phoneCode: "",
          phoneNumber: "",
        },
        invoiceAddress: {
          city: "",
          country: "",
          street: "",
          zip: ""
        },
        shippingAddress: {
          city: "",
          country: "",
          street: "",
          zip: ""
        },
        email: "",
      },
      comment: "",
      coutries: ["Finland", "Sweden", "Norway"],
    }
  },
  computed: {
    getUser() {
      if (this.$auth.user.firstName) {
        this.user.firstName = this.$auth.user.firstName
      }
      if (this.$auth.user.lastName) {
        this.user.lastName = this.$auth.user.lastName
      }
      if (this.$auth.user.companyName) {
        this.user.companyName = this.$auth.user.companyName
      }
      this.user.email = this.$auth.user.email
      this.user.login = this.$auth.user.login
      if (this.$auth.user.phone) {
        this.user.phone= {...this.$auth.user.phone}
      }
      if (this.$auth.user.invoiceAddress) {
        this.user.invoiceAddress = { ...this.$auth.user.invoiceAddress }
      }
      if (this.$auth.user.shippingAddress) {
        this.user.shippingAddress = {...this.$auth.user.shippingAddress}
      }
      return this.user
    },
  },
  methods: {
    async createOrder() {
      try {
        const res = await this.$axios.post('/orders/create', {
          comment: this.comment,
          deliveryId: this.$store.getters.shipping.id,
          items: this.$store.getters.cart
        })
        console.log(res)
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
