<template>
  <div class="app">
    <Navbar/>
    <Nuxt />
    <Footer />
  </div>
</template>


<script>
export default {
  async mounted() {
    if (this.$auth.strategy.token.get()) {
      try {
        const res = await this.$axios.get('/users/me')
        if (res && res.status === 200) {
          this.$auth.setUser(res.data)
          this.$store.commit('setEmailConfirmed', true)
        }
      }
      catch (e) {
        this.$auth.setUser(null)
        this.$auth.reset()
      }
    }
  }
}
</script>
