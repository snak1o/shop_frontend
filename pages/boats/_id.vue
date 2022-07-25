<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full h-auto object-cover object-center rounded" :src="item.photos[0]">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">{{item.categoryId}}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-5">{{item.name}}</h1>
          <p class="leading-relaxed min-h-max">{{item.description}}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex">
              <span class="mr-3">Color</span>
              <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
<!--            <div class="flex ml-6 items-center">
              <span class="mr-3">Size</span>
              <div class="relative">
                <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
              </div>
            </div>-->
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">{{item.pricealv.toFixed(2)}}€</span>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" @click="addToCart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  // mounted() {
  //   this.getProduct()
  // },
  data() {
    return {
      item: {
        "id": 1,
        "name": "Buster S 2022 boat cover",
        "description": "          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi consequatur ex magni nemo non nostrum officiis perferendis perspiciatis praesentium quae quis, quisquam, ratione rerum sint sit veritatis voluptatem? Aut?",
        "categoryId": 'Buster',
        "tags": [
          {
            "name": "tag1"
          },
          {
            "name": "tag2"
          }
        ],
        "photos": ["https://i.yapx.ru/S9F4K.png",
          "https://sun9-87.userapi.com/impg/njbUTyspmS4uw6tYZ2_8apIq4q5UpRe1orW5tQ/grVbY0xoK8E.jpg?size=640x640&quality=95&sign=8742a78348a45f2117e938c8261924fd&type=album",],
        "colors": [
          {
            "name": "Dark Gray",
            "hex": "#4a4848",
            "id": 1
          },
          {
            "name": "Red",
            "hex": "#ff0000",
            "id": 3
          }
        ],
        "price": 32.26,
        "pricealv": 40,
        "sku": "F23"
      },
      quantity: 1,
      currentColor: "",
    }
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addItemToCart', this.item)
    },
    // async getProduct() {
    //   const res = await this.$axios.$get('/api/product/byId/' + this.$route.params.id)
    //   this.item = res
    //   console.log(res)
    // },
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
