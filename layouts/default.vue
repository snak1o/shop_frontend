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
        this.$auth.setUser(res.data)
        if (res && res.status === 200) {
          this.$store.commit('setEmailConfirmed', true)
        }
      }
      catch (e) {
        if (e.response.status === 403) {
          if(this.$route.fullPath.includes('/account')) {
            await this.$router.push('/confirm')
          }
        }
      }
    }
  }
}
</script>
