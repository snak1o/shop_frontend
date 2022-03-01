<template>
  <div class="container">
    <h1 class="title">{{$route.params["boat"].charAt(0).toUpperCase() + $route.params["boat"].slice(1)}} boats</h1>
    <ul class="products-list">
      <ProductCard
        v-for="product in products"
        :key="product.title + (Math.random() * 10000)"
        :product="product"
      />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hfghgf32", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hgfhgfhz33", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ffdgfdgfgf34", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ggfdgas45", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hfghgf56", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hgfhgfhz765", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ffdgfdgfgf432", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ggfdgas222", quantity: 1},
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
  }
</style>
