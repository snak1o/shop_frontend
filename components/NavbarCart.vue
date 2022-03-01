<template>
  <router-link to="/cart" >
    <div class="cart-container">
      <span class="price">{{getSum}}€</span>
      <span class="quantity">{{getQuantity}} products</span>
    </div>
    <span class="cart-icon"></span>
  </router-link>
</template>

<script>
export default {
  computed: {
    getSum() {
      let priceSum = 0
      let cart = this.$store.getters.cart
      for (let k in cart) {
        priceSum += (parseFloat(cart[k].price[cart[k].color]) * parseFloat(cart[k].quantity))
      }
      this.$store.commit('setCartPrice')
      return priceSum.toFixed(2)
    },
    getQuantity() {
      let cartQuantity = 0
      for (let k in this.$store.getters.cart) {
        cartQuantity += parseFloat(this.$store.getters.cart[k].quantity)
      }
      return cartQuantity
    }
  }
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
