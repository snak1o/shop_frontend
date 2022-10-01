<template>
  <div class="flex flex-col space-y-4">
    <StaticNotification class="bg-indigo-500" v-if="message" :allowClose="true" @close="message = null">{{message}}</StaticNotification>
    <StaticNotification class="bg-red-500" v-if="error" :allowClose="true" @close="error = null">{{error}}</StaticNotification>
    <div class="flex flex-col space-y-1">
      <label for="firstName" class="text-gray-600">First name</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" id="firstName" v-model="getUser.firstName" />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="lastName" class="text-gray-600">Last name</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" v-model="getUser.lastName"  id="lastName" />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="login" class="text-gray-600">Login</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" v-model="getUser.login" id="login" />
    </div>
    <div class="flex flex-col space-y-1">
     <label for="phone" class="text-gray-600">Phone number</label>
     <div class="w-full flex space-x-5">
       <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 pl-2 outline-none w-1/6" pattern="[0-9]{1,3}" id="phone" v-model="getUser.phone.phoneCode" placeholder="Code" />
       <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-5/6" v-model="getUser.phone.phoneNumber" placeholder="Phone number" />
     </div>
   </div>
    <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4 disabled:bg-gray-300" @click="updateInfo" :disabled="!informationCheck">Update information</button>

    <div class="flex flex-col space-y-1">
      <label for="invoiceAddress" class="text-gray-600">Invoice address</label>
      <div id="invoiceAddress" class="flex w-full space-y-5 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row">
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.invoiceAddress.street" placeholder="Street"/>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" pattern="[0-9]{4,6}" v-model="getUser.invoiceAddress.zip" placeholder="Zip code"/>
        </div>
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.invoiceAddress.city" placeholder="City"/>
          <select class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" v-model="getUser.invoiceAddress.country">
            <option v-for="county in coutries" :key="county">{{county}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-1">
      <label for="shippingAddress" class="text-gray-600">Shipping address</label>
      <div id="shippingAddress" class="flex w-full space-y-5 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row">
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.shippingAddress.street" placeholder="Street"/>
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" pattern="[0-9]{4,6}" v-model="getUser.shippingAddress.zip" placeholder="Zip code"/>
        </div>
        <div class="flex w-full lg:w-6/12 space-x-5">
          <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="getUser.shippingAddress.city" placeholder="City"/>
          <select class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" v-model="getUser.shippingAddress.country">
            <option v-for="county in coutries" :value="county" :key="county">{{county}}</option>
          </select>
        </div>
      </div>
    </div>
    <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4 disabled:bg-gray-300" @click="updateAddresses" :disabled="!addressCheck">Update addresses</button>
  </div>
</template>

<script>
export default {
  name: "Information",
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
      },
      message: null,
      error: null,
      coutries: ["Finland", "Sweden", "Norway"]
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
    informationCheck() {
      return (this.user.firstName !== this.$auth.user.firstName ||
        this.user.lastName !== this.$auth.user.lastName ||
        this.user.login !== this.$auth.user.login ||
        (this.$auth.user.phone && this.user.phone.phoneNumber !== this.$auth.user.phone.phoneNumber));
    },
    addressCheck() {
     if (this.$auth.user.invoiceAddress && this.$auth.user.shippingAddress) {
       return this.user.invoiceAddress.city !== this.$auth.user.invoiceAddress.city || this.user.invoiceAddress.street !== this.$auth.user.invoiceAddress.street || this.user.invoiceAddress.zip !== this.$auth.user.invoiceAddress.zip || this.user.invoiceAddress.country !== this.$auth.user.invoiceAddress.country || this.user.shippingAddress.city !== this.$auth.user.shippingAddress.city || this.user.shippingAddress.street !== this.$auth.user.shippingAddress.street || this.user.shippingAddress.zip !== this.$auth.user.shippingAddress.zip || this.user.shippingAddress.country !== this.$auth.user.shippingAddress.country;
     }
     else {
       return true
     }
    },
  },
  methods: {
    async updateInfo() {
      if (this.informationValidation()) {
        try {
          const res = await this.$axios.put('/users/info', {
            firstName: this.user.firstName.trim(),
            lastName: this.user.lastName.trim(),
            login: this.user.login.trim(),
            phoneCode: this.user.phone.phoneCode.trim(),
            phoneNumber: this.user.phone.phoneNumber.trim(),
            //fix
            companyName: ''
          })
          if (res && res.status === 200) {
            this.message = 'Information updated successfully.'
            this.$auth.setUser({
              login: this.user.login,
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              phone: {
                phoneCode: this.user.phone.phoneCode,
                phoneNumber: this.user.phone.phoneNumber
              }
            })
          }
        }
        catch (e) {
          if (e.response) {
            if (e.response.status === 409) {
              this.error = "This login is already in use."
            }
            else {
              this.error = `Error ${e.response.status}.`
            }
          }
          else {
            this.error = `Error ${e.message}.`
          }
        }
      }
    },
    async updateAddresses() {
      if (this.addressValidation()) {
        try {
          const res = await this.$axios.put('/users/address', {
            invoiceAddress: {
              city: this.user.invoiceAddress.city.trim(),
              country: this.user.invoiceAddress.country.trim(),
              street: this.user.invoiceAddress.street.trim(),
              zip: this.user.invoiceAddress.zip.trim()
            },
            shippingAddress: {
              city: this.user.shippingAddress.city.trim(),
              country: this.user.shippingAddress.country.trim(),
              street: this.user.shippingAddress.street.trim(),
              zip: this.user.shippingAddress.zip.trim()
            },
          })
          if (res && res.status === 200) {
            this.message = 'Addresses updated successfully.'
            this.$auth.setUser({
              invoiceAddress: {
                city: this.user.invoiceAddress.city.trim(),
                country: this.user.invoiceAddress.country.trim(),
                street: this.user.invoiceAddress.street.trim(),
                zip: this.user.invoiceAddress.zip.trim()
              },
              shippingAddress: {
                city: this.user.shippingAddress.city.trim(),
                country: this.user.shippingAddress.country.trim(),
                street: this.user.shippingAddress.street.trim(),
                zip: this.user.shippingAddress.zip.trim()
              },
            })
          }
        } catch (e) {
          if (e.response) {
            this.error = `Error ${e.response.status}.`
          }
          else {
            this.error = `Error ${e.message}.`
          }
        }
      }

    },
    informationValidation() {
      if (this.user.firstName.trim().length < 2) {
        this.error = 'Firstname length must be at least 2 symbols.'
        return false
      }
      if (this.user.lastName.trim().length < 2) {
        this.error = 'Lastname length must be at least 2 symbols.'
        return false
      }
      if (this.user.login.trim().length < 2) {
        this.error = 'Login length must be at least 2 symbols.'
        return false
      }
      if (this.isNumber(this.user.phone.phoneCode) === false) {
        this.error = 'Phone code must contain only numbers.'
        return false
      }
      if (!(this.user.phone.phoneCode.length >= 1 && this.user.phone.phoneCode.length <= 3)) {
        this.error = 'Phone code length must be from 1 to 3 numbers.'
        return false
      }
      if (this.isNumber(this.user.phone.phoneNumber) === false) {
        this.error = 'Phone number must contain only numbers.'
        return false
      }
      if (!(this.user.phone.phoneNumber.length >= 7 && this.user.phone.phoneNumber.length <= 11)) {
        this.error = 'Phone code length must be from 7 to 11 numbers.'
        return false
      }
      else {
        this.error = null
        return true
      }
    },
    addressValidation() {
      if (this.user.invoiceAddress.street.trim().length < 1) {
        this.error = "Street can not be empty."
        return false
      }
      if (!(this.user.invoiceAddress.zip.length >= 3 && this.user.invoiceAddress.zip.length <= 6)) {
        this.error = "Zip code length must be from 3 to 6 numbers."
        return false
      }
      if (this.isNumber(this.user.invoiceAddress.zip) === false) {
        this.error = 'Zip code must contain only numbers.'
        return false
      }
      if (this.user.invoiceAddress.city.trim().length < 1) {
        this.error = "City can not be empty."
        return false
      }
      if (this.user.invoiceAddress.country.trim().length < 1) {
        this.error = "Country can not be empty."
        return false
      }
      if (this.user.shippingAddress.street.trim().length < 1) {
        this.error = "Street can not be empty."
        return false
      }
      if (!(this.user.shippingAddress.zip.length >= 3 && this.user.shippingAddress.zip.length <= 6)) {
        this.error = "Zip code length must be from 3 to 6 numbers."
        return false
      }
      if (this.isNumber(this.user.shippingAddress.zip) === false) {
        this.error = 'Zip code must contain only numbers.'
        return false
      }
      if (this.user.shippingAddress.city.trim().length < 1) {
        this.error = "City can not be empty."
        return false
      }
      if (this.user.shippingAddress.country.trim().length < 1) {
        this.error = "Country can not be empty."
        return false
      }
      else {
        this.error = null
        return true
      }
    },
    isNumber(value) {
      return /^\d+$/.test(value)
    }
  }
}
</script>

<style scoped>

</style>
