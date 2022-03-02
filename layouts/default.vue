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
 .app {
   display: grid;
   min-height: 100vh;
   grid-template-rows: 250px auto 200px;
 }
 </style>

