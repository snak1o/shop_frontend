<template>
  <div class="container product">
    <div class="product-container">
      <div class="product-images">
        <img class="image-active" src="/static/test.jpg" alt="test">
        <div class="image-zoom-container">
          <img src="../../../assets/images/zoom.svg" alt="zoom">
        </div>
      </div>
      <div class="product-description">
        <h1 class="product-title">Grillin kansi /PVC-peite 600</h1>
        <span class="product-price">110,00€ <span class="price-suffix">Hinta sis. ALV</span></span>
        <p class="product-short-desc">Grillin kansi pituudeksi enintään 2,5 m / leveys enintään 0,7 m / korkeus enintään 0,7 m
          Ilmoita tilauksen yhteydessä väri ja tarkka koko kommenttikenttään.
          Toimitusaika 5-7 työpäivää
          Toimituskulut 9,90 €</p>
        <div class="product-quantity">
          <input class="quantity" type="number" value="1" min="1" max="1000">
          <button class="btn btn-sm">Add to cart</button>
        </div>
        <div class="product-tech-info">
          <span class="product-tech">Product id: 32243</span>
          <span class="product-tech">Category: <router-link class="product-link" to="/boats/buster">Buster</router-link></span>
          <span class="product-tech">Tags: <router-link class="product-link" to="/">Test</router-link><router-link class="product-link" to="/">Test</router-link></span>
        </div>
      </div>
    </div>
    <h2>More from this category</h2>
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
    margin-bottom: 20px;
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
  .mr {
    margin-right: 5px;
  }
</style>
