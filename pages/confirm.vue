<template>
  <section class="container mx-auto p-5">
    <div class="flex flex-col space-y-5 justify-center items-center w-full h-full">
      <h1 class="text-xl">You have to confirm your email before getting access to account page.</h1>
      <div class="flex space-x-5">
        <button class="bg-indigo-500 hover:bg-indigo-600 px-10 py-3 text-white rounded-md w-fit" @click="refresh">Account page</button>
        <button class="bg-red-500 hover:bg-red-600 px-10 py-3 text-white rounded-md w-fit" @click="logout">Logout</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Confirm",
  methods: {
    async logout() {
      try {
        const res = await this.$axios.post('/users/logout', {}, {
          withCredentials: true
        })
        if (res && res.status === 200) {
          this.$auth.reset()
        }
        await this.$router.push('/')
      } catch (e) {

      }
    },
    async refresh() {
      try {
        const res = await this.$axios.get('/users/me')
        if (res.status && res.status === 200) {
          await this.$auth.setUser(res.data)
          await this.$router.push('/account')
          this.$store.commit('setEmailConfirmed', true)
        }
      } catch (e) {

      }

    }
  }
}
</script>

<style scoped>

</style>
