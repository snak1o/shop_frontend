<template>
  <header class="header">
    <div class="container">
      <div class="header-layout">
        <div class="logo"><nuxt-link to="/">Logo</nuxt-link></div>
        <div class="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div class="header-layout">
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-list-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/">Boats</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/">About us</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/">Contact us</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/">Profile</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/">Cart</nuxt-link></li>
          </ul>
        </nav>
        <div class="cart">
          0$ 0 products
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header {
    height: 250px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
  }
  .header-layout {
    display: flex;
    justify-content: space-between;
  }
  .nav-list {
    list-style: none;
    display: flex;
  }
</style>
