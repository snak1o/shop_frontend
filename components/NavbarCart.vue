<template>
  <div class="cart" @mouseover="showPrev = true" @mouseleave="showPrev = false">
    <router-link class="cart-container" to="/cart" >
      <div class="cart-info">
        <span class="price">{{getSum}}€</span>
        <span class="quantity">{{getQuantity}} products</span>
      </div>
      <span class="cart-icon"></span>
    </router-link>
    <div class="cart-prev" v-if="showPrev && $route.path !== '/cart' && getCart.length !== 0">
      <ul>
        <li v-for="(item, index) in getCart" v-if="index <= 4">
          <div class="cart-item-info">
            <span class="close" @click="removeItem(item)"></span>
            <router-link class="cart-prev-link" :to="item.href">
              <span>{{item.title}}</span>
            </router-link>
            <span class="cart-prev-price">{{item.quantity}} x {{(item.price[item.color]).toFixed(2)}}€</span>
          </div>
          <span class="image-prev"><img :src="item.image" :alt="item.title"></span>
        </li>
      </ul>
      <div v-if="getCart.length >= 6" class="cart-prev-more">+ {{getCart.length - 5}} more</div>
      <div class="cart-prev-sum">
        <strong>Cart sum: </strong> {{getSum}}€
      </div>
      <div class="cart-prev-button">
        <router-link to="/cart" class="btn btn-sm">Go to cart</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPrev: false
    }
  },
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
    },
    getCart() {
      return this.$store.getters.cart
    }
  },
  methods: {
    removeItem(item) {
      this.$store.commit('removeItemFromCart', item)
      this.cart = this.$store.getters.cart
    },
  }
}
</script>

<style scoped>
  .cart {
    display: flex;
    position: relative;
  }
  .cart-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .cart-info {
    align-items: end;
    width: 100%;
  }
  .cart-icon {
    height: 18px;
    width: 18px;
    background: url("../assets/images/cart.svg");
  }
  .price {
    padding-right: 5px;
    color: white;
  }
  .quantity {
    color: darkgray;
    font-size: 14px;
  }
  li {
    display: flex;
    justify-content: space-between;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 10px 10px;
    margin-bottom: 5px;
  }
  .cart-prev {
    top: 68px;
    position: absolute;
    background: rgb(161, 204, 149);
    width: 100%;
    z-index: 100;
  }
  .image-prev img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
  .cart-item-info {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .close {
    position: absolute;
    background: url("./assets/images/times.svg") no-repeat center;
    background-size: contain;
    height: 16px;
    width: 16px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .cart-prev-link {
    color: black;
    text-decoration: underline;
  }
  .cart-prev-price {
    font-size: 14px;
  }
  .cart-prev-sum {
    text-align: center;
    padding: 15px 0;
    font-size: 0.9rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .cart-prev-more {
    font-weight: 600;
    text-align: center;
    padding: 15px 0;
    font-size: 0.9rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .cart-prev-button {
    display: flex;
    justify-content: center;
    padding: 15px 0;
  }
</style>
