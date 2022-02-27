<template>
  <div class="container home-container">
    <h2>
      New products
    </h2>
    <ul class="products-list">
      <ProductCard
        v-for="product in products"
        :key="product.title"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :currency="product.currency"
        :href="product.href"
      />
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      products: [
        {title: "Grillin kansi", image: "/test.jpg", price: "160.00", currency: "€", href: "/boats/buster"},
        {title: "Grillin kansi /-peite 600", image: "/test.jpg", price: "132.00", currency: "€", href: "/boats/buster"},
        {title: "Grillin kansi /PVC-peite 600", image: "/test.jpg", price: "1603.00", currency: "kr", href: "/boats/buster"},
        {title: "Kansi /PVC-peite 600", image: "/test.jpg", price: "16011.00", currency: "kr", href: "/boats/buster"},
      ]
    }
  }
}
</script>

<style scoped>
  .home-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }


</style>
