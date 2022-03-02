<template>
  <li class="card">
    <router-link class="card-description" :to="product.href">
      <img class="card-image" :src="product.image" :alt="product.title">
      <span class="card-title">{{product.title}}</span>
      <span class="card-price">{{parseFloat(product.price[color]).toFixed(2)}}€ <span class="price-suffix">Hinta sis. ALV</span></span>
    </router-link>
    <div class="products-colors">
      <input type="radio" :checked="color=== value" :style="{backgroundColor: value}" :value="value" v-for="(price, value) in product.price" @input="event => color = event.target.value">
    </div>
    <div class="card-add">
      <button class="btn btn-sm" @click="addToCart(product)">
        Add to cart
      </button>
    </div>
  </li>
</template>

<script>
export default {
  mounted() {
    return this.color = Object.keys(this.product.price)[0]
  },
  props: ["product"],
  data() {
    return {
      color: '',
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addQuantity', {...product, color: this.color})
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 230px;
}
.card-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}
.card-image {
  width: 230px;
  height: 230px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.card-title {
  color: #0000c6;
  font-size: 1rem;
  margin-bottom: 5px;
  text-align: center;
}
.card-price {
  font-size: .875em;
  font-weight: 600;
  text-align: center;
}
.price-suffix {
  font-size: .7rem;
  font-weight: 400;
}
.card-add {
  display: flex;
  align-items: center;
  justify-content: center;
}
input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 1px;
  background-clip: content-box;
  outline: 2px solid lightgrey;
}
input[type="radio"]:checked {
  outline: 2px solid black;
}
input[type="radio"]:not(:last-child) {
  margin-right: 10px;
}
.products-colors {
  padding-left: 2px;
  margin-bottom: 15px;
}
.products-colors-title {
  display: flex;
  margin-bottom: 5px;
}
</style>
