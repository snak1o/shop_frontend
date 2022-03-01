<template>
  <div class="container home-container">
    <h2>
      New products
    </h2>
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
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hfghgf", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "hgfhgfhz", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ffdgfdgfgf", quantity: 1},
        {title: "Grillin kansi", image: "/test.jpg", price: {blue: 160.90, red: 100.00, yellow: 432.00}, href: "/boats/buster/1", id: "ggfdgas", quantity: 1},
      ]
    }
  },
}
</script>

<style scoped>
  .home-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }


</style>
