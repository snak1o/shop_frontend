<template>
  <div class="container">
    <h1 class="title">Shopping cart</h1>
    <div class="cart-container" v-if="cart.length !== 0">
      <table class="cart-table">
        <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Sum</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in cart" :key="item.title + Math.random() * 10000">
          <td><span class="close" @click="removeItem(item)"></span><img :src="item.image" :alt="item.title" /></td>
          <td class="product-title"><router-link :to="item.href">{{item.title}}</router-link></td>
          <td>{{item.price[item.color].toFixed(2)}}€</td>
          <td><span class="color" :style="{backgroundColor: item.color}"></span></td>
          <td class="count"><span class="quantity-minus" @click="removeOne(item)"></span><span>{{item.quantity}}</span><span class="quantity-plus" @click="addOne(item)"></span></td>
          <td class="sum">{{(item.price[item.color] * item.quantity).toFixed(2)}}€</td>
        </tr>
        </tbody>
      </table>
    </div>
    <StaticNotification v-else class="info">Your cart is empty</StaticNotification>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    }
  },
  mounted() {
   return this.getCart
  },
  computed: {
    getCart() {
      if (process.browser) {
        this.cart = JSON.parse(localStorage.getItem('cart'))
        return this.cart
      }
    },
  },
  methods: {
    removeOne(item) {
      console.log(item.quantity)
      if (item.quantity <= 1) {
        this.removeItem(item)
      }
      else {
        this.$store.commit("removeQuantity", item)
        this.cart = this.$store.getters.cart
      }
    },
    addOne(item) {
      this.$store.commit('addQuantity', item)
      this.cart = this.$store.getters.cart
    },
    removeItem(item) {
      this.$store.commit('removeItemFromCart', item)
      this.cart = this.$store.getters.cart
    },
  },
}
</script>

<style scoped>
  .title {
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
  }
  .cart-table {
    border-collapse: collapse;
    width: 100%;
    padding: 8px;
  }
  th {
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #f8f8f8;
    text-align: center;
    color: black;
  }
  tr {
    position: relative;
  }
  td {
    padding: 8px;
    text-align: center;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  img {
    height: 70px;
  }
  .product-title a {
    text-decoration: underline;
    font-weight: bold;
  }
  .close {
    position: absolute;
    background: url("../assets/images/times.svg") no-repeat center;
    background-size: contain;
    height: 20px;
    width: 20px;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .count {
    position: relative;
    width: 100px;
  }
  .quantity-minus {
    position: absolute;
    background: url("../assets/images/minus.svg") no-repeat center;
    background-size: contain;
    height: 20px;
    width: 20px;
    top: 50%;
    left:15px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .quantity-plus {
    position: absolute;
    background: url("../assets/images/plus.svg") no-repeat center;
    background-size: contain;
    height: 20px;
    width: 20px;
    top: 50%;
    right:15px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .sum {
    width: 80px;
  }
  .color {
    display: inline-block;
    width: 20px;
    height: 20px;
    outline: 2px solid lightgrey;
    outline-offset: 1px;
  }

</style>
