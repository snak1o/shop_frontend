<template>
  <section class="container mx-auto p-5">
    <h1 class="text-3xl text-gray-900">
      Boats
    </h1>
    <div>
      <span v-for="item in categories" :key="item.id">{{item}}</span>
    </div>
  </section>
</template>

<script>
export default {
  async mounted() {
    this.categories = await this.$axios.$get('/categories')
  },
  data() {
    return {
      categories: [],
    }
  }
}
</script>

<style scoped>
</style>
<!--
 <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductCard
        class="group relative"
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>-->
