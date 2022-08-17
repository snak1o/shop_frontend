<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col space-y-1">
      <label for="firstName" class="text-gray-600">First name</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" id="firstName" v-model="firstName" />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="lastName" class="text-gray-600">Last name</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" v-model="lastName"  id="lastName" />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="login" class="text-gray-600">Login</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" v-model="login" id="login" />
    </div>
    <div class="flex flex-col space-y-1">
     <label for="phone" class="text-gray-600">Phone number</label>
     <div class="w-full flex space-x-5">
       <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 pl-2 outline-none w-1/6" id="phone" v-model="phoneCode" placeholder="Code" />
       <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-5/6" v-model="phoneNumber" placeholder="Phone number" />
     </div>
   </div>
    <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4" @click="updateInfo">Update information</button>

    <div class="flex flex-col space-y-1">
      <label for="invoiceAddress" class="text-gray-600">Invoice address</label>
      <div id="invoiceAddress" class="flex w-full space-y-5 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row">
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="invoiceAddress.street" placeholder="Street"/>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" pattern="[0-9]{4,6}" v-model="invoiceAddress.zip" placeholder="Zip code"/>
        </div>
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="invoiceAddress.city" placeholder="City"/>
          <select class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" v-model="invoiceAddress.country">
            <option v-for="county in coutries" :key="county">{{county}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-1">
      <label for="shippingAddress" class="text-gray-600">Invoice address</label>
      <div id="shippingAddress" class="flex w-full space-y-5 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row">
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="shippingAddress.street" placeholder="Street"/>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" pattern="[0-9]{4,6}" v-model="shippingAddress.zip" placeholder="Zip code"/>
        </div>
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="shippingAddress.city" placeholder="City"/>
          <select class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" v-model="shippingAddress.country">
            <option v-for="county in coutries" :value="county" :key="county">{{county}}</option>
          </select>
        </div>
      </div>
    </div>

    <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4" @click="updateAddresses">Update addresses</button>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      firstName: '',
      lastName: '',
      login: '',
      phoneCode: "",
      phoneNumber: '',
      invoiceAddress: {
        city: "",
        country: '',
        street: "",
        zip: ""
      },
      shippingAddress: {
        city: "",
        country: '',
        street: "",
        zip: ""
      },
      coutries: ["Finland", "Sweden", "Norway"]
    }
  },
  async mounted() {
    try {
      const user = await this.$axios.$get('/users/me')
      this.$auth.setUser(user)
    } catch (e) {
    }
    this.firstName = this.$auth.user.firstName
    this.lastName = this.$auth.user.lastName
    this.login = this.$auth.user.login
    if (this.$auth.user.phone) {
      this.phoneCode = this.$auth.user.phone.phoneCode
      this.phoneNumber = this.$auth.user.phone.phoneNumber
    }
    if (this.$auth.user.invoiceAddress) {
      this.invoiceAddress = this.$auth.user.invoiceAddress
    }
    if (this.$auth.user.shippingAddress) {
      this.shippingAddress = this.$auth.user.shippingAddress
    }

  },
  computed: {
  },
  methods: {
    async updateInfo() {
      await this.$axios.$put('/users/info', {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        phoneCode: this.phoneCode,
        phoneNumber: this.phoneNumber
      })
    },
    async updateAddresses() {
      await this.$axios.$put('/users/address', {
        invoiceAddress: {
          city: this.invoiceAddress.city,
          country: this.invoiceAddress.country,
          street: this.invoiceAddress.street,
          zip: this.invoiceAddress.zip
        },
        shippingAddress: {
          city: this.shippingAddress.city,
          country: this.shippingAddress.country,
          street: this.shippingAddress.street,
          zip: this.shippingAddress.zip
        },
      })
    }
  }
}
</script>

<style scoped>

</style>
