<template>
  <li class="card">
    <router-link class="card-description" :to="href">
      <img class="card-image" :src="image" :alt="title">
      <span class="card-title">{{title}}</span>
      <span class="card-price">{{price}}{{currency}} <span class="price-suffix">Hinta sis. ALV</span></span>
    </router-link>
    <div class="card-add">
      <button class="btn btn-sm">
        Add to cart
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["image", "title", "price", "currency", "href"]

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
</style>
