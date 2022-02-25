<template>
  <router-link to="/cart">
    <div class="cart-container">
      <span class="price">0€</span>
      <span class="quantity">0 products</span>
    </div>
    <span class="cart-icon"></span>
  </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
  .cart-icon {
    height: 18px;
    width: 18px;
    background: url("../assets/images/cart.svg");
  }
  .price {
    padding-right: 5px;
  }
  .quantity {
    color: darkgray;
    font-size: 14px;
  }
</style>
