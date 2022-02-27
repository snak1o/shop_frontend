<template>
  <div class="container">
    <h1 class="title">{{$route.params["boat"].charAt(0).toUpperCase() + $route.params["boat"].slice(1)}} boats</h1>
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
        {title: "Grillin kansi", image: "/test.jpg", price: "160.00", currency: "€", href: "/boats/buster/1"},
        {title: "Grillin kansi /-peite 600", image: "/test.jpg", price: "132.00", currency: "€", href: "/boats/buster/1"},
        {title: "Grillin kansi /PVC-peite 600", image: "/test.jpg", price: "1603.00", currency: "kr", href: "/boats/buster/1"},
        {title: "Kansi /PVC-peite 600", image: "/test.jpg", price: "16011.00", currency: "kr", href: "/boats/buster/1"},
        {title: "Grillin kansi", image: "/test.jpg", price: "160.00", currency: "€", href: "/boats/buster/1"},
        {title: "Grillin kansi /-peite 600", image: "/test.jpg", price: "132.00", currency: "€", href: "/boats/buster/1"},
        {title: "Grillin kansi /PVC-peite 600", image: "/test.jpg", price: "1603.00", currency: "kr", href: "/boats/buster"},
        {title: "Kansi /PVC-peite 600", image: "/test.jpg", price: "16011.00", currency: "kr", href: "/boats/buster"},
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
  .title {
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
  }
</style>
