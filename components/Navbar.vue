<template>
  <header class="header">
    <div class="container header-container">
        <nuxt-link class="logo" to="/">
          <img src="../assets/images/logo.png" alt="Ftent">
        </nuxt-link>
        <NavbarSearch class="search"/>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-list-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/boats">Boats</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/contact">Contact us</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/account">Account</nuxt-link></li>
            <li class="nav-list-item"><nuxt-link to="/cart">Cart</nuxt-link></li>
          </ul>
        </nav>
        <NavbarCart />
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  .logo { grid-area: logo; }
  .search { grid-area: search; }
  .nav { grid-area: nav; }
  .cart { grid-area: cart; }
  .header {
    border-bottom: 1px solid lightgrey;
    background: url("../assets/images/header.jpg") center no-repeat;
    background-size: cover;
  }
  .header-container {
    height: 100%;
    display: grid;
    grid-template-areas:
    'logo logo logo logo search'
    'logo logo logo logo search'
    'nav nav nav nav cart';

  }
  .nav-list {
    height: 100%;
  }
  .nav-list-item:not(:last-child) {
    margin-right: 25px;
  }
  a {
    color: white;
    font-size: 1.1rem;
    font-weight: 400;
  }
  .logo, .nav-list, .cart, .search {
    display: flex;
    align-items: center;
  }
  .cart, .search {
    justify-content: end;
  }
  .logo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logo img {
    width: 250px;
    height: 90px;
  }
</style>
