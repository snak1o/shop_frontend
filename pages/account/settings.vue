<template>
  <div class="flex flex-col space-y-4">
    <StaticNotification class="bg-indigo-500" v-if="message" :allowClose="true" @close="message = null">{{message}}</StaticNotification>
    <StaticNotification class="bg-red-500" v-if="error" :allowClose="true" @close="error = null">{{error}}</StaticNotification>
    <div class="flex flex-col space-y-1">
      <label for="firstName" class="text-gray-600">Change email</label>
      <div class="flex w-full space-y-5 flex-col">
        <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none" v-model="getEmail.email" id="firstName" />
        <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4 disabled:bg-gray-300" @click="updateEmail" :disabled="emailCheck">Update email</button>
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
      user: {
        email: ""
      },
      oldPassword: "",
      newPassword: "",
      retypeNewPassword: "",
      message: null,
      error: null,
    }
  },
  computed: {
    getEmail() {
      this.user.email = this.$auth.user.email
      return this.user
    },
    emailCheck() {
      return (this.user.email === this.$auth.user.email)
    }
  },
  methods: {
    async updateEmail() {
      if (this.emailValidation()) {
        try {
          const res = await this.$axios.put('/users/email', {
            email: this.user.email.trim()
          })
          if (res && res.status === 200) {
            this.message = "Email updated successfully."
            this.$auth.setUser({
              email: this.user.email.trim()
            })
          }
        } catch (e) {
          if (e.response) {
            if (e.response.status === 409) {
              this.error = "This email address is already in use."
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
    async updatePassword() {
      if (this.passwordValidation()) {
        try {
          const res = await this.$axios.put('/users/password', {
            newPassword: this.newPassword.trim(),
            oldPassword: this.oldPassword.trim()
          })
          if (res && res.status === 200) {
            this.message = "Password updated successfully."
          }
        }catch (e) {
          if (e.response) {
            if (e.response.status === 409) {
              this.error = "Wrong old password."
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
      this.oldPassword = this.newPassword = this.retypeNewPassword = ""
    },
    async removeAccount() {
      //validation + remove refresh token
      const res = await this.$axios.delete('/users/me', {
        withCredentials: true
      })
      if (res && res.status === 200) {
        await this.$auth.reset()
      }
    },
    emailValidation() {
      if (!this.user.email.trim().match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.error = "Email format must be example@example.com"
        return false
      }
      else{
        this.error = null
        return true
      }
    },
    passwordValidation() {
      if (this.oldPassword.trim().length < 1) {
        this.error = "Old password can not be empty"
        return false
      }
      if (this.newPassword.trim().length < 8) {
        this.error = "New password length can not be less than 8."
        return false
      }
      if (this.newPassword.trim() !== this.retypeNewPassword.trim()) {
        this.error = "Password do not match."
        return false
      }
      else {
        this.error = null
        return true
      }
    }
  }
}
</script>

<style scoped>

</style>
