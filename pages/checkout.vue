<template>
  <section class="container mx-auto p-5 space-x-5 w-full">
    <div class="w-1/2 flex flex-col space-y-3">
      <h2 class="text-2xl mb-3">Invoice information</h2>
      <div class="flex space-x-5">
        <div class="flex flex-col space-y-1 w-full">
          <label for="firstName" class="text-gray-600">First name</label>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" id="firstName" v-model="getUser.firstName" />
        </div>
        <div class="flex flex-col space-y-1 w-full">
          <label for="firstName" class="text-gray-600">Last name</label>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" id="lastName" v-model="getUser.lastName" />
        </div>
      </div>
      <div class="flex flex-col space-y-1 w-full">
        <label for="firstName" class="text-gray-600">Company name (optional)</label>
        <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" id="company name" v-model="getUser.lastName" />
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
        <label for="firstName" class="text-gray-600">Email</label>
        <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="getUser.email" id="email" />
      </div>
    </div>

    <div class="w-1/2">
      <CheckoutSummary/>
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
      this.user.email = this.$auth.user.email
      this.user.login = this.$auth.user.login
      if (this.$auth.user.phone) {
        this.user.phone.phoneCode = this.$auth.user.phone.phoneCode
        this.user.phone.phoneNumber = this.$auth.user.phone.phoneNumber
      }
      if (this.$auth.user.invoiceAddress) {
        this.user.invoiceAddress.country = this.$auth.user.invoiceAddress.country
        this.user.invoiceAddress.city = this.$auth.user.invoiceAddress.city
        this.user.invoiceAddress.zip = this.$auth.user.invoiceAddress.zip
        this.user.invoiceAddress.street = this.$auth.user.invoiceAddress.street
      }
      if (this.$auth.user.shippingAddress) {
        this.user.shippingAddress.country = this.$auth.user.shippingAddress.country
        this.user.shippingAddress.city = this.$auth.user.shippingAddress.city
        this.user.shippingAddress.zip = this.$auth.user.shippingAddress.zip
        this.user.shippingAddress.street = this.$auth.user.shippingAddress.street
      }
      return this.user
    },
  }
}
</script>

<style scoped>

</style>
