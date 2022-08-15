<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col space-y-1">
      <label for="firstName" class="text-gray-600">Change email</label>
      <div class="flex w-full space-y-5 flex-col">
        <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="email" id="firstName" />
        <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4" @click="updateEmail">Update email</button>
      </div>

    </div>
    <div class="flex flex-col space-y-1">
      <label for="address" class="text-gray-600">Change password</label>
      <div id="address" class="flex w-full space-y-5 flex-col">
        <input type="password" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="oldPassword" placeholder="Old password"/>
        <input type="password" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="newPassword" placeholder="New password" />
        <input type="password" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="retypeNewPassword" placeholder="Retype new password" />
        <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4" @click="updatePassword">Update password</button>
      </div>
    </div>
    <div class="w-full">
      <button class="bg-red-500 hover:bg-red-600 p-3 text-white rounded-md w-full lg:w-1/4 mt-6" @click="removeAccount">Delete my account</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      email: '',
      oldPassword: "",
      newPassword: "",
      retypeNewPassword: ""
    }
  },
  async mounted() {
    try {
      await this.$auth.fetchUser()
    } catch (e) {
    }
    this.email = this.$auth.user.email
  },
  methods: {
    async updateEmail() {
      await this.$axios.$put('/users/email', {
        email: this.email
      })
    },
    async updatePassword() {
      await this.$axios.$put('/users/password', {
        newPassword: this.newPassword,
        oldPassword: this.oldPassword
      })
    },
    async removeAccount() {
      //validation + remove refresh token
      const res = await this.$axios.delete('/users/me')
      if (res && res.status === 200) {
        await this.$auth.reset()
      }
    }
  }
}
</script>

<style scoped>

</style>
