<template>
  <div class="container home-container">
    <h2 class="title">
      New products
    </h2>
    <ul class="products-list">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .home-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .title {
    color: #0000c6;
    font-size: 2em;
    font-weight: 300;
    margin-top: 40px;
  }
  .products-list {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
  }
</style>
