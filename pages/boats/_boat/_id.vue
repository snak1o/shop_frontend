<template>
  <div class="container product">
    <div class="product-container">
      <div class="product-images-container">
        <div class="product-images">
          <img class="image-active" src="/test.jpg" alt="test">
          <div class="image-zoom-container">
            <img src="../../../assets/images/zoom.svg" alt="zoom">
          </div>
          <div class="product-images-list">
            <img v-for="i in 6" src="/test.jpg" alt="test">
          </div>
        </div>
      </div>
      <div class="product-description">
        <h1 class="product-title">{{item.title}}</h1>
        <span class="product-price">{{parseFloat(item.price[color]).toFixed(2)}}€ <span class="price-suffix">Hinta sis. ALV</span></span>
        <p class="product-short-desc">Grillin kansi pituudeksi enintään 2,5 m / leveys enintään 0,7 m / korkeus enintään 0,7 m
          Ilmoita tilauksen yhteydessä väri ja tarkka koko kommenttikenttään.
          Toimitusaika 5-7 työpäivää
          Toimituskulut 9,90 €</p>
        <div class="products-colors">
          <span class="products-colors-title">Color:</span>
          <input type="radio" name="color" :checked="color === value" :style="{backgroundColor: value}" :value="value" v-for="(price, value) in item.price" @input="event => color = event.target.value">
        </div>
        <div class="product-quantity">
          <input class="quantity" type="number" v-model="item.quantity" min="1">
          <button class="btn btn-sm" @click="addToCart(item)">Add to cart</button>
        </div>
        <div class="product-tech-info">
          <span class="product-tech">Product id: {{item.id}}</span>
          <span class="product-tech">Category: <router-link class="product-link" to="/boats/buster">Buster</router-link></span>
          <span class="product-tech">Tags: <router-link class="product-link" to="/">Test</router-link><router-link class="product-link" to="/">Test</router-link></span>
        </div>
      </div>
    </div>
    <h2>More from this category</h2>
    <ul class="products-list">
      <ProductCard
        v-for="product in products"
        :key="product.title + (Math.random() *10000)"
        :product="product"
      />
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    return this.color = Object.keys(this.item.price)[0]
  },
  data() {
    return {
      item: {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "fff", quantity: 1},
      color: "",
      products: [
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hfghgf", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hgfhgfhz", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ffdgfdgfgf", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ggfdgas", quantity: 1},
      ]
    }
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addItemToCart', {...item, color: this.color})
    }
  }
}
</script>

<style scoped>
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
  cursor: pointer;
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
  .product {
    margin-bottom: 20px;
  }
  .product-container {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .product-images {
    margin-right: 30px;
    position: relative;
    max-width: 420px;
    width: 100%;
  }
  .image-active {
    width: 420px;
    border-radius: 5px;
  }
  .image-zoom-container {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
  }
  .image-zoom-container  img {
    width: 20px;
    height: 20px;
  }
  .product-title {
    margin-bottom: 20px;
  }
  .product-price {
    font-weight: 400;
    font-size: 1.3rem;
  }
  .price-suffix {
    font-weight: 400;
    font-size: 0.9rem;
  }
  .product-short-desc {
    margin-top: 20px;
    margin-bottom: 10px;
    overflow-wrap: break-word;
    font-size: 17px;
    line-height: 25px;
  }
  .product-quantity {
    display: flex;
    padding-bottom: 50px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .quantity {
    padding: 0 0.7rem;
    border: none;
    background: #f2f2f2;
    width: 40px;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.125) 0px 1px 1px 0px inset;
    outline: none;
    margin-right: 15px;
  }
  .product-tech-info {
    display: flex;
    flex-direction: column;
  }
  .product-tech {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  .product-link {
    font-weight: 600;
    text-decoration: underline;
  }
  .product-link:not(:last-of-type):after{
    content: ",";
    margin-right: 4px;
  }
  .product-images-list {
    margin-top: 20px;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: calc(20% - 8px) calc(20% - 8px) calc(20% - 8px) calc(20% - 8px) calc(20% - 8px);
  }
  .product-images-list img {
    width: 100%;
    border-radius: 5px;
  }
</style>
