<template>
  <div class="app">
    <Navbar/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      if (localStorage.hasOwnProperty('cart') && JSON.parse(localStorage.getItem('cart')).length !== 0) {
        this.$store.commit('updateCart', JSON.parse(localStorage.getItem('cart')))
      }
    }
  }
}
</script>
<style>

</style>
